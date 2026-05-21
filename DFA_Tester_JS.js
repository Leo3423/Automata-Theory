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
        // Refactored Coordinate Map for maximum readability on Alphabet {a, b}
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
            { curr: 'Start', input: 'Δ', pop: 'Z0', next: 'S0', push: 'Z0' },
            { curr: 'S0', input: 'a', pop: 'Z0', next: 'S1', push: 'Z0' },
            { curr: 'S0', input: 'b', pop: 'Z0', next: 'S2', push: 'Z0' },
            { curr: 'S1', input: 'a', pop: 'Z0', next: 'S3', push: 'Z0' },
            { curr: 'S1', input: 'b', pop: 'Z0', next: 'T', push: 'Z0' },
            { curr: 'S2', input: 'a', pop: 'Z0', next: 'T', push: 'Z0' },
            { curr: 'S2', input: 'b', pop: 'Z0', next: 'S3', push: 'Z0' },
            { curr: 'S3', input: 'a', pop: 'Z0', next: 'S4', push: 'Z0' },
            { curr: 'S3', input: 'b', pop: 'Z0', next: 'S5', push: 'Z0' },
            { curr: 'T', input: 'a,b', pop: 'Z0', next: 'T', push: 'Z0' },
            { curr: 'S4', input: 'a', pop: 'Z0', next: 'S6', push: 'Z0' },
            { curr: 'S4', input: 'b', pop: 'Z0', next: 'S7', push: 'Z0' },
            { curr: 'S5', input: 'a', pop: 'Z0', next: 'S6', push: 'Z0' },
            { curr: 'S5', input: 'b', pop: 'Z0', next: 'S7', push: 'Z0' },
            { curr: 'S6', input: 'a', pop: 'Z0', next: 'S8', push: 'Z0' },
            { curr: 'S6', input: 'b', pop: 'Z0', next: 'S9', push: 'Z0' },
            { curr: 'S7', input: 'a', pop: 'Z0', next: 'S10', push: 'Z0' },
            { curr: 'S7', input: 'b', pop: 'Z0', next: 'S9', push: 'Z0' },
            { curr: 'S8', input: 'a', pop: 'Z0', next: 'S8', push: 'Z0' },
            { curr: 'S8', input: 'b', pop: 'Z0', next: 'S9', push: 'Z0' },
            { curr: 'S9', input: 'a', pop: 'Z0', next: 'S10', push: 'Z0' },
            { curr: 'S9', input: 'b', pop: 'Z0', next: 'S9', push: 'Z0' },
            { curr: 'S10', input: 'a', pop: 'Z0', next: 'S8', push: 'Z0' },
            { curr: 'S10', input: 'b', pop: 'Z0', next: 'S9', push: 'Z0' },
            { curr: 'S8', input: 'Δ', pop: 'Z0', next: 'Accept', push: 'Z0' },
            { curr: 'S9', input: 'Δ', pop: 'Z0', next: 'Accept', push: 'Z0' },
            { curr: 'S10', input: 'Δ', pop: 'Z0', next: 'Accept', push: 'Z0' },
            { curr: 'S9', input: 'empty', pop: 'Z0', next: 'Reject', push: 'Z0' }
        ],
        pdaBlocks: [
            { id: 'Start_rect', type: 'rect', label: 'Start', x: 400, y: 15, w: 70, h: 25 },
            { id: 'Push_rect', type: 'rect', label: 'Push', x: 50, y: 15, w: 70, h: 25 },
            { id: 'S0', type: 'diamond', label: 'READ', x: 400, y: 80, w: 60, h: 40 },
            { id: 'S1', type: 'diamond', label: 'READ', x: 260, y: 150, w: 60, h: 40 },
            { id: 'S2', type: 'diamond', label: 'READ', x: 540, y: 150, w: 60, h: 40 },
            { id: 'S3_L', type: 'diamond', label: 'READ', x: 180, y: 220, w: 50, h: 40 },
            { id: 'S3_R', type: 'diamond', label: 'READ', x: 620, y: 220, w: 50, h: 40 },
            { id: 'S4_L', type: 'diamond', label: 'READ', x: 120, y: 290, w: 50, h: 40 },
            { id: 'S5_L', type: 'diamond', label: 'READ', x: 220, y: 290, w: 50, h: 40 },
            { id: 'S4_R', type: 'diamond', label: 'READ', x: 580, y: 290, w: 50, h: 40 },
            { id: 'S5_R', type: 'diamond', label: 'READ', x: 680, y: 290, w: 50, h: 40 },
            { id: 'S6_L1', type: 'diamond', label: 'READ', x: 70, y: 360, w: 40, h: 40 },
            { id: 'S7_L1', type: 'diamond', label: 'READ', x: 140, y: 360, w: 40, h: 40 },
            { id: 'S6_L2', type: 'diamond', label: 'READ', x: 200, y: 360, w: 40, h: 40 },
            { id: 'S7_L2', type: 'diamond', label: 'READ', x: 270, y: 360, w: 40, h: 40 },
            { id: 'S6_R1', type: 'diamond', label: 'READ', x: 530, y: 360, w: 40, h: 40 },
            { id: 'S7_R1', type: 'diamond', label: 'READ', x: 600, y: 360, w: 40, h: 40 },
            { id: 'S6_R2', type: 'diamond', label: 'READ', x: 660, y: 360, w: 40, h: 40 },
            { id: 'S7_R2', type: 'diamond', label: 'READ', x: 730, y: 360, w: 40, h: 40 },
            { id: 'S8', type: 'diamond', label: 'READ', x: 200, y: 440, w: 60, h: 40 },
            { id: 'S9', type: 'diamond', label: 'READ', x: 400, y: 440, w: 60, h: 40 },
            { id: 'S10', type: 'diamond', label: 'READ', x: 600, y: 440, w: 60, h: 40 },
            { id: 'Reject_rect', type: 'rect', label: 'Reject', x: 360, y: 520, w: 80, h: 30 },
            { id: 'Accept_rect', type: 'rect', label: 'Accept', x: 750, y: 15, w: 70, h: 30 }
        ],
        pdaLines: [
            { from: 'Start_rect', to: 'S0', sideFrom: 'bottom', sideTo: 'top', label: '' },
            { from: 'S0', to: 'Push_rect', sideFrom: 'left', sideTo: 'right', label: 'Δ, Z0→Z0', isCustomPath: true, path: 'M 370 80 L 85 80 L 85 40' },
            { from: 'S0', to: 'S1', sideFrom: 'bottom', sideTo: 'top', label: 'a, Z0→Z0' },
            { from: 'S0', to: 'S2', sideFrom: 'bottom', sideTo: 'top', label: 'b, Z0→Z0' },
            { from: 'S1', to: 'S3_L', sideFrom: 'bottom', sideTo: 'top', label: 'a, Z0→Z0' },
            { from: 'S1', to: 'T_L', sideFrom: 'bottom', sideTo: 'top', label: 'b, Z0→Z0' },
            { from: 'S2', to: 'T_R', sideFrom: 'bottom', sideTo: 'top', label: 'a, Z0→Z0' },
            { from: 'S2', to: 'S3_R', sideFrom: 'bottom', sideTo: 'top', label: 'b, Z0→Z0' },
            { from: 'T_L', to: 'T_L', sideFrom: 'bottom', sideTo: 'right', label: 'a,b, Z0→Z0', isCustomPath: true, path: 'M 310 240 C 290 260, 260 240, 295 220' },
            { from: 'T_R', to: 'T_R', sideFrom: 'bottom', sideTo: 'right', label: 'a,b, Z0→Z0', isCustomPath: true, path: 'M 470 240 C 450 260, 420 240, 455 220' },
            { from: 'S3_L', to: 'S4_L', sideFrom: 'bottom', sideTo: 'top', label: 'a, Z0→Z0' },
            { from: 'S3_L', to: 'S5_L', sideFrom: 'bottom', sideTo: 'top', label: 'b, Z0→Z0' },
            { from: 'S3_R', to: 'S4_R', sideFrom: 'bottom', sideTo: 'top', label: 'a, Z0→Z0' },
            { from: 'S3_R', to: 'S5_R', sideFrom: 'bottom', sideTo: 'top', label: 'b, Z0→Z0' },
            { from: 'S4_L', to: 'S6_L1', sideFrom: 'bottom', sideTo: 'top', label: 'a, Z0→Z0' },
            { from: 'S4_L', to: 'S7_L1', sideFrom: 'bottom', sideTo: 'top', label: 'b, Z0→Z0' },
            { from: 'S5_L', to: 'S6_L2', sideFrom: 'bottom', sideTo: 'top', label: 'a, Z0→Z0' },
            { from: 'S5_L', to: 'S7_L2', sideFrom: 'bottom', sideTo: 'top', label: 'b, Z0→Z0' },
            { from: 'S4_R', to: 'S6_R1', sideFrom: 'bottom', sideTo: 'top', label: 'a, Z0→Z0' },
            { from: 'S4_R', to: 'S7_R1', sideFrom: 'bottom', sideTo: 'top', label: 'b, Z0→Z0' },
            { from: 'S5_R', to: 'S6_R2', sideFrom: 'bottom', sideTo: 'top', label: 'a, Z0→Z0' },
            { from: 'S5_R', to: 'S7_R2', sideFrom: 'bottom', sideTo: 'top', label: 'b, Z0→Z0' },
            { from: 'S6_L1', to: 'S8', sideFrom: 'bottom', sideTo: 'top', label: 'a, Z0→Z0' },
            { from: 'S7_L1', to: 'S9', sideFrom: 'bottom', sideTo: 'topLeft', label: 'b, Z0→Z0' },
            { from: 'S6_L2', to: 'S8', sideFrom: 'bottom', sideTo: 'top', label: 'a, Z0→Z0' },
            { from: 'S7_L2', to: 'S9', sideFrom: 'bottom', sideTo: 'topLeft', label: 'b, Z0→Z0' },
            { from: 'S6_R1', to: 'S9', sideFrom: 'bottom', sideTo: 'topRight', label: 'b, Z0→Z0' },
            { from: 'S7_R1', to: 'S10', sideFrom: 'bottom', sideTo: 'top', label: 'a, Z0→Z0' },
            { from: 'S6_R2', to: 'S9', sideFrom: 'bottom', sideTo: 'topRight', label: 'b, Z0→Z0' },
            { from: 'S7_R2', to: 'S10', sideFrom: 'bottom', sideTo: 'top', label: 'a, Z0→Z0' },
            { from: 'S8', to: 'S8', sideFrom: 'left', sideTo: 'bottom', label: 'a, Z0→Z0', isCustomPath: true, path: 'M 170 440 C 140 440, 140 470, 180 460' },
            { from: 'S8', to: 'S9', sideFrom: 'right', sideTo: 'left', label: 'b, Z0→Z0' },
            { from: 'S9', to: 'S10', sideFrom: 'right', sideTo: 'left', label: 'a, Z0→Z0', isCustomPath: true, path: 'M 430 435 L 570 435' },
            { from: 'S10', to: 'S9', sideFrom: 'left', sideTo: 'right', label: 'b, Z0→Z0', isCustomPath: true, path: 'M 570 445 L 430 445' },
            { from: 'S10', to: 'S10', sideFrom: 'right', sideTo: 'bottom', label: 'a, Z0→Z0', isCustomPath: true, path: 'M 630 440 C 660 440, 660 470, 620 460' },
            { from: 'S9', to: 'S9', sideFrom: 'bottom', sideTo: 'right', label: 'b, Z0→Z0', isCustomPath: true, path: 'M 400 460 C 420 490, 440 480, 420 455' },
            { from: 'S9', to: 'Reject_rect', sideFrom: 'bottom', sideTo: 'top', label: '' },
            { from: 'S10', to: 'Accept_rect', sideFrom: 'bottom', sideTo: 'bottom', label: 'Δ, Z0→Z0', isCustomPath: true, path: 'M 600 460 L 600 500 L 785 500 L 785 45' }
        ]
    },
    '01': {
        regex: "(((101)+(111)*+(100))+(1+0+11)*)(1+0+01)*(111+000+101)(1+0)*",
        alphabet: ['0', '1'],
        startState: 'S0',
        acceptStates: ['S7', 'S9', 'S11', 'S12', 'S13', 'S14', 'S15'],
        transitions: {
            'S0': { '1': 'S1', '0': 'S2' },
            'S1': { '1': 'S3', '0': 'S4' },
            'S2': { '1': 'S5', '0': 'S6' },
            'S3': { '1': 'S7', '0': 'S8' },
            'S4': { '1': 'S9', '0': 'S6' },
            'S5': { '1': 'S10', '0': 'S8' },
            'S6': { '1': 'S5', '0': 'S11' },
            'S7': { '1': 'S12', '0': 'S13' },
            'S8': { '1': 'S9', '0': 'S6' },
            'S9': { '1': 'S14', '0': 'S13' },
            'S10': { '1': 'S14', '0': 'S8' },
            'S11': { '1': 'S9', '0': 'S11' },
            'S12': { '1': 'S15', '0': 'S13' },
            'S13': { '1': 'S9', '0': 'S11' },
            'S14': { '1': 'S14', '0': 'S13' },
            'S15': { '1': 'S7', '0': 'S13' }
        },
        nodes: {
            'S0': { x: 50, y: 240 },
            'S1': { x: 160, y: 120 },
            'S2': { x: 160, y: 360 },
            'S3': { x: 280, y: 70 },
            'S4': { x: 280, y: 190 },
            'S5': { x: 280, y: 300 },
            'S6': { x: 280, y: 420 },
            'S7': { x: 420, y: 70 },
            'S8': { x: 420, y: 230 },
            'S11': { x: 420, y: 420 },
            'S12': { x: 560, y: 70 },
            'S9': { x: 560, y: 230 },
            'S10': { x: 560, y: 350 },
            'S15': { x: 680, y: 70 },
            'S13': { x: 680, y: 230 },
            'S14': { x: 800, y: 230 }
        },
        cfg: `S  → X Y Z\nX  → 101 | 111X | 100 | ε\nY  → 1Y | 0Y | 01Y | ε\nZ  → 111 | 000 | 101`,
        
        pda: [
            { curr: 'Start', input: 'Δ', pop: 'Z0', next: 'S0', push: 'Z0' },
            { curr: 'S0', input: '0', pop: 'Z0', next: 'S2', push: 'Z0' },
            { curr: 'S0', input: '1', pop: 'Z0', next: 'S1', push: 'Z0' },
            { curr: 'S1', input: '0', pop: 'Z0', next: 'S4', push: 'Z0' },
            { curr: 'S1', input: '1', pop: 'Z0', next: 'S3', push: 'Z0' },
            { curr: 'S2', input: '0', pop: 'Z0', next: 'S5', push: 'Z0' },
            { curr: 'S5', input: '1', pop: 'Z0', next: 'S8', push: 'Z0' },
            { curr: 'S5', input: '0', pop: 'Z0', next: 'S6', push: 'Z0' },
            { curr: 'S8', input: '0', pop: 'Z0', next: 'S6', push: 'Z0' },
            { curr: 'S8', input: '1', pop: 'Z0', next: 'S10', push: 'Z0' },
            { curr: 'S10', input: '1', pop: 'Z0', next: 'S2', push: 'Z0' },
            { curr: 'S4', input: '0', pop: 'Z0', next: 'S6', push: 'Z0' },
            { curr: 'S4', input: '1', pop: 'Z0', next: 'S9_1', push: 'Z0' },
            { curr: 'S6', input: '0', pop: 'Z0', next: 'S11', push: 'Z0' },
            { curr: 'S6', input: '1', pop: 'Z0', next: 'S9_1', push: 'Z0' },
            { curr: 'S11', input: '1', pop: 'Z0', next: 'S10', push: 'Z0' },
            { curr: 'S3', input: '1', pop: 'Z0', next: 'S7', push: 'Z0' },
            { curr: 'S3', input: '0', pop: 'Z0', next: 'S15', push: 'Z0' },
            { curr: 'S7', input: '1', pop: 'Z0', next: 'S15', push: 'Z0' },
            { curr: 'S7', input: '0', pop: 'Z0', next: 'S13', push: 'Z0' },
            { curr: 'S13', input: '1', pop: 'Z0', next: 'S9_2', push: 'Z0' },
            { curr: 'S13', input: '0', pop: 'Z0', next: 'S14', push: 'Z0' },
            { curr: 'S14', input: '1', pop: 'Z0', next: 'S14', push: 'Z0' }
        ],
        pdaBlocks: [
            { id: 'Start_rect', type: 'rect', label: 'Start', x: 420, y: 15, w: 70, h: 25 },
            { id: 'Push_rect', type: 'rect', label: 'Push', x: 50, y: 15, w: 70, h: 25 },
            { id: 'S0', type: 'diamond', label: 'READ', x: 420, y: 80, w: 50, h: 40 },
            { id: 'S2', type: 'diamond', label: 'READ', x: 240, y: 150, w: 50, h: 40 },
            { id: 'S1', type: 'diamond', label: 'READ', x: 420, y: 150, w: 50, h: 40 },
            { id: 'S3', type: 'diamond', label: 'READ', x: 550, y: 150, w: 50, h: 40 },
            { id: 'S13', type: 'diamond', label: 'READ', x: 670, y: 150, w: 50, h: 40 },
            { id: 'S14', type: 'diamond', label: 'READ', x: 770, y: 150, w: 50, h: 40 },
            { id: 'S5', type: 'diamond', label: 'READ', x: 240, y: 220, w: 50, h: 40 },
            { id: 'S4', type: 'diamond', label: 'READ', x: 420, y: 220, w: 50, h: 40 },
            { id: 'S7', type: 'diamond', label: 'READ', x: 610, y: 220, w: 50, h: 40 },
            { id: 'S8', type: 'diamond', label: 'READ', x: 240, y: 290, w: 50, h: 40 },
            { id: 'S6', type: 'diamond', label: 'READ', x: 350, y: 290, w: 50, h: 40 },
            { id: 'S9_1', type: 'diamond', label: 'READ', x: 480, y: 290, w: 50, h: 40 },
            { id: 'S15', type: 'diamond', label: 'READ', x: 550, y: 290, w: 50, h: 40 },
            { id: 'S9_2', type: 'diamond', label: 'READ', x: 710, y: 290, w: 50, h: 40 },
            { id: 'S10', type: 'diamond', label: 'READ', x: 240, y: 370, w: 50, h: 40 },
            { id: 'S11', type: 'diamond', label: 'READ', x: 420, y: 370, w: 50, h: 40 },
            { id: 'Reject_rect', type: 'rect', label: 'Reject', x: 420, y: 440, w: 80, h: 30 },
            { id: 'Accept_rect', type: 'rect', label: 'Accept', x: 750, y: 300, w: 60, h: 100 }
        ],
        pdaLines: [
            { from: 'Start_rect', to: 'S0', sideFrom: 'bottom', sideTo: 'top', label: 'Δ, Z0→Z0' },
            { from: 'S0', to: 'Push_rect', sideFrom: 'left', sideTo: 'right', label: 'Δ, Z0→Z0', isCustomPath: true, path: 'M 395 80 L 85 80 L 85 40' },
            { from: 'S0', to: 'S2', sideFrom: 'bottom', sideTo: 'top', label: '0, Z0→Z0' },
            { from: 'S0', to: 'S1', sideFrom: 'bottom', sideTo: 'top', label: '1, Z0→Z0' },
            { from: 'S2', to: 'S5', sideFrom: 'bottom', sideTo: 'top', label: '0, Z0→Z0' },
            { from: 'S5', to: 'S8', sideFrom: 'bottom', sideTo: 'top', label: '1, Z0→Z0' },
            { from: 'S5', to: 'S6', sideFrom: 'bottom', sideTo: 'topLeft', label: '0, Z0→Z0' },
            { from: 'S8', to: 'S6', sideFrom: 'bottom', sideTo: 'left', label: '0, Z0→Z0' },
            { from: 'S8', to: 'S10', sideFrom: 'bottom', sideTo: 'top', label: '1, Z0→Z0' },
            { from: 'S10', to: 'S2', sideFrom: 'left', sideTo: 'left', label: '1, Z0→Z0', isCustomPath: true, path: 'M 215 370 C 130 350, 130 170, 215 150' },
            { from: 'S10', to: 'Reject_rect', sideFrom: 'bottom', sideTo: 'left', label: '0, Z0→Z0', isCustomPath: true, path: 'M 240 390 L 240 455 L 420 455' },
            { from: 'S1', to: 'S4', sideFrom: 'bottom', sideTo: 'top', label: '0, Z0→Z0' },
            { from: 'S1', to: 'S3', sideFrom: 'bottom', sideTo: 'topLeft', label: '1, Z0→Z0' },
            { from: 'S4', to: 'S6', sideFrom: 'bottom', sideTo: 'topRight', label: '0, Z0→Z0' },
            { from: 'S4', to: 'S9_1', sideFrom: 'bottom', sideTo: 'top', label: '1, Z0→Z0' },
            { from: 'S6', to: 'S11', sideFrom: 'bottom', sideTo: 'top', label: '0, Z0→Z0' },
            { from: 'S6', to: 'S9_1', sideFrom: 'bottom', sideTo: 'left', label: '1, Z0→Z0' },
            { from: 'S11', to: 'S10', sideFrom: 'left', sideTo: 'right', label: '1, Z0→Z0' },
            { from: 'S11', to: 'Reject_rect', sideFrom: 'bottom', sideTo: 'top', label: '0, Z0→Z0' },
            { from: 'S3', to: 'S7', sideFrom: 'bottom', sideTo: 'top', label: '1, Z0→Z0' },
            { from: 'S3', to: 'S15', sideFrom: 'bottom', sideTo: 'top', label: '0, Z0→Z0' },
            { from: 'S7', to: 'S15', sideFrom: 'bottom', sideTo: 'right', label: '1, Z0→Z0' },
            { from: 'S7', to: 'S13', sideFrom: 'top', sideTo: 'bottom', label: '0, Z0→Z0', isCustomPath: true, path: 'M 610 200 L 670 170' },
            { from: 'S13', to: 'S9_2', sideFrom: 'bottom', sideTo: 'top', label: '1, Z0→Z0' },
            { from: 'S13', to: 'S14', sideFrom: 'right', sideTo: 'left', label: '0, Z0→Z0' },
            { from: 'S14', to: 'S14', sideFrom: 'top', sideTo: 'right', label: '1, Z0→Z0', isCustomPath: true, path: 'M 780 130 C 810 100, 830 130, 810 150' },
            { from: 'S14', to: 'S13', sideFrom: 'left', sideTo: 'right', label: '0, Z0→Z0', isCustomPath: true, path: 'M 770 140 C 750 120, 720 120, 695 140' },
            { from: 'S13', to: 'Reject_rect', sideFrom: 'bottom', sideTo: 'right', label: '', isCustomPath: true, path: 'M 670 170 L 830 170 L 830 460 L 500 460' },
            { from: 'S9_2', to: 'Accept_rect', sideFrom: 'right', sideTo: 'left', label: 'Δ, Z0→Z0' },
            { from: 'S14', to: 'Accept_rect', sideFrom: 'bottom', sideTo: 'top', label: 'Δ, Z0→Z0', isCustomPath: true, path: 'M 795 170 L 795 300' },
            { from: 'S15', to: 'Accept_rect', sideFrom: 'bottom', sideTo: 'left', label: 'Δ, Z0→Z0', isCustomPath: true, path: 'M 550 310 L 550 390 L 750 390' },
            { from: 'S7', to: 'Accept_rect', sideFrom: 'bottom', sideTo: 'left', label: 'Δ, Z0→Z0', isCustomPath: true, path: 'M 610 240 L 610 330 L 750 330' }
        ]
    }
};

let currentAlphabet = 'ab';
let currentTab = 'dfa';
let activeAnimationTimeout = null;
let regexFormat = '+'; // can be '+' or '|'
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
    document.getElementById('btn-validate-all').addEventListener('click', validateAllRows);
    document.getElementById('btn-zoom-in').addEventListener('click', () => adjustGraphZoom(1.2));
    document.getElementById('btn-zoom-out').addEventListener('click', () => adjustGraphZoom(1 / 1.2));
    document.getElementById('btn-zoom-reset').addEventListener('click', () => fitGraphToView());
    document.getElementById('btn-trace-prev').addEventListener('click', () => stepTrace(-1));
    document.getElementById('btn-trace-next').addEventListener('click', () => stepTrace(1));
    document.getElementById('btn-trace-play').addEventListener('click', playTraceAnimation);
    document.getElementById('trace-replay-select').addEventListener('change', (e) => {
        const idx = e.target.value;
        if (idx === '') return;
        replayTrace(parseInt(idx, 10));
        e.target.value = '';
    });

    const btnRegexFormat = document.getElementById('btn-regex-format');
    if (btnRegexFormat) {
        btnRegexFormat.addEventListener('click', () => {
            regexFormat = regexFormat === '+' ? '|' : '+';
            document.getElementById('regex-format-label').textContent = regexFormat === '+' ? 'USE |' : 'USE +';
            updateWorkspace();
        });
    }

    const canvasContainer = document.getElementById('canvas-container');
    canvasContainer.addEventListener('mousemove', onGraphMouseMove);
    canvasContainer.addEventListener('mouseleave', (e) => {
        isDraggingGraph = false;
        canvasContainer.style.cursor = 'grab';
        hideGraphTooltip();
    });

    canvasContainer.addEventListener('mousedown', (e) => {
        isDraggingGraph = true;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        startViewBoxX = graphViewBox.x;
        startViewBoxY = graphViewBox.y;
        canvasContainer.style.cursor = 'grabbing';
    });

    window.addEventListener('mouseup', () => {
        if (isDraggingGraph) {
            isDraggingGraph = false;
            canvasContainer.style.cursor = 'grab';
        }
    });

    document.getElementById('btn-finalize').addEventListener('click', toggleDockMode);
    document.getElementById('btn-clear-history').addEventListener('click', clearHistory);
}

function addHistoryEntry(inputStr, accepted, frames) {
    const list = document.getElementById('history-list');
    const empty = document.getElementById('history-empty');
    if (empty) empty.remove();

    // Store frames for replay
    const historyIdx = traceHistory.length;
    traceHistory.push({ inputStr, accepted, frames });

    const item = document.createElement('div');
    item.className = 'history-item';
    item.innerHTML = `
        <span class="history-string" title="${inputStr}">${inputStr || '(empty)'}</span>
        <span class="${accepted ? 'history-badge-accepted' : 'history-badge-rejected'}">${accepted ? 'Accepted' : 'Rejected'}</span>
    `;
    list.prepend(item);

    // Add to replay dropdown (newest on top = index 0 visible at bottom of list)
    updateReplayDropdown();
}

function clearHistory() {
    const list = document.getElementById('history-list');
    list.innerHTML = '<p id="history-empty" class="text-[11px] app-muted italic text-center py-4">No validations yet.</p>';
    traceHistory = [];
    updateReplayDropdown();
}

let traceHistory = [];

function updateReplayDropdown() {
    const select = document.getElementById('trace-replay-select');
    if (!select) return;
    // Keep the placeholder option, rebuild the rest
    select.innerHTML = '<option value="">— pick a string —</option>';
    // Show newest first
    for (let i = traceHistory.length - 1; i >= 0; i--) {
        const entry = traceHistory[i];
        const label = `${entry.inputStr || '(empty)'}  [${entry.accepted ? '✓' : '✗'}]`;
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = label;
        select.appendChild(opt);
    }
}

function replayTrace(historyIdx) {
    const entry = traceHistory[historyIdx];
    if (!entry) return;
    if (activeAnimationTimeout) clearInterval(activeAnimationTimeout);
    activeTrace.frames = entry.frames;
    activeTrace.index = 0;
    activeTrace.playing = false;
    showTraceControls();
    renderTraceStep();
    if (currentTab === 'dfa') playTraceAnimation();
}


let isDocked = false;
let isDraggingGraph = false;
let dragStartX = 0;
let dragStartY = 0;
let startViewBoxX = 0;
let startViewBoxY = 0;

function toggleDockMode() {
    isDocked = !isDocked;
    const layout = document.getElementById('dfa-layout');
    const btn = document.getElementById('btn-finalize');

    if (isDocked) {
        layout.className = 'dfa-layout-docked';
        btn.innerHTML = 'Undock';
        btn.style.background = '#d97706';
    } else {
        layout.className = 'dfa-layout-stacked';
        btn.innerHTML = 'Dock to Side';
        btn.style.background = '#059669';
    }
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

function createRowElement(id, canRemove) {
    const div = document.createElement('div');
    div.className = 'test-row';
    div.setAttribute('data-row-id', id);
    div.innerHTML = `
        <div class="test-row-inner">
            <input type="text" id="input-${id}" placeholder="Enter string (e.g., aababaa)…" class="test-row-input" autocomplete="off" />
            <button type="button" id="action-validate-${id}" class="btn-validate">Validate</button>
            <div class="test-row-actions">
                <button type="button" id="clear-${id}" class="btn-remove-row" aria-label="Clear this case" title="Clear">↺</button>
                ${canRemove ? `<button type="button" id="remove-${id}" class="btn-remove-row" aria-label="Remove test case" title="Remove">×</button>` : '<span></span>'}
            </div>
        </div>
        <div class="result-cell">
            <div id="badge-${id}"></div>
            <div id="detail-${id}" class="result-detail"></div>
        </div>
    `;
    div.querySelector(`#action-validate-${id}`).addEventListener('click', () => validateSingle(id));
    div.querySelector(`#clear-${id}`).addEventListener('click', () => {
        const input = document.getElementById(`input-${id}`);
        if (input) input.value = '';
        clearRowResult(id);
    });
    const removeBtn = div.querySelector(`#remove-${id}`);
    if (removeBtn) removeBtn.addEventListener('click', () => removeTestRow(id));
    div.querySelector(`#input-${id}`).addEventListener('keydown', e => {
        if (e.key === 'Enter') validateSingle(id);
    });
    return div;
}

function addTestRow() {
    const id = nextRowId++;
    testRowIds.push(id);
    const container = document.getElementById('matrix-rows');
    // Update all existing remove buttons to show (now there are >1 rows)
    if (testRowIds.length === 2) {
        const firstId = testRowIds[0];
        const firstRow = container.querySelector(`[data-row-id="${firstId}"]`);
        if (firstRow) {
            const existingSpan = firstRow.querySelector('span:last-child');
            if (existingSpan) {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.id = `remove-${firstId}`;
                btn.className = 'btn-remove-row focus-ring';
                btn.setAttribute('aria-label', 'Remove test case');
                btn.textContent = '×';
                btn.addEventListener('click', () => removeTestRow(firstId));
                existingSpan.replaceWith(btn);
            }
        }
    }
    const canRemove = testRowIds.length > 1;
    container.appendChild(createRowElement(id, canRemove));
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
    const row = document.querySelector(`[data-row-id="${id}"]`);
    if (row) row.remove();
    // If only 1 row left, hide its remove button
    if (testRowIds.length === 1) {
        const lastId = testRowIds[0];
        const lastRow = document.querySelector(`[data-row-id="${lastId}"]`);
        if (lastRow) {
            const btn = lastRow.querySelector(`#remove-${lastId}`);
            if (btn) {
                const span = document.createElement('span');
                btn.replaceWith(span);
            }
        }
    }
    updateClearAllVisibility();
}

function renderTestRows() {
    const container = document.getElementById('matrix-rows');
    container.innerHTML = '';
    testRowIds.forEach(id => {
        const canRemove = testRowIds.length > 1;
        container.appendChild(createRowElement(id, canRemove));
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

function validateAllRows() {
    // Run each row one at a time, waiting for trace animation to finish before next
    const ids = [...testRowIds];
    let i = 0;

    function runNext() {
        if (i >= ids.length) return;
        const id = ids[i++];

        // Run the simulation synchronously, show badge+detail, then play trace
        const inputEl = document.getElementById(`input-${id}`);
        const badge = document.getElementById(`badge-${id}`);
        const detail = document.getElementById(`detail-${id}`);
        const validateBtn = document.getElementById(`action-validate-${id}`);
        const inputVal = inputEl ? inputEl.value.trim() : '';

        if (!inputVal) {
            runNext();
            return;
        }

        if (validateBtn) validateBtn.disabled = true;
        if (badge) badge.innerHTML = '<span class="result-badge"><span class="spinner"></span>Validating…</span>';
        if (detail) detail.textContent = '';

        setTimeout(() => {
            const result = simulateDFA(inputVal);
            if (validateBtn) validateBtn.disabled = false;

            if (result.isAccepted) {
                if (badge) badge.innerHTML = '<span class="result-badge result-badge-accepted">✓ Accepted</span>';
                if (detail) detail.textContent = `Path: ${result.pathString}`;
            } else {
                if (badge) badge.innerHTML = '<span class="result-badge result-badge-rejected">✗ Rejected</span>';
                if (detail) detail.textContent = result.invalidChar !== null
                    ? `Invalid symbol '${result.invalidChar}'`
                    : `Rejected at ${result.rejectAt || result.finalState}`;
            }

            // Load trace and play it, then move to next row when done
            activeTrace.frames = result.animationFrames;
            activeTrace.index = 0;
            showTraceControls();
            renderTraceStep();

            if (currentTab === 'dfa') {
                // Play animation, then after it completes kick off the next row
                if (activeAnimationTimeout) clearInterval(activeAnimationTimeout);
                activeTrace.playing = true;
                updateTraceControlsUI();

                activeAnimationTimeout = setInterval(() => {
                    if (activeTrace.index >= activeTrace.frames.length - 1) {
                        clearInterval(activeAnimationTimeout);
                        activeAnimationTimeout = null;
                        activeTrace.playing = false;
                        updateTraceControlsUI();
                        // Short pause between cases then go to next
                        setTimeout(runNext, 400);
                        return;
                    }
                    activeTrace.index++;
                    renderTraceStep();
                }, 600);
            } else {
                runNext();
            }
        }, 280);
    }

    runNext();
}

function clearAllTestRows() {
    if (activeAnimationTimeout) clearInterval(activeAnimationTimeout);
    stopTrace();
    testRowIds = [];
    nextRowId = 0;
    document.getElementById('matrix-rows').innerHTML = '';
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
    let displayRegex = data.regex;
    if (regexFormat === '|') {
        displayRegex = displayRegex.replace(/\+/g, '|');
    }
    document.getElementById('regex-display').innerText = displayRegex;
    document.getElementById('sidebar-meta').innerHTML = `
        <div>
            <span class="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Start State</span>
            <span class="font-mono text-lg font-bold text-white">${data.startState}</span>
        </div>
        <div>
            <span class="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Accepting Set</span>
            <span class="font-mono text-lg font-bold text-emerald-400">${data.acceptStates.join(' ')}</span>
        </div>
        <div>
            <span class="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Alphabet Rules Set</span>
            <span class="font-mono text-lg font-bold text-white">{ ${data.alphabet.join(', ')} }</span>
        </div>
    `;

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

        // We remove the start arrow line entirely, as the start state is just a circle with a negative sign inside.
        svgHtml += `
            <g class="graph-node-group" data-node="${nodeId}" data-tooltip="${escapeHtmlAttr(tooltipLines)}">
                <circle class="graph-node-hit" cx="${node.x}" cy="${node.y}" r="${nodeRadius + 4}" fill="transparent" stroke="none" />
                <circle cx="${node.x}" cy="${node.y}" r="${nodeRadius}" fill="${fillStyle}" stroke="${strokeStyle}" stroke-width="${isActiveNode ? 3 : 2}" />
        `;

        const label = isTrap ? 'T' : nodeId;

        if (isStart && isAccept) {
            svgHtml += `
                <text class="graph-label" x="${node.x}" y="${node.y - 3}" fill="#10b981" font-size="14" font-weight="bold" text-anchor="middle" font-family="sans-serif">±</text>
                <text class="graph-label" x="${node.x}" y="${node.y + 9}" fill="${textColor}" font-size="10" font-weight="bold" text-anchor="middle" font-family="monospace">${label}</text>
            `;
        } else if (isStart) {
            svgHtml += `
                <text class="graph-label" x="${node.x}" y="${node.y - 3}" fill="${textColor}" font-size="15" font-weight="bold" text-anchor="middle" font-family="sans-serif">−</text>
                <text class="graph-label" x="${node.x}" y="${node.y + 9}" fill="${textColor}" font-size="10" font-weight="bold" text-anchor="middle" font-family="monospace">${label}</text>
            `;
        } else if (isAccept) {
            svgHtml += `
                <text class="graph-label" x="${node.x}" y="${node.y - 3}" fill="#10b981" font-size="14" font-weight="bold" text-anchor="middle" font-family="sans-serif">+</text>
                <text class="graph-label" x="${node.x}" y="${node.y + 9}" fill="${textColor}" font-size="10" font-weight="bold" text-anchor="middle" font-family="monospace">${label}</text>
            `;
        } else {
            svgHtml += `
                <text class="graph-label" x="${node.x}" y="${node.y + 4}" fill="${textColor}" font-size="11" font-weight="bold" text-anchor="middle" font-family="monospace">${label}</text>
            `;
        }

        svgHtml += `</g>`;
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
    if (isDraggingGraph) {
        const container = document.getElementById('canvas-container');
        const effectiveViewBox = getEffectiveViewBox();
        const ratio = effectiveViewBox.w / container.clientWidth;

        const dx = (e.clientX - dragStartX) * ratio;
        const dy = (e.clientY - dragStartY) * ratio;

        graphViewBox.x = startViewBoxX - dx;
        graphViewBox.y = startViewBoxY - dy;

        renderSVGGraph(getTraceFrameState());
        hideGraphTooltip();
        return;
    }

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
                if (side === 'topRight') return { x: block.x + block.w / 4, y: block.y - block.h / 4 };
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
                
                if(line.path.includes('C')) {
                    const match = line.path.match(/C ([\d\.]+) ([\d\.]+)/);
                    if(match) {
                        tx = (p1.x + parseFloat(match[1])) / 2;
                        ty = (p1.y + parseFloat(match[2])) / 2 - 5;
                    }
                }
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

        // Log to sidebar history
        addHistoryEntry(inputVal, result.isAccepted, result.animationFrames);

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

