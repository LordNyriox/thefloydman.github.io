const firmamentProperties = [{
    gvas: ['VectorGameStates', 'PlayerLocation', 'Value'],
    html: 'player-position',
    title: 'Player position',
    description: 'Stay relatively close to where you saved. This variable does not control what terrain is loaded, so you\'ll fall through the ground if you move too far.'

}, {
    gvas: ['RotatorGameStates', 'PlayerRotation', 'Value'],
    html: 'player-rotation',
    title: 'Player rotation'
}, {
    gvas: ['FloatGameStates', 'B549462A48A68E96DB0D4CA42AF77CD4', 'Value'],
    html: 'ice-crane-position',
    title: 'Curievale ice crane position',
    description: '"All the way back" (above the ice blocks) has a value of 0.'
}, {
    gvas: ['FloatGameStates', 'DFC56D6142240BFCFF5119A62F8C00E7', 'Value'],
    html: 'ice-crane-lift',
    title: 'Curievale ice crane height',
    description: '"All the way up" (against the rail) has a value of -1000.'
}, {
    html: 'battery-towers',
    title: 'Julestone battery pool towers',
    description: 'While it can\'t be rotated in-game, the uncolored tower (#2) can be rotated by editing its value here.',
    image: 'battery-towers.png',
    alt: 'The battery tower layout in Juleston.',
    children: [{
        gvas: ['FloatGameStates', '38D0BBBC4858C4C2EC5A8CB7C97EE6A2', 'Value'],
        html: 'battery-tower-0',
        title: '#0'
    }, {
        gvas: ['FloatGameStates', '118B5C2E44EA7C8A23DF589A193C48F5', 'Value'],
        html: 'battery-tower-1',
        title: '#1'
    }, {
        gvas: ['FloatGameStates', 'E3694D824E4E7F8293B2CB812EDC9E5C', 'Value'],
        html: 'battery-tower-2',
        title: '#2'
    }, {
        gvas: ['FloatGameStates', '1045877C4D6D80ABAB07D694FE2F53C9', 'Value'],
        html: 'battery-tower-3',
        title: '#3'
    }, {
        gvas: ['FloatGameStates', '2C2E4D374F21CCC82E1923AB65D3F2F6', 'Value'],
        html: 'battery-tower-4',
        title: '#4'
    }, {
        gvas: ['FloatGameStates', 'FF9724D44055884FBA6091B327360C9D', 'Value'],
        html: 'battery-tower-5',
        title: '#5'
    }, {
        gvas: ['FloatGameStates', '941E9FB948842BF547F6D79430AB6436', 'Value'],
        html: 'battery-tower-6',
        title: '#6'
    }, {
        gvas: ['FloatGameStates', '41D6A8CC41D34FF9ADE8E7A1B8C30659', 'Value'],
        html: 'battery-tower-7',
        title: '#7'
    }, {
        gvas: ['FloatGameStates', '264E50D046C0B9F46B49F59A67B9D09A', 'Value'],
        html: 'battery-tower-8',
        title: '#8'
    }, {
        gvas: ['FloatGameStates', '3509EECD4494DCEBE399C4981E991045', 'Value'],
        html: 'battery-tower-9',
        title: '#9'
    }, {
        gvas: ['FloatGameStates', '74AAEC22417F8022C30C7E9224F5F044', 'Value'],
        html: 'battery-tower-10',
        title: '#10'
    }, {
        gvas: ['FloatGameStates', '171691F54B64FC0C4E17C38D5E4305D0', 'Value'],
        html: 'battery-tower-11',
        title: '#11'
    }]
}, {
    gvas: ['IntGameStates', 'FA497A3C47AC3072100B039C23BB7567', 'Value'],
    html: 'adjunct-upgrade',
    title: 'Adjunct Upgrades',
    type: 'dropdown',
    values: [
        { actual: 1, display: 'None' },
        { actual: 3, display: 'Extended' },
        { actual: 5, display: 'Multi' },
        { actual: 7, display: 'Extended + Multi' },
        { actual: 9, display: 'Torque' },
        { actual: 11, display: 'Extended + Torque' },
        { actual: 13, display: 'Multi + Torque' },
        { actual: 15, display: 'All' }
    ]
}, {
    html: 'path-open',
    title: 'Paths Open',
    children: [{
        gvas: ['BoolGameStates', '221B3764487AD6222CC134B9CC59BDFB', 'Value'],
        html: 'path-open-bunker-first',
        label: 'Bunker First Door'
    }, {
        gvas: ['BoolGameStates', '267303D64CEBD0CA3AABDEA0AAC66999', 'Value'],
        html: 'path-open-bunker-second',
        label: 'Bunker Second Door'
    }, {
        gvas: ['BoolGameStates', 'E7842534418FE84F648E03A318CC289E', 'Value'],
        html: 'path-open-starting-door',
        label: 'Starting Area Door'
    }, {
        gvas: ['BoolGameStates', 'A89D92C04CFB62F5186768A0E7327CD6', 'Value'],
        html: 'path-open-elevator-door',
        label: 'Elevator Door'
    }, {
        gvas: ['BoolGameStates', '410B8CB9441A1EFB4BC7ECB7132F5F94', 'Value'],
        html: 'path-open-elevator-door-furnace',
        label: 'Furnace Elevator Door'
    }, {
        gvas: ['BoolGameStates', 'B1BAA3A541D0F20CEFEB44B9479FB05C', 'Value'],
        html: 'path-open-orchard-robot-hatch',
        label: 'St. Andrew Robot Hatch'
    }, {
        gvas: ['BoolGameStates', '69BE0AE24F2BBB8C025F9DB1D6D77B05', 'Value'],
        html: 'path-open-orchard-bunker-door',
        label: 'St. Andrew Bunker Door'
    }, {
        gvas: ['BoolGameStates', 'E510A165432AC548C5D9C4A8A7A4129F', 'Value'],
        html: 'path-open-orchard-seed-door-0',
        label: 'St. Andrew Seed Door 0'
    }, {
        gvas: ['BoolGameStates', 'AD5314584EFCF6C34158469B31769992', 'Value'],
        html: 'path-open-orchard-seed-door-1',
        label: 'St. Andrew Seed Door 1'
    }, {
        gvas: ['BoolGameStates', 'ECFEE70A487A8575F286809BBA4E518B', 'Value'],
        html: 'path-open-orchard-seed-door-2',
        label: 'St. Andrew Seed Door 2'
    }, {
        gvas: ['BoolGameStates', '85076713474795F7B5177FB63678176A', 'Value'],
        html: 'path-open-orchard-seed-door-3',
        label: 'St. Andrew Seed Door 3'
    }, {
        gvas: ['BoolGameStates', 'D9B1CFC94FB8DB7E64E2248D5909C3FC', 'Value'],
        html: 'path-open-orchard-seed-door-4',
        label: 'St. Andrew Seed Door 4'
    }, {
        gvas: ['BoolGameStates', '4238C3E44F4FF88B883F88833631BB38', 'Value'],
        html: 'path-open-orchard-seed-door-5',
        label: 'St. Andrew Seed Door 5'
    }, {
        gvas: ['BoolGameStates', 'A9FC4FE4471459515C45798A52B537B3', 'Value'],
        html: 'path-open-orchard-seed-door-6',
        label: 'St. Andrew Seed Door 6'
    }, {
        gvas: ['BoolGameStates', 'B73D75C443CF7CC4F5014C808CE21DB7', 'Value'],
        html: 'path-open-orchard-seed-door-7',
        label: 'St. Andrew Seed Door 7'
    }, {
        gvas: ['BoolGameStates', '8A14945344B6AAA463912EA5994E7997', 'Value'],
        html: 'path-open-orchard-seed-door-8',
        label: 'St. Andrew Seed Door 8'
    }, {
        gvas: ['BoolGameStates', 'BB18190B4FA9B99BD9E265886AF98928', 'Value'],
        html: 'path-open-orchard-seed-door-9',
        label: 'St. Andrew Seed Door 9'
    }, {
        gvas: ['BoolGameStates', 'F6BFF1474FA510CEFE067FAD21BBDF39', 'Value'],
        html: 'path-open-orchard-seed-door-10',
        label: 'St. Andrew Seed Door 10'
    }, {
        gvas: ['BoolGameStates', '816D370F4E0409D53775E0A296CF15A2', 'Value'],
        html: 'path-open-orchard-seed-door-11',
        label: 'St. Andrew Seed Door 11'
    }]
}, {
    html: 'glacier-underwater',
    title: 'Curievale Underwater',
    children: [{
        gvas: ['BoolGameStates', 'FB7C8EF647EE77274CA3A592D65B13A0', 'Value'],
        html: 'glacier-underwater-valve-0',
        label: 'Valve 0'
    }, {
        gvas: ['BoolGameStates', '88EFFF96434B57FE4857AABB767F8506', 'Value'],
        html: 'glacier-underwater-valve-1',
        label: 'Valve 1'
    }, {
        gvas: ['BoolGameStates', '54A0462E457677C47AA924955434340C', 'Value'],
        html: 'glacier-underwater-valve-2',
        label: 'Valve 2'
    }, {
        gvas: ['BoolGameStates', '987157374CA3B92FC615BC859208D85A', 'Value'],
        html: 'glacier-underwater-valve-3',
        label: 'Valve 3'
    }, {
        gvas: ['BoolGameStates', 'ED48F6214623BC1FE3DD579F0011CB31', 'Value'],
        html: 'glacier-underwater-valve-4',
        label: 'Valve 4'
    }, {
        gvas: ['BoolGameStates', '8843419A4728A30FF1708DAF529366AD', 'Value'],
        html: 'glacier-underwater-valve-5',
        label: 'Valve 5'
    }, {
        gvas: ['BoolGameStates', '79DE34B04E2083C854FD45A870448258', 'Value'],
        html: 'glacier-underwater-valve-6',
        label: 'Valve 6'
    }, {
        gvas: ['BoolGameStates', 'CEF4F0064838E634740AA083FA31C51A', 'Value'],
        html: 'glacier-underwater-valve-7',
        label: 'Valve 7'
    }, {
        gvas: ['BoolGameStates', '2C031CD7440D8EE395644E8060EF942D', 'Value'],
        html: 'glacier-underwater-valve-8',
        label: 'Valve 8'
    }, {
        gvas: ['BoolGameStates', 'B6CDB39C4C351951AB9C4492BF4CE68C', 'Value'],
        html: 'glacier-underwater-valve-9',
        label: 'Valve 9'
    }, {
        gvas: ['BoolGameStates', '5A2D6E7D416A2EB3014C2C8763AE639A', 'Value'],
        html: 'glacier-underwater-valve-10',
        label: 'Valve 10'
    }, {
        gvas: ['BoolGameStates', 'AF684B8C47FAE22EB6D4378A01C9BCDB', 'Value'],
        html: 'glacier-underwater-valve-11',
        label: 'Valve 11'
    /*}, {
        gvas: ['BoolGameStates', 'B4DA459A4E2AF0C2C5BF6C943F67B82B', 'Value'],
        html: 'glacier-underwater-heater-0',
        label: 'Heater 0'
    }, {
        gvas: ['BoolGameStates', '5B47E59A43A85A0DCDCB19B708C5B1B6', 'Value'],
        html: 'glacier-underwater-heater-1',
        label: 'Heater 1'
    }, {
        gvas: ['BoolGameStates', 'F432A4514DEB38A8EE0FBA9BAA1F7A2A', 'Value'],
        html: 'glacier-underwater-heater-2',
        label: 'Heater 2'
    }, {
        gvas: ['BoolGameStates', 'DE9B9AB14072C2E4A9533DBD014A6131', 'Value'],
        html: 'glacier-underwater-heater-3',
        label: 'Heater 3'
    }, {
        gvas: ['BoolGameStates', '13E939FE458DD5BB3F1802921E30E6DA', 'Value'],
        html: 'glacier-underwater-heater-4',
        label: 'Heater 4'
    }, {
        gvas: ['BoolGameStates', '49A574A249F46F9640178EAC166C0761', 'Value'],
        html: 'glacier-underwater-heater-5',
        label: 'Heater 5'
    }, {
        gvas: ['BoolGameStates', 'C73643954B0AEDD28EEEEBBCF1452BE7', 'Value'],
        html: 'glacier-underwater-heater-6',
        label: 'Heater 6'
    }, {
        gvas: ['BoolGameStates', '1746EEFD44C10AF16229CAB5EF911005', 'Value'],
        html: 'glacier-underwater-heater-7',
        label: 'Heater 7'
    }, {
        gvas: ['BoolGameStates', '43D1662C4F9CECAB4004D78616B2B011', 'Value'],
        html: 'glacier-underwater-heater-8',
        label: 'Heater 8'
    }, {
        gvas: ['BoolGameStates', '7DE79490455049694454EBBAB660C849', 'Value'],
        html: 'glacier-underwater-heater-9',
        label: 'Heater 9'
    }, {
        gvas: ['BoolGameStates', 'BDDD9DF3487BFD5B2A22BABBF5B8AD56', 'Value'],
        html: 'glacier-underwater-heater-10',
        label: 'Heater 10'
    }, {
        gvas: ['BoolGameStates', '93DC4E164A20AF14F2FEBA9DA9858607', 'Value'],
        html: 'glacier-underwater-heater-11',
        label: 'Heater 11'
    }, {
        gvas: ['BoolGameStates', 'E3FD4A924C82BF16B25AD18EA0A70C59', 'Value'],
        html: 'glacier-underwater-heater-12',
        label: 'Heater 12'*/
    }]
}, {
    html: 'orchard-pipe',
    title: 'St. Andrew Irrigation',
    children: [{
        gvas: ['BoolGameStates', '2E8371F04AEB7E6D120E3492D75E0B17', 'Value'],
        html: 'orchard-pipe-0-0',
        label: '0 Tower Valve 0'
    }, {
        gvas: ['BoolGameStates', 'D47AE42F4C5FA13BC178F6A727CA634D', 'Value'],
        html: 'orchard-pipe-0-1',
        label: '0 Tower Valve 1'
    }, {
        gvas: ['BoolGameStates', 'D984141F4965E610A6F893AF0AB1C50C', 'Value'],
        html: 'orchard-pipe-1-0',
        label: '1 Tower Valve 0'
    }, {
        gvas: ['BoolGameStates', '0D9A82C2485372E11E709DB2985BFEAC', 'Value'],
        html: 'orchard-pipe-1-1',
        label: '1 Tower Valve 1'
    }, {
        gvas: ['BoolGameStates', 'C417B78545FA5D1C9C46A2B2C061488E', 'Value'],
        html: 'orchard-pipe-2-0',
        label: '2 Tower Valve 0'
    }, {
        gvas: ['BoolGameStates', 'F54A06084E8F32221030F8AD0ED98F0A', 'Value'],
        html: 'orchard-pipe-2-1',
        label: '2 Tower Valve 1'
    }, {
        gvas: ['BoolGameStates', '3F1CED5143D0B2794817288E35388C58', 'Value'],
        html: 'orchard-pipe-3-0',
        label: '3 Tower Valve 0'
    }, {
        gvas: ['BoolGameStates', '64EA3E5B449E53A69877FB860220F82B', 'Value'],
        html: 'orchard-pipe-3-1',
        label: '3 Tower Valve 1'
    }]
}, {
    html: 'pod-unlocked',
    title: 'Conveyance Pod Unlocked',
    children: [{
        gvas: ['BoolGameStates', '2C00B5394C20EF6FE0618AA6899A796A', 'Value'],
        html: 'pod-unlocked-glacial-start',
        label: 'Curievale Starting Area'
    }, {
        gvas: ['BoolGameStates', '773F81EA4B6A43ED513DDEA6AF1D9C26', 'Value'],
        html: 'pod-unlocked-glacial-dive',
        label: 'Curievale Dive Suit Area'
    }, {
        gvas: ['BoolGameStates', '369BD0C946D2E624B67770B1EBE2669B', 'Value'],
        html: 'pod-unlocked-glacial-ice',
        label: 'Curievale Ice Building Area'
    }, {
        gvas: ['BoolGameStates', 'D6D8C23E45F7D240BC0A14A6BB4A7212', 'Value'],
        html: 'pod-unlocked-glacial-arch',
        label: 'Curievale Arch'
    }, {
        gvas: ['BoolGameStates', 'DAE5981745C6F217E80F75BD923CC657', 'Value'],
        html: 'pod-unlocked-coastal-reservoir',
        label: 'Juleston Reservoir'
    }, {
        gvas: ['BoolGameStates', '7E6582B14C61B979A553AC83BB2C08D7', 'Value'],
        html: 'pod-unlocked-coastal-battery',
        label: 'Juleston Battery Area'
    }, {
        gvas: ['BoolGameStates', '677F8AEB4367714A24B9EBA2654242A1', 'Value'],
        html: 'pod-unlocked-coastal-factory-interior',
        label: 'Juleston Factory'
    }, {
        gvas: ['BoolGameStates', 'F80C4D9C4494D472D206C8BCC5890A13', 'Value'],
        html: 'pod-unlocked-coastal-arch',
        label: 'Juleston Arch'
    }, {
        gvas: ['BoolGameStates', '5B736845451E7DC73E601AAE8419F7B0', 'Value'],
        html: 'pod-unlocked-orchard-skiff',
        label: 'St. Andrew Skiff Area'
    }, {
        gvas: ['BoolGameStates', 'B5019ABA480D96745C405887E5BE76DF', 'Value'],
        html: 'pod-unlocked-orchard-cafeteria',
        label: 'St. Andrew Cafeteria'
    }, {
        gvas: ['BoolGameStates', 'D291E861431FE8F11D53709F4DBC70CF', 'Value'],
        html: 'pod-unlocked-orchard-arch',
        label: 'St. Andrew Arch'
    }, {
        gvas: ['BoolGameStates', '3C5F674C4E39D4BA9A1FB19B6FBA3119', 'Value'],
        html: 'pod-unlocked-orchard-spire',
        label: 'St. Andrew Spire Base'
    }]
}, {
    html: 'spire-raised',
    title: 'Spire Raised',
    children: [{
        gvas: ['BoolGameStates', 'AE6C19F84AE73C79892041B2D686BF17', 'Value'],
        html: 'spire-raised-glacial',
        label: 'Curievale'
    }, {
        gvas: ['BoolGameStates', 'C3D9ED4E4DA87E9E6089F889AD677ADE', 'Value'],
        html: 'spire-raised-coastal',
        label: 'Juleston'
    }, {
        gvas: ['BoolGameStates', 'CF44A49C449CCB1AF2E9EC9C2009597C', 'Value'],
        html: 'spire-raised-orchard',
        label: 'St. Andrew'
    }]
}]