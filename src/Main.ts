import * as c3  from 'c3';
import {CellMap as CM} from "./CellMap";
import {CVirus as CV, VaiableVirus as VV} from "./Virus";
import {Primitive} from "c3";
import * as bd from "./Board";

// パラメータ
let ex02Alpha: number = 0.5;
let ex02probI: number = 0.001;
let ex03Alpha: number = 0.5;
let ex03Gamma: number = 0.1;
let ex04Alpha: number = 0.5;
let ex04Gamma: number = 0.1;
let ex04probI: number = 0.001;
let ex05probI: number = 0.001;
let ex05Mitsu: number = 1;
let simAlpha: number = 0.5;
let simGamma: number = 0.1;
let simProbI: number = 0.001;

// ウイルス
let vvEx01 = new VV(1,0);
let vvEx02 = new VV(ex02Alpha, 0);
let vvEx03 = new VV(ex03Alpha, ex03Gamma);
let vvEx04 = new VV(ex04Alpha, ex04Gamma);
let cvEx05 = new CV(ex05Mitsu);
let vvSim = new VV(simAlpha, simGamma);

// CellMap
const cmEx01 = new CM(11);
const cmEx02 = new CM(50);
const cmEx03 = new CM(11);
const cmEx04 = new CM(50);
const cmEx05 = new CM(50);
const cmSim = new CM(100);
cmEx01.manualReset(5, 5, vvEx01, false);
cmEx02.reset(ex02probI, vvEx02);
cmEx03.manualReset(5,5,vvEx03,true);
cmEx04.reset(ex04probI, vvEx04);
cmEx05.reset(ex05probI, cvEx05);
cmSim.reset(simProbI, vvSim);

// window幅
const width = window.innerWidth * 0.8;

// スライダー要素
// example02
// alpha
const inputEx02Alpha: HTMLInputElement = <HTMLInputElement>document.getElementById("alpha-slider-ex02");
const currentEx02Alpha = document.getElementById("alpha-ex02");
const setCurrentEx02Alpha = function(val: string) {
    currentEx02Alpha.innerText = val;
}
const Ex02AlphaOnChange = function(e) {
    setCurrentEx02Alpha(e.target.value);
}
// probI
const inputEx02probI: HTMLInputElement = <HTMLInputElement>document.getElementById("probI-slider-ex02");
const currentEx02ProbI = document.getElementById("probI-ex02");
const setCurrentEx02ProbI = function(val: string) {
    currentEx02ProbI.innerText = val;
}
const Ex02ProbIOnChange = function(e) {
    setCurrentEx02ProbI(e.target.value);
}
// example04
// alpha
const inputEx04Alpha: HTMLInputElement = <HTMLInputElement>document.getElementById("alpha-slider-ex04");
const currentEx04Alpha = document.getElementById("alpha-ex04");
const setCurrentEx04Alpha = function(val: string) {
    currentEx04Alpha.innerText = val;
}
const Ex04AlphaOnChange = function(e) {
    setCurrentEx04Alpha(e.target.value);
}
// probI
const inputEx04probI: HTMLInputElement = <HTMLInputElement>document.getElementById("probI-slider-ex04");
const currentEx04ProbI = document.getElementById("probI-ex04");
const setCurrentEx04ProbI = function(val: string) {
    currentEx04ProbI.innerText = val;
}
const Ex04ProbIOnChange = function(e) {
    setCurrentEx04ProbI(e.target.value);
}
// gamma
const inputEx04Gamma: HTMLInputElement = <HTMLInputElement>document.getElementById("gamma-slider-ex04");
const currentEx04Gamma = document.getElementById("gamma-ex04");
const setCurrentEx04Gamma = function(val: string) {
    currentEx04Gamma.innerText = val;
}
const Ex04GammaOnChange = function(e) {
    setCurrentEx04Gamma(e.target.value);
}
// example05
// probI
const inputEx05probI: HTMLInputElement = <HTMLInputElement>document.getElementById("probI-slider-ex05");
const currentEx05ProbI = document.getElementById("probI-ex05");
const setCurrentEx05ProbI = function(val: string) {
    currentEx05ProbI.innerText = val;
}
const Ex05ProbIOnChange = function(e) {
    setCurrentEx05ProbI(e.target.value);
}
// mitsu
const inputEx05Mitsu: HTMLInputElement = <HTMLInputElement>document.getElementById("mitsu-slider-ex05");
const currentEx05Mitsu = document.getElementById("mitsu-ex05");
const setCurrentEx05Mitsu = function(val: string) {
    currentEx05Mitsu.innerText = val;
}
const Ex05MitsuOnChange = function(e) {
    setCurrentEx05Mitsu(e.target.value);
}
// simulation
// alpha
const inputSimAlpha: HTMLInputElement = <HTMLInputElement>document.getElementById("alpha-slider-sim");
const currentSimAlpha = document.getElementById("alpha-sim");
const setCurrentSimAlpha = function(val: string) {
    currentSimAlpha.innerText = val;
}
const SimAlphaOnChange = function(e) {
    setCurrentSimAlpha(e.target.value);
}
// probI
const inputSimprobI: HTMLInputElement = <HTMLInputElement>document.getElementById("probI-slider-sim");
const currentSimProbI = document.getElementById("probI-sim");
const setCurrentSimProbI = function(val: string) {
    currentSimProbI.innerText = val;
}
const SimProbIOnChange = function(e) {
    setCurrentSimProbI(e.target.value);
}
// gamma
const inputSimGamma: HTMLInputElement = <HTMLInputElement>document.getElementById("gamma-slider-sim");
const currentSimGamma = document.getElementById("gamma-sim");
const setCurrentSimGamma = function(val: string) {
    currentSimGamma.innerText = val;
}
const SimGammaOnChange = function(e) {
    setCurrentSimGamma(e.target.value);
}

window.onload = function() {
    inputEx02Alpha.addEventListener("input", Ex02AlphaOnChange);
    setCurrentEx02Alpha(inputEx02Alpha.value);
    ex02Alpha = Number(inputEx02Alpha.value) / 100;
    inputEx02probI.addEventListener("input", Ex02ProbIOnChange);
    setCurrentEx02ProbI(inputEx02probI.value);
    ex02probI = Number(inputEx02probI.value) / 100;

    inputEx04Alpha.addEventListener("input", Ex04AlphaOnChange);
    setCurrentEx04Alpha(inputEx04Alpha.value);
    ex04Alpha = Number(inputEx04Alpha.value) / 100;
    inputEx04probI.addEventListener("input", Ex04ProbIOnChange);
    setCurrentEx04ProbI(inputEx04probI.value);
    ex04probI = Number(inputEx04probI.value) / 100;
    inputEx04Gamma.addEventListener("input", Ex04GammaOnChange);
    setCurrentEx04Gamma(inputEx04Gamma.value);
    ex04Gamma = 1 / Number(inputEx04Gamma.value);

    inputEx05probI.addEventListener("input", Ex05ProbIOnChange);
    setCurrentEx05ProbI(inputEx05probI.value);
    ex05probI = Number(inputEx05probI.value) / 100;
    inputEx05Mitsu.addEventListener("input", Ex05MitsuOnChange);
    setCurrentEx05Mitsu(inputEx05Mitsu.value);
    ex05Mitsu = Number(inputEx05Mitsu.value) / 100;

    inputSimAlpha.addEventListener("input", SimAlphaOnChange);
    setCurrentSimAlpha(inputSimAlpha.value);
    simAlpha = Number(inputSimAlpha.value) / 100;
    inputSimprobI.addEventListener("input", SimProbIOnChange);
    setCurrentSimProbI(inputSimprobI.value);
    simProbI = Number(inputSimprobI.value) / 100;
    inputSimGamma.addEventListener("input", SimGammaOnChange);
    setCurrentSimGamma(inputSimGamma.value);
    simGamma = 1 / Number(inputSimGamma.value);
}

// date要素
const dateEx01: HTMLInputElement = <HTMLInputElement>document.getElementById("date-ex01");
const dateEx02: HTMLInputElement = <HTMLInputElement>document.getElementById("date-ex02");
const dateEx03: HTMLInputElement = <HTMLInputElement>document.getElementById("date-ex03");
const dateEx04: HTMLInputElement = <HTMLInputElement>document.getElementById("date-ex04");
const dateEx05: HTMLInputElement = <HTMLInputElement>document.getElementById("date-ex05");
const dateSim: HTMLInputElement = <HTMLInputElement>document.getElementById("date-sim");

// Canvas要素
// example01
const ex01Canvas = <HTMLCanvasElement>document.getElementById("example01");
ex01Canvas.width = width;
ex01Canvas.height = width;
bd.BoardReseter(ex01Canvas, 11);
bd.BoardViewr(ex01Canvas, cmEx01.cells, cmEx01.sides);
// example02
const ex02Canvas = <HTMLCanvasElement>document.getElementById("example02");
ex02Canvas.width = width;
ex02Canvas.height = width;
bd.BoardReseter(ex02Canvas, cmEx02.sides);
// example03
const ex03Canvas = <HTMLCanvasElement>document.getElementById("example03");
ex03Canvas.width = width;
ex03Canvas.height = width;
bd.BoardReseter(ex03Canvas, cmEx03.sides);
bd.BoardViewr(ex03Canvas, cmEx03.cells, cmEx03.sides);
// example04
const ex04Canvas = <HTMLCanvasElement>document.getElementById("example04");
ex04Canvas.width = width;
ex04Canvas.height = width;
bd.BoardReseter(ex04Canvas, cmEx04.sides);
// example05
const ex05Canvas = <HTMLCanvasElement>document.getElementById("example05");
ex05Canvas.width = width;
ex05Canvas.height = width;
bd.BoardReseter(ex05Canvas, cmEx05.sides);
// Simulation
const simCanvas = <HTMLCanvasElement>document.getElementById("sim");
simCanvas.width = width;
simCanvas.height = width;
bd.BoardReseter(simCanvas, cmSim.sides);


// button要素
// example01
const stepEx01 = <HTMLButtonElement>document.getElementById("step-ex01");
const playEx01 = <HTMLButtonElement>document.getElementById("play-ex01");
const resetEx01 = <HTMLButtonElement>document.getElementById("reset-ex01");
// example02
const stepEx02 = <HTMLButtonElement>document.getElementById("step-ex02");
const playEx02 = <HTMLButtonElement>document.getElementById("play-ex02");
const resetEx02 = <HTMLButtonElement>document.getElementById("reset-ex02");
// example03
const stepEx03 = <HTMLButtonElement>document.getElementById("step-ex03");
const playEx03 = <HTMLButtonElement>document.getElementById("play-ex03");
const resetEx03 = <HTMLButtonElement>document.getElementById("reset-ex03");
// example04
const stepEx04 = <HTMLButtonElement>document.getElementById("step-ex04");
const playEx04 = <HTMLButtonElement>document.getElementById("play-ex04");
const resetEx04 = <HTMLButtonElement>document.getElementById("reset-ex04");
// example05
const stepEx05 = <HTMLButtonElement>document.getElementById("step-ex05");
const playEx05 = <HTMLButtonElement>document.getElementById("play-ex05");
const resetEx05 = <HTMLButtonElement>document.getElementById("reset-ex05");
// simulation
const stepSim = <HTMLButtonElement>document.getElementById("step-sim");
const playSim = <HTMLButtonElement>document.getElementById("play-sim");
const resetSim = <HTMLButtonElement>document.getElementById("reset-sim"); 

//Example01の逐次処理
let ex01Timer: number[] = new Array();
stepEx01.onclick = function() {
    cmEx01.getNewGen();
    dateEx01.innerHTML = "日数:" + cmEx01.date;
    bd.BoardViewr(ex01Canvas, cmEx01.cells, cmEx01.sides);
}
playEx01.onclick = function() {
    window.clearInterval(ex01Timer.shift());
    cmEx01.manualReset(5, 5, vvEx01, false);
    dateEx01.innerHTML = "日数:" + cmEx01.date;
    bd.BoardViewr(ex01Canvas, cmEx01.cells, cmEx01.sides);
    ex01Timer.push(window.setInterval(function() {
        cmEx01.getNewGen();
        dateEx01.innerHTML = "日数:" + cmEx01.date;
        bd.BoardViewr(ex01Canvas, cmEx01.cells, cmEx01.sides);
        if (cmEx01.numberOfState("S") === 0) {
            window.clearInterval(ex01Timer.shift());
        }
    }, 500));
}
resetEx01.onclick = function() {
    window.clearInterval(ex01Timer.shift());
    cmEx01.manualReset(5, 5, new VV(1,0), false);
    dateEx01.innerHTML = "日数:" + cmEx01.date;
    bd.BoardViewr(ex01Canvas, cmEx01.cells, cmEx01.sides);
}


//Example02の逐次処理
let ex02Timer: number[] = new Array();
stepEx02.onclick = function() {
    cmEx02.getNewGen();
    dateEx02.innerHTML = "日数:" + cmEx02.date;
    bd.BoardViewr(ex02Canvas, cmEx02.cells, cmEx02.sides);
}
playEx02.onclick = function() {
    window.clearInterval(ex02Timer.shift());
    ex02Alpha = Number(inputEx02Alpha.value) / 100;
    ex02probI = Number(inputEx02probI.value) / 100;
    vvEx02 = new VV(ex02Alpha, 0);
    cmEx02.reset(ex02probI, vvEx02);
    dateEx02.innerHTML = "日数:" + cmEx02.date;
    ex02Timer.push(window.setInterval(function() {
        cmEx02.getNewGen();
        bd.BoardViewr(ex02Canvas, cmEx02.cells, cmEx02.sides);
        dateEx02.innerHTML = "日数:" + cmEx02.date;
        if (cmEx02.numberOfState("S") === 0) {
            window.clearInterval(ex02Timer.shift());
        } else if (cmEx02.date > 100) {
            dateEx02.innerHTML = "日数:Time Out"
            window.clearInterval(ex02Timer.shift());
        }
    }, 250));
}
resetEx02.onclick = function() {
    window.clearInterval(ex02Timer.shift());
    ex02Alpha = Number(inputEx02Alpha.value) / 100;
    ex02probI = Number(inputEx02probI.value) / 100;
    vvEx02 = new VV(ex02Alpha, 0);
    cmEx02.reset(ex02probI, vvEx02);
    dateEx02.innerHTML = "日数:" + cmEx02.date;
    bd.BoardViewr(ex02Canvas, cmEx02.cells, cmEx02.sides);
}

//Example03の逐次処理
let ex03Timer: number[] = new Array();
stepEx03.onclick = function() {
    cmEx03.getNewGen();
    dateEx03.innerHTML = "日数:" + cmEx03.date;
    bd.BoardViewr(ex03Canvas, cmEx03.cells, cmEx03.sides);
}
playEx03.onclick = function() {
    window.clearInterval(ex03Timer.shift());
    vvEx03 = new VV(ex03Alpha, ex03Gamma);
    cmEx03.manualReset(5,5,vvEx03,true)
    dateEx03.innerHTML = "日数:" + cmEx03.date;
    ex03Timer.push(window.setInterval(function() {
        cmEx03.getNewGen();
        bd.BoardViewr(ex03Canvas, cmEx03.cells, cmEx03.sides);
        dateEx03.innerHTML = "日数:" + cmEx03.date;
        if (cmEx03.numberOfState("I") === 0) {
            window.clearInterval(ex03Timer.shift());
        }
    }, 250));
}
resetEx03.onclick = function() {
    window.clearInterval(ex03Timer.shift());
    vvEx03 = new VV(ex03Alpha, ex03Gamma);
    cmEx03.manualReset(5,5,vvEx03,true);
    dateEx03.innerHTML = "日数:" + cmEx02.date;
    bd.BoardViewr(ex03Canvas, cmEx03.cells, cmEx03.sides);
}

//Example04の逐次処理
let ex04Timer: number[] = new Array();
stepEx04.onclick = function() {
    cmEx04.getNewGen();
    dateEx04.innerHTML = "日数:" + cmEx04.date;
    bd.BoardViewr(ex04Canvas, cmEx04.cells, cmEx04.sides);
}
playEx04.onclick = function() {
    window.clearInterval(ex04Timer.shift());
    ex04Alpha = Number(inputEx04Alpha.value) / 100;
    ex04probI = Number(inputEx04probI.value) / 100;
    ex04Gamma = 1 / Number(inputEx04Gamma.value);
    vvEx04 = new VV(ex04Alpha, ex04Gamma);
    cmEx04.reset(ex04probI, vvEx04);
    dateEx04.innerHTML = "日数:" + cmEx04.date;
    ex04Timer.push(window.setInterval(function() {
        cmEx04.getNewGen();
        bd.BoardViewr(ex04Canvas, cmEx04.cells, cmEx04.sides);
        dateEx04.innerHTML = "日数:" + cmEx04.date;
        if (cmEx04.numberOfState("I") === 0) {
            window.clearInterval(ex04Timer.shift());
        } else if (cmEx04.date > 1000) {
            dateEx04.innerHTML = "日数:Time Out"
            window.clearInterval(ex04Timer.shift());
        }
    }, 250));
}
resetEx04.onclick = function() {
    window.clearInterval(ex04Timer.shift());
    ex04Alpha = Number(inputEx04Alpha.value) / 100;
    ex04probI = Number(inputEx04probI.value) / 100;
    ex04Gamma = Number(inputEx04Gamma.value);
    vvEx04 = new VV(ex04Alpha, ex04Gamma);
    cmEx04.reset(ex04probI, vvEx04);
    dateEx04.innerHTML = "日数:" + cmEx04.date;
    bd.BoardViewr(ex04Canvas, cmEx04.cells, cmEx04.sides);
}

//Example05の逐次処理
let ex05Timer: number[] = new Array();
stepEx05.onclick = function() {
    cmEx05.getNewGen();
    dateEx05.innerHTML = "日数:" + cmEx05.date;
    bd.BoardViewr(ex05Canvas, cmEx05.cells, cmEx05.sides);
}
playEx05.onclick = function() {
    window.clearInterval(ex05Timer.shift());
    ex05probI = Number(inputEx05probI.value) / 100;
    ex05Mitsu = Number(inputEx05Mitsu.value) / 100;
    cvEx05 = new CV(ex05Mitsu);
    cmEx05.reset(ex05probI, cvEx05);
    dateEx05.innerHTML = "日数:" + cmEx05.date;
    bd.BoardViewr(ex05Canvas, cmEx05.cells, cmEx05.sides);
    ex05Timer.push(window.setInterval(function() {
        cmEx05.getNewGen();
        bd.BoardViewr(ex05Canvas, cmEx05.cells, cmEx05.sides);
        dateEx05.innerHTML = "日数:" + cmEx05.date;
        if (cmEx05.numberOfState("I") === 0) {
            window.clearInterval(ex05Timer.shift());
        } else if (cmEx05.date > 1000) {
            dateEx05.innerHTML = "日数:Time Out"
            window.clearInterval(ex05Timer.shift());
        }
    }, 250));
}
resetEx05.onclick = function() {
    window.clearInterval(ex05Timer.shift());
    ex05probI = Number(inputEx05probI.value) / 100;
    ex05Mitsu = Number(inputEx05Mitsu.value) / 100;
    cvEx05 = new CV(ex05Mitsu);
    cmEx05.reset(ex05probI, cvEx05);
    dateEx05.innerHTML = "日数:" + cmEx05.date;
    bd.BoardViewr(ex05Canvas, cmEx05.cells, cmEx05.sides);
}

// Simulationの逐次処理
let s: [string, Primitive] = ["S(未感染者)", cmSim.numberOfState("S")];
let i: [string, Primitive] = ["I(感染者)", cmSim.numberOfState("I")];
let r: [string, Primitive] = ["R(回復者)", cmSim.numberOfState("R")]; 


let chart = c3.generate({
    bindto: '#chart',
    size: { width: width, height: width* 0.7}, // グラフ描画領域のサイズ
    data: {
      columns: [
        s,
        i,
        r
      ],
      type: 'spline',
      labels: false // それぞれの点に数値を表示しない
    },
    point: {
        show: false // ポイントの表示
    },
    axis: {
        x: {
            label: "日数",
        },
        y: {
            inner: true
        }
    }
});

let simTimer: number[] = new Array();
stepSim.onclick = function() {
    cmSim.getNewGen();
    dateSim.innerHTML = "日数:" + cmSim.date;
    bd.BoardViewr(simCanvas, cmSim.cells, cmSim.sides);
    s.push(cmSim.numberOfState("S"));
    i.push(cmSim.numberOfState("I"));
    r.push(cmSim.numberOfState("R"));
    
    chart.load({
        columns: [
            s,
            i,
            r
        ]
    })
    chart.flush();
}
playSim.onclick = function() {
    simAlpha = Number(inputSimAlpha.value) / 100;
    simProbI = Number(inputSimprobI.value) / 100;
    simGamma = 1 / Number(inputSimGamma.value);
    vvSim = new VV(simAlpha, simGamma);
    cmSim.reset(simProbI, vvSim);
    dateSim.innerHTML = "日数:" + cmSim.date;
    s = ["S(未感染者)", cmSim.numberOfState("S")];
    i = ["I(感染者)", cmSim.numberOfState("I")];
    r = ["R(回復者)", cmSim.numberOfState("R")];
    chart.load({
        columns: [
            s,
            i,
            r
        ]
    })
    chart.flush();
    simTimer.push(window.setInterval(function() {
        cmSim.getNewGen();
        bd.BoardViewr(simCanvas, cmSim.cells, cmSim.sides);
        dateSim.innerHTML = "日数:" + cmSim.date;
        s.push(cmSim.numberOfState("S"));
        i.push(cmSim.numberOfState("I"));
        r.push(cmSim.numberOfState("R"));
        
        chart.load({
            columns: [
                s,
                i,
                r
            ]
        })
        chart.flush();
        if (cmSim.numberOfState("I") === 0) {
            window.clearInterval(simTimer.shift());
        } else if (cmSim.date > 1000) {
            dateSim.innerHTML = "日数:Time Out"
            window.clearInterval(simTimer.shift());
        }
    }, 10));
}
resetSim.onclick = function() {
    window.clearInterval(simTimer.shift());
    simAlpha = Number(inputSimAlpha.value) / 100;
    simProbI = Number(inputSimprobI.value) / 100;
    simGamma = 1 / Number(inputSimGamma.value);
    vvSim = new VV(simAlpha, simGamma);
    cmSim.reset(simProbI, vvSim);
    dateSim.innerHTML = "日数:" + cmSim.date;
    bd.BoardViewr(simCanvas, cmSim.cells, cmSim.sides);
    s = ["S(未感染者)", cmSim.numberOfState("S")];
    i = ["I(感染者)", cmSim.numberOfState("I")];
    r = ["R(回復者)", cmSim.numberOfState("R")];
    chart.load({
        columns: [
            s,
            i,
            r
        ]
    })
    chart.flush();
}