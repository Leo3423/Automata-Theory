const automataData = {
    ab: {
        regex: "(aa+bb)(a+b)*(a+b+ab+ba)(a+b+ab+ba)*(aa+bab)*(a+b+aa)(a+b+bb+aa)",
        alphabet: ['a', 'b'],
        startState: 'S0',
        acceptStates: ['S8', 'S9', 'S10'],
        transitions: {
            'S0': { 'a': 'S1', 'b': 'S2' },
            'S1': { 'a': 'S3', 'b': 'T' },
            'S2': { 'a': 'T', 'b': 'S3' },
            'T': { 'a': 'T', 'b': 'T' },
            'S3': { 'a': 'S4', 'b': 'S5' },
            'S4': { 'a': 'S6', 'b': 'S7' },
            'S5': { 'a': 'S6', 'b': 'S7' },
            'S6': { 'a': 'S8', 'b': 'S9' },
            'S7': { 'a': 'S10', 'b': 'S9' },
            'S8': { 'a': 'S8', 'b': 'S9' },
            'S9': { 'a': 'S10', 'b': 'S9' },
            'S10': { 'a': 'S8', 'b': 'S9' }
        },
        nodes: {
            'S0':  { x: 60,  y: 200 },
            'S1':  { x: 180, y: 70 },
            'T':   { x: 180, y: 200 },
            'S2':  { x: 180, y: 330 },
            'S3':  { x: 310, y: 200 },
            'S4':  { x: 440, y: 100 },
            'S5':  { x: 440, y: 300 },
            'S6':  { x: 560, y: 100 },
            'S7':  { x: 560, y: 300 },
            'S8':  { x: 680, y: 100 },
            'S9':  { x: 680, y: 300 },
            'S10': { x: 780, y: 200 }
        },
        cfg: `S  → A B C D\nA  → aa | bb\nB  → aB | bB | ε\nC  → a | b | ab | ba\nD  → aD | bD | aaD | bbD | ε`,
        pda: [
            { curr: 'q0', input: 'a', pop: 'Z0', next: 'q1', push: 'aZ0' },
            { curr: 'q1', input: 'a', pop: 'a', next: 'q2', push: 'ε' },
            { curr: 'q2', input: 'b', pop: 'Z0', next: 'q2', push: 'Z0' }
        ],
        pdaBlocks: [
            { id: 'b_start', type: 'rect', label: 'Start', x: 200, y: 30, w: 90, h: 40 },
            { id: 'b_read1', type: 'diamond', label: 'Read', x: 200, y: 130, w: 100, h: 60 },
            { id: 'b_push1', type: 'rect', label: 'Push X', x: 40, y: 140, w: 90, h: 40 },
            { id: 'b_pop1',  type: 'diamond', label: 'Pop', x: 200, y: 260, w: 100, h: 60 },
            { id: 'b_read2', type: 'diamond', label: 'Read', x: 420, y: 260, w: 100, h: 60 },
            { id: 'b_pop2',  type: 'diamond', label: 'Pop', x: 640, y: 130, w: 100, h: 60 },
            { id: 'b_accept', type: 'rect', label: 'Accept', x: 645, y: 30, w: 90, h: 40 },
            { id: 'b_reject', type: 'rect', label: 'Reject', x: 425, y: 410, w: 90, h: 40 }
        ],
        pdaLines: [
            { from: 'b_start', to: 'b_read1', sideFrom: 'bottom', sideTo: 'top', label: '' },
            { from: 'b_read1', to: 'b_push1', sideFrom: 'left', sideTo: 'right', label: 'a' },
            { from: 'b_push1', to: 'b_read1', sideFrom: 'top', sideTo: 'topLeft', label: 'X', isCustomPath: true, path: 'M 85 140 L 85 95 L 210 95 L 210 130' },
            { from: 'b_read1', to: 'b_pop2', sideFrom: 'right', sideTo: 'left', label: 'Δ' },
            { from: 'b_read1', to: 'b_pop1', sideFrom: 'bottom', sideTo: 'top', label: 'b' },
            { from: 'b_pop1', to: 'b_read2', sideFrom: 'right', sideTo: 'left', label: 'X' },
            { from: 'b_pop1', to: 'b_reject', sideFrom: 'bottom', sideTo: 'left', label: 'Δ', isCustomPath: true, path: 'M 250 290 L 250 430 L 425 430' },
            { from: 'b_read2', to: 'b_pop1', sideFrom: 'top', sideTo: 'right', label: 'b', isCustomPath: true, path: 'M 470 260 L 470 215 L 320 215 L 300 260' },
            { from: 'b_read2', to: 'b_pop2', sideFrom: 'right', sideTo: 'bottom', label: 'Δ', isCustomPath: true, path: 'M 520 290 L 690 290 L 690 160' },
            { from: 'b_read2', to: 'b_reject', sideFrom: 'bottom', sideTo: 'top', label: 'a' },
            { from: 'b_pop2', to: 'b_accept', sideFrom: 'top', sideTo: 'bottom', label: 'Δ' },
            { from: 'b_pop2', to: 'b_reject', sideFrom: 'right', sideTo: 'right', label: 'X', isCustomPath: true, path: 'M 740 160 L 790 160 L 790 430 L 515 430' }
        ]
    },
    '01': {
        regex: "(((101)+(111)*+(100))+(1+0+11)*)(1+0+01)*(111+000+101)(1+0)*",
        alphabet: ['0', '1'],
        startState: 'S0',
        acceptStates: ['S7', 'S9', 'S11', 'S12', 'S13', 'S14', 'S15'],
        transitions: {
            'S0':  { '1': 'S1',  '0': 'S2' },
            'S1':  { '1': 'S3',  '0': 'S4' },
            'S2':  { '1': 'S5',  '0': 'S6' },
            'S3':  { '1': 'S7',  '0': 'S8' },
            'S4':  { '1': 'S9',  '0': 'S6' },
            'S5':  { '1': 'S10', '0': 'S8' },
            'S6':  { '1': 'S5',  '0': 'S11' },
            'S7':  { '1': 'S12', '0': 'S13' },
            'S8':  { '1': 'S9',  '0': 'S6' },
            'S9':  { '1': 'S14', '0': 'S13' },
            'S10': { '1': 'S14', '0': 'S8' },
            'S11': { '1': 'S9',  '0': 'S11' },
            'S12': { '1': 'S15', '0': 'S13' },
            'S13': { '1': 'S9',  '0': 'S11' },
            'S14': { '1': 'S14', '0': 'S13' },
            'S15': { '1': 'S7',  '0': 'S13' }
        },
        nodes: {
            'S0':  { x: 50,  y: 110 },
            'S1':  { x: 150, y: 110 },
            'S3':  { x: 260, y: 110 },
            'S7':  { x: 390, y: 110 },
            'S15': { x: 510, y: 110 },
            'S13': { x: 630, y: 110 },
            'S14': { x: 760, y: 110 },
            'S2':  { x: 50,  y: 250 },
            'S4':  { x: 340, y: 250 },
            'S12': { x: 450, y: 200 },
            'S9':  { x: 700, y: 260 },
            'S5':  { x: 210, y: 370 },
            'S6':  { x: 410, y: 370 },
            'S11': { x: 630, y: 350 },
            'S8':  { x: 310, y: 460 },
            'S10': { x: 210, y: 480 }
        },
        cfg: `S  → X Y Z\nX  → 101 | 111X | 100 | ε\nY  → 1Y | 0Y | 01Y | ε\nZ  → 111 | 000 | 101`,
        pda: [
            { curr: 'p0', input: '1', pop: 'Z0', next: 'p0', push: '1Z0' },
            { curr: 'p0', input: '0', pop: '1', next: 'p1', push: 'ε' }
        ],
        pdaBlocks: [
            { id: 'b2_start',  type: 'rect', label: 'Start', x: 200, y: 30, w: 90, h: 40 },
            { id: 'b2_read1',  type: 'diamond', label: 'Read', x: 200, y: 130, w: 100, h: 60 },
            { id: 'b2_push1',  type: 'rect', label: 'Push 1', x: 40, y: 140, w: 90, h: 40 },
            { id: 'b2_pop1',   type: 'diamond', label: 'Pop', x: 200, y: 260, w: 100, h: 60 },
            { id: 'b2_read2',  type: 'diamond', label: 'Read', x: 420, y: 260, w: 100, h: 60 },
            { id: 'b2_pop2',   type: 'diamond', label: 'Pop', x: 640, y: 130, w: 100, h: 60 },
            { id: 'b2_accept', type: 'rect', label: 'Accept', x: 645, y: 30, w: 90, h: 40 },
            { id: 'b2_reject', type: 'rect', label: 'Reject', x: 425, y: 410, w: 90, h: 40 }
        ],
        pdaLines: [
            { from: 'b2_start', to: 'b2_read1', sideFrom: 'bottom', sideTo: 'top', label: '' },
            { from: 'b2_read1', to: 'b2_push1', sideFrom: 'left', sideTo: 'right', label: '1' },
            { from: 'b2_push1', to: 'b2_read1', sideFrom: 'top', sideTo: 'topLeft', label: '1', isCustomPath: true, path: 'M 85 140 L 85 95 L 210 95 L 210 130' },
            { from: 'b2_read1', to: 'b2_pop2', sideFrom: 'right', sideTo: 'left', label: 'Δ' },
            { from: 'b2_read1', to: 'b2_pop1', sideFrom: 'bottom', sideTo: 'top', label: '0' },
            { from: 'b2_pop1', to: 'b2_read2', sideFrom: 'right', sideTo: 'left', label: '1' },
            { from: 'b2_pop1', to: 'b2_reject', sideFrom: 'bottom', sideTo: 'left', label: 'Δ', isCustomPath: true, path: 'M 250 290 L 250 430 L 425 430' },
            { from: 'b2_read2', to: 'b2_pop1', sideFrom: 'top', sideTo: 'right', label: '0', isCustomPath: true, path: 'M 470 260 L 470 215 L 320 215 L 300 260' },
            { from: 'b2_read2', to: 'b2_pop2', sideFrom: 'right', sideTo: 'bottom', label: 'Δ', isCustomPath: true, path: 'M 520 290 L 690 290 L 690 160' },
            { from: 'b2_read2', to: 'b2_reject', sideFrom: 'bottom', sideTo: 'top', label: '1' },
            { from: 'b2_pop2', to: 'b2_accept', sideFrom: 'top', sideTo: 'bottom', label: 'Δ' },
            { from: 'b2_pop2', to: 'b2_reject', sideFrom: 'right', sideTo: 'right', label: '1', isCustomPath: true, path: 'M 740 160 L 790 160 L 790 430 L 515 430' }
        ]
    }
};

let currentAlphabet = 'ab';
let currentTab = 'dfa';
let activeAnimationTimeout = null;

// DOM Event Bindings
document.addEventListener("DOMContentLoaded", () => {
    renderRows();
    updateWorkspace();

    document.getElementById('btn-ab').addEventListener('click', () => switchAlphabet('ab'));
    document.getElementById('btn-01').addEventListener('click', () => switchAlphabet('01'));
    document.getElementById('tab-dfa').addEventListener('click', () => switchTab('dfa'));
    document.getElementById('tab-cfg').addEventListener('click', () => switchTab('cfg'));
    document.getElementById('tab-pda').addEventListener('click', () => switchTab('pda'));
    document.getElementById('btn-clear').addEventListener('click', clearAllInputs);
    document.getElementById('btn-validate-all').addEventListener('click', validateAll);
});

function renderRows() {
    const container = document.getElementById('matrix-rows');
    container.innerHTML = '';
    for(let i = 0; i < 10; i++) {
        container.innerHTML += `
            <div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-center border-b border-slate-50 pb-3 last:border-0">
                <div class="md:col-span-1 text-xs font-bold text-slate-400">#${i+1}</div>
                <div class="md:col-span-4">
                    <input type="text" id="input-${i}" placeholder="Enter test sequence string..." class="w-full font-mono text-sm px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50 hover:bg-slate-50 transition">
                </div>
                <div class="md:col-span-2">
                    <button id="action-validate-${i}" class="w-full text-xs font-semibold px-3 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-indigo-600 hover:text-white transition duration-150">
                        Validate
                    </button>
                </div>
                <div class="md:col-span-5 flex flex-col justify-center px-1">
                    <div id="badge-${i}"></div>
                    <div id="path-${i}" class="text-xs text-slate-400 font-mono mt-1 whitespace-normal break-all"></div>
                </div>
            </div>
        `;
    }
    for(let i = 0; i < 10; i++) {
        document.getElementById(`action-validate-${i}`).addEventListener('click', () => validateSingle(i));
    }
}

function switchAlphabet(type) {
    currentAlphabet = type;
    document.getElementById('btn-ab').className = type === 'ab' ? 'px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm bg-white text-indigo-600' : 'px-4 py-2 rounded-lg text-sm font-semibold transition-all text-slate-600 hover:text-slate-900';
    document.getElementById('btn-01').className = type === '01' ? 'px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm bg-white text-indigo-600' : 'px-4 py-2 rounded-lg text-sm font-semibold transition-all text-slate-600 hover:text-slate-900';
    
    if (activeAnimationTimeout) clearInterval(activeAnimationTimeout);
    clearAllInputs();
    updateWorkspace();
}

function switchTab(tabName) {
    currentTab = tabName;
    ['dfa', 'cfg', 'pda'].forEach(t => {
        const element = document.getElementById(`tab-${t}`);
        if(t === tabName) {
            element.className = "w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all bg-indigo-50 text-indigo-700 border-l-4 border-indigo-600";
            document.getElementById(`view-${t}`).classList.remove('hidden');
        } else {
            element.className = "w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all text-slate-600 hover:bg-slate-100";
            document.getElementById(`view-${t}`).classList.add('hidden');
        }
    });
    if (tabName === 'dfa') renderSVGGraph();
    if (tabName === 'pda') renderPDAGraph();
}

function updateWorkspace() {
    const data = automataData[currentAlphabet];
    document.getElementById('regex-display').innerText = data.regex;
    document.getElementById('sidebar-meta').innerHTML = `
        <div><span class="text-slate-400 block text-xs">Start State</span><span class="font-mono font-bold text-white">${data.startState}</span></div>
        <div><span class="text-slate-400 block text-xs">Accepting Set</span><span class="font-mono font-bold text-emerald-400">${data.acceptStates.join(', ')}</span></div>
        <div><span class="text-slate-400 block text-xs">Alphabet Rules Set</span><span class="font-mono font-bold text-amber-400">{ ${data.alphabet.join(', ')} }</span></div>
    `;
    document.getElementById('cfg-rules').textContent = data.cfg;

    const pdaTbody = document.getElementById('pda-table-body');
    pdaTbody.innerHTML = '';
    data.pda.forEach(row => {
        pdaTbody.innerHTML += `
            <tr class="hover:bg-slate-50/80 transition">
                <td class="p-3 font-semibold text-slate-900">${row.curr}</td>
                <td class="p-3 text-amber-600">${row.input}</td>
                <td class="p-3 text-rose-500">${row.pop}</td>
                <td class="p-3 text-indigo-600">${row.next}</td>
                <td class="p-3 text-emerald-600">${row.push}</td>
            </tr>
        `;
    });

    renderSVGGraph();
    renderPDAGraph();
}

// Vector Graphics Engine for DFA Graph Layout
function renderSVGGraph(activeState = null, activeTransition = null) {
    const data = automataData[currentAlphabet];
    const container = document.getElementById('canvas-container');
    if (!container) return;
    
    const viewWidth = 840;
    const viewHeight = currentAlphabet === 'ab' ? 400 : 540;
    const nodeRadius = 20;

    let svgHtml = `<svg width="${viewWidth}" height="${viewHeight}" viewBox="0 0 ${viewWidth} ${viewHeight}" class="mx-auto">`;
    
    svgHtml += `
        <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#475569" />
            </marker>
            <marker id="arrow-active" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
            </marker>
        </defs>
    `;

    Object.keys(data.transitions).forEach(src => {
        Object.keys(data.transitions[src]).forEach(sym => {
            const dest = data.transitions[src][sym];
            if (!data.nodes[src] || !data.nodes[dest]) return;

            const nSrc = data.nodes[src];
            const nDest = data.nodes[dest];
            
            let isActiveTransition = false;
            if (activeTransition && 
                activeTransition.src === src && 
                activeTransition.dest === dest && 
                activeTransition.sym === sym) {
                isActiveTransition = true;
            }

            const strokeColor = isActiveTransition ? '#10b981' : '#475569';
            const strokeWidth = isActiveTransition ? '3' : '1.5';
            const markerId = isActiveTransition ? 'url(#arrow-active)' : 'url(#arrow)';

            if (src === dest) {
                svgHtml += `
                    <path d="M ${nSrc.x - 6} ${nSrc.y - 19} C ${nSrc.x - 25} ${nSrc.y - 50}, ${nSrc.x + 25} ${nSrc.y - 50}, ${nSrc.x + 6} ${nSrc.y - 19}" 
                          fill="none" stroke="${strokeColor}" stroke-width="${strokeWidth}" marker-end="${markerId}" />
                    <text x="${nSrc.x}" y="${nSrc.y - 44}" fill="${isActiveTransition ? '#34d399' : '#94a3b8'}" font-size="11" text-anchor="middle" font-family="monospace" font-weight="bold">${sym}</text>
                `;
            } else {
                const dx = nDest.x - nSrc.x;
                const dy = nDest.y - nSrc.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                const x1 = nSrc.x + (dx / dist) * nodeRadius;
                const y1 = nSrc.y + (dy / dist) * nodeRadius;
                const x2 = nDest.x - (dx / dist) * nodeRadius;
                const y2 = nDest.y - (dy / dist) * nodeRadius;

                let pathD = `M ${x1} ${y1} L ${x2} ${y2}`;
                let textX = (x1 + x2) / 2;
                let textY = (y1 + y2) / 2 - 7;

                const needsCurving = (currentAlphabet === 'ab' && src === 'S7' && dest === 'S10') || 
                                     (currentAlphabet === '01' && src === 'S7' && dest === 'S13') ||
                                     (currentAlphabet === '01' && src === 'S3' && dest === 'S8') ||
                                     (currentAlphabet === '01' && src === 'S10' && dest === 'S14') ||
                                     dist > 220;

                if (needsCurving) {
                    let bendMultiplier = (src === 'S7' && dest === 'S10') ? 55 : 35;
                    if (src === 'S10' && dest === 'S14') bendMultiplier = -65; 
                    
                    const mx = (nSrc.x + nDest.x) / 2;
                    const my = (nSrc.y + nDest.y) / 2;
                    const px = -dy / dist * bendMultiplier;
                    const py = dx / dist * bendMultiplier;
                    
                    pathD = `M ${x1} ${y1} Q ${mx + px} ${my + py} ${x2} ${y2}`;
                    textX = mx + px * 1.2;
                    textY = my + py * 1.2;
                }

                svgHtml += `
                    <path d="${pathD}" fill="none" stroke="${strokeColor}" stroke-width="${strokeWidth}" marker-end="${markerId}" />
                    <text x="${textX}" y="${textY}" fill="${isActiveTransition ? '#34d399' : '#cbd5e1'}" font-size="11" text-anchor="middle" font-family="monospace" font-weight="bold">${sym}</text>
                `;
            }
        });
    });

    Object.keys(data.nodes).forEach(nodeId => {
        const node = data.nodes[nodeId];
        const isAccept = data.acceptStates.includes(nodeId);
        const isStart = nodeId === data.startState;
        const isActiveNode = activeState === nodeId;

        let fillStyle = isActiveNode ? '#064e3b' : '#1e293b';
        let strokeStyle = isActiveNode ? '#10b981' : (isAccept ? '#10b981' : '#475569');
        let textColor = isActiveNode ? '#ffffff' : '#f8fafc';

        svgHtml += `
            <circle cx="${node.x}" cy="${node.y}" r="${nodeRadius}" fill="${fillStyle}" stroke="${strokeStyle}" stroke-width="${isActiveNode ? 3 : 2}" />
        `;

        if (isAccept) {
            svgHtml += `
                <circle cx="${node.x}" cy="${node.y}" r="16" fill="none" stroke="${strokeStyle}" stroke-width="1.2" />
            `;
            svgHtml += `<text x="${node.x}" y="${node.y - 8}" fill="${textColor}" font-size="9" text-anchor="middle">+</text>`;
        }

        svgHtml += `
            <text x="${node.x}" y="${isAccept ? node.y + 5 : node.y + 4}" fill="${textColor}" font-size="11" font-weight="bold" text-anchor="middle" font-family="monospace">${nodeId}</text>
        `;

        if (isStart) {
            svgHtml += `<text x="${node.x}" y="${node.y - 24}" fill="${isActiveNode ? '#34d399' : '#6366f1'}" font-size="9" font-weight="bold" text-anchor="middle">START</text>`;
        }
    });

    svgHtml += `</svg>`;
    container.innerHTML = svgHtml;
}

// Sipser Formal Architecture Flowchart Rendering Engine for the PDA View Canvas
function renderPDAGraph() {
    const data = automataData[currentAlphabet];
    const container = document.getElementById('pda-canvas-container');
    if (!container) return;

    const viewWidth = 840;
    const viewHeight = 480;

    let pdaSvgHtml = `<svg width="${viewWidth}" height="${viewHeight}" viewBox="0 0 ${viewWidth} ${viewHeight}" class="mx-auto">`;
    
    pdaSvgHtml += `
        <defs>
            <marker id="pda-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#475569" />
            </marker>
        </defs>
    `;

    data.pdaLines.forEach(line => {
        const fromBlock = data.pdaBlocks.find(b => b.id === line.from);
        const toBlock = data.pdaBlocks.find(b => b.id === line.to);
        
        if (!fromBlock || !toBlock) return;

        const getSideCoord = (block, side) => {
            if (block.type === 'rect') {
                if (side === 'top') return { x: block.x + block.w / 2, y: block.y };
                if (side === 'bottom') return { x: block.x + block.w / 2, y: block.y + block.h };
                if (side === 'left') return { x: block.x, y: block.y + block.h / 2 };
                if (side === 'right') return { x: block.x + block.w, y: block.y + block.h / 2 };
            } else if (block.type === 'diamond') {
                if (side === 'top') return { x: block.x, y: block.y - block.h / 2 };
                if (side === 'bottom') return { x: block.x, y: block.y + block.h / 2 };
                if (side === 'left') return { x: block.x - block.w / 2, y: block.y };
                if (side === 'right') return { x: block.x + block.w / 2, y: block.y };
                if (side === 'topLeft') return { x: block.x - block.w / 4, y: block.y - block.h / 4 };
            }
            return { x: block.x, y: block.y };
        };

        const p1 = getSideCoord(fromBlock, line.sideFrom);
        const p2 = getSideCoord(toBlock, line.sideTo);
        
        let pathD = line.isCustomPath ? line.path : `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`;

        pdaSvgHtml += `
            <path d="${pathD}" fill="none" stroke="#475569" stroke-width="2" marker-end="url(#pda-arrow)" stroke-dasharray="${line.label === 'ε' ? '4 4' : 'none'}" />
        `;

        if (line.label) {
            let tx = (p1.x + p2.x) / 2;
            let ty = (p1.y + p2.y) / 2 - 8;
            if (line.isCustomPath) {
                tx = p1.x + (line.sideFrom === 'left' ? -15 : 15);
                ty = p1.y - 8;
            }
            pdaSvgHtml += `
                <text x="${tx}" y="${ty}" fill="#f59e0b" font-size="12" font-family="monospace" font-weight="bold" text-anchor="middle">${line.label}</text>
            `;
        }
    });

    data.pdaBlocks.forEach(block => {
        if (block.type === 'rect') {
            let strokeColor = '#475569';
            let fillColor = '#1e293b';
            if (block.label === 'Accept') { strokeColor = '#10b981'; fillColor = '#064e3b'; }
            if (block.label === 'Reject') { strokeColor = '#f43f5e'; fillColor = '#4c0519'; }

            pdaSvgHtml += `
                <rect x="${block.x}" y="${block.y}" width="${block.w}" height="${block.h}" rx="6" fill="${fillColor}" stroke="${strokeColor}" stroke-width="2" />
                <text x="${block.x + block.w / 2}" y="${block.y + block.h / 2 + 4}" fill="#f8fafc" font-size="12" font-weight="semibold" font-family="sans-serif" text-anchor="middle">${block.label}</text>
            `;
        } else if (block.type === 'diamond') {
            const points = `${block.x},${block.y - block.h / 2} ${block.x + block.w / 2},${block.y} ${block.x},${block.y + block.h / 2} ${block.x - block.w / 2},${block.y}`;
            
            pdaSvgHtml += `
                <polygon points="${points}" fill="#0f172a" stroke="#6366f1" stroke-width="2" />
                <text x="${block.x}" y="${block.y + 4}" fill="#f8fafc" font-size="12" font-weight="semibold" font-family="sans-serif" text-anchor="middle">${block.label}</text>
            `;
        }
    });

    pdaSvgHtml += `</svg>`;
    container.innerHTML = pdaSvgHtml;
}

function clearAllInputs() {
    if (activeAnimationTimeout) clearInterval(activeAnimationTimeout);
    for(let i = 0; i < 10; i++) {
        document.getElementById(`input-${i}`).value = '';
        document.getElementById(`badge-${i}`).innerHTML = '';
        document.getElementById(`path-${i}`).innerText = '';
    }
    renderSVGGraph();
}

// FIXED: Immediately abort and terminate loop parsing when a transition lands inside a Trap state node
function validateSingle(index, onCompleteCallback = null) {
    if (activeAnimationTimeout) clearInterval(activeAnimationTimeout);
    
    const inputVal = document.getElementById(`input-${index}`).value.trim();
    const badge = document.getElementById(`badge-${index}`);
    const pathDisplay = document.getElementById(`path-${index}`);
    
    if (inputVal === '') {
        badge.innerHTML = '<span class="inline-flex text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">Empty Input</span>';
        pathDisplay.innerText = '';
        if(onCompleteCallback) onCompleteCallback();
        return;
    }

    const machine = automataData[currentAlphabet];
    let currentState = machine.startState;
    
    let animationFrames = [];
    animationFrames.push({ node: currentState, transition: null });

    let isValid = true;
    let fullPathTraceString = [currentState];

    for (let i = 0; i < inputVal.length; i++) {
        const char = inputVal[i];
        
        if (!machine.alphabet.includes(char)) {
            isValid = false;
            fullPathTraceString.push(`[Invalid: '${char}']`);
            break;
        }

        if (machine.transitions[currentState] && machine.transitions[currentState][char]) {
            const nextState = machine.transitions[currentState][char];
            
            animationFrames.push({
                node: nextState,
                transition: { src: currentState, dest: nextState, sym: char }
            });
            
            currentState = nextState;
            fullPathTraceString.push(currentState);

            // IMMEDIATE TERMINATION CORE LOGIC: Break out immediately upon hitting dead ends
            if (currentState === 'T' || currentState === 'Trap') {
                isValid = false;
                break; 
            }
        } else {
            isValid = false;
            fullPathTraceString.push('T'); // Default to designated system trap identifier
            break;
        }
    }

    const isAccepted = isValid && machine.acceptStates.includes(currentState);
    pathDisplay.innerText = "Processing Sequence Path Tracing...";

    let currentFrameIndex = 0;
    
    activeAnimationTimeout = setInterval(() => {
        if (currentFrameIndex >= animationFrames.length) {
            clearInterval(activeAnimationTimeout);
            
            if (isAccepted) {
                badge.innerHTML = '<span class="inline-flex items-center text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 ring-1 ring-inset ring-emerald-500/20">✓ Valid String</span>';
            } else {
                badge.innerHTML = '<span class="inline-flex items-center text-xs font-bold px-2.5 py-1 rounded-md bg-rose-500/10 text-rose-400 ring-1 ring-inset ring-rose-500/20">✗ Invalid String</span>';
            }
            pathDisplay.innerText = "Path: " + fullPathTraceString.join(" → ");
            
            if (currentTab === 'dfa') {
                renderSVGGraph(currentState, null);
            }
            
            if (onCompleteCallback) onCompleteCallback();
            return;
        }

        const frame = animationFrames[currentFrameIndex];
        if (currentTab === 'dfa') {
            renderSVGGraph(frame.node, frame.transition);
        }
        
        currentFrameIndex++;
    }, 750);
}

function validateAll() {
    let rowIndex = 0;
    
    function runNextRowChain() {
        if (rowIndex >= 10) return;
        const val = document.getElementById(`input-${rowIndex}`).value.trim();
        if (val !== '') {
            validateSingle(rowIndex, () => {
                rowIndex++;
                setTimeout(runNextRowChain, 500); 
            });
        } else {
            rowIndex++;
            runNextRowChain();
        }
    }
    
    runNextRowChain();
}