const automataData = {
    ab: {
        regex: "(aa+bb)(a+b)*(a+b+ab+ba)(a+b+ab+ba)*(aa+bab)*(a+b+aa)(a+b+bb+aa)",
        alphabet: ['a', 'b'],
        startState: 'S0',
        acceptStates: ['S8', 'S9', 'S10'],
        dfa: [
            { curr: 'S0', input: 'a', next: 'S1' },
            { curr: 'S0', input: 'b', next: 'S2' },
            { curr: 'S1', input: 'a', next: 'S3' },
            { curr: 'S1', input: 'b', next: 'T' },
            { curr: 'S2', input: 'a', next: 'T' },
            { curr: 'S2', input: 'b', next: 'S3' },
            { curr: 'T', input: 'a', next: 'T' },
            { curr: 'T', input: 'b', next: 'T' },
            { curr: 'S3', input: 'a', next: 'S4' },
            { curr: 'S3', input: 'b', next: 'S5' },
            { curr: 'S4', input: 'a', next: 'S6' },
            { curr: 'S4', input: 'b', next: 'S7' },
            { curr: 'S5', input: 'a', next: 'S6' },
            { curr: 'S5', input: 'b', next: 'S7' },
            { curr: 'S6', input: 'a', next: 'S8' },
            { curr: 'S6', input: 'b', next: 'S9' },
            { curr: 'S7', input: 'a', next: 'S10' },
            { curr: 'S7', input: 'b', next: 'S9' },
            { curr: 'S8', input: 'a', next: 'S8' },
            { curr: 'S8', input: 'b', next: 'S9' },
            { curr: 'S9', input: 'a', next: 'S10' },
            { curr: 'S9', input: 'b', next: 'S9' },
            { curr: 'S10', input: 'a', next: 'S8' },
            { curr: 'S10', input: 'b', next: 'S9' }
        ],
        dfaBlocks: [
            { id: 'S0', type: 'circle', label: 'S0', x: 100, y: 240, w: 50, h: 50 },
            { id: 'S1', type: 'circle', label: 'S1', x: 300, y: 100, w: 50, h: 50 },
            { id: 'S2', type: 'circle', label: 'S2', x: 300, y: 380, w: 50, h: 50 },
            { id: 'T', type: 'circle', label: 'T', x: 300, y: 240, w: 50, h: 50 },
            { id: 'S3', type: 'circle', label: 'S3', x: 500, y: 240, w: 50, h: 50 },
            { id: 'S4', type: 'circle', label: 'S4', x: 640, y: 100, w: 50, h: 50 },
            { id: 'S5', type: 'circle', label: 'S5', x: 640, y: 380, w: 50, h: 50 },
            { id: 'S6', type: 'circle', label: 'S6', x: 780, y: 100, w: 50, h: 50 },
            { id: 'S7', type: 'circle', label: 'S7', x: 780, y: 380, w: 50, h: 50 },
            { id: 'S8', type: 'circle', label: 'S8', x: 920, y: 100, w: 50, h: 50 },
            { id: 'S9', type: 'circle', label: 'S9', x: 920, y: 380, w: 50, h: 50 },
            { id: 'S10', type: 'circle', label: 'S10', x: 1060, y: 240, w: 50, h: 50 }
        ],
        dfaLines: [
            { from: 'S0', to: 'S1', label: 'a' },
            { from: 'S0', to: 'S2', label: 'b' },
            { from: 'S1', to: 'S3', label: 'a' },
            { from: 'S1', to: 'T',  label: 'b',labelX:310 },
            { from: 'S2', to: 'T',  label: 'a',labelX:310 },
            { from: 'S2', to: 'S3', label: 'b' },
            { from: 'T',  to: 'T',  label: 'a, b',isCustomPath: true,sideFrom: 'bottom',sideTo: 'right',  path: 'M 315 250 C 350 310, 380 250, 320 235', labelX: 350, labelY: 285   },
            { from: 'S3', to: 'S4', label: 'a' },
            { from: 'S3', to: 'S5', label: 'b' },
            { from: 'S4', to: 'S6', label: 'a' },
            { from: 'S4', to: 'S7', label: 'b',labelX:675, labelY: 160 },
            { from: 'S5', to: 'S6', label: 'a',labelX:675, labelY: 320 },
            { from: 'S5', to: 'S7', label: 'b' },
            { from: 'S6', to: 'S8', label: 'a' },
            { from: 'S6', to: 'S9', label: 'b' },
            { from: 'S7', to: 'S10', label: 'a', isCustomPath: true, path: 'M 780 380 C 860 500, 980 500, 1060 265', labelX: 920, labelY: 480 },
            { from: 'S7', to: 'S9', label: 'b' },
            { from: 'S8', to: 'S8', label: 'a', labelY: 55 },
            { from: 'S8', to: 'S9', label: 'b',labelX:930 },
            { from: 'S9', to: 'S9', label: 'b', isCustomPath: true, path: 'M 910 380 C 890 440, 950 440, 930 400', labelX: 920, labelY: 435 },
            { from: 'S9', to: 'S10', label: 'a', curve: 25, labelY: 300 },
            { from: 'S10', to: 'S8', label: 'a', labelY: 160 },
            { from: 'S10', to: 'S9', label: 'b', curve: 25, labelY: 330 }
        ],
        cfg: `S -> A B C D E F G\nA -> aa | bb\nB -> aB | bB | λ \nC -> a | b | ab | ba\nD -> aD | bD | abD | baD | λ \nE -> aaE | babE | λ \nF -> a | b | aa\nG -> a | b | bb | aa`,
        
        pda: [
            { curr: 'START', input: 'Δ' , next: 'R0'  },
            { curr: 'R0', input: 'a' , next: 'R1'  },
            { curr: 'R0', input: 'b' , next: 'R2'  },
            { curr: 'R0', input: 'Δ' , next: 'REJECT'  },
            { curr: 'R1', input: 'a' , next: 'R3'  },
            { curr: 'R1', input: 'b' , next: 'REJECT'  },
            { curr: 'R1', input: 'Δ' , next: 'REJECT'  },
            { curr: 'R2', input: 'a' , next: 'REJECT'  },
            { curr: 'R2', input: 'b' , next: 'R3'  },
            { curr: 'R2', input: 'Δ' , next: 'REJECT'  },
            { curr: 'R3', input: 'a' , next: 'R4'  },
            { curr: 'R3', input: 'b' , next: 'R5'  },
            { curr: 'R3', input: 'Δ' , next: 'REJECT'  },
            { curr: 'R4', input: 'a' , next: 'R6'  },
            { curr: 'R4', input: 'b' , next: 'R7'  },
            { curr: 'R4', input: 'Δ' , next: 'REJECT'  },
            { curr: 'R5', input: 'a' , next: 'R6'  },
            { curr: 'R5', input: 'b' , next: 'R7'  },
            { curr: 'R5', input: 'Δ' , next: 'REJECT'  },
            { curr: 'R6', input: 'a' , next: 'R8'  },
            { curr: 'R6', input: 'b' , next: 'R9'  },
            { curr: 'R6', input: 'Δ' , next: 'REJECT'  },
            { curr: 'R7', input: 'a' , next: 'R10'  },
            { curr: 'R7', input: 'b' , next: 'R9'  },
            { curr: 'R7', input: 'Δ' , next: 'REJECT'  },
            { curr: 'R8', input: 'a' , next: 'R8'  },
            { curr: 'R8', input: 'b' , next: 'R9'  },
            { curr: 'R8', input: 'Δ' , next: 'ACCEPT'  },
            { curr: 'R9', input: 'a' , next: 'R10'  },
            { curr: 'R9', input: 'b' , next: 'R9'  },
            { curr: 'R9', input: 'Δ' , next: 'ACCEPT'  },
            { curr: 'R10', input: 'a' , next: 'R8'  },
            { curr: 'R10', input: 'b' , next: 'R9'  },
            { curr: 'R10', input: 'Δ' , next: 'ACCEPT'  }
        ],
        pdaBlocks: [
            { id: 'START', type: 'rect', label: 'START', x: 10, y: 230, w: 80, h: 40 },
            { id: 'R0', type: 'diamond', label: 'READ 0', x: 150, y: 250, w: 70, h: 50 },
            { id: 'REJ1', type: 'rect', label: 'REJECT', x: 225, y: 235, w: 70, h: 30 },
            { id: 'REJ2', type: 'rect', label: 'REJECT', x: 705, y: 40, w: 70, h: 30 },
            { id: 'REJ3', type: 'rect', label: 'REJECT', x: 705, y: 460, w: 70, h: 30 },
            { id: 'ACC', type: 'rect', label: 'ACCEPT', x: 1015, y: 100, w: 90, h: 40 },
            { id: 'R1', type: 'diamond', label: 'READ 1', x: 260, y: 120, w: 70, h: 50 },
            { id: 'R2', type: 'diamond', label: 'READ 2', x: 260, y: 380, w: 70, h: 50 },
            { id: 'R3', type: 'diamond', label: 'READ 3', x: 420, y: 250, w: 70, h: 50 },
            { id: 'R4', type: 'diamond', label: 'READ 4', x: 580, y: 120, w: 70, h: 50 },
            { id: 'R5', type: 'diamond', label: 'READ 5', x: 580, y: 380, w: 70, h: 50 },
            { id: 'R6', type: 'diamond', label: 'READ 6', x: 740, y: 120, w: 70, h: 50 },
            { id: 'R7', type: 'diamond', label: 'READ 7', x: 740, y: 380, w: 70, h: 50 },
            { id: 'R8', type: 'diamond', label: 'READ 8', x: 900, y: 120, w: 70, h: 50 },
            { id: 'R9', type: 'diamond', label: 'READ 9', x: 900, y: 380, w: 70, h: 50 },
            { id: 'R10', type: 'diamond', label: 'READ 10', x: 1060, y: 250, w: 70, h: 50 }
        ],
        pdaLines: [
            { from: 'START', to: 'R0', sideFrom: 'right', sideTo: 'left', label: 'Δ ' },
            { from: 'R0', to: 'R1', sideFrom: 'topRight', sideTo: 'bottomLeft', label: 'a ' },
            { from: 'R0', to: 'R2', sideFrom: 'bottomRight', sideTo: 'topLeft', label: 'b ' },
            
            { from: 'R0', to: 'REJ1', sideFrom: 'right', sideTo: 'left', label: 'Δ ' },
            { from: 'R1', to: 'REJ1', sideFrom: 'bottom', sideTo: 'top', label: 'b ', isCustomPath: true, path: 'M 260 145 Q 240 190 260 235', labelX: 230, labelY: 190 },
            { from: 'R1', to: 'REJ1', sideFrom: 'bottom', sideTo: 'top', label: 'Δ ', isCustomPath: true, path: 'M 260 145 Q 280 190 260 235', labelX: 290, labelY: 190 },
            { from: 'R2', to: 'REJ1', sideFrom: 'top', sideTo: 'bottom', label: 'a ', isCustomPath: true, path: 'M 260 355 Q 240 310 260 265', labelX: 230, labelY: 310 },
            { from: 'R2', to: 'REJ1', sideFrom: 'top', sideTo: 'bottom', label: 'Δ ', isCustomPath: true, path: 'M 260 355 Q 280 310 260 265', labelX: 290, labelY: 310 },
            { from: 'R3', to: 'REJ1', sideFrom: 'left', sideTo: 'right', label: 'Δ ' },

            { from: 'R1', to: 'R3', sideFrom: 'bottomRight', sideTo: 'topLeft', label: 'a ' },
            { from: 'R2', to: 'R3', sideFrom: 'topRight', sideTo: 'bottomLeft', label: 'b ' },

            { from: 'R3', to: 'R4', sideFrom: 'topRight', sideTo: 'bottomLeft', label: 'a ' },
            { from: 'R3', to: 'R5', sideFrom: 'bottomRight', sideTo: 'topLeft', label: 'b ' },

            { from: 'R4', to: 'R6', sideFrom: 'right', sideTo: 'left', label: 'a ' },
            { from: 'R4', to: 'R7', sideFrom: 'bottomRight', sideTo: 'topLeft', label: 'b ', labelX: 620, labelY: 190 },
            
            { from: 'R5', to: 'R6', sideFrom: 'topRight', sideTo: 'bottomLeft', label: 'a ', labelX: 620, labelY: 310 },
            { from: 'R5', to: 'R7', sideFrom: 'right', sideTo: 'left', label: 'b ' },

            { from: 'R6', to: 'R8', sideFrom: 'right', sideTo: 'left', label: 'a ' },
            { from: 'R6', to: 'R9', sideFrom: 'bottomRight', sideTo: 'topLeft', label: 'b ' },
            
            { from: 'R7', to: 'R9', sideFrom: 'right', sideTo: 'left', label: 'b ' },
            { from: 'R7', to: 'R10', sideFrom: 'bottom', sideTo: 'bottom', label: 'a ', isCustomPath: true, path: 'M 740 405 C 820 500, 980 500, 1060 275' },

            { from: 'R4', to: 'REJ2', sideFrom: 'top', sideTo: 'left', label: 'Δ ', isCustomPath: true, path: 'M 580 95 L 580 55 L 705 55', labelX: 595, labelY: 75 },
            { from: 'R6', to: 'REJ2', sideFrom: 'top', sideTo: 'bottom', label: 'Δ ', labelX: 725, labelY: 85 },
            { from: 'R8', to: 'REJ2', sideFrom: 'top', sideTo: 'right', label: 'Δ ', isCustomPath: true, path: 'M 900 95 L 900 55 L 775 55', labelX: 885, labelY: 75 },

            { from: 'R5', to: 'REJ3', sideFrom: 'bottom', sideTo: 'left', label: 'Δ ', isCustomPath: true, path: 'M 580 405 L 580 475 L 705 475', labelX: 595, labelY: 440 },
            { from: 'R7', to: 'REJ3', sideFrom: 'bottom', sideTo: 'top', label: 'Δ ', labelX: 725, labelY: 432 },
            { from: 'R9', to: 'REJ3', sideFrom: 'bottom', sideTo: 'right', label: 'Δ ', isCustomPath: true, path: 'M 900 405 L 900 475 L 775 475', labelX: 885, labelY: 440 },

            { from: 'R8', to: 'R8', sideFrom: 'right', sideTo: 'right', label: 'a ', isCustomPath: true, path: 'M 917.5 132.5 C 950 150, 950 90, 917.5 107.5', labelX: 955, labelY: 110 },
            { from: 'R8', to: 'R9', sideFrom: 'bottom', sideTo: 'top', label: 'b ' },
            { from: 'R8', to: 'ACC', sideFrom: 'right', sideTo: 'left', label: 'Δ ' },

            { from: 'R9', to: 'R9', sideFrom: 'right', sideTo: 'right', label: 'b ', isCustomPath: true, path: 'M 917.5 392.5 C 950 410, 950 350, 917.5 367.5', labelX: 956, labelY: 388 },
            { from: 'R9', to: 'R10', sideFrom: 'right', sideTo: 'bottomLeft', label: 'a ', isCustomPath: true, path: 'M 935 380 C 960 330, 1000 270, 1025 250' },
            { from: 'R9', to: 'ACC', sideFrom: 'right', sideTo: 'right', label: 'Δ ', isCustomPath: true, path: 'M 917.5 392.5 C 1150 450, 1150 120, 1105 120' },

            { from: 'R10', to: 'R8', sideFrom: 'topLeft', sideTo: 'right', label: 'a ' },
            { from: 'R10', to: 'R9', sideFrom: 'bottomLeft', sideTo: 'right', label: 'b ', isCustomPath: true, path: 'M 1042.5 262.5 C 1010 320, 950 380, 921 391' },
            { from: 'R10', to: 'ACC', sideFrom: 'top', sideTo: 'bottom', label: 'Δ ' }
        ]
    },
    '01': {
        regex: "(((101)+(111)*+(100))+(1+0+11)*)(1+0+01)*(111+000+101)(1+0)*",
        alphabet: ['0', '1'],
        startState: 'S0',
        acceptStates: ['S7', 'S9', 'S11', 'S12', 'S13', 'S14', 'S15'],
        dfa: [
            { curr: 'S0', input: '1', next: 'S1' },
            { curr: 'S0', input: '0', next: 'S2' },
            { curr: 'S1', input: '1', next: 'S3' },
            { curr: 'S1', input: '0', next: 'S4' },
            { curr: 'S2', input: '1', next: 'S5' },
            { curr: 'S2', input: '0', next: 'S6' },
            { curr: 'S3', input: '1', next: 'S7' },
            { curr: 'S3', input: '0', next: 'S8' },
            { curr: 'S4', input: '1', next: 'S9' },
            { curr: 'S4', input: '0', next: 'S6' },
            { curr: 'S5', input: '1', next: 'S10' },
            { curr: 'S5', input: '0', next: 'S8' },
            { curr: 'S6', input: '1', next: 'S5' },
            { curr: 'S6', input: '0', next: 'S11' },
            { curr: 'S7', input: '1', next: 'S12' },
            { curr: 'S7', input: '0', next: 'S13' },
            { curr: 'S8', input: '1', next: 'S9' },
            { curr: 'S8', input: '0', next: 'S6' },
            { curr: 'S9', input: '1', next: 'S14' },
            { curr: 'S9', input: '0', next: 'S13' },
            { curr: 'S10', input: '1', next: 'S14' },
            { curr: 'S10', input: '0', next: 'S8' },
            { curr: 'S11', input: '1', next: 'S9' },
            { curr: 'S11', input: '0', next: 'S11' },
            { curr: 'S12', input: '1', next: 'S15' },
            { curr: 'S12', input: '0', next: 'S13' },
            { curr: 'S13', input: '1', next: 'S9' },
            { curr: 'S13', input: '0', next: 'S11' },
            { curr: 'S14', input: '1', next: 'S14' },
            { curr: 'S14', input: '0', next: 'S13' },
            { curr: 'S15', input: '1', next: 'S7' },
            { curr: 'S15', input: '0', next: 'S13' }
        ],
        dfaBlocks: [
            { id: 'S0', type: 'circle', label: 'S0', x: 80, y: 280, w: 50, h: 50 },
            { id: 'S1', type: 'circle', label: 'S1', x: 220, y: 140, w: 50, h: 50 },
            { id: 'S2', type: 'circle', label: 'S2', x: 220, y: 420, w: 50, h: 50 },
            { id: 'S3', type: 'circle', label: 'S3', x: 380, y: 70, w: 50, h: 50 },
            { id: 'S4', type: 'circle', label: 'S4', x: 380, y: 210, w: 50, h: 50 },
            { id: 'S5', type: 'circle', label: 'S5', x: 380, y: 350, w: 50, h: 50 },
            { id: 'S6', type: 'circle', label: 'S6', x: 380, y: 490, w: 50, h: 50 },
            { id: 'S7', type: 'circle', label: 'S7', x: 560, y: 70, w: 50, h: 50 },
            { id: 'S8', type: 'circle', label: 'S8', x: 560, y: 280, w: 50, h: 50 },
            { id: 'S11', type: 'circle', label: 'S11', x: 560, y: 490, w: 50, h: 50 },
            { id: 'S12', type: 'circle', label: 'S12', x: 740, y: 70, w: 50, h: 50 },
            { id: 'S9', type: 'circle', label: 'S9', x: 740, y: 280, w: 50, h: 50 },
            { id: 'S10', type: 'circle', label: 'S10', x: 740, y: 420, w: 50, h: 50 },
            { id: 'S15', type: 'circle', label: 'S15', x: 920, y: 70, w: 50, h: 50 },
            { id: 'S13', type: 'circle', label: 'S13', x: 920, y: 280, w: 50, h: 50 },
            { id: 'S14', type: 'circle', label: 'S14', x: 1080, y: 280, w: 50, h: 50 }
        ],
        dfaLines: [
            { from: 'S0', to: 'S1', label: '1' },
            { from: 'S0', to: 'S2', label: '0' },
            { from: 'S1', to: 'S3', label: '1' },
            { from: 'S1', to: 'S4', label: '0' },
            { from: 'S2', to: 'S5', label: '1' },
            { from: 'S2', to: 'S6', label: '0' },
            { from: 'S3', to: 'S7', label: '1' },
            { from: 'S3', to: 'S8', label: '0' },
            { from: 'S4', to: 'S9', label: '1' },
            { from: 'S4', to: 'S6', label: '0' },
            { from: 'S5', to: 'S10', label: '1' },
            { from: 'S5', to: 'S8', label: '0' },
            { from: 'S6', to: 'S5', label: '1', curve: 25 },
            { from: 'S6', to: 'S11', label: '0' },
            { from: 'S7', to: 'S12', label: '1' },
            { from: 'S7', to: 'S13', label: '0' },
            { from: 'S8', to: 'S9', label: '1' },
            { from: 'S8', to: 'S6', label: '0' },
            { from: 'S9', to: 'S14', label: '1' },
            { from: 'S9', to: 'S13', label: '0', curve: 25 },
            { from: 'S10', to: 'S14', label: '1' },
            { from: 'S10', to: 'S8', label: '0' },
            { from: 'S11', to: 'S9', label: '1' },
            { from: 'S11', to: 'S11', label: '0', isCustomPath: true, path: 'M 550 510 C 530 550, 590 550, 570 510', labelX: 560, labelY: 545 },
            { from: 'S12', to: 'S15', label: '1' },
            { from: 'S12', to: 'S13', label: '0' },
            { from: 'S13', to: 'S9', label: '1', curve: 25 },
            { from: 'S13', to: 'S11', label: '0' },
            { from: 'S14', to: 'S14', label: '1', labelY: 235 },
            { from: 'S14', to: 'S13', label: '0' },
            { from: 'S15', to: 'S7', label: '1', isCustomPath: true, path: 'M 910 55 C 800 20, 680 20, 570 55', labelX: 740, labelY: 25 },
            { from: 'S15', to: 'S13', label: '0' }
        ],
        cfg: `S → X Y Z W\nX → 101 | 100 | 111X | U\nU → 1U | 0U | 11U | λ \nY → 1Y | 0Y | 01Y | λ \nZ → 111 | 000 | 101\nW → 1W | 0W | λ `,
        
        pda: [
            { curr: 'START', input: 'Δ' , next: 'R0'  },
            { curr: 'R0', input: '1' , next: 'R1'  },
            { curr: 'R0', input: '0' , next: 'R2'  },
            { curr: 'R0', input: 'Δ' , next: 'REJECT'  },
            { curr: 'R1', input: '1' , next: 'R3'  },
            { curr: 'R1', input: '0' , next: 'R4'  },
            { curr: 'R1', input: 'Δ' , next: 'REJECT'  },
            { curr: 'R2', input: '1' , next: 'R5'  },
            { curr: 'R2', input: '0' , next: 'R6'  },
            { curr: 'R2', input: 'Δ' , next: 'REJECT'  },
            { curr: 'R3', input: '1' , next: 'R7'  },
            { curr: 'R3', input: '0' , next: 'R8'  },
            { curr: 'R3', input: 'Δ' , next: 'REJECT'  },
            { curr: 'R4', input: '1' , next: 'R9'  },
            { curr: 'R4', input: '0' , next: 'R6'  },
            { curr: 'R4', input: 'Δ' , next: 'REJECT'  },
            { curr: 'R5', input: '1' , next: 'R10'  },
            { curr: 'R5', input: '0' , next: 'R8'  },
            { curr: 'R5', input: 'Δ' , next: 'REJECT'  },
            { curr: 'R6', input: '1' , next: 'R5'  },
            { curr: 'R6', input: '0' , next: 'R11'  },
            { curr: 'R6', input: 'Δ' , next: 'REJECT'  },
            { curr: 'R8', input: '1' , next: 'R9'  },
            { curr: 'R8', input: '0' , next: 'R6'  },
            { curr: 'R8', input: 'Δ' , next: 'REJECT'  },
            { curr: 'R10', input: '1' , next: 'R14'  },
            { curr: 'R10', input: '0' , next: 'R8'  },
            { curr: 'R10', input: 'Δ' , next: 'REJECT'  },
            { curr: 'R7', input: '1' , next: 'R12'  },
            { curr: 'R7', input: '0' , next: 'R13'  },
            { curr: 'R7', input: 'Δ' , next: 'ACCEPT'  },
            { curr: 'R9', input: '1' , next: 'R14'  },
            { curr: 'R9', input: '0' , next: 'R13'  },
            { curr: 'R9', input: 'Δ' , next: 'ACCEPT'  },
            { curr: 'R11', input: '1' , next: 'R9'  },
            { curr: 'R11', input: '0' , next: 'R11'  },
            { curr: 'R11', input: 'Δ' , next: 'ACCEPT'  },
            { curr: 'R12', input: '1' , next: 'R15'  },
            { curr: 'R12', input: '0' , next: 'R13'  },
            { curr: 'R12', input: 'Δ' , next: 'ACCEPT'  },
            { curr: 'R13', input: '1' , next: 'R9'  },
            { curr: 'R13', input: '0' , next: 'R11'  },
            { curr: 'R13', input: 'Δ' , next: 'ACCEPT'  },
            { curr: 'R14', input: '1' , next: 'R14'  },
            { curr: 'R14', input: '0' , next: 'R13'  },
            { curr: 'R14', input: 'Δ' , next: 'ACCEPT'  },
            { curr: 'R15', input: '1' , next: 'R7'  },
            { curr: 'R15', input: '0' , next: 'R13'  },
            { curr: 'R15', input: 'Δ' , next: 'ACCEPT'  }
        ],
        pdaBlocks: [
            { id: 'START', type: 'rect', label: 'START', x: 160, y: 100, w: 60, h: 30 },
            { id: 'ACC', type: 'rect', label: 'ACCEPT', x: 1140, y: 50, w: 70, h: 30 },
            { id: 'R0', type: 'diamond', label: 'READ 0', x: 160, y: 250, w: 70, h: 40 },
            { id: 'R1', type: 'diamond', label: 'READ 1', x: 300, y: 150, w: 70, h: 40 },
            { id: 'R2', type: 'diamond', label: 'READ 2', x: 300, y: 350, w: 70, h: 40 },
            { id: 'R3', type: 'diamond', label: 'READ 3', x: 440, y: 150, w: 70, h: 40 },
            { id: 'R4', type: 'diamond', label: 'READ 4', x: 580, y: 350, w: 70, h: 40 },
            { id: 'R5', type: 'diamond', label: 'READ 5', x: 440, y: 550, w: 70, h: 40 },
            { id: 'R6', type: 'diamond', label: 'READ 6', x: 720, y: 450, w: 70, h: 40 },
            { id: 'R7', type: 'diamond', label: 'READ 7', x: 720, y: 150, w: 70, h: 40 },
            { id: 'R8', type: 'diamond', label: 'READ 8', x: 580, y: 550, w: 70, h: 40 },
            { id: 'R9', type: 'diamond', label: 'READ 9', x: 1140, y: 350, w: 70, h: 40 },
            { id: 'R10', type: 'diamond', label: 'READ 10', x: 440, y: 650, w: 80, h: 40 },
            { id: 'R11', type: 'diamond', label: 'READ 11', x: 1000, y: 450, w: 80, h: 40 },
            { id: 'R12', type: 'diamond', label: 'READ 12', x: 790, y: 250, w: 80, h: 40 },
            { id: 'R13', type: 'diamond', label: 'READ 13', x: 1000, y: 150, w: 80, h: 40 },
            { id: 'R14', type: 'diamond', label: 'READ 14', x: 1140, y: 150, w: 80, h: 40 },
            { id: 'R15', type: 'diamond', label: 'READ 15', x: 860, y: 150, w: 80, h: 40 }
        ],
        pdaLines: [
            { from: 'START', to: 'R0', sideFrom: 'bottom', sideTo: 'top', label: 'Δ ' },
            { from: 'R0', to: 'R1', sideFrom: 'topRight', sideTo: 'left', label: '1 ' },
            { from: 'R0', to: 'R2', sideFrom: 'bottomRight', sideTo: 'left', label: '0 ' },
            { from: 'R1', to: 'R3', sideFrom: 'right', sideTo: 'left', label: '1 ' },
            { from: 'R1', to: 'R4', sideFrom: 'bottomRight', sideTo: 'topLeft', label: '0 ' },
            { from: 'R2', to: 'R5', sideFrom: 'bottomRight', sideTo: 'topLeft', label: '1 ', isCustomPath: true, path: 'M 282.5 360 C 250 420, 350 510, 422.5 540', labelX: 295, labelY: 450 },
            { from: 'R2', to: 'R6', sideFrom: 'bottomRight', sideTo: 'topLeft', label: '0 ' },
            { from: 'R3', to: 'R7', sideFrom: 'right', sideTo: 'left', label: '1 ', labelX: 500, labelY: 135 },
            { from: 'R3', to: 'R8', sideFrom: 'bottomRight', sideTo: 'topLeft', label: '0 ', isCustomPath: true, path: 'M 440 170 C 400 300, 480 480, 562.5 540', labelX: 415, labelY: 340 },
            { from: 'R4', to: 'R9', sideFrom: 'right', sideTo: 'left', label: '1 ' },
            { from: 'R4', to: 'R6', sideFrom: 'bottomRight', sideTo: 'topLeft', label: '0 ' },
            { from: 'R5', to: 'R10', sideFrom: 'bottom', sideTo: 'top', label: '1 ', labelX: 425, labelY: 600 },
            { from: 'R5', to: 'R8', sideFrom: 'right', sideTo: 'left', label: '0 ' },
            { from: 'R6', to: 'R5', sideFrom: 'bottomLeft', sideTo: 'bottomRight', label: '1 ' },
            { from: 'R6', to: 'R11', sideFrom: 'right', sideTo: 'left', label: '0 ', labelX: 800, labelY: 442 },
            { from: 'R7', to: 'R12', sideFrom: 'bottomRight', sideTo: 'topLeft', label: '1 ' },
            { from: 'R7', to: 'R13', sideFrom: 'right', sideTo: 'left', label: '0 ', isCustomPath: true, path: 'M 755 150 C 860 70, 960 70, 965 150' },
            { from: 'R8', to: 'R9', sideFrom: 'topRight', sideTo: 'bottomLeft', label: '1 ', labelX: 960, labelY: 406 },
            { from: 'R8', to: 'R6', sideFrom: 'topRight', sideTo: 'bottomLeft', label: '0 ' },
            { from: 'R9', to: 'R14', sideFrom: 'top', sideTo: 'bottom', label: '1 ', labelX: 1125, labelY: 250 },
            { from: 'R9', to: 'R13', sideFrom: 'topLeft', sideTo: 'bottomRight', label: '0 ' },
            { from: 'R10', to: 'R14', sideFrom: 'right', sideTo: 'right', label: '1 ', isCustomPath: true, path: 'M 480 650 L 1220 650 L 1220 150 L 1180 150' },
            { from: 'R10', to: 'R8', sideFrom: 'topRight', sideTo: 'bottomLeft', label: '0 ' },
            { from: 'R11', to: 'R9', sideFrom: 'topRight', sideTo: 'bottomLeft', label: '1 ' },
            { from: 'R11', to: 'R11', sideFrom: 'bottom', sideTo: 'right', label: '0 ', isCustomPath: true, path: 'M 1000 470 C 970 520, 1070 520, 1035 455' },
            { from: 'R12', to: 'R15', sideFrom: 'topRight', sideTo: 'bottomLeft', label: '1 ' },
            { from: 'R12', to: 'R13', sideFrom: 'topRight', sideTo: 'bottomLeft', label: '0 ' },
            { from: 'R13', to: 'R9', sideFrom: 'bottomRight', sideTo: 'topLeft', label: '1 ' },
            { from: 'R13', to: 'R11', sideFrom: 'bottom', sideTo: 'top', label: '0 ', labelX: 985, labelY: 300 },
            { from: 'R14', to: 'R14', sideFrom: 'top', sideTo: 'right', label: '1 ', isCustomPath: true, path: 'M 1140 130 C 1170 80, 1220 120, 1175 150', labelX: 1180, labelY: 105 },
            { from: 'R14', to: 'R13', sideFrom: 'left', sideTo: 'right', label: '0 ' },
            { from: 'R15', to: 'R7', sideFrom: 'left', sideTo: 'right', label: '1 ' },
            { from: 'R15', to: 'R13', sideFrom: 'right', sideTo: 'left', label: '0 ' },
            { from: 'R7', to: 'ACC', sideFrom: 'top', sideTo: 'left', label: 'Δ ', isCustomPath: true, path: 'M 720 130 L 720 65 L 1140 65' },
            { from: 'R15', to: 'ACC', sideFrom: 'top', sideTo: 'left', label: 'Δ ', isCustomPath: true, path: 'M 860 130 L 860 65 L 1140 65' },
            { from: 'R13', to: 'ACC', sideFrom: 'top', sideTo: 'left', label: 'Δ ', isCustomPath: true, path: 'M 1000 130 L 1000 65 L 1140 65' },
            { from: 'R14', to: 'ACC', sideFrom: 'left', sideTo: 'bottom', label: 'Δ ' },
            { from: 'R9', to: 'ACC', sideFrom: 'right', sideTo: 'right', label: 'Δ ', isCustomPath: true, path: 'M 1175 350 L 1260 350 L 1260 65 L 1210 65' },
            { from: 'R11', to: 'ACC', sideFrom: 'right', sideTo: 'right', label: 'Δ ', isCustomPath: true, path: 'M 1040 450 L 1260 450 L 1260 65 L 1210 65' },
            { from: 'R0', to: 'REJ1', sideFrom: 'topRight', sideTo: 'bottom', label: 'Δ ', isCustomPath: true, path: 'M 177.5 240 C 180 160, 220 120, 270 115', labelX: 200, labelY: 160 },
            { from: 'R1', to: 'REJ1', sideFrom: 'topLeft', sideTo: 'bottom', label: 'Δ ', labelX: 282, labelY: 132 },
            { from: 'R3', to: 'REJ1', sideFrom: 'topLeft', sideTo: 'bottom', label: 'Δ ', labelX: 346, labelY: 132 },
            { from: 'R2', to: 'REJ2', sideFrom: 'bottomLeft', sideTo: 'top', label: 'Δ ' },
            { from: 'R5', to: 'REJ2', sideFrom: 'left', sideTo: 'right', label: 'Δ ' },
            { from: 'R10', to: 'REJ2', sideFrom: 'topLeft', sideTo: 'bottom', label: 'Δ ' },
            { from: 'R4', to: 'REJ1', sideFrom: 'top', sideTo: 'right', label: 'Δ ', isCustomPath: true, path: 'M 580 330 L 580 100 L 305 100', labelX: 565, labelY: 200 },
            { from: 'R6', to: 'REJ3', sideFrom: 'bottomRight', sideTo: 'left', label: 'Δ ' },
            { from: 'R8', to: 'REJ3', sideFrom: 'right', sideTo: 'left', label: 'Δ ' },
            { from: 'R12', to: 'REJ3', sideFrom: 'bottom', sideTo: 'top', label: 'Δ ', labelX: 780, labelY: 390 }
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
let isDraggingGraph = false;
let dragStartX = 0;
let dragStartY = 0;
let startViewBoxX = 0;
let startViewBoxY = 0;

let pdaBaseViewBox = null;
let pdaViewBox = null;
let pdaZoomLevel = 1;
let isDraggingPda = false;
let pdaDragStartX = 0;
let pdaDragStartY = 0;
let startPdaViewBoxX = 0;
let startPdaViewBoxY = 0;

let activeTrace = {
    frames: [],
    index: 0,
    playing: false,
    inputString: ''
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
    const pdaContainer = document.getElementById('pda-canvas-container');

    canvasContainer.addEventListener('mousemove', onGraphMouseMove);
    canvasContainer.addEventListener('mouseleave', () => {
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
    canvasContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        adjustGraphZoom(e.deltaY < 0 ? 1.1 : 0.9);
    });

    if (pdaContainer) {
        pdaContainer.addEventListener('mousemove', onPdaMouseMove);
        pdaContainer.addEventListener('mouseleave', () => {
            isDraggingPda = false;
            pdaContainer.style.cursor = 'grab';
        });
        pdaContainer.addEventListener('mousedown', (e) => {
            isDraggingPda = true;
            pdaDragStartX = e.clientX;
            pdaDragStartY = e.clientY;
            startPdaViewBoxX = pdaViewBox.x;
            startPdaViewBoxY = pdaViewBox.y;
            pdaContainer.style.cursor = 'grabbing';
        });
        pdaContainer.addEventListener('wheel', (e) => {
            e.preventDefault();
            adjustGraphZoom(e.deltaY < 0 ? 1.1 : 0.9);
        });
    }

    window.addEventListener('mouseup', () => {
        if (isDraggingGraph) {
            isDraggingGraph = false;
            canvasContainer.style.cursor = 'grab';
        }
        if (isDraggingPda && pdaContainer) {
            isDraggingPda = false;
            pdaContainer.style.cursor = 'grab';
        }
    });

    document.getElementById('btn-finalize').addEventListener('click', toggleDockMode);
    document.getElementById('btn-clear-history').addEventListener('click', clearHistory);
    document.getElementById('btn-toggle-generator').addEventListener('click', toggleGeneratorPanel);
    document.getElementById('btn-run-generator').addEventListener('click', runAutoGenerator);
    document.getElementById('computation-toggle').addEventListener('click', toggleComputationPanel);
}

function toggleComputationPanel() {
    const body = document.getElementById('computation-body');
    const chevron = document.getElementById('computation-chevron');
    body.classList.toggle('hidden');
    chevron.style.transform = body.classList.contains('hidden') ? 'rotate(-90deg)' : 'rotate(0deg)';
}

function toggleGeneratorPanel() {
    const panel = document.getElementById('generator-panel');
    panel.classList.toggle('hidden');
}

function runAutoGenerator() {
    const minLen = Math.max(1, parseInt(document.getElementById('gen-min-len').value, 10) || 1);
    const maxLen = Math.max(minLen, parseInt(document.getElementById('gen-max-len').value, 10) || 6);
    const totalCount = parseInt(document.getElementById('gen-count').value, 10) || 6;
    const status = document.getElementById('generator-status');

    const machine = automataData[currentAlphabet];
    const alphabet = machine.alphabet;

    // We want roughly half accepted and half rejected
    const acceptCount = Math.ceil(totalCount / 2);
    const rejectCount = totalCount - acceptCount;

    const acceptedStrings = new Set();
    const rejectedStrings = new Set();

    // Generate ACCEPTED strings by doing random walks and keeping those that land on accept states
    let attempts = 0;
    const maxAttempts = 5000;

    while (acceptedStrings.size < acceptCount && attempts < maxAttempts) {
        attempts++;
        const len = minLen + Math.floor(Math.random() * (maxLen - minLen + 1));
        const str = generateRandomString(alphabet, len);
        const result = simulateDFA(str);
        if (result.isAccepted && !acceptedStrings.has(str)) {
            acceptedStrings.add(str);
        }
    }

    // Try guided walk to accept states if random wasn't enough
    if (acceptedStrings.size < acceptCount) {
        const guided = generateGuidedAcceptedStrings(machine, minLen, maxLen, acceptCount - acceptedStrings.size, acceptedStrings);
        guided.forEach(s => acceptedStrings.add(s));
    }

    // Generate REJECTED strings by random walks, keeping those that do NOT land on accept states
    attempts = 0;
    while (rejectedStrings.size < rejectCount && attempts < maxAttempts) {
        attempts++;
        const len = minLen + Math.floor(Math.random() * (maxLen - minLen + 1));
        const str = generateRandomString(alphabet, len);
        const result = simulateDFA(str);
        if (!result.isAccepted && !rejectedStrings.has(str) && !acceptedStrings.has(str)) {
            rejectedStrings.add(str);
        }
    }

    // Combine and shuffle
    const allStrings = [...acceptedStrings, ...rejectedStrings];
    shuffleArray(allStrings);

    // Clear existing rows and populate new ones
    clearAllTestRows();
    const firstInput = document.getElementById(`input-${testRowIds[0]}`);
    if (firstInput && allStrings.length > 0) {
        firstInput.value = allStrings[0];
    }
    for (let i = 1; i < allStrings.length; i++) {
        addTestRow();
        const lastId = testRowIds[testRowIds.length - 1];
        const inp = document.getElementById(`input-${lastId}`);
        if (inp) inp.value = allStrings[i];
    }

    // Show status
    status.classList.remove('hidden');
    status.textContent = `Generated ${acceptedStrings.size} accepted + ${rejectedStrings.size} rejected string${allStrings.length !== 1 ? 's' : ''} (length ${minLen}–${maxLen}). Click "Validate All Cases" to test them.`;
}

function generateRandomString(alphabet, length) {
    let s = '';
    for (let i = 0; i < length; i++) {
        s += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return s;
}

function generateGuidedAcceptedStrings(machine, minLen, maxLen, needed, existing) {
    // BFS/DFS from start state, collecting paths that reach accept states within length range
    const results = [];
    const queue = [{ state: machine.startState, path: '' }];

    while (queue.length > 0 && results.length < needed) {
        const { state, path } = queue.shift();

        if (path.length >= minLen && path.length <= maxLen && machine.acceptStates.includes(state) && !existing.has(path)) {
            results.push(path);
            if (results.length >= needed) break;
        }

        if (path.length >= maxLen) continue;

        // Expand transitions in random order for variety
        const syms = [...machine.alphabet];
        shuffleArray(syms);
        for (const sym of syms) {
            const trans = machine.dfa.find(t => t.curr === state && t.input === sym);
            if (trans) {
                const nextState = trans.next;
                if (!isTrapState(nextState)) {
                    queue.push({ state: nextState, path: path + sym });
                }
            }
        }

        // Cap the queue to prevent memory issues with large graphs
        if (queue.length > 10000) queue.length = 10000;
    }

    return results;
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function addHistoryEntry(inputStr, accepted, frames) {
    const list = document.getElementById('history-list');
    const empty = document.getElementById('history-empty');
    if (empty) empty.remove();

    const historyIdx = traceHistory.length;
    traceHistory.push({ inputStr, accepted, frames });

    const item = document.createElement('div');
    item.className = 'history-item';
    item.innerHTML = `
        <span class="history-string" title="${inputStr}">${inputStr || '(empty)'}</span>
        <span class="${accepted ? 'history-badge-accepted' : 'history-badge-rejected'}">${accepted ? 'Accepted' : 'Rejected'}</span>
    `;
    list.prepend(item);

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
    select.innerHTML = '<option value="">— pick a string —</option>';
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
    activeTrace.inputString = entry.inputStr;
    showTraceControls();
    renderTraceStep();
    if (currentTab === 'dfa') playTraceAnimation();
}

let isDocked = false;

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
    const ids = [...testRowIds];
    let i = 0;

    function runNext() {
        if (i >= ids.length) return;
        const id = ids[i++];

        const rowEl = document.querySelector(`[data-row-id="${id}"]`);
        const inputEl = document.getElementById(`input-${id}`);
        const badge = document.getElementById(`badge-${id}`);
        const detail = document.getElementById(`detail-${id}`);
        const validateBtn = document.getElementById(`action-validate-${id}`);
        const inputVal = inputEl ? inputEl.value.trim() : '';

        if (!inputVal) {
            runNext();
            return;
        }

        if (rowEl) rowEl.classList.add('testing-active');
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

            activeTrace.frames = result.animationFrames;
            activeTrace.index = 0;
            activeTrace.inputString = inputVal;
            showTraceControls();
            renderTraceStep();

            if (currentTab === 'dfa') {
                if (activeAnimationTimeout) clearInterval(activeAnimationTimeout);
                activeTrace.playing = true;
                updateTraceControlsUI();

                activeAnimationTimeout = setInterval(() => {
                    if (activeTrace.index >= activeTrace.frames.length - 1) {
                        clearInterval(activeAnimationTimeout);
                        activeAnimationTimeout = null;
                        activeTrace.playing = false;
                        updateTraceControlsUI();
                        if (rowEl) rowEl.classList.remove('testing-active');
                        setTimeout(runNext, 1200);
                        return;
                    }
                    activeTrace.index++;
                    renderTraceStep();
                }, 900);
            } else {
                if (rowEl) rowEl.classList.remove('testing-active');
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
                    <td class="p-3" style="color:#6366f1">${row.next}</td>
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
    const nodes = data.dfaBlocks;
    const padding = 55;
    const minX = Math.min(...nodes.map(n => n.x)) - padding - 25;
    const minY = Math.min(...nodes.map(n => n.y)) - padding - 30;
    const maxX = Math.max(...nodes.map(n => n.x)) + padding + 25;
    const maxY = Math.max(...nodes.map(n => n.y)) + padding + 30;
    graphBaseViewBox = { x: minX, y: minY, w: maxX - minX, h: maxY - minY };
    graphViewBox = { ...graphBaseViewBox };
    graphZoomLevel = 1;
}

function computePdaBaseViewBox() {
    const w = currentAlphabet === 'ab' ? 1300 : 1350;
    const h = currentAlphabet === 'ab' ? 550 : 700;
    pdaBaseViewBox = { x: 0, y: 0, w, h };
    pdaViewBox = { ...pdaBaseViewBox };
    pdaZoomLevel = 1;
}

function getEffectiveViewBox() {
    if (!graphViewBox) computeGraphBaseViewBox();
    const cx = graphViewBox.x + graphViewBox.w / 2;
    const cy = graphViewBox.y + graphViewBox.h / 2;
    const w = graphViewBox.w / graphZoomLevel;
    const h = graphViewBox.h / graphZoomLevel;
    return { x: cx - w / 2, y: cy - h / 2, w, h };
}

function getEffectivePdaViewBox() {
    if (!pdaViewBox) computePdaBaseViewBox();
    const cx = pdaViewBox.x + pdaViewBox.w / 2;
    const cy = pdaViewBox.y + pdaViewBox.h / 2;
    const w = pdaViewBox.w / pdaZoomLevel;
    const h = pdaViewBox.h / pdaZoomLevel;
    return { x: cx - w / 2, y: cy - h / 2, w, h };
}

function fitGraphToView() {
    if (currentTab === 'pda') {
        computePdaBaseViewBox();
        renderPDAGraph();
    } else {
        computeGraphBaseViewBox();
        renderSVGGraph(getTraceFrameState());
    }
}

function adjustGraphZoom(factor) {
    if (currentTab === 'pda') {
        pdaZoomLevel = Math.min(4, Math.max(0.35, pdaZoomLevel * factor));
        renderPDAGraph();
    } else {
        graphZoomLevel = Math.min(4, Math.max(0.35, graphZoomLevel * factor));
        renderSVGGraph(getTraceFrameState());
    }
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

    const viewHeight = currentAlphabet === 'ab' ? 500 : 600;
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

    const nodes = {};
    data.dfaBlocks.forEach(b => nodes[b.id] = b);

    data.dfaLines.forEach(line => {
        const src = line.from;
        const dest = line.to;
        const sym = line.label;

        const nSrc = nodes[src];
        const nDest = nodes[dest];
        if (!nSrc || !nDest) return;

        const activeLabels = sym.split(',').map(s => s.trim());
        const isActiveTransition = activeTransition &&
            activeTransition.src === src &&
            activeTransition.dest === dest &&
            activeLabels.includes(activeTransition.sym);

        const strokeColor = isActiveTransition ? TRACE_HIGHLIGHT.edge : theme.edge;
        const strokeWidth = isActiveTransition ? '3' : '1.5';
        const markerId = isActiveTransition ? 'url(#arrow-trace)' : 'url(#arrow)';

        let pathD = '';
        let textX = 0;
        let textY = 0;

        if (line.isCustomPath) {
            pathD = line.path;
            textX = nSrc.x;
            textY = nSrc.y - 30; // fallback if not supplied
        } else {
            const dx = nDest.x - nSrc.x;
            const dy = nDest.y - nSrc.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (src === dest) {
                pathD = `M ${nSrc.x - 6} ${nSrc.y - 19} C ${nSrc.x - 25} ${nSrc.y - 50}, ${nSrc.x + 25} ${nSrc.y - 50}, ${nSrc.x + 6} ${nSrc.y - 19}`;
                textX = nSrc.x;
                textY = nSrc.y - 44;
            } else {
                const x1 = nSrc.x + (dx / dist) * nodeRadius;
                const y1 = nSrc.y + (dy / dist) * nodeRadius;
                const x2 = nDest.x - (dx / dist) * nodeRadius;
                const y2 = nDest.y - (dy / dist) * nodeRadius;

                if (line.curve) {
                    const mx = (nSrc.x + nDest.x) / 2;
                    const my = (nSrc.y + nDest.y) / 2;
                    const px = -dy / dist * line.curve;
                    const py = dx / dist * line.curve;

                    pathD = `M ${x1} ${y1} Q ${mx + px} ${my + py} ${x2} ${y2}`;
                    textX = mx + px * 1.2;
                    textY = my + py * 1.2;
                } else {
                    pathD = `M ${x1} ${y1} L ${x2} ${y2}`;
                    textX = (x1 + x2) / 2;
                    textY = (y1 + y2) / 2 - 7;
                }
            }
        }

        // Apply explicit coordinate overrides
        if (line.labelX !== undefined) textX = line.labelX;
        if (line.labelY !== undefined) textY = line.labelY;

        svgHtml += `
            <path d="${pathD}" fill="none" stroke="${strokeColor}" stroke-width="${strokeWidth}" marker-end="${markerId}" />
            <text class="graph-label" x="${textX}" y="${textY}" fill="${isActiveTransition ? TRACE_HIGHLIGHT.edge : theme.label}" font-size="11" text-anchor="middle" font-family="monospace" font-weight="bold">${sym}</text>
        `;
    });

    data.dfaBlocks.forEach(block => {
        const nodeId = block.id;
        const node = block;
        const isAccept = data.acceptStates.includes(nodeId);
        const isStart = nodeId === data.startState;
        const isActiveNode = activeState === nodeId;
        const isTrap = isTrapState(nodeId);

        let fillStyle = isActiveNode ? TRACE_HIGHLIGHT.fill : (isTrap ? theme.trapFill : theme.nodeFill);
        let strokeStyle = isActiveNode ? TRACE_HIGHLIGHT.stroke : (isAccept ? theme.acceptStroke : (isTrap ? theme.trapStroke : theme.nodeStroke));
        let textColor = isActiveNode ? TRACE_HIGHLIGHT.text : theme.text;

        const tooltipLines = getStateTransitionTooltip(data, nodeId);

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
    const trans = data.dfa.filter(t => t.curr === nodeId);
    if (!trans.length) return `${nodeId}: (no outgoing transitions)`;
    const parts = trans.map(t => `on ${t.input} → ${t.next}`);
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

function onPdaMouseMove(e) {
    if (isDraggingPda) {
        const container = document.getElementById('pda-canvas-container');
        const effectiveViewBox = getEffectivePdaViewBox();
        const ratio = effectiveViewBox.w / container.clientWidth;

        const dx = (e.clientX - pdaDragStartX) * ratio;
        const dy = (e.clientY - pdaDragStartY) * ratio;

        pdaViewBox.x = startPdaViewBoxX - dx;
        pdaViewBox.y = startPdaViewBoxY - dy;

        renderPDAGraph();
    }
}

function hideGraphTooltip() {
    const tooltip = document.getElementById('graph-tooltip');
    if (tooltip) tooltip.classList.add('hidden');
}

function renderPDAGraph() {
    const data = automataData[currentAlphabet];
    const container = document.getElementById('pda-canvas-container');
    if (!container) return;

    const viewWidth = currentAlphabet === 'ab' ? 1300 : 1350;
    const viewHeight = currentAlphabet === 'ab' ? 550 : 700;
    const theme = getGraphTheme();
    const eff = getEffectivePdaViewBox();

    let pdaSvgHtml = `<svg width="100%" height="${viewHeight}" viewBox="${eff.x} ${eff.y} ${eff.w} ${eff.h}" preserveAspectRatio="xMidYMid meet" class="mx-auto" style="cursor: ${isDraggingPda ? 'grabbing' : 'grab'};">`;

    pdaSvgHtml += `
        <defs>
            <marker id="pda-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="${theme.edge}" />
            </marker>
        </defs>
    `;

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
            if (side === 'bottomLeft') return { x: block.x - block.w / 4, y: block.y + block.h / 4 };
            if (side === 'bottomRight') return { x: block.x + block.w / 4, y: block.y + block.h / 4 };
        }
        return { x: block.x, y: block.y };
    };

    // Loop 1: Draw all paths first
    data.pdaLines.forEach(line => {
        const fromBlock = data.pdaBlocks.find(b => b.id === line.from);
        const toBlock = data.pdaBlocks.find(b => b.id === line.to);
        if (!fromBlock || !toBlock) return;

        const p1 = getSideCoord(fromBlock, line.sideFrom);
        const p2 = getSideCoord(toBlock, line.sideTo);
        const pathD = line.isCustomPath ? line.path : `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`;

        pdaSvgHtml += `<path d="${pathD}" fill="none" stroke="${theme.edge}" stroke-width="2" marker-end="url(#pda-arrow)" stroke-dasharray="${line.label === 'λ ' ? '4 4' : 'none'}" />`;
    });

    // Loop 2: Draw all labels on top
    data.pdaLines.forEach(line => {
        const fromBlock = data.pdaBlocks.find(b => b.id === line.from);
        const toBlock = data.pdaBlocks.find(b => b.id === line.to);
        if (!fromBlock || !toBlock) return;

        if (line.label) {
            const p1 = getSideCoord(fromBlock, line.sideFrom);
            const p2 = getSideCoord(toBlock, line.sideTo);
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
            if (line.labelX !== undefined) tx = line.labelX;
            if (line.labelY !== undefined) ty = line.labelY;
            pdaSvgHtml += `<text class="graph-label" x="${tx}" y="${ty}" fill="#d97706" font-size="12" font-family="monospace" font-weight="bold" text-anchor="middle">${line.label}</text>`;
        }
    });

    data.pdaBlocks.forEach(block => {
        if (block.type === 'rect') {
            let strokeColor = theme.nodeStroke;
            let fillColor = theme.nodeFill;
            if (block.label === 'ACCEPT') { strokeColor = theme.acceptStroke; fillColor = document.documentElement.getAttribute('data-theme') === 'dark' ? '#064e3b' : '#ecfdf5'; }
            if (block.label === 'REJECT') { strokeColor = theme.trapStroke; fillColor = theme.trapFill; }

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
        
        const trans = machine.dfa.find(t => t.curr === currentState && t.input === char);
        if (trans) {
            const nextState = trans.next;
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

        addHistoryEntry(inputVal, result.isAccepted, result.animationFrames);

        activeTrace.frames = result.animationFrames;
        activeTrace.index = 0;
        activeTrace.inputString = inputVal;
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
    buildComputationTable();
    document.getElementById('computation-panel').classList.remove('hidden');

    const badge = document.getElementById('active-string-badge');
    const display = document.getElementById('active-string-display');
    if (badge && display) {
        display.textContent = activeTrace.inputString === '' ? '(empty)' : activeTrace.inputString;
        badge.classList.remove('hidden');
    }
}

function stopTrace({ keepControls = true } = {}) {
    if (activeAnimationTimeout) clearInterval(activeAnimationTimeout);
    activeAnimationTimeout = null;
    activeTrace.playing = false;
    if (!keepControls) {
        document.getElementById('trace-controls').classList.add('hidden');
        document.getElementById('computation-panel').classList.add('hidden');
        
        const badge = document.getElementById('active-string-badge');
        if (badge) badge.classList.add('hidden');

        activeTrace.frames = [];
        activeTrace.index = 0;
        activeTrace.inputString = '';
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
    updateComputationHighlight();
}

function buildComputationTable() {
    const tbody = document.getElementById('computation-tbody');
    const stringBar = document.getElementById('computation-string');
    const verdict = document.getElementById('computation-verdict');
    const frames = activeTrace.frames;
    const inputStr = activeTrace.inputString || '';
    const machine = automataData[currentAlphabet];

    // Build the string character bar
    if (inputStr.length === 0) {
        stringBar.innerHTML = '<span class="text-xs app-muted italic">(empty string)</span>';
    } else {
        stringBar.innerHTML = inputStr.split('').map((ch, i) =>
            `<span class="computation-char" data-char-idx="${i}">${ch}</span>`
        ).join('');
    }

    // Determine final verdict
    const lastFrame = frames[frames.length - 1];
    const finalState = lastFrame ? lastFrame.node : null;
    const isAccepted = finalState && machine.acceptStates.includes(finalState);
    if (isAccepted) {
        verdict.innerHTML = '<span class="comp-status comp-status-accepted">Accepted</span>';
    } else {
        verdict.innerHTML = '<span class="comp-status comp-status-rejected">Rejected</span>';
    }

    // Build table rows — one per frame
    let html = '';
    for (let i = 0; i < frames.length; i++) {
        const frame = frames[i];
        const trans = frame.transition;

        if (i === 0) {
            // Initial state row (no transition yet)
            const stateLabel = frame.node;
            const isAcceptState = machine.acceptStates.includes(stateLabel);
            html += `<tr data-comp-row="${i}">
                <td class="p-3 text-center font-semibold">0</td>
                <td class="p-3 text-center app-muted">—</td>
                <td class="p-3 font-bold">${stateLabel}</td>
                <td class="p-3 text-center"></td>
                <td class="p-3 app-muted">—</td>
                <td class="p-3 text-center"><span class="comp-status comp-status-start">Start</span></td>
            </tr>`;
        } else {
            const sym = trans ? trans.sym : '?';
            const fromState = trans ? trans.src : '?';
            const toState = trans ? trans.dest : frame.node;
            const isLast = i === frames.length - 1;

            let statusHtml;
            if (isLast && isAccepted) {
                statusHtml = '<span class="comp-status comp-status-accepted">Accept</span>';
            } else if (isLast && !isAccepted) {
                statusHtml = '<span class="comp-status comp-status-rejected">Reject</span>';
            } else {
                statusHtml = '<span class="comp-status comp-status-transition">δ</span>';
            }

            html += `<tr data-comp-row="${i}">
                <td class="p-3 text-center font-semibold">${i}</td>
                <td class="p-3 text-center"><span style="color:#d97706; font-weight:700;">${sym}</span></td>
                <td class="p-3 font-bold">${fromState}</td>
                <td class="p-3 text-center comp-arrow">→</td>
                <td class="p-3 font-bold">${toState}</td>
                <td class="p-3 text-center">${statusHtml}</td>
            </tr>`;
        }
    }

    tbody.innerHTML = html;
    updateComputationHighlight();
}

function updateComputationHighlight() {
    const idx = activeTrace.index;
    const frames = activeTrace.frames;
    if (!frames.length) return;

    // Highlight table rows
    const rows = document.querySelectorAll('#computation-tbody tr');
    rows.forEach((row, i) => {
        row.classList.remove('comp-row-past', 'comp-row-active', 'comp-row-future');
        if (i < idx) row.classList.add('comp-row-past');
        else if (i === idx) row.classList.add('comp-row-active');
        else row.classList.add('comp-row-future');
    });

    // Auto-scroll the active row into view
    const activeRow = document.querySelector(`#computation-tbody tr[data-comp-row="${idx}"]`);
    if (activeRow) {
        activeRow.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }

    // Highlight string characters
    // Frame 0 = start (no char read yet), Frame 1 = first char read, etc.
    const chars = document.querySelectorAll('#computation-string .computation-char');
    chars.forEach((ch, i) => {
        ch.classList.remove('char-past', 'char-active', 'char-future');
        const charStep = i + 1; // char at index i is read at frame i+1
        if (charStep < idx) ch.classList.add('char-past');
        else if (charStep === idx) ch.classList.add('char-active');
        else ch.classList.add('char-future');
    });
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

    if (activeTrace.index >= activeTrace.frames.length - 1) {
        activeTrace.index = 0;
        renderTraceStep();
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
    }, 900);
}