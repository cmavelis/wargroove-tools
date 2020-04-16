export const unitData = {
    unitType: 'soldier',
    hitOrder: 2,
    hp: 77
};

export const indirectData = {
    unitType: 'archer',
    hitOrder: 1,
    hp: 100
};

export const targetData = {
    unitType: 'commander',
    hp: 98
};


export const fullData = {
    target: {
        unitType: 'commander', // or hq
        hp: 100,
    },
    attacks: [
        {
            //attack object
        },
        {},
        {}
    ],
    outcomes: { // hp decreasing after each hit as an array
        low: [60, 50, 40],
        average: [50, 40, 30],
        high: [40, 30, 20],
    },
    terrain: 'cNESW' // unsure about this one
};

const attackExample = {
    unitType: '',
    location: 1,
    critical: false,
    sacrifice: false,
};
