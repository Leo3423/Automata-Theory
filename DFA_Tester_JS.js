const canvas = document.getElementById('dfaCanvas');
const ctx = canvas.getContext('2d');
const pathTracker = document.getElementById('pathTracker');
const regexDisplay = document.getElementById('regexDisplay');
const patternIndexDisp = document.getElementById('patternIndex');

const patterns = [
    {
        regex: "(aa+bb)(a+b)*(a+b+ab+ba)+(a+b+ab+ba)*(aa+bab)*(a+b+aa)(a+b+bb+aa)*",
        alphabet: /[ab]/i,
        dfa: {
            start: 'q0',
            states: {
                'q0': { x: 50,  y: 200, next: { 'a': 'q1', 'b': 'q2' }, accept: false },
                'q1': { x: 180, y: 100, next: { 'a': 'ACC', 'b': 'q3' }, accept: false },
                'q2': { x: 180, y: 300, next: { 'a': 'q4', 'b': 'ACC' }, accept: false },
                'q3': { x: 350, y: 100, next: { 'a': 'ACC', 'b': 'q3' }, accept: false },
                'q4': { x: 350, y: 300, next: { 'a': 'q4', 'b': 'ACC' }, accept: false },
                'ACC':{ x: 580, y: 200, next: { 'a': 'ACC', 'b': 'ACC' }, accept: true }
            }
        }
    },
    {
        regex: "((101)⁺+(111)*+100)+(1+0+11)*(1+0+01)*(111+000+101)(1+0)*",
        alphabet: /[01]/,
        dfa: {
            start: 'q0',
            states: {
                'q0': { x: 60,  y: 200, next: { '0': 'q1', '1': 'q2' }, accept: false },
                'q1': { x: 180, y: 100, next: { '0': 'q3', '1': 'q4' }, accept: false },
                'q2': { x: 180, y: 300, next: { '0': 'q5', '1': 'q6' }, accept: false },
                'q3': { x: 320, y: 60,  next: { '0': 'ACC', '1': 'q1' }, accept: false },
                'q4': { x: 320, y: 150, next: { '0': 'ACC', '1': 'q2' }, accept: false },
                'q5': { x: 320, y: 250, next: { '0': 'ACC', '1': 'ACC' }, accept: false },
                'q6': { x: 320, y: 340, next: { '0': 'q5', '1': 'ACC' }, accept: false },
                'ACC':{ x: 550, y: 200, next: { '0': 'ACC', '1': 'ACC' }, accept: true }
            }
        }
    }
];

let currentPatternIdx = 0;
let currentState = "";
let activeEdge = null;
let isRunning = false;

function initPattern() {
    if (isRunning) return;
    const p = patterns[currentPatternIdx];
    regexDisplay.innerText = p.regex;
    patternIndexDisp.innerText = currentPatternIdx + 1;
    currentState = p.dfa.start;
    updateNavButtons();
    document.querySelectorAll('.status-dot').forEach(d => d.className = "status-dot");
    pathTracker.innerText = "Idle...";
    draw();
}

function updateNavButtons() {
    document.getElementById('prevBtn').disabled = currentPatternIdx === 0 || isRunning;
    document.getElementById('nextBtn').disabled = currentPatternIdx === patterns.length - 1 || isRunning;
}

function changePattern(delta) {
    currentPatternIdx += delta;
    initPattern();
}

const grid = document.getElementById('inputGrid');
for(let i=1; i<=7; i++) {
    grid.innerHTML += `
        <div class="input-group">
            <input type="text" id="input${i}" placeholder="Input ${i}...">
            <button class="btn-simulate" onclick="simulate(${i})" id="btn${i}">Simulate</button>
            <div class="status-dot" id="dot${i}"></div>
        </div>`;
}

function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    draw();
}
window.onresize = resize;

function draw() {
    const activeDFA = patterns[currentPatternIdx].dfa;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Object.keys(activeDFA.states).forEach(id => {
        const s = activeDFA.states[id];
        for (let char in s.next) {
            const target = activeDFA.states[s.next[char]];
            const active = activeEdge && activeEdge.from === id && activeEdge.to === s.next[char];
            ctx.beginPath();
            ctx.lineWidth = active ? 4 : 1.5;
            ctx.strokeStyle = active ? "#0078d4" : "#ccc";
            ctx.moveTo(s.x, s.y); 
            ctx.lineTo(target.x, target.y);
            ctx.stroke();
            ctx.fillStyle = active ? "#0078d4" : "#888";
            ctx.font = "bold 13px monospace";
            ctx.fillText(char, (s.x + target.x)/2, (s.y + target.y)/2 - 5);
        }
    });
    Object.keys(activeDFA.states).forEach(id => {
        const s = activeDFA.states[id];
        ctx.beginPath();
        ctx.arc(s.x, s.y, 25, 0, Math.PI*2);
        ctx.fillStyle = (currentState === id) ? "#0078d4" : "#fff";
        ctx.fill();
        ctx.lineWidth = s.accept ? 5 : 2;
        ctx.strokeStyle = "#1a1a1a";
        ctx.stroke();
        if(s.accept) { ctx.beginPath(); ctx.arc(s.x, s.y, 20, 0, Math.PI*2); ctx.stroke(); }
        ctx.fillStyle = (currentState === id) ? "#fff" : "#000";
        ctx.font = "bold 11px Arial"; ctx.textAlign = "center";
        ctx.fillText(id, s.x, s.y+4);
    });
}

async function simulate(index) {
    const pattern = patterns[currentPatternIdx];
    const activeDFA = pattern.dfa;
    const inputEl = document.getElementById(`input${index}`);
    const dot = document.getElementById(`dot${index}`);
    const val = inputEl.value.trim().toLowerCase();

    if (val === "" || !Array.from(val).every(c => pattern.alphabet.test(c))) {
        dot.className = "status-dot status-fail";
        pathTracker.innerText = "Error: Invalid alphabet for this pattern.";
        return;
    }

    isRunning = true;
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(b => b.disabled = true);

    currentState = activeDFA.start;
    let path = [activeDFA.start];
    pathTracker.innerText = `Testing [${index}]: ` + path.join(" → ");
    dot.className = "status-dot";
    draw();

    for (let char of val) {
        const nextState = activeDFA.states[currentState]?.next[char];
        if(!nextState) break;
        activeEdge = { from: currentState, to: nextState };
        draw();
        await new Promise(r => setTimeout(r, 200));
        currentState = nextState;
        path.push(currentState);
        pathTracker.innerText = `Testing [${index}]: ` + path.join(" → ");
        activeEdge = null;
        draw();
        await new Promise(r => setTimeout(r, 100));
    }

    dot.className = "status-dot " + (activeDFA.states[currentState].accept ? "status-pass" : "status-fail");
    
    isRunning = false;
    allButtons.forEach(b => b.disabled = false);
    updateNavButtons();
}

async function executeAll() {
    if (isRunning) return;
    const executeBtn = document.getElementById('executeAllBtn');
    executeBtn.disabled = true;
    
    for(let i=1; i<=7; i++) {
        const inputVal = document.getElementById(`input${i}`).value;
        if(inputVal !== "") {
            await simulate(i);
            await new Promise(r => setTimeout(r, 400));
        }
    }
    
    executeBtn.disabled = false;
    pathTracker.innerText = "All batch tests processed.";
}

window.onload = () => {
    resize();
    initPattern();
};