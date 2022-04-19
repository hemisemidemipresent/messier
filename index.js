let list = [];
let messiers = [];
let messier = [];
let l = 10; // messier cross length

let limitMag = 5;
let lat;
let lst;
// get our canvas element
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const diameter = Math.min(document.body.clientWidth, document.body.clientHeight);
const radius = diameter / 2;

// disable right clicking
document.oncontextmenu = function () {
    return false;
};

// list of strokes drawn
let lines = [];
// list of all of them
let drawings = [];
// coordinates of our cursor
let cursorX;
let cursorY;
let prevCursorX;
let prevCursorY;

// distance from origin
let offsetX = 0;
let offsetY = 0;

// zoom amount
let scale = 1;

// convert coordinates
function toScreenX(xTrue) {
    return (xTrue + offsetX) * scale;
}
function toScreenY(yTrue) {
    return (yTrue + offsetY) * scale;
}
function toTrueX(xScreen) {
    return xScreen / scale - offsetX;
}
function toTrueY(yScreen) {
    return yScreen / scale - offsetY;
}
function trueHeight() {
    return canvas.clientHeight / scale;
}
function trueWidth() {
    return canvas.clientWidth / scale;
}

function redrawCanvas() {
    lat = d2r(parseFloat(document.getElementById('lat').value));
    lst = d2r(parseFloat(document.getElementById('lst').value) * 15);

    // set the canvas to the size of the window
    canvas.width = diameter;
    canvas.height = diameter;

    // dark bg
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // draw circle
    context.strokeStyle = '#fff';
    context.arc(toScreenX(radius), toScreenY(radius), radius * scale, 0, 2 * Math.PI);
    context.stroke();

    // draw annotations
    for (let i = 0; i < drawings.length; i++) {
        for (let j = 0; j < drawings[i].length; j++) {
            const line = drawings[i][j];
            drawLine(toScreenX(line.x0), toScreenY(line.y0), toScreenX(line.x1), toScreenY(line.y1));
        }
    }

    // draw stars
    context.fillStyle = '#fff';

    for (let i = 0; i < list.length; i++) {
        drawStar(lat, lst, list[i]); // drawStar(lat, LST, ...) in radians
    }

    // messier
    context.strokeStyle = '#0f0';
    drawLine(toScreenX(messier.x + l), toScreenY(messier.y + l), toScreenX(messier.x - l), toScreenY(messier.y - l));
    drawLine(toScreenX(messier.x + l), toScreenY(messier.y - l), toScreenX(messier.x - l), toScreenY(messier.y + l));
    context.strokeStyle = '#fff';
}
axios
    .get('https://raw.githubusercontent.com/hemisemidemipresent/M/main/Vmag6_min.json')
    .then(function (response) {
        list = response.data;
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        axios
            .get('https://raw.githubusercontent.com/hemisemidemipresent/M/main/messier_min.json')
            .then(function (response) {
                messiers = response.data;
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                redrawCanvas();
                drawMessier();
            });
    });

// if the window changes size, redraw the canvas
window.addEventListener('resize', (event) => {
    redrawCanvas();
});

// Mouse Event Handlers
canvas.addEventListener('mousedown', onMouseDown);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mouseout', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);
canvas.addEventListener('wheel', onMouseWheel, false);

// Touch Event Handlers
canvas.addEventListener('touchstart', onTouchStart);
canvas.addEventListener('touchend', onTouchEnd);
canvas.addEventListener('touchcancel', onTouchEnd);
canvas.addEventListener('touchmove', onTouchMove);

// mouse functions
let leftMouseDown = false;
let rightMouseDown = false;
function onMouseDown(event) {
    // detect left clicks
    if (event.button == 0) {
        leftMouseDown = true;
        rightMouseDown = false;
    }
    // detect right clicks
    if (event.button == 2) {
        rightMouseDown = true;
        leftMouseDown = false;
    }

    // update the cursor coordinates
    cursorX = event.pageX;
    cursorY = event.pageY;
    prevCursorX = event.pageX;
    prevCursorY = event.pageY;
}
function onMouseMove(event) {
    // get mouse position
    cursorX = event.pageX;
    cursorY = event.pageY;
    const scaledX = toTrueX(cursorX);
    const scaledY = toTrueY(cursorY);
    const prevScaledX = toTrueX(prevCursorX);
    const prevScaledY = toTrueY(prevCursorY);

    if (leftMouseDown) {
        // add the line to our drawing history
        lines.push({
            x0: prevScaledX,
            y0: prevScaledY,
            x1: scaledX,
            y1: scaledY
        });
        // draw a line
        drawLine(prevCursorX, prevCursorY, cursorX, cursorY);
    }
    if (rightMouseDown) {
        // move the screen
        toOffsetX = (cursorX - prevCursorX) / scale;
        toOffsetY = (cursorY - prevCursorY) / scale;

        maxOffset = -((scale - 1) / scale) * diameter;

        let newOffsetX = offsetX + toOffsetX;
        let newOffsetY = offsetY + toOffsetY;

        if (maxOffset <= newOffsetX && newOffsetX <= 0) offsetX = newOffsetX;
        if (maxOffset <= newOffsetY && newOffsetY <= 0) offsetY = newOffsetY;

        redrawCanvas();
    }
    prevCursorX = cursorX;
    prevCursorY = cursorY;
}
function onMouseUp() {
    if (lines.length > 0) drawings.push(lines);

    lines = [];
    leftMouseDown = false;
    rightMouseDown = false;
}
function onMouseWheel(event) {
    const deltaY = event.deltaY;
    let scaleAmount = -deltaY / 500;

    const oldScale = scale;

    scale = scale * (1 + scaleAmount);

    if (scale < 1) {
        scaleAmount = 1 / oldScale - 1;
        scale = 1;
    }
    // zoom the page based on where the cursor is
    const distX = event.pageX / canvas.clientWidth;
    const distY = event.pageY / canvas.clientHeight;

    // calculate how much we need to zoom
    const unitsZoomedX = trueWidth() * scaleAmount;
    const unitsZoomedY = trueHeight() * scaleAmount;

    const unitsAddLeft = unitsZoomedX * distX;
    const unitsAddTop = unitsZoomedY * distY;

    if (oldScale > scale) {
        offsetX = 0;
        offsetY = 0;
    } else {
        offsetX -= unitsAddLeft;
        offsetY -= unitsAddTop;
    }
    redrawCanvas();
}
function drawLine(x0, y0, x1, y1) {
    context.beginPath();
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineWidth = 2;
    context.stroke();
}

// touch functions
const prevTouches = [null, null]; // up to 2 touches
let singleTouch = false;
let doubleTouch = false;
function onTouchStart(event) {
    if (event.touches.length == 1) {
        singleTouch = true;
        doubleTouch = false;
    }
    if (event.touches.length >= 2) {
        singleTouch = false;
        doubleTouch = true;
    }

    // store the last touches
    prevTouches[0] = event.touches[0];
    prevTouches[1] = event.touches[1];
}
function onTouchMove(event) {
    // get first touch coordinates
    const touch0X = event.touches[0].pageX;
    const touch0Y = event.touches[0].pageY;
    const prevTouch0X = prevTouches[0].pageX;
    const prevTouch0Y = prevTouches[0].pageY;

    const scaledX = toTrueX(touch0X);
    const scaledY = toTrueY(touch0Y);
    const prevScaledX = toTrueX(prevTouch0X);
    const prevScaledY = toTrueY(prevTouch0Y);

    if (singleTouch) {
        // add to history
        lines.push({
            x0: prevScaledX,
            y0: prevScaledY,
            x1: scaledX,
            y1: scaledY
        });
        drawLine(prevTouch0X, prevTouch0Y, touch0X, touch0Y);
    }

    if (doubleTouch) {
        // get second touch coordinates
        const touch1X = event.touches[1].pageX;
        const touch1Y = event.touches[1].pageY;
        const prevTouch1X = prevTouches[1].pageX;
        const prevTouch1Y = prevTouches[1].pageY;

        // get midpoints
        const midX = (touch0X + touch1X) / 2;
        const midY = (touch0Y + touch1Y) / 2;
        const prevMidX = (prevTouch0X + prevTouch1X) / 2;
        const prevMidY = (prevTouch0Y + prevTouch1Y) / 2;

        // calculate the distances between the touches
        const hypot = Math.sqrt(Math.pow(touch0X - touch1X, 2) + Math.pow(touch0Y - touch1Y, 2));
        const prevHypot = Math.sqrt(Math.pow(prevTouch0X - prevTouch1X, 2) + Math.pow(prevTouch0Y - prevTouch1Y, 2));

        // calculate the screen scale change
        const zoomAmount = hypot / prevHypot;
        scale = scale * zoomAmount;
        const scaleAmount = 1 - zoomAmount;

        // calculate how many pixels the midpoints have moved in the x and y direction
        const panX = midX - prevMidX;
        const panY = midY - prevMidY;
        // scale this movement based on the zoom level
        offsetX += panX / scale;
        offsetY += panY / scale;

        // Get the relative position of the middle of the zoom.
        // 0, 0 would be top left.
        // 0, 1 would be top right etc.
        const zoomRatioX = midX / canvas.clientWidth;
        const zoomRatioY = midY / canvas.clientHeight;

        // calculate the amounts zoomed from each edge of the screen
        const unitsZoomedX = trueWidth() * scaleAmount;
        const unitsZoomedY = trueHeight() * scaleAmount;

        const unitsAddLeft = unitsZoomedX * zoomRatioX;
        const unitsAddTop = unitsZoomedY * zoomRatioY;

        offsetX += unitsAddLeft;
        offsetY += unitsAddTop;

        redrawCanvas();
    }
    prevTouches[0] = event.touches[0];
    prevTouches[1] = event.touches[1];
}
function onTouchEnd(event) {
    singleTouch = false;
    doubleTouch = false;
}
function drawStar(lat, lst, star) {
    let { dec, ra, v } = star;
    if (v > limitMag) return;

    dec = d2r(dec);
    ra = d2r(ra);

    let [alt, az] = toAltAz(dec, ra);
    if (alt < 0) return;

    // projecting the horizontal

    let [x, y] = toXY(alt, az);

    let size = (6 - v) * scale;

    context.fillRect(x, y, size, size);
}

function drawMessier() {
    let visibleMessiers = [];
    for (let i = 0; i < messiers.length; i++) {
        let messier = messiers[i];
        let { dec, ra } = messier;
        dec = d2r(dec);
        ra = d2r(ra);
        let [alt, az] = toAltAz(dec, ra);
        messier.alt = alt;
        messier.az = az;
        if (alt > 0) visibleMessiers.push(messier);
    }
    visibleMessiers.filter((m) => m.name != messier.name); // prevents duplicates

    messier = visibleMessiers[Math.floor(Math.random() * visibleMessiers.length)];
    let { alt, az, name, num, M, v } = messier;

    let [x, y] = toXY(alt, az);
    messier.x = x;
    messier.y = y;

    context.strokeStyle = '#0f0';
    drawLine(x + l, y + l, x - l, y - l);
    drawLine(x + l, y - l, x - l, y + l);
    context.strokeStyle = '#fff';
}
// dec, ra -> alt, az takes in radians
function toAltAz(dec, ra) {
    let ha = lst - ra; // hour angle
    // equitorial to horizontal
    let alt = Math.asin(Math.sin(lat) * Math.sin(dec) + Math.cos(lat) * Math.cos(dec) * Math.cos(ha));
    let az = -Math.atan2(-Math.sin(ha) * Math.cos(dec) * Math.cos(lat), Math.sin(dec) - Math.sin(lat) * Math.sin(alt));
    return [alt, az];
}
// alt, az -> stereographically projected x, y
function toXY(alt, az) {
    let r = Math.tan(Math.PI / 4 - alt / 2) * radius;
    let x = toScreenX(radius + r * Math.cos(az));
    let y = toScreenY(radius + r * Math.sin(az));
    return [x, y];
}
// degree to radian
function d2r(deg) {
    return (deg / 180) * Math.PI;
}
function undo() {
    drawings.pop();
    redrawCanvas();
}

function checkAns() {
    let input = document.getElementById('messier').value;
    if (input == messier.M.replace('M', '')) alert('good job');
    else alert(`it was ${messier.M}. L`);
}
