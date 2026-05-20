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
            'S1':  { x: 180, y: 90  },
            'S2':  { x: 180, y: 310 },
            'T':   { x: 300, y: 200 },
            'S3':  { x: 420, y: 200 },
            'S4':  { x: 540, y: 90  },
            'S5':  { x: 540, y: 310 },
            'S6':  { x: 660, y: 90  },
            'S7':  { x: 660, y: 310 },
            'S8':  { x: 780, y: 90  },
            'S9':  { x: 780, y: 310 },
            'S10': { x: 880, y: 200 }
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
            'S0':  { x: 50,  y: 240 },
            'S1':  { x: 160, y: 120 },
            'S2':  { x: 160, y: 360 },
            'S3':  { x: 280, y: 70  },
            'S4':  { x: 280, y: 190 },
            'S5':  { x: 280, y: 300 },
            'S6':  { x: 280, y: 420 },
            'S7':  { x: 420, y: 70  },
            'S8':  { x: 420, y: 230 },
            'S11': { x: 420, y: 420 },
            'S12': { x: 560, y: 70  },
            'S9':  { x: 560, y: 230 },
            'S10': { x: 560, y: 350 },
            'S15': { x: 680, y: 70  },
            'S13': { x: 680, y: 230 },
            'S14': { x: 800, y: 230 }
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
let testRowIds = [];
let nextRowId = 0;

let graphBaseViewBox = null;
let graphViewBox = null;
let graphZoomLevel = 1;

let activeTrace = {
    frames: [],
    index: 0,
    playing: false
};

const TRACE_HIGHLIGHT = { fill: '#78350f', stroke: '#f59e0b', edge: '#fbbf24', text: '#ffffff' };

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    addTestRow();
    updateWorkspace();
    bindGlobalEvents();
});

function bindGlobalEvents() {
    document.getElementById('btn-ab').addEventListener('click', () => switchAlphabet('ab'));
    document.getElementById('btn-01').addEventListener('click', () => switchAlphabet('01'));
    document.getElementById('tab-dfa').addEventListener('click', () => switchTab('dfa'));
    document.getElementById('tab-cfg').addEventListener('click', () => switchTab('cfg'));
    document.getElementById('tab-pda').addEventListener('click', () => switchTab('pda'));
    document.getElementById('btn-theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('btn-add-row').addEventListener('click', addTestRow);
    document.getElementById('btn-clear-all').addEventListener('click', clearAllTestRows);
    document.getElementById('btn-zoom-in').addEventListener('click', () => adjustGraphZoom(1.2));
    document.getElementById('btn-zoom-out').addEventListener('click', () => adjustGraphZoom(1 / 1.2));
    document.getElementById('btn-zoom-reset').addEventListener('click', () => fitGraphToView());
    document.getElementById('btn-trace-prev').addEventListener('click', () => stepTrace(-1));
    document.getElementById('btn-trace-next').addEventListener('click', () => stepTrace(1));
    document.getElementById('btn-trace-play').addEventListener('click', playTraceAnimation);

    const canvasContainer = document.getElementById('canvas-container');
    canvasContainer.addEventListener('mousemove', onGraphMouseMove);
    canvasContainer.addEventListener('mouseleave', hideGraphTooltip);
}

function initTheme() {
    const saved = localStorage.getItem('automatalab-theme');
    const theme = saved === 'dark' ? 'dark' : 'light';
    applyTheme(theme, false);
}

function toggleTheme() {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next, true);
}

function applyTheme(theme, persist) {
    document.documentElement.setAttribute('data-theme', theme);
    const isDark = theme === 'dark';
    document.getElementById('theme-icon-light').classList.toggle('hidden', isDark);
    document.getElementById('theme-icon-dark').classList.toggle('hidden', !isDark);
    document.getElementById('theme-label').textContent = isDark ? 'Light' : 'Dark';
    if (persist) localStorage.setItem('automatalab-theme', theme);
    if (currentTab === 'dfa') renderSVGGraph(getTraceFrameState());
    if (currentTab === 'pda') renderPDAGraph();
}

function getTraceFrameState() {
    if (!activeTrace.frames.length) return { activeState: null, activeTransition: null };
    const frame = activeTrace.frames[activeTrace.index];
    return { activeState: frame.node, activeTransition: frame.transition };
}

function addTestRow() {
    const id = nextRowId++;
    testRowIds.push(id);
    renderTestRows();
    updateClearAllVisibility();
    const input = document.getElementById(`input-${id}`);
    if (input) input.focus();
}

function removeTestRow(id) {
    if (testRowIds.length <= 1) {
        clearRowResult(id);
        const input = document.getElementById(`input-${id}`);
        if (input) input.value = '';
        return;
    }
    testRowIds = testRowIds.filter(rid => rid !== id);
    renderTestRows();
    updateClearAllVisibility();
}

function renderTestRows() {
    const container = document.getElementById('matrix-rows');
    container.innerHTML = '';
    testRowIds.forEach(id => {
        const canRemove = testRowIds.length > 1;
        container.innerHTML += `
            <div class="test-row" data-row-id="${id}">
                <input type="text" id="input-${id}" placeholder="Enter test string…" class="test-row-input focus-ring" autocomplete="off" />
                <button type="button" id="action-validate-${id}" class="btn-validate focus-ring">Validate</button>
                <div class="result-cell flex flex-col justify-center min-w-0">
                    <div id="badge-${id}"></div>
                    <div id="detail-${id}" class="result-detail"></motion>
                </motion>
                ${canRemove ? `<button type="button" id="remove-${id}" class="btn-remove-row focus-ring" aria-label="Remove test case">×</button>` : '<span></span>'}
            </motion>
        `;
    });

    testRowIds.forEach(id => {
        document.getElementById(`action-validate-${id}`).addEventListener('click', () => validateSingle(id));
        const removeBtn = document.getElementById(`remove-${id}`);
        if (removeBtn) removeBtn.addEventListener('click', () => removeTestRow(id));
        const input = document.getElementById(`input-${id}`);
        input.addEventListener('keydown', e => {
            if (e.key === 'Enter') validateSingle(id);
        });
    });
}

function updateClearAllVisibility() {
    const btn = document.getElementById('btn-clear-all');
    btn.classList.toggle('hidden', testRowIds.length <= 1);
}

function clearRowResult(id) {
    const badge = document.getElementById(`badge-${id}`);
    const detail = document.getElementById(`detail-${id}`);
    if (badge) badge.innerHTML = '';
    if (detail) detail.textContent = '';
}

function clearAllTestRows() {
    if (activeAnimationTimeout) clearInterval(activeAnimationTimeout);
    stopTrace();
    testRowIds = [];
    nextRowId = 0;
    addTestRow();
    renderSVGGraph();
}

function switchAlphabet(type) {
    currentAlphabet = type;
    document.getElementById('btn-ab').classList.toggle('alphabet-btn-active', type === 'ab');
    document.getElementById('btn-01').classList.toggle('alphabet-btn-active', type === '01');

    if (activeAnimationTimeout) clearInterval(activeAnimationTimeout);
    stopTrace();
    testRowIds.forEach(id => {
        const input = document.getElementById(`input-${id}`);
        if (input) input.value = '';
        clearRowResult(id);
    });
    graphZoomLevel = 1;
    updateWorkspace();
}

function switchTab(tabName) {
    currentTab = tabName;
    ['dfa', 'cfg', 'pda'].forEach(t => {
        const tabBtn = document.getElementById(`tab-${t}`);
        const view = document.getElementById(`view-${t}`);
        const active = t === tabName;
        tabBtn.classList.toggle('tab-btn-active', active);
        tabBtn.setAttribute('aria-selected', active ? 'true' : 'false');
        view.classList.toggle('hidden', !active);
    });
    if (tabName === 'dfa') {
        renderSVGGraph(getTraceFrameState());
        fitGraphToView();
    }
    if (tabName === 'pda') renderPDAGraph();
}

function updateWorkspace() {
    const data = automataData[currentAlphabet];
    document.getElementById('regex-display').innerText = data.regex;
    document.getElementById('sidebar-meta').innerHTML = `
        <div><span class="app-muted block text-xs">Start State</span><span class="font-mono font-bold">${data.startState}</span></motion>
        <div><span class="app-muted block text-xs">Accepting Set</span><span class="font-mono font-bold" style="color: var(--cfg-code-text)">${data.acceptStates.join(', ')}</span></motion>
        <div><span class="app-muted block text-xs">Alphabet</span><span class="font-mono font-bold">{ ${data.alphabet.join(', ')} }</span></motion>
    `.replace(/<\/motion>/g, '</motion>').replace(/<\/motion>/g, '</div>');

    const hasCfg = !!(data.cfg && data.cfg.trim());
    document.getElementById('cfg-empty').classList.toggle('hidden', hasCfg);
    document.getElementById('cfg-content').classList.toggle('hidden', !hasCfg);
    if (hasCfg) document.getElementById('cfg-rules').textContent = data.cfg;

    const hasPda = Array.isArray(data.pda) && data.pda.length > 0;
    document.getElementById('pda-empty').classList.toggle('hidden', hasPda);
    document.getElementById('pda-content').classList.toggle('hidden', !hasPda);

    const pdaTbody = document.getElementById('pda-table-body');
    pdaTbody.innerHTML = '';
    if (hasPda) {
        data.pda.forEach(row => {
            pdaTbody.innerHTML += `
                <tr class="transition-ui">
                    <td class="p-3 font-semibold">${row.curr}</td>
                    <td class="p-3" style="color:#d97706">${row.input}</td>
                    <td class="p-3" style="color:#f43f5e">${row.pop}</td>
                    <td class="p-3" style="color:#6366f1">${row.next}</td>
                    <td class="p-3" style="color:#10b981">${row.push}</td>
                </tr>
            `;
        });
    }

    computeGraphBaseViewBox();
    renderSVGGraph();
    renderPDAGraph();
    requestAnimationFrame(() => fitGraphToView());
}

function computeGraphBaseViewBox() {
    const data = automataData[currentAlphabet];
    const nodes = Object.values(data.nodes);
    const padding = 55;
    const minX = Math.min(...nodes.map(n => n.x)) - padding - 25;
    const minY = Math.min(...nodes.map(n => n.y)) - padding - 30;
    const maxX = Math.max(...nodes.map(n => n.x)) + padding + 25;
    const maxY = Math.max(...nodes.map(n => n.y)) + padding + 30;
    graphBaseViewBox = { x: minX, y: minY, w: maxX - minX, h: maxY - minY };
    graphViewBox = { ...graphBaseViewBox };
    graphZoomLevel = 1;
}

function getEffectiveViewBox() {
    if (!graphViewBox) computeGraphBaseViewBox();
    const cx = graphViewBox.x + graphViewBox.w / 2;
    const cy = graphViewBox.y + graphViewBox.h / 2;
    const w = graphViewBox.w / graphZoomLevel;
    const h = graphViewBox.h / graphZoomLevel;
    return {
        x: cx - w / 2,
        y: cy - h / 2,
        w,
        h
    };
}

function fitGraphToView() {
    computeGraphBaseViewBox();
    graphZoomLevel = 1;
    renderSVGGraph(getTraceFrameState());
}

function adjustGraphZoom(factor) {
    graphZoomLevel = Math.min(4, Math.max(0.35, graphZoomLevel * factor));
    renderSVGGraph(getTraceFrameState());
}

function isTrapState(nodeId) {
    return nodeId === 'T' || nodeId === 'Trap';
}

function getGraphTheme() {
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    return {
        nodeFill: dark ? '#1e293b' : '#ffffff',
        nodeStroke: dark ? '#64748b' : '#64748b',
        acceptStroke: '#10b981',
        trapFill: dark ? '#4c0519' : '#fff1f2',
        trapStroke: '#f43f5e',
        edge: dark ? '#94a3b8' : '#64748b',
        label: dark ? '#cbd5e1' : '#475569',
        text: dark ? '#f8fafc' : '#0f172a',
        startLabel: '#6366f1'
    };
}

function renderSVGGraph({ activeState = null, activeTransition = null } = {}) {
    const data = automataData[currentAlphabet];
    const container = document.getElementById('canvas-container');
    if (!container) return;

    const viewWidth = 940;
    const viewHeight = currentAlphabet === 'ab' ? 420 : 500;
    const nodeRadius = 20;
    const theme = getGraphTheme();
    const vb = getEffectiveViewBox();
    const viewBoxStr = `${vb.x} ${vb.y} ${vb.w} ${vb.h}`;

    let svgHtml = `<svg width="100%" height="${viewHeight}" viewBox="${viewBoxStr}" preserveAspectRatio="xMidYMid meet" class="mx-auto dfa-graph-svg">`;

    svgHtml += `
        <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="${theme.edge}" />
            </marker>
            <marker id="arrow-trace" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="${TRACE_HIGHLIGHT.edge}" />
            </marker>
        </defs>
    `;

    Object.keys(data.transitions).forEach(src => {
        Object.keys(data.transitions[src]).forEach(sym => {
            const dest = data.transitions[src][sym];
            if (!data.nodes[src] || !data.nodes[dest]) return;

            const nSrc = data.nodes[src];
            const nDest = data.nodes[dest];

            const isActiveTransition = activeTransition &&
                activeTransition.src === src &&
                activeTransition.dest === dest &&
                activeTransition.sym === sym;

            const strokeColor = isActiveTransition ? TRACE_HIGHLIGHT.edge : theme.edge;
            const strokeWidth = isActiveTransition ? '3' : '1.5';
            const markerId = isActiveTransition ? 'url(#arrow-trace)' : 'url(#arrow)';

            if (src === dest) {
                svgHtml += `
                    <path d="M ${nSrc.x - 6} ${nSrc.y - 19} C ${nSrc.x - 25} ${nSrc.y - 50}, ${nSrc.x + 25} ${nSrc.y - 50}, ${nSrc.x + 6} ${nSrc.y - 19}"
                          fill="none" stroke="${strokeColor}" stroke-width="${strokeWidth}" marker-end="${markerId}" />
                    <text class="graph-label" x="${nSrc.x}" y="${nSrc.y - 44}" fill="${isActiveTransition ? TRACE_HIGHLIGHT.edge : theme.label}" font-size="11" text-anchor="middle" font-family="monospace" font-weight="bold">${sym}</text>
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

                const isOverlappingLoop = (currentAlphabet === 'ab' && ((src === 'S8' && dest === 'S9') || (src === 'S9' && dest === 'S10') || (src === 'S10' && dest === 'S8'))) ||
                    (currentAlphabet === '01' && ((src === 'S7' && dest === 'S13') || (src === 'S13' && dest === 'S9') || (src === 'S9' && dest === 'S13') || (src === 'S6' && dest === 'S5') || (src === 'S5' && dest === 'S10')));

                if (isOverlappingLoop || dist > 180) {
                    let bendMultiplier = 40;
                    if (src === 'S9' && dest === 'S13') bendMultiplier = -40;
                    if (src === 'S10' && dest === 'S8') bendMultiplier = -60;

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
                    <text class="graph-label" x="${textX}" y="${textY}" fill="${isActiveTransition ? TRACE_HIGHLIGHT.edge : theme.label}" font-size="11" text-anchor="middle" font-family="monospace" font-weight="bold">${sym}</text>
                `;
            }
        });
    });

    Object.keys(data.nodes).forEach(nodeId => {
        const node = data.nodes[nodeId];
        const isAccept = data.acceptStates.includes(nodeId);
        const isStart = nodeId === data.startState;
        const isActiveNode = activeState === nodeId;
        const isTrap = isTrapState(nodeId);

        let fillStyle = isActiveNode ? TRACE_HIGHLIGHT.fill : (isTrap ? theme.trapFill : theme.nodeFill);
        let strokeStyle = isActiveNode ? TRACE_HIGHLIGHT.stroke : (isAccept ? theme.acceptStroke : (isTrap ? theme.trapStroke : theme.nodeStroke));
        let textColor = isActiveNode ? TRACE_HIGHLIGHT.text : theme.text;

        const tooltipLines = getStateTransitionTooltip(data, nodeId);

        if (isStart) {
            const ax = node.x - nodeRadius - 28;
            const ay = node.y;
            svgHtml += `
                <line x1="${ax}" y1="${ay}" x2="${node.x - nodeRadius - 2}" y2="${ay}" stroke="${isActiveNode ? TRACE_HIGHLIGHT.stroke : theme.startLabel}" stroke-width="1.5" marker-end="url(#arrow)" />
            `;
        }

        svgHtml += `
            <g class="graph-node-group" data-node="${nodeId}" data-tooltip="${escapeHtmlAttr(tooltipLines)}">
                <circle class="graph-node-hit" cx="${node.x}" cy="${node.y}" r="${nodeRadius + 4}" fill="transparent" stroke="none" />
                <circle cx="${node.x}" cy="${node.y}" r="${nodeRadius}" fill="${fillStyle}" stroke="${strokeStyle}" stroke-width="${isActiveNode ? 3 : 2}" />
        `;

        if (isAccept) {
            svgHtml += `<circle cx="${node.x}" cy="${node.y}" r="16" fill="none" stroke="${strokeStyle}" stroke-width="1.2" />`;
        }

        const label = isTrap ? 'T' : nodeId;
        const labelY = isAccept ? node.y + 5 : node.y + 4;
        svgHtml += `
                <text class="graph-label" x="${node.x}" y="${labelY}" fill="${textColor}" font-size="11" font-weight="bold" text-anchor="middle" font-family="monospace">${label}</text>
            </g>
        `;

        if (isStart) {
            svgHtml += `<text class="graph-label" x="${node.x}" y="${node.y - 24}" fill="${isActiveNode ? TRACE_HIGHLIGHT.edge : theme.startLabel}" font-size="9" font-weight="bold" text-anchor="middle">START</text>`;
        }
    });

    svgHtml += `</svg>`;
    container.innerHTML = svgHtml;
}

function escapeHtmlAttr(str) {
    return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function getStateTransitionTooltip(data, nodeId) {
    const trans = data.transitions[nodeId];
    if (!trans || !Object.keys(trans).length) return `${nodeId}: (no outgoing transitions)`;
    const parts = Object.keys(trans).map(sym => `on ${sym} → ${trans[sym]}`);
    return `${nodeId}: ${parts.join(', ')}`;
}

function onGraphMouseMove(e) {
    const target = e.target.closest('[data-tooltip]');
    const tooltip = document.getElementById('graph-tooltip');
    const panel = document.querySelector('.graph-panel');
    if (!target || !tooltip || !panel) {
        hideGraphTooltip();
        return;
    }
    const text = target.getAttribute('data-tooltip');
    tooltip.textContent = text;
    tooltip.classList.remove('hidden');
    const panelRect = panel.getBoundingClientRect();
    tooltip.style.left = `${e.clientX - panelRect.left + 12}px`;
    tooltip.style.top = `${e.clientY - panelRect.top + 12}px`;
}

function hideGraphTooltip() {
    const tooltip = document.getElementById('graph-tooltip');
    if (tooltip) tooltip.classList.add('hidden');
}

function renderPDAGraph() {
    const data = automataData[currentAlphabet];
    const container = document.getElementById('pda-canvas-container');
    if (!container) return;

    const viewWidth = 840;
    const viewHeight = 480;
    const theme = getGraphTheme();

    let pdaSvgHtml = `<svg width="100%" height="${viewHeight}" viewBox="0 0 ${viewWidth} ${viewHeight}" preserveAspectRatio="xMidYMid meet" class="mx-auto">`;

    pdaSvgHtml += `
        <defs>
            <marker id="pda-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="${theme.edge}" />
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
        const pathD = line.isCustomPath ? line.path : `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`;

        pdaSvgHtml += `<path d="${pathD}" fill="none" stroke="${theme.edge}" stroke-width="2" marker-end="url(#pda-arrow)" stroke-dasharray="${line.label === 'ε' ? '4 4' : 'none'}" />`;

        if (line.label) {
            let tx = (p1.x + p2.x) / 2;
            let ty = (p1.y + p2.y) / 2 - 8;
            if (line.isCustomPath) {
                tx = p1.x + (line.sideFrom === 'left' ? -15 : 15);
                ty = p1.y - 8;
            }
            pdaSvgHtml += `<text class="graph-label" x="${tx}" y="${ty}" fill="#d97706" font-size="12" font-family="monospace" font-weight="bold" text-anchor="middle">${line.label}</text>`;
        }
    });

    data.pdaBlocks.forEach(block => {
        if (block.type === 'rect') {
            let strokeColor = theme.nodeStroke;
            let fillColor = theme.nodeFill;
            if (block.label === 'Accept') { strokeColor = theme.acceptStroke; fillColor = document.documentElement.getAttribute('data-theme') === 'dark' ? '#064e3b' : '#ecfdf5'; }
            if (block.label === 'Reject') { strokeColor = theme.trapStroke; fillColor = theme.trapFill; }

            pdaSvgHtml += `
                <rect x="${block.x}" y="${block.y}" width="${block.w}" height="${block.h}" rx="6" fill="${fillColor}" stroke="${strokeColor}" stroke-width="2" />
                <text class="graph-label" x="${block.x + block.w / 2}" y="${block.y + block.h / 2 + 4}" fill="${theme.text}" font-size="12" font-weight="semibold" font-family="sans-serif" text-anchor="middle">${block.label}</text>
            `;
        } else if (block.type === 'diamond') {
            const points = `${block.x},${block.y - block.h / 2} ${block.x + block.w / 2},${block.y} ${block.x},${block.y + block.h / 2} ${block.x - block.w / 2},${block.y}`;
            pdaSvgHtml += `
                <polygon points="${points}" fill="${theme.nodeFill}" stroke="${theme.startLabel}" stroke-width="2" />
                <text class="graph-label" x="${block.x}" y="${block.y + 4}" fill="${theme.text}" font-size="12" font-weight="semibold" font-family="sans-serif" text-anchor="middle">${block.label}</text>
            `;
        }
    });

    pdaSvgHtml += `</svg>`;
    container.innerHTML = pdaSvgHtml;
}

function simulateDFA(inputVal) {
    const machine = automataData[currentAlphabet];
    let currentState = machine.startState;
    const animationFrames = [{ node: currentState, transition: null }];
    const pathStates = [currentState];
    let isValid = true;
    let rejectAt = null;
    let invalidChar = null;

    for (let i = 0; i < inputVal.length; i++) {
        const char = inputVal[i];
        if (!machine.alphabet.includes(char)) {
            isValid = false;
            invalidChar = char;
            break;
        }
        if (machine.transitions[currentState] && machine.transitions[currentState][char]) {
            const nextState = machine.transitions[currentState][char];
            animationFrames.push({
                node: nextState,
                transition: { src: currentState, dest: nextState, sym: char }
            });
            currentState = nextState;
            pathStates.push(currentState);
            if (isTrapState(currentState)) {
                isValid = false;
                rejectAt = currentState;
                break;
            }
        } else {
            isValid = false;
            rejectAt = currentState;
            pathStates.push('T');
            break;
        }
    }

    const isAccepted = isValid && machine.acceptStates.includes(currentState);
    if (!isAccepted && !rejectAt && !invalidChar) {
        rejectAt = currentState;
    }

    return {
        animationFrames,
        pathStates,
        finalState: currentState,
        isAccepted,
        rejectAt,
        invalidChar,
        pathString: pathStates.join(' → ')
    };
}

function validateSingle(rowId) {
    if (activeAnimationTimeout) clearInterval(activeAnimationTimeout);
    stopTrace({ keepControls: false });

    const inputEl = document.getElementById(`input-${rowId}`);
    const badge = document.getElementById(`badge-${rowId}`);
    const detail = document.getElementById(`detail-${rowId}`);
    const validateBtn = document.getElementById(`action-validate-${rowId}`);
    const inputVal = inputEl.value.trim();

    if (inputVal === '') {
        badge.innerHTML = '<span class="result-badge" style="opacity:0.7">Empty</span>';
        detail.textContent = '';
        return;
    }

    validateBtn.disabled = true;
    badge.innerHTML = '<span class="result-badge"><span class="spinner"></span>Validating…</span>';
    detail.textContent = '';

    setTimeout(() => {
        const result = simulateDFA(inputVal);
        validateBtn.disabled = false;

        if (result.isAccepted) {
            badge.innerHTML = '<span class="result-badge result-badge-accepted">✓ Accepted</span>';
            detail.textContent = `Path: ${result.pathString}`;
        } else {
            badge.innerHTML = '<span class="result-badge result-badge-rejected">✗ Rejected</span>';
            if (result.invalidChar !== null) {
                detail.textContent = `Invalid symbol '${result.invalidChar}'`;
            } else {
                const stateLabel = result.rejectAt || result.finalState;
                detail.textContent = `Rejected at ${stateLabel}`;
            }
        }

        activeTrace.frames = result.animationFrames;
        activeTrace.index = 0;
        showTraceControls();
        renderTraceStep();

        if (currentTab === 'dfa') {
            playTraceAnimation();
        }
    }, 280);
}

function showTraceControls() {
    const controls = document.getElementById('trace-controls');
    controls.classList.remove('hidden');
    updateTraceControlsUI();
}

function stopTrace({ keepControls = true } = {}) {
    if (activeAnimationTimeout) clearInterval(activeAnimationTimeout);
    activeAnimationTimeout = null;
    activeTrace.playing = false;
    if (!keepControls) {
        document.getElementById('trace-controls').classList.add('hidden');
        activeTrace.frames = [];
        activeTrace.index = 0;
    }
}

function updateTraceControlsUI() {
    const total = activeTrace.frames.length;
    const idx = activeTrace.index;
    document.getElementById('trace-step-label').textContent =
        total ? `Step ${idx + 1} / ${total}` : 'Step 0 / 0';
    document.getElementById('btn-trace-prev').disabled = idx <= 0;
    document.getElementById('btn-trace-next').disabled = idx >= total - 1;
    document.getElementById('btn-trace-play').textContent = activeTrace.playing ? '⏸ Pause' : '▶ Play';
}

function renderTraceStep() {
    updateTraceControlsUI();
    if (currentTab === 'dfa') {
        renderSVGGraph(getTraceFrameState());
    }
}

function stepTrace(delta) {
    if (activeAnimationTimeout) clearInterval(activeAnimationTimeout);
    activeTrace.playing = false;
    const next = activeTrace.index + delta;
    if (next < 0 || next >= activeTrace.frames.length) return;
    activeTrace.index = next;
    renderTraceStep();
}

function playTraceAnimation() {
    if (!activeTrace.frames.length) return;

    if (activeTrace.playing) {
        activeTrace.playing = false;
        if (activeAnimationTimeout) clearInterval(activeAnimationTimeout);
        updateTraceControlsUI();
        return;
    }

    activeTrace.playing = true;
    updateTraceControlsUI();

    activeAnimationTimeout = setInterval(() => {
        if (activeTrace.index >= activeTrace.frames.length - 1) {
            clearInterval(activeAnimationTimeout);
            activeAnimationTimeout = null;
            activeTrace.playing = false;
            updateTraceControlsUI();
            return;
        }
        activeTrace.index++;
        renderTraceStep();
    }, 600);
}

