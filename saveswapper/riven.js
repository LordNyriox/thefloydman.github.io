const rivenProperties = [{
    gvas: ['VectorGameStates', 'PlayerLocation', 'Value'],
    html: 'player-position',
    title: 'Player Position',
    description: 'Stay relatively close to where you saved. This variable does not control what terrain is loaded, so you\'ll fall through the ground if you move too far.'

}, {
    gvas: ['RotatorGameStates', 'PlayerRotation', 'Value'],
    html: 'player-rotation',
    title: 'Player Rotation'
}, {
    html: 'telescope-solution',
    title: 'Telescope Solution',
    children: [{
        gvas: ['IntGameStates', 'C116916F4877D735A418D2916F65B733', 'Value'],
        html: 'telescope-solution-1',
        title: 'Digit 1',
        type: 'dropdown',
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }, {
        gvas: ['IntGameStates', '93C1592A4D719CB404CCA5810798FC26', 'Value'],
        html: 'telescope-solution-2',
        title: 'Digit 2',
        type: 'dropdown',
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }, {
        gvas: ['IntGameStates', 'E5B348FD453245493FD4B38C6B46BEA8', 'Value'],
        html: 'telescope-solution-3',
        title: 'Digit 3',
        type: 'dropdown',
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }, {
        gvas: ['IntGameStates', '818975CF4A6364CDC451B99FE7C88E52', 'Value'],
        html: 'telescope-solution-4',
        title: 'Digit 4',
        type: 'dropdown',
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }, {
        gvas: ['IntGameStates', 'B674A7294B3207EB744C0DA03971446A', 'Value'],
        html: 'telescope-solution-5',
        title: 'Digit 5',
        type: 'dropdown',
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }, {
        gvas: ['IntGameStates', '3E823B5F40A18302191E0D83280C683C', 'Value'],
        html: 'telescope-solution-6',
        title: 'Digit 6',
        type: 'dropdown',
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }, {
        gvas: ['IntGameStates', 'B32BF0644C06B3421E351881FF6CE557', 'Value'],
        html: 'telescope-solution-7',
        title: 'Digit 7',
        type: 'dropdown',
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }, {
        gvas: ['IntGameStates', '9B2E0ECA4C7071519EF5DABD682358D0', 'Value'],
        html: 'telescope-solution-8',
        title: 'Digit 8',
        type: 'dropdown',
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }, {
        gvas: ['IntGameStates', '82328056403E25E44D9857B2DD05289C', 'Value'],
        html: 'telescope-solution-9',
        title: 'Digit 9',
        type: 'dropdown',
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }, {
        gvas: ['IntGameStates', '4D8246E643268E7B68ECF5BB8AC22E20', 'Value'],
        html: 'telescope-solution-10',
        title: 'Digit 10',
        type: 'dropdown',
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }, {
        gvas: ['BoolGameStates', '3010A4EC41F17ADA50EF048150F87AFA', 'Value'],
        html: 'telescope-powered',
        label: 'Powered'
    }]
}, {
    html: 'animal-totems-solution',
    title: 'Animal Totems Solution',
    description: 'Stand in the very center of the circle and face the linking book. Index starts at 0 (whark) and increases clockwise. Exit is between 11 (moose) and 12 (alligator).',
    children: [{
        gvas: ['IntGameStates', '261D18FE4FF7B3A0E9FC16B2C9F09C58', 'Value'],
        html: 'animal-totems-solution-1',
        title: 'Stone 1',
        type: 'dropdown',
        values: [
            { actual: 0, display: 'Whark (0)' },
            { actual: 1, display: 'Ardvark? (1)' },
            { actual: 2, display: 'Mole (2)' },
            { actual: 3, display: 'Sunner (3)' },
            { actual: 4, display: 'Flying Beetle (4)' },
            { actual: 5, display: 'Gaping Fish (5)' },
            { actual: 6, display: 'Anteater (6)' },
            { actual: 7, display: 'Ostrich (7)' },
            { actual: 8, display: 'Tadpole (8)' },
            { actual: 9, display: 'Stork (9)' },
            { actual: 10, display: 'Beetle (10)' },
            { actual: 11, display: 'Moose (11)' },
            { actual: 12, display: 'Alligator (12)' },
            { actual: 13, display: 'Toucan (13)' },
            { actual: 14, display: 'Boar (14)' },
            { actual: 15, display: 'Triangle Fish (15)' },
            { actual: 16, display: 'Praying Beetle (16)' },
            { actual: 17, display: 'Ytram (17)' },
            { actual: 18, display: 'Narwhal (18)' },
            { actual: 19, display: 'Pig (19)' },
            { actual: 20, display: 'Crab (20)' },
            { actual: 21, display: 'Flea (21)' },
            { actual: 22, display: 'Seahorse (22)' },
            { actual: 23, display: 'Shark (23)' }
        ]
    }, {
        gvas: ['IntGameStates', '5A1354B04B01F6D207C0A09AEB5EF662', 'Value'],
        html: 'animal-totems-solution-2',
        title: 'Stone 2',
        type: 'dropdown',
        values: [
            { actual: 0, display: 'Whark (0)' },
            { actual: 1, display: 'Ardvark? (1)' },
            { actual: 2, display: 'Mole (2)' },
            { actual: 3, display: 'Sunner (3)' },
            { actual: 4, display: 'Flying Beetle (4)' },
            { actual: 5, display: 'Gaping Fish (5)' },
            { actual: 6, display: 'Anteater (6)' },
            { actual: 7, display: 'Ostrich (7)' },
            { actual: 8, display: 'Tadpole (8)' },
            { actual: 9, display: 'Stork (9)' },
            { actual: 10, display: 'Beetle (10)' },
            { actual: 11, display: 'Moose (11)' },
            { actual: 12, display: 'Alligator (12)' },
            { actual: 13, display: 'Toucan (13)' },
            { actual: 14, display: 'Boar (14)' },
            { actual: 15, display: 'Triangle Fish (15)' },
            { actual: 16, display: 'Praying Beetle (16)' },
            { actual: 17, display: 'Ytram (17)' },
            { actual: 18, display: 'Narwhal (18)' },
            { actual: 19, display: 'Pig (19)' },
            { actual: 20, display: 'Crab (20)' },
            { actual: 21, display: 'Flea (21)' },
            { actual: 22, display: 'Seahorse (22)' },
            { actual: 23, display: 'Shark (23)' }
        ]
    }, {
        gvas: ['IntGameStates', 'DD60124E4CCE7A37545867A7E12C0E62', 'Value'],
        html: 'animal-totems-solution-3',
        title: 'Stone 3',
        type: 'dropdown',
        values: [
            { actual: 0, display: 'Whark (0)' },
            { actual: 1, display: 'Ardvark? (1)' },
            { actual: 2, display: 'Mole (2)' },
            { actual: 3, display: 'Sunner (3)' },
            { actual: 4, display: 'Flying Beetle (4)' },
            { actual: 5, display: 'Gaping Fish (5)' },
            { actual: 6, display: 'Anteater (6)' },
            { actual: 7, display: 'Ostrich (7)' },
            { actual: 8, display: 'Tadpole (8)' },
            { actual: 9, display: 'Stork (9)' },
            { actual: 10, display: 'Beetle (10)' },
            { actual: 11, display: 'Moose (11)' },
            { actual: 12, display: 'Alligator (12)' },
            { actual: 13, display: 'Toucan (13)' },
            { actual: 14, display: 'Boar (14)' },
            { actual: 15, display: 'Triangle Fish (15)' },
            { actual: 16, display: 'Praying Beetle (16)' },
            { actual: 17, display: 'Ytram (17)' },
            { actual: 18, display: 'Narwhal (18)' },
            { actual: 19, display: 'Pig (19)' },
            { actual: 20, display: 'Crab (20)' },
            { actual: 21, display: 'Flea (21)' },
            { actual: 22, display: 'Seahorse (22)' },
            { actual: 23, display: 'Shark (23)' }
        ]
    }, {
        gvas: ['IntGameStates', '213C5A944229FDD9D1D3FBA6EFECE93B', 'Value'],
        html: 'animal-totems-solution-4',
        title: 'Stone 4',
        type: 'dropdown',
        values: [
            { actual: 0, display: 'Whark (0)' },
            { actual: 1, display: 'Ardvark? (1)' },
            { actual: 2, display: 'Mole (2)' },
            { actual: 3, display: 'Sunner (3)' },
            { actual: 4, display: 'Flying Beetle (4)' },
            { actual: 5, display: 'Gaping Fish (5)' },
            { actual: 6, display: 'Anteater (6)' },
            { actual: 7, display: 'Ostrich (7)' },
            { actual: 8, display: 'Tadpole (8)' },
            { actual: 9, display: 'Stork (9)' },
            { actual: 10, display: 'Beetle (10)' },
            { actual: 11, display: 'Moose (11)' },
            { actual: 12, display: 'Alligator (12)' },
            { actual: 13, display: 'Toucan (13)' },
            { actual: 14, display: 'Boar (14)' },
            { actual: 15, display: 'Triangle Fish (15)' },
            { actual: 16, display: 'Praying Beetle (16)' },
            { actual: 17, display: 'Ytram (17)' },
            { actual: 18, display: 'Narwhal (18)' },
            { actual: 19, display: 'Pig (19)' },
            { actual: 20, display: 'Crab (20)' },
            { actual: 21, display: 'Flea (21)' },
            { actual: 22, display: 'Seahorse (22)' },
            { actual: 23, display: 'Shark (23)' }
        ]
    }, {
        gvas: ['IntGameStates', '18E516BA40ABA3943796E08CBF45AE05', 'Value'],
        html: 'animal-totems-solution-5',
        title: 'Stone 5',
        type: 'dropdown',
        values: [
            { actual: 0, display: 'Whark (0)' },
            { actual: 1, display: 'Ardvark? (1)' },
            { actual: 2, display: 'Mole (2)' },
            { actual: 3, display: 'Sunner (3)' },
            { actual: 4, display: 'Flying Beetle (4)' },
            { actual: 5, display: 'Gaping Fish (5)' },
            { actual: 6, display: 'Anteater (6)' },
            { actual: 7, display: 'Ostrich (7)' },
            { actual: 8, display: 'Tadpole (8)' },
            { actual: 9, display: 'Stork (9)' },
            { actual: 10, display: 'Beetle (10)' },
            { actual: 11, display: 'Moose (11)' },
            { actual: 12, display: 'Alligator (12)' },
            { actual: 13, display: 'Toucan (13)' },
            { actual: 14, display: 'Boar (14)' },
            { actual: 15, display: 'Triangle Fish (15)' },
            { actual: 16, display: 'Praying Beetle (16)' },
            { actual: 17, display: 'Ytram (17)' },
            { actual: 18, display: 'Narwhal (18)' },
            { actual: 19, display: 'Pig (19)' },
            { actual: 20, display: 'Crab (20)' },
            { actual: 21, display: 'Flea (21)' },
            { actual: 22, display: 'Seahorse (22)' },
            { actual: 23, display: 'Shark (23)' }
        ]
    }, {
        gvas: ['IntGameStates', '9ACF25A2489D8202A351C2998DE2710E', 'Value'],
        html: 'animal-totems-solution-6',
        title: 'Stone 6',
        type: 'dropdown',
        values: [
            { actual: 0, display: 'Whark (0)' },
            { actual: 1, display: 'Ardvark? (1)' },
            { actual: 2, display: 'Mole (2)' },
            { actual: 3, display: 'Sunner (3)' },
            { actual: 4, display: 'Flying Beetle (4)' },
            { actual: 5, display: 'Gaping Fish (5)' },
            { actual: 6, display: 'Anteater (6)' },
            { actual: 7, display: 'Ostrich (7)' },
            { actual: 8, display: 'Tadpole (8)' },
            { actual: 9, display: 'Stork (9)' },
            { actual: 10, display: 'Beetle (10)' },
            { actual: 11, display: 'Moose (11)' },
            { actual: 12, display: 'Alligator (12)' },
            { actual: 13, display: 'Toucan (13)' },
            { actual: 14, display: 'Boar (14)' },
            { actual: 15, display: 'Triangle Fish (15)' },
            { actual: 16, display: 'Praying Beetle (16)' },
            { actual: 17, display: 'Ytram (17)' },
            { actual: 18, display: 'Narwhal (18)' },
            { actual: 19, display: 'Pig (19)' },
            { actual: 20, display: 'Crab (20)' },
            { actual: 21, display: 'Flea (21)' },
            { actual: 22, display: 'Seahorse (22)' },
            { actual: 23, display: 'Shark (23)' }
        ]
    }, {
        gvas: ['BoolGameStates', 'AE66B762411A053A062614B76F71DB34', 'Value'],
        html: 'rebel-viewer',
        label: 'Collected Moiety Lens'
        }]
}, {
    html: 'slider-solution',
    title: 'Fire Marble Slider Solution',
    description: '',
    children: [{
        gvas: ['IntGameStates', 'E5FF19854DC3712FB898B98AA6A79183', 'Value'],
        html: 'fire-marble-slider-solution-red',
        title: 'Position 1',
        type: 'dropdown',
        values: [
            { actual: 25, display: '0' },
            { actual: 24, display: '1' },
            { actual: 23, display: '2' },
            { actual: 22, display: '3' },
            { actual: 21, display: '4' },
            { actual: 20, display: '5' },
            { actual: 19, display: '6' },
            { actual: 18, display: '7' },
            { actual: 17, display: '8' },
            { actual: 16, display: '9' },
            { actual: 15, display: '10' },
            { actual: 14, display: '11' },
            { actual: 13, display: '12' },
            { actual: 12, display: '13' },
            { actual: 11, display: '14' },
            { actual: 10, display: '15' },
            { actual: 9, display: '16' },
            { actual: 8, display: '17' },
            { actual: 7, display: '18' },
            { actual: 6, display: '19' },
            { actual: 5, display: '20' },
            { actual: 4, display: '21' },
            { actual: 3, display: '22' },
            { actual: 2, display: '23' },
            { actual: 1, display: '24' },
            { actual: 0, display: '25' }
        ]
    }, {
        gvas: ['IntGameStates', '6AEEE82148E150FC076018B62F6DB6EC', 'Value'],
        html: 'fire-marble-slider-solution-orange',
        title: 'Position 2',
        type: 'dropdown',
        values: [
            { actual: 25, display: '0' },
            { actual: 24, display: '1' },
            { actual: 23, display: '2' },
            { actual: 22, display: '3' },
            { actual: 21, display: '4' },
            { actual: 20, display: '5' },
            { actual: 19, display: '6' },
            { actual: 18, display: '7' },
            { actual: 17, display: '8' },
            { actual: 16, display: '9' },
            { actual: 15, display: '10' },
            { actual: 14, display: '11' },
            { actual: 13, display: '12' },
            { actual: 12, display: '13' },
            { actual: 11, display: '14' },
            { actual: 10, display: '15' },
            { actual: 9, display: '16' },
            { actual: 8, display: '17' },
            { actual: 7, display: '18' },
            { actual: 6, display: '19' },
            { actual: 5, display: '20' },
            { actual: 4, display: '21' },
            { actual: 3, display: '22' },
            { actual: 2, display: '23' },
            { actual: 1, display: '24' },
            { actual: 0, display: '25' }
        ]
    }, {
        gvas: ['IntGameStates', '65C8738A4013B3A7115CBA97984450E4', 'Value'],
        html: 'fire-marble-slider-solution-green',
        title: 'Position 3',
        type: 'dropdown',
        values: [
            { actual: 25, display: '0' },
            { actual: 24, display: '1' },
            { actual: 23, display: '2' },
            { actual: 22, display: '3' },
            { actual: 21, display: '4' },
            { actual: 20, display: '5' },
            { actual: 19, display: '6' },
            { actual: 18, display: '7' },
            { actual: 17, display: '8' },
            { actual: 16, display: '9' },
            { actual: 15, display: '10' },
            { actual: 14, display: '11' },
            { actual: 13, display: '12' },
            { actual: 12, display: '13' },
            { actual: 11, display: '14' },
            { actual: 10, display: '15' },
            { actual: 9, display: '16' },
            { actual: 8, display: '17' },
            { actual: 7, display: '18' },
            { actual: 6, display: '19' },
            { actual: 5, display: '20' },
            { actual: 4, display: '21' },
            { actual: 3, display: '22' },
            { actual: 2, display: '23' },
            { actual: 1, display: '24' },
            { actual: 0, display: '25' }
        ]
    }, {
        gvas: ['IntGameStates', '066A9CD44D13FF9309BFF4AEAD549AB4', 'Value'],
        html: 'fire-marble-slider-solution-blue',
        title: 'Position 4',
        type: 'dropdown',
        values: [
            { actual: 25, display: '0' },
            { actual: 24, display: '1' },
            { actual: 23, display: '2' },
            { actual: 22, display: '3' },
            { actual: 21, display: '4' },
            { actual: 20, display: '5' },
            { actual: 19, display: '6' },
            { actual: 18, display: '7' },
            { actual: 17, display: '8' },
            { actual: 16, display: '9' },
            { actual: 15, display: '10' },
            { actual: 14, display: '11' },
            { actual: 13, display: '12' },
            { actual: 12, display: '13' },
            { actual: 11, display: '14' },
            { actual: 10, display: '15' },
            { actual: 9, display: '16' },
            { actual: 8, display: '17' },
            { actual: 7, display: '18' },
            { actual: 6, display: '19' },
            { actual: 5, display: '20' },
            { actual: 4, display: '21' },
            { actual: 3, display: '22' },
            { actual: 2, display: '23' },
            { actual: 1, display: '24' },
            { actual: 0, display: '25' }
        ]
    }, {
        gvas: ['IntGameStates', '140EE7CC4CCF6618DFE02D89559B7516', 'Value'],
        html: 'fire-marble-slider-solution-violet',
        title: 'Position 5',
        type: 'dropdown',
        values: [
            { actual: 25, display: '0' },
            { actual: 24, display: '1' },
            { actual: 23, display: '2' },
            { actual: 22, display: '3' },
            { actual: 21, display: '4' },
            { actual: 20, display: '5' },
            { actual: 19, display: '6' },
            { actual: 18, display: '7' },
            { actual: 17, display: '8' },
            { actual: 16, display: '9' },
            { actual: 15, display: '10' },
            { actual: 14, display: '11' },
            { actual: 13, display: '12' },
            { actual: 12, display: '13' },
            { actual: 11, display: '14' },
            { actual: 10, display: '15' },
            { actual: 9, display: '16' },
            { actual: 8, display: '17' },
            { actual: 7, display: '18' },
            { actual: 6, display: '19' },
            { actual: 5, display: '20' },
            { actual: 4, display: '21' },
            { actual: 3, display: '22' },
            { actual: 2, display: '23' },
            { actual: 1, display: '24' },
            { actual: 0, display: '25' }
        ]
    }]
}, {
    html: 'prison-elevator-solution',
    title: 'Prison Island Elevator Solution',
    description: '',
    children: [{
        gvas: ['IntGameStates', '90E7D2FD48DDA23C69465D9A8751B908', 'Value'],
        html: 'prison-elevator-solution-1',
        title: 'First Sound',
        type: 'dropdown',
        values: [
            { actual: 1, display: 'Button 1' },
            { actual: 2, display: 'Button 2' },
            { actual: 3, display: 'Button 3' }
        ]
    }, {
        gvas: ['IntGameStates', 'FF15F50349E047E69175A981EFC8D359', 'Value'],
        html: 'prison-elevator-solution-2',
        title: 'Second Sound',
        type: 'dropdown',
        values: [
            { actual: 1, display: 'Button 1' },
            { actual: 2, display: 'Button 2' },
            { actual: 3, display: 'Button 3' }
        ]
    }, {
        gvas: ['IntGameStates', '29D503804B5C9619BFCC3FB0D94978C2', 'Value'],
        html: 'prison-elevator-solution-3',
        title: 'Third Sound',
        type: 'dropdown',
        values: [
            { actual: 1, display: 'Button 1' },
            { actual: 2, display: 'Button 2' },
            { actual: 3, display: 'Button 3' }
        ]
    }, {
        gvas: ['IntGameStates', 'AFFF1006422E266805BEFD8FAFCFE038', 'Value'],
        html: 'prison-elevator-solution-4',
        title: 'Fourth Sound',
        type: 'dropdown',
        values: [
            { actual: 1, display: 'Button 1' },
            { actual: 2, display: 'Button 2' },
            { actual: 3, display: 'Button 3' }
        ]
    }, {
        gvas: ['IntGameStates', 'D86FD5B64B10387D901CC9862B309010', 'Value'],
        html: 'prison-elevator-solution-5',
        title: 'Fifth Sound',
        type: 'dropdown',
        values: [
            { actual: 1, display: 'Button 1' },
            { actual: 2, display: 'Button 2' },
            { actual: 3, display: 'Button 3' }
        ]
    }]
}, {
    gvas: ['IntGameStates', '7FF5C77A4666C0B2D86D74A39205DC54', 'Value'],
    title: 'Moiety Cave Solution',
    html: 'moiety-cave-solution-1',
    image: 'moiety-cave.png',
    alt: 'The five possible solutions for the Moiety Cave puzzle.',
    type: 'dropdown',
    values: [0, 1, 2, 3, 4]
}, {
    html: 'door',
    title: 'Door State',
    children: [{
        gvas: ['IntGameStates', '22BA75C942980718DFBBE29C89486F91', 'Value'],
        html: 'temple-main-door',
        title: 'Temple Main',
        type: 'dropdown',
        values: [
            { actual: 0, display: 'Closed' },
            { actual: 1, display: 'Open' }
        ]
    }, {
        gvas: ['IntGameStates', '44ED7F024F28ECF9E40907858FBCC03A', 'Value'],
        html: 'gateroom-gate-outer',
        title: 'Gateroom Outer',
        type: 'dropdown',
        values: [
            { actual: 0, display: 'Closed' },
            { actual: 1, display: 'Open' }
        ]
    }, {
        gvas: ['IntGameStates', '5FF7410E4CBE13AFD71016A38162D9D9', 'Value'],
        html: 'gateroom-gate-inner',
        title: 'Gateroom Inner',
        type: 'dropdown',
        values: [
            { actual: 0, display: 'Closed' },
            { actual: 1, display: 'Open' }
        ]
    }, {
        gvas: ['IntGameStates', '4D4CF4B24C2F464E3B5BA8931A464605', 'Value'],
        html: 'gateroom-gate-dome',
        title: 'Gateroom Dome',
        type: 'dropdown',
        values: [
            { actual: 0, display: 'Closed' },
            { actual: 1, display: 'Open' }
        ]
    }, {
        gvas: ['BoolGameStates', 'FB15E01F432AA4BB8D26BD89649857FB', 'Value'],
        html: 'wahrk-totem',
        label: 'Wahrk Totem Mouth'
    }, {
        gvas: ['BoolGameStates', '59FA11EC4994BEE88658379C8BD15021', 'Value'],
        html: 'gallows-iris',
        label: 'Gallows Iris'
    }, {
        gvas: ['BoolGameStates', 'C52D896C48F5ADA3528DA7A70B071F4C', 'Value'],
        html: 'balcony-hatch',
        label: 'Balcony Hatch'
    }, {
        gvas: ['BoolGameStates', 'FFDDF6934D459591906E93A1895F4977', 'Value'],
        html: 'lab-lock-maglev',
        label: 'Lab Maglev Lock'
    }, {
        gvas: ['BoolGameStates', '59218FA2494FEA98660225A62AB39FE9', 'Value'],
        html: 'lab-lock-maglev',
        label: 'Lab Catwalk Lock'
    }]
}, {
    html: 'fire-marble-dome-bridge',
    title: 'Fire Marble Dome Bridge',
    children: [{
        gvas: ['BoolGameStates', '6DDE63B649145D51E02A5C9E78425EBE', 'Value'],
        html: 'fire-marble-dome-bridge-temple',
        label: 'Temple'
    }, {
        gvas: ['BoolGameStates', '8F6D19AA487B40D06D7BBAACF17C5F1E', 'Value'],
        html: 'fire-marble-dome-bridge-jungle',
        label: 'Jungle'
    }, {
        gvas: ['BoolGameStates', '9B744D3C4403CD87CFAB51919E156AD4', 'Value'],
        html: 'fire-marble-dome-bridge-boiler',
        label: 'Boiler'
    }, {
        gvas: ['BoolGameStates', 'A1F280514BCE814E913E13815A786894', 'Value'],
        html: 'fire-marble-dome-bridge-survey',
        label: 'Survey'
    }, {
        gvas: ['BoolGameStates', '730A0C4549031E6D0715FA8D50FCF2A7', 'Value'],
        html: 'fire-marble-dome-bridge-prison',
        label: 'Prison'
    }]
}, {
    html: 'fire-marble-dome-open',
    title: 'Fire Marble Dome Open',
    children: [{
        gvas: ['BoolGameStates', 'A6C2BEA54A0359D4341C53A32596DCE8', 'Value'],
        html: 'fire-marble-dome-open-temple',
        label: 'Temple'
    }, {
        gvas: ['BoolGameStates', '0928BD2D45DEAA0B4C9CE3836F0B0291', 'Value'],
        html: 'fire-marble-dome-open-jungle',
        label: 'Jungle'
    }, {
        gvas: ['BoolGameStates', 'AFC6AA5F4F6EC8C02680EB98F07C6B61', 'Value'],
        html: 'fire-marble-dome-open-boiler',
        label: 'Boiler'
    }, {
        gvas: ['BoolGameStates', '377D241E4EE0A9887C12A5A9EE01891F', 'Value'],
        html: 'fire-marble-dome-open-survey',
        label: 'Survey'
    }, {
        gvas: ['BoolGameStates', '459582A34BF7426D55F19984F6B9DBF9', 'Value'],
        html: 'fire-marble-dome-open-prison',
        label: 'Prison'
    }]
}, {
    html: 'cutscene-played',
    title: 'Played Cutscene',
    children: [{
        gvas: ['BoolGameStates', 'F919AA4F400CDEFF8652578190ACB108', 'Value'],
        html: 'cutscene-played-intro',
        label: 'Intro'
    }, {
        gvas: ['BoolGameStates', '3538A70444E044E76D36AB9794A707ED', 'Value'],
        html: 'cutscene-played-bridge-blow',
        label: 'Bridge Blown Up'
    }, {
        gvas: ['BoolGameStates', 'E7C8C38F4C657D06BAF5C68E91AE6183', 'Value'],
        html: 'cutscene-played-bridge-collapse',
        label: 'Bridge Collapsed'
    }, {
        gvas: ['BoolGameStates', '5D1205DF4B419EEB61947698A2065549', 'Value'],
        html: 'cutscene-played-beetle',
        label: 'Beetle'
    }, {
        gvas: ['BoolGameStates', 'A4983F7647A554F9017615A0B6B09EC7', 'Value'],
        html: 'cutscene-played-guard-a',
        label: 'Guard Tower A'
    }, {
        gvas: ['BoolGameStates', 'DD55984D46B24E04E5529FA914AAC160', 'Value'],
        html: 'cutscene-played-guard-b',
        label: 'Guard Tower B'
    }, {
        gvas: ['BoolGameStates', '1AF3DFAA4D21D6D79C17129F3DF8AACB', 'Value'],
        html: 'cutscene-played-wahrk-swim',
        label: 'Wahrk Swimming'
    }, {
        gvas: ['BoolGameStates', '1E2FFF9740F18F936A93BFBE69B0EE1B', 'Value'],
        html: 'cutscene-played-wahrk-glass',
        label: 'Wahrk Ramming'
    }, {
        gvas: ['BoolGameStates', 'DC4649D8499C274E2CD744AABC55D56E', 'Value'],
        html: 'cutscene-played-prison',
        label: 'Scribe Running'
    }]
}]