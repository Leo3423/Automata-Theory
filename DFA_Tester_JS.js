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
            { id: 'S0', type: 'diamond', label: 'S0', x: 400, y: 80, w: 60, h: 40 },
            { id: 'S1', type: 'diamond', label: 'S1', x: 260, y: 150, w: 60, h: 40 },
            { id: 'S2', type: 'diamond', label: 'S2', x: 540, y: 150, w: 60, h: 40 },
            { id: 'S3_L', type: 'diamond', label: 'S3', x: 180, y: 220, w: 50, h: 40 },
            { id: 'T_L', type: 'diamond', label: 'T', x: 320, y: 220, w: 50, h: 40 },
            { id: 'T_R', type: 'diamond', label: 'T', x: 480, y: 220, w: 50, h: 40 },
            { id: 'S3_R', type: 'diamond', label: 'S3', x: 620, y: 220, w: 50, h: 40 },
            { id: 'S4_L', type: 'diamond', label: 'S4', x: 120, y: 290, w: 50, h: 40 },
            { id: 'S5_L', type: 'diamond', label: 'S5', x: 220, y: 290, w: 50, h: 40 },
            { id: 'S4_R', type: 'diamond', label: 'S4', x: 580, y: 290, w: 50, h: 40 },
            { id: 'S5_R', type: 'diamond', label: 'S5', x: 680, y: 290, w: 50, h: 40 },
            { id: 'S6_L1', type: 'diamond', label: 'S6', x: 70, y: 360, w: 40, h: 40 },
            { id: 'S7_L1', type: 'diamond', label: 'S7', x: 140, y: 360, w: 40, h: 40 },
            { id: 'S6_L2', type: 'diamond', label: 'S6', x: 200, y: 360, w: 40, h: 40 },
            { id: 'S7_L2', type: 'diamond', label: 'S7', x: 270, y: 360, w: 40, h: 40 },
            { id: 'S6_R1', type: 'diamond', label: 'S6', x: 530, y: 360, w: 40, h: 40 },
            { id: 'S7_R1', type: 'diamond', label: 'S7', x: 600, y: 360, w: 40, h: 40 },
            { id: 'S6_R2', type: 'diamond', label: 'S6', x: 660, y: 360, w: 40, h: 40 },
            { id: 'S7_R2', type: 'diamond', label: 'S7', x: 730, y: 360, w: 40, h: 40 },
            { id: 'S8', type: 'diamond', label: 'S8', x: 200, y: 440, w: 60, h: 40 },
            { id: 'S9', type: 'diamond', label: 'S9', x: 400, y: 440, w: 60, h: 40 },
            { id: 'S10', type: 'diamond', label: 'S10', x: 600, y: 440, w: 60, h: 40 },
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
            { id: 'S0', type: 'diamond', label: 'S0', x: 420, y: 80, w: 50, h: 40 },
            { id: 'S2', type: 'diamond', label: 'S2', x: 240, y: 150, w: 50, h: 40 },
            { id: 'S1', type: 'diamond', label: 'S1', x: 420, y: 150, w: 50, h: 40 },
            { id: 'S3', type: 'diamond', label: 'S3', x: 550, y: 150, w: 50, h: 40 },
            { id: 'S13', type: 'diamond', label: 'S13', x: 670, y: 150, w: 50, h: 40 },
            { id: 'S14', type: 'diamond', label: 'S14', x: 770, y: 150, w: 50, h: 40 },
            { id: 'S5', type: 'diamond', label: 'S5', x: 240, y: 220, w: 50, h: 40 },
            { id: 'S4', type: 'diamond', label: 'S4', x: 420, y: 220, w: 50, h: 40 },
            { id: 'S7', type: 'diamond', label: 'S7', x: 610, y: 220, w: 50, h: 40 },
            { id: 'S8', type: 'diamond', label: 'S8', x: 240, y: 290, w: 50, h: 40 },
            { id: 'S6', type: 'diamond', label: 'S6', x: 350, y: 290, w: 50, h: 40 },
            { id: 'S9_1', type: 'diamond', label: 'S9', x: 480, y: 290, w: 50, h: 40 },
            { id: 'S15', type: 'diamond', label: 'S15', x: 550, y: 290, w: 50, h: 40 },
            { id: 'S9_2', type: 'diamond', label: 'S9', x: 710, y: 290, w: 50, h: 40 },
            { id: 'S10', type: 'diamond', label: 'S10', x: 240, y: 370, w: 50, h: 40 },
            { id: 'S11', type: 'diamond', label: 'S11', x: 420, y: 370, w: 50, h: 40 },
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

function renderSVGGraph(activeState = null, activeTransition = null) {
    const data = automataData[currentAlphabet];
    const container = document.getElementById('canvas-container');
    if (!container) return;
    
    const viewWidth = 940;
    const viewHeight = currentAlphabet === 'ab' ? 420 : 500;
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

        let fillStyle = isActiveNode ? '#064e3b' : (nodeId === 'T' || nodeId === 'Trap' ? '#311018' : '#1e293b');
        let strokeStyle = isActiveNode ? '#10b981' : (isAccept ? '#10b981' : (nodeId === 'T' || nodeId === 'Trap' ? '#f43f5e' : '#475569'));
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

function renderPDAGraph() {
    const data = automataData[currentAlphabet];
    const container = document.getElementById('pda-canvas-container');
    if (!container) return;

    const viewWidth = 860;
    const viewHeight = 560;

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
                if (side === 'topRight') return { x: block.x + block.w / 4, y: block.y - block.h / 4 };
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
                
                if(line.path.includes('C')) {
                    const match = line.path.match(/C ([\d\.]+) ([\d\.]+)/);
                    if(match) {
                        tx = (p1.x + parseFloat(match[1])) / 2;
                        ty = (p1.y + parseFloat(match[2])) / 2 - 5;
                    }
                }
            }
            pdaSvgHtml += `
                <text x="${tx}" y="${ty}" fill="#f59e0b" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">${line.label}</text>
            `;
        }
    });

    data.pdaBlocks.forEach(block => {
        if (block.type === 'rect') {
            let strokeColor = '#475569';
            let fillColor = '#1e293b';
            if (block.label === 'Accept') { strokeColor = '#10b981'; fillColor = '#064e3b'; }
            if (block.label === 'Reject') { strokeColor = '#f43f5e'; fillColor = '#4c0519'; }
            if (block.label === 'Push' || block.label === 'Start') { strokeColor = '#6366f1'; fillColor = '#1e3a8a'; }

            pdaSvgHtml += `
                <rect x="${block.x}" y="${block.y}" width="${block.w}" height="${block.h}" rx="6" fill="${fillColor}" stroke="${strokeColor}" stroke-width="2" />
                <text x="${block.x + block.w / 2}" y="${block.y + block.h / 2 + 4}" fill="#f8fafc" font-size="12" font-weight="semibold" font-family="sans-serif" text-anchor="middle">${block.label}</text>
            `;
        } else if (block.type === 'diamond') {
            const points = `${block.x},${block.y - block.h / 2} ${block.x + block.w / 2},${block.y} ${block.x},${block.y + block.h / 2} ${block.x - block.w / 2},${block.y}`;
            let strokeColor = '#6366f1';
            let fillColor = '#0f172a';
            
            if (['S8','S9','S10','S7','S11','S12','S13','S14','S15'].includes(block.label)) {
                strokeColor = '#10b981';
                fillColor = '#064e3b';
            }

            pdaSvgHtml += `
                <polygon points="${points}" fill="${fillColor}" stroke="${strokeColor}" stroke-width="2" />
                <text x="${block.x}" y="${block.y + 4}" fill="#f8fafc" font-size="11" font-weight="semibold" font-family="sans-serif" text-anchor="middle">${block.label}</text>
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

            if (currentState === 'T' || currentState === 'Trap') {
                isValid = false;
                break; 
            }
        } else {
            isValid = false;
            fullPathTraceString.push('T');
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