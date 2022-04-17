// list of stars
const list = [
    {
        ra: 101.289,
        dec: -16.713,
        v: -1.44,
        name: 'alpha_CMa (Sirius)'
    },
    {
        ra: 95.988,
        dec: -52.696,
        v: -0.62,
        name: 'alpha_Car (Canopus)'
    },
    {
        ra: 213.918,
        dec: 19.187,
        v: -0.05,
        name: 'alpha_Boo (Arcturus)'
    },
    {
        ra: 219.92,
        dec: -60.835,
        v: -0.01,
        name: 'alpha1_Cen (Rigel Kent)'
    },
    {
        ra: 279.234,
        dec: 38.783,
        v: 0.03,
        name: 'alpha_Lyr (Vega)'
    },
    {
        ra: 79.172,
        dec: 45.999,
        v: 0.08,
        name: 'alpha_Aur (Capella)'
    },
    {
        ra: 78.634,
        dec: -8.202,
        v: 0.18,
        name: 'beta_Ori (Rigel)'
    },
    {
        ra: 114.827,
        dec: 5.228,
        v: 0.4,
        name: 'alpha_CMi (Procyon)'
    },
    {
        ra: 88.793,
        dec: 7.407,
        v: 0.45,
        name: 'alpha_Ori (Betelgeuse)'
    },
    {
        ra: 24.428,
        dec: -57.237,
        v: 0.45,
        name: 'alpha_Eri (Achernar)'
    },
    {
        ra: 210.956,
        dec: -60.373,
        v: 0.61,
        name: 'beta_Cen (Hadar)'
    },
    {
        ra: 297.695,
        dec: 8.867,
        v: 0.76,
        name: 'alpha_Aql (Altair)'
    },
    {
        ra: 186.65,
        dec: -63.099,
        v: 0.77,
        name: 'alpha1_Cru (Acrux)'
    },
    {
        ra: 68.98,
        dec: 16.51,
        v: 0.87,
        name: 'alpha_Tau (Aldebaran)'
    },
    {
        ra: 201.298,
        dec: -11.161,
        v: 0.98,
        name: 'alpha_Vir (Spica)'
    },
    {
        ra: 247.352,
        dec: -26.432,
        v: 1.06,
        name: 'alpha_Sco (Antares)'
    },
    {
        ra: 116.331,
        dec: 28.026,
        v: 1.16,
        name: 'beta_Gem (Pollux)'
    },
    {
        ra: 344.412,
        dec: -29.622,
        v: 1.17,
        name: 'alpha_PsA (Fomalhaut)'
    },
    {
        ra: 310.358,
        dec: 45.28,
        v: 1.25,
        name: 'alpha_Cyg (Deneb)'
    },
    {
        ra: 191.93,
        dec: -59.689,
        v: 1.25,
        name: 'beta_Cru'
    },
    {
        ra: 219.914,
        dec: -60.839,
        v: 1.35,
        name: 'alpha2_Cen'
    },
    {
        ra: 152.094,
        dec: 11.967,
        v: 1.36,
        name: 'alpha_Leo (Regulus)'
    },
    {
        ra: 104.656,
        dec: -28.972,
        v: 1.5,
        name: 'epsilon_CMa (Adhara)'
    },
    {
        ra: 113.65,
        dec: 31.889,
        v: 1.58,
        name: 'alpha_Gem (Castor)'
    },
    {
        ra: 187.791,
        dec: -57.113,
        v: 1.59,
        name: 'gamma_Cru'
    },
    {
        ra: 263.402,
        dec: -37.104,
        v: 1.62,
        name: 'lambda_Sco (Shaula)'
    },
    {
        ra: 81.283,
        dec: 6.35,
        v: 1.64,
        name: 'gamma_Ori (Bellatrix)'
    },
    {
        ra: 81.573,
        dec: 28.608,
        v: 1.65,
        name: 'beta_Tau (Alnath)'
    },
    {
        ra: 138.301,
        dec: -69.717,
        v: 1.67,
        name: 'beta_Car'
    },
    {
        ra: 84.053,
        dec: -1.202,
        v: 1.69,
        name: 'epsilon_Ori (Alnilam)'
    },
    {
        ra: 332.058,
        dec: -46.961,
        v: 1.73,
        name: 'alpha_Gru (Alnair)'
    },
    {
        ra: 85.19,
        dec: -1.943,
        v: 1.74,
        name: 'zeta_Ori (Alnitak)'
    },
    {
        ra: 122.383,
        dec: -47.337,
        v: 1.75,
        name: 'gamma_Vel'
    },
    {
        ra: 193.507,
        dec: 55.96,
        v: 1.76,
        name: 'epsilon_UMa (Alioth)'
    },
    {
        ra: 276.043,
        dec: -34.384,
        v: 1.79,
        name: 'epsilon_Sgr (Kaus Australis)'
    },
    {
        ra: 51.081,
        dec: 49.861,
        v: 1.79,
        name: 'alpha_Per (Mirphak)'
    },
    {
        ra: 165.933,
        dec: 61.751,
        v: 1.81,
        name: 'alpha_UMa (Dubhe)'
    },
    {
        ra: 107.098,
        dec: -26.393,
        v: 1.83,
        name: 'delta_CMa'
    },
    {
        ra: 206.886,
        dec: 49.313,
        v: 1.85,
        name: 'eta_UMa (Alkaid)'
    },
    {
        ra: 264.33,
        dec: -42.998,
        v: 1.86,
        name: 'theta_Sco'
    },
    {
        ra: 125.629,
        dec: -59.51,
        v: 1.86,
        name: 'epsilon_Car'
    },
    {
        ra: 89.882,
        dec: 44.947,
        v: 1.9,
        name: 'beta_Aur'
    },
    {
        ra: 252.166,
        dec: -69.028,
        v: 1.91,
        name: 'alpha_TrA'
    },
    {
        ra: 131.176,
        dec: -54.709,
        v: 1.93,
        name: 'delta_Vel'
    },
    {
        ra: 99.428,
        dec: 16.399,
        v: 1.93,
        name: 'gamma_Gem (Alhena)'
    },
    {
        ra: 306.412,
        dec: -56.735,
        v: 1.94,
        name: 'alpha_Pav'
    },
    {
        ra: 37.946,
        dec: 89.264,
        v: 1.97,
        name: 'alpha_UMi (Polaris)'
    },
    {
        ra: 95.675,
        dec: -17.956,
        v: 1.98,
        name: 'beta_CMa'
    },
    {
        ra: 141.897,
        dec: -8.659,
        v: 1.99,
        name: 'alpha_Hya (Alphard)'
    },
    {
        ra: 154.992,
        dec: 19.842,
        v: 2.01,
        name: 'gamma1_Leo (Algieba)'
    },
    {
        ra: 31.793,
        dec: 23.463,
        v: 2.01,
        name: 'alpha_Ari (Hamal)'
    },
    {
        ra: 10.897,
        dec: -17.987,
        v: 2.04,
        name: 'beta_Cet (Diphda)'
    },
    {
        ra: 283.816,
        dec: -26.297,
        v: 2.05,
        name: 'sigma_Sgr (Nunki)'
    },
    {
        ra: 211.672,
        dec: -36.369,
        v: 2.06,
        name: 'theta_Cen'
    },
    {
        ra: 86.939,
        dec: -9.67,
        v: 2.07,
        name: 'kappa_Ori (Saiph)'
    },
    {
        ra: 2.097,
        dec: 29.091,
        v: 2.07,
        name: 'delta_Peg (Alpheratz)'
    },
    {
        ra: 340.666,
        dec: -46.885,
        v: 2.07,
        name: 'beta_Gru'
    },
    {
        ra: 17.432,
        dec: 35.621,
        v: 2.07,
        name: 'beta_And (Mirach)'
    },
    {
        ra: 222.677,
        dec: 74.155,
        v: 2.07,
        name: 'beta_UMi (Kocab)'
    },
    {
        ra: 263.733,
        dec: 12.561,
        v: 2.08,
        name: 'alpha_Oph (Rasalhague)'
    },
    {
        ra: 47.042,
        dec: 40.956,
        v: 2.09,
        name: 'beta_Per (Algol)'
    },
    {
        ra: 30.975,
        dec: 42.33,
        v: 2.1,
        name: 'gamma1_And'
    },
    {
        ra: 177.266,
        dec: 14.572,
        v: 2.14,
        name: 'beta_Leo (Denebola)'
    },
    {
        ra: 14.177,
        dec: 60.717,
        v: 2.15,
        name: 'gamma_Cas'
    },
    {
        ra: 190.38,
        dec: -48.96,
        v: 2.2,
        name: 'gamma_Cen'
    },
    {
        ra: 120.896,
        dec: -40.003,
        v: 2.21,
        name: 'zeta_Pup'
    },
    {
        ra: 139.273,
        dec: -59.275,
        v: 2.21,
        name: 'iota_Car'
    },
    {
        ra: 233.672,
        dec: 26.715,
        v: 2.22,
        name: 'alpha_CrB (Alphekka)'
    },
    {
        ra: 136.999,
        dec: -43.433,
        v: 2.23,
        name: 'lambda_Vel'
    },
    {
        ra: 305.557,
        dec: 40.257,
        v: 2.23,
        name: 'gamma_Cyg'
    },
    {
        ra: 200.981,
        dec: 54.925,
        v: 2.23,
        name: 'zeta_UMa (Mizar)'
    },
    {
        ra: 10.127,
        dec: 56.537,
        v: 2.24,
        name: 'alpha_Cas (Shedir)'
    },
    {
        ra: 269.152,
        dec: 51.489,
        v: 2.24,
        name: 'gamma_Dra (Etamin)'
    },
    {
        ra: 83.002,
        dec: -0.299,
        v: 2.25,
        name: 'delta_Ori (Mintaka)'
    },
    {
        ra: 2.292,
        dec: 59.15,
        v: 2.28,
        name: 'beta_Cas (Caph)'
    },
    {
        ra: 240.083,
        dec: -22.622,
        v: 2.29,
        name: 'delta_Sco'
    },
    {
        ra: 252.543,
        dec: -34.293,
        v: 2.29,
        name: 'epsilon_Sco'
    },
    {
        ra: 204.972,
        dec: -53.466,
        v: 2.29,
        name: 'epsilon_Cen'
    },
    {
        ra: 220.482,
        dec: -47.388,
        v: 2.3,
        name: 'alpha_Lup'
    },
    {
        ra: 218.877,
        dec: -42.158,
        v: 2.33,
        name: 'eta_Cen'
    },
    {
        ra: 165.46,
        dec: 56.382,
        v: 2.34,
        name: 'beta_UMa (Merak)'
    },
    {
        ra: 221.247,
        dec: 27.074,
        v: 2.35,
        name: 'epsilon_Boo (Izar)'
    },
    {
        ra: 326.046,
        dec: 9.875,
        v: 2.38,
        name: 'epsilon_Peg (Enif)'
    },
    {
        ra: 265.622,
        dec: -39.03,
        v: 2.39,
        name: 'kappa_Sco'
    },
    {
        ra: 6.57,
        dec: -42.305,
        v: 2.4,
        name: 'alpha_Phe (Ankaa)'
    },
    {
        ra: 178.457,
        dec: 53.695,
        v: 2.41,
        name: 'gamma_UMa (Phad)'
    },
    {
        ra: 257.594,
        dec: -15.725,
        v: 2.43,
        name: 'eta_Oph'
    },
    {
        ra: 345.943,
        dec: 28.082,
        v: 2.44,
        name: 'beta_Peg (Scheat)'
    },
    {
        ra: 319.644,
        dec: 62.585,
        v: 2.45,
        name: 'alpha_Cep (Alderamin)'
    },
    {
        ra: 111.024,
        dec: -29.303,
        v: 2.45,
        name: 'eta_CMa'
    },
    {
        ra: 140.528,
        dec: -55.011,
        v: 2.47,
        name: 'kappa_Vel'
    },
    {
        ra: 311.552,
        dec: 33.969,
        v: 2.48,
        name: 'epsilon_Cyg'
    },
    {
        ra: 346.19,
        dec: 15.205,
        v: 2.49,
        name: 'alpha_Peg (Markab)'
    },
    {
        ra: 249.29,
        dec: -10.567,
        v: 2.54,
        name: 'zeta_Oph'
    },
    {
        ra: 45.57,
        dec: 4.09,
        v: 2.54,
        name: 'alpha_Cet (Menkar)'
    },
    {
        ra: 208.885,
        dec: -47.288,
        v: 2.55,
        name: 'zeta_Cen'
    },
    {
        ra: 241.359,
        dec: -19.805,
        v: 2.56,
        name: 'beta1_Sco'
    },
    {
        ra: 168.527,
        dec: 20.524,
        v: 2.56,
        name: 'delta_Leo'
    },
    {
        ra: 182.09,
        dec: -50.722,
        v: 2.58,
        name: 'delta_Cen'
    },
    {
        ra: 83.183,
        dec: -17.822,
        v: 2.58,
        name: 'alpha_Lep (Arneb)'
    },
    {
        ra: 183.952,
        dec: -17.542,
        v: 2.58,
        name: 'gamma_Crv'
    },
    {
        ra: 285.653,
        dec: -29.88,
        v: 2.6,
        name: 'zeta_Sgr'
    },
    {
        ra: 229.252,
        dec: -9.383,
        v: 2.61,
        name: 'beta_Lib'
    },
    {
        ra: 236.067,
        dec: 6.426,
        v: 2.63,
        name: 'alpha_Ser (Unukalhai)'
    },
    {
        ra: 28.66,
        dec: 20.808,
        v: 2.64,
        name: 'beta_Ari'
    },
    {
        ra: 89.93,
        dec: 37.213,
        v: 2.65,
        name: 'theta_Aur'
    },
    {
        ra: 188.597,
        dec: -23.397,
        v: 2.65,
        name: 'beta_Crv'
    },
    {
        ra: 84.912,
        dec: -34.074,
        v: 2.65,
        name: 'alpha_Col'
    },
    {
        ra: 21.453,
        dec: 60.235,
        v: 2.66,
        name: 'delta_Cas'
    },
    {
        ra: 208.671,
        dec: 18.399,
        v: 2.68,
        name: 'eta_Boo'
    },
    {
        ra: 224.633,
        dec: -43.134,
        v: 2.68,
        name: 'beta_Lup'
    },
    {
        ra: 161.692,
        dec: -49.42,
        v: 2.69,
        name: 'mu_Vel'
    },
    {
        ra: 189.296,
        dec: -69.136,
        v: 2.69,
        name: 'alpha_Mus'
    },
    {
        ra: 74.248,
        dec: 33.166,
        v: 2.69,
        name: 'iota_Aur'
    },
    {
        ra: 262.691,
        dec: -37.296,
        v: 2.7,
        name: 'nu_Sco'
    },
    {
        ra: 109.286,
        dec: -37.097,
        v: 2.71,
        name: 'pi_Pup'
    },
    {
        ra: 296.565,
        dec: 10.613,
        v: 2.72,
        name: 'gamma_Aql (Tarazed)'
    },
    {
        ra: 275.248,
        dec: -29.828,
        v: 2.72,
        name: 'delta_Sgr'
    },
    {
        ra: 245.998,
        dec: 61.514,
        v: 2.73,
        name: 'eta_Dra'
    },
    {
        ra: 243.587,
        dec: -3.694,
        v: 2.73,
        name: 'delta_Oph'
    },
    {
        ra: 190.417,
        dec: -1.45,
        v: 2.74,
        name: 'gamma_Vir'
    },
    {
        ra: 160.739,
        dec: -64.394,
        v: 2.74,
        name: 'theta_Car'
    },
    {
        ra: 222.72,
        dec: -16.042,
        v: 2.75,
        name: 'alpha1_Lib'
    },
    {
        ra: 200.15,
        dec: -36.712,
        v: 2.75,
        name: 'iota_Cen'
    },
    {
        ra: 83.858,
        dec: -5.91,
        v: 2.75,
        name: 'iotaOri'
    },
    {
        ra: 265.868,
        dec: 4.567,
        v: 2.76,
        name: 'beta_Oph'
    },
    {
        ra: 76.963,
        dec: -5.086,
        v: 2.78,
        name: 'beta_Eri'
    },
    {
        ra: 247.555,
        dec: 21.49,
        v: 2.78,
        name: 'beta_Her'
    },
    {
        ra: 258.662,
        dec: 14.39,
        v: 2.78,
        name: 'alpha1/2_Her (Rasalgethi)'
    },
    {
        ra: 183.786,
        dec: -58.749,
        v: 2.79,
        name: 'delta_Cru'
    },
    {
        ra: 262.608,
        dec: 52.301,
        v: 2.79,
        name: 'beta_Dra'
    },
    {
        ra: 233.785,
        dec: -41.167,
        v: 2.8,
        name: 'gamma_Lup'
    },
    {
        ra: 250.323,
        dec: 31.602,
        v: 2.81,
        name: 'zeta_Her'
    },
    {
        ra: 82.061,
        dec: -20.759,
        v: 2.81,
        name: 'beta_Lep (Nihal)'
    },
    {
        ra: 248.971,
        dec: -28.216,
        v: 2.82,
        name: 'tau_Sco'
    },
    {
        ra: 6.413,
        dec: -77.255,
        v: 2.82,
        name: 'beta_Hyi'
    },
    {
        ra: 276.993,
        dec: -25.421,
        v: 2.82,
        name: 'lambda_Sgr'
    },
    {
        ra: 3.309,
        dec: 15.184,
        v: 2.83,
        name: 'gamma_Peg (Algenib)'
    },
    {
        ra: 121.886,
        dec: -24.304,
        v: 2.83,
        name: 'rho_Pup'
    },
    {
        ra: 238.787,
        dec: -63.43,
        v: 2.83,
        name: 'beta_TrA'
    },
    {
        ra: 261.325,
        dec: -55.53,
        v: 2.84,
        name: 'beta_Ara'
    },
    {
        ra: 262.961,
        dec: -49.876,
        v: 2.84,
        name: 'alpha_Ara'
    },
    {
        ra: 58.533,
        dec: 31.884,
        v: 2.84,
        name: 'zeta_Per'
    },
    {
        ra: 326.76,
        dec: -16.127,
        v: 2.85,
        name: 'delta_Cap'
    },
    {
        ra: 195.545,
        dec: 10.959,
        v: 2.85,
        name: 'epsilon_Vir (Vindemiatrix)'
    },
    {
        ra: 56.871,
        dec: 24.105,
        v: 2.85,
        name: 'eta_Tau (Alcyone)'
    },
    {
        ra: 29.691,
        dec: -61.57,
        v: 2.86,
        name: 'alpha_Hyi'
    },
    {
        ra: 296.244,
        dec: 45.131,
        v: 2.86,
        name: 'delta_Cyg'
    },
    {
        ra: 334.626,
        dec: -60.259,
        v: 2.87,
        name: 'alpha_Tuc'
    },
    {
        ra: 95.74,
        dec: 22.514,
        v: 2.87,
        name: 'mu_Gem'
    }
];

// get our canvas element
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const diameter = Math.min(document.body.clientWidth, document.body.clientHeight);

// disable right clicking
document.oncontextmenu = function () {
    return false;
};

// list of all strokes drawn
const drawings = [];

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
    // set the canvas to the size of the window
    canvas.width = diameter;
    canvas.height = diameter;

    // dark bg
    context.fillStyle = '#36393B';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // draw circle
    context.strokeStyle = '#fff';
    context.arc(toScreenX(diameter / 2), toScreenY(diameter / 2), diameter * scale * 0.5, 0, 2 * Math.PI);
    context.stroke();

    // draw annotations
    for (let i = 0; i < drawings.length; i++) {
        const line = drawings[i];
        drawLine(toScreenX(line.x0), toScreenY(line.y0), toScreenX(line.x1), toScreenY(line.y1));
    }

    // draw stars
    context.fillStyle = '#fff';

    for (let i = 0; i < list.length; i++) {
        drawStar(0.0236, 2.86, list[i]);
    }
}
redrawCanvas();

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
        drawings.push({
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
        drawings.push({
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
    dec = (dec / 180) * Math.PI;
    ra = (ra / 180) * Math.PI;

    let ha = lst - ra;
    // equitorial to horizontal
    let alt = Math.asin(Math.sin(lat) * Math.sin(dec) + Math.cos(lat) * Math.cos(dec) * Math.cos(ha));
    if (alt < 0) return;
    let az = -Math.atan2(-Math.sin(ha) * Math.cos(dec) * Math.cos(lat), Math.sin(dec) - Math.sin(lat) * Math.sin(alt));

    // projecting the horizontal
    let radius = diameter * 0.5;

    let r = Math.tan(Math.PI / 4 - alt / 2) * radius;
    let x = toScreenX(radius + r * Math.cos(az));
    let y = toScreenY(radius + r * Math.sin(az));

    let size = 6 - v;

    context.fillRect(x, y, size, size);
}
