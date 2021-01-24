import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'fs';

export const defaultData: informations = {
    luckyNumber: {
        maxNumber: 25,
        number: 0,
        day: 0
    },
    team: [
        {
            name: "ABCD EFGH",
            role: "Przewodniczący",
            isLeader: true,
            img: "https://source.unsplash.com/random/250x250/?fog,forest",
            desc: "Lorem ipsum."
        },
        {
            name: "ABCD EFGH",
            role: "Przewodniczący",
            isLeader: false,
            img: "https://source.unsplash.com/random/250x250/?fog,forest",
            desc: "Lorem ipsum."
        },
        {
            name: "ABCD EFGH",
            role: "Przewodniczący",
            isLeader: false,
            img: "https://source.unsplash.com/random/250x250/?fog,forest",
            desc: "Lorem ipsum."
        }
    ],
    bgImg: "https://images.unsplash.com/photo-1609612006487-e6211790ece5?crop=entropy&fit=crop&fm=jpg&h=1080&q=80&w=1920"
};

const generateNewNumber = (data: informations) => {
    data.luckyNumber.number = Math.floor(Math.random() * (data.luckyNumber.maxNumber) + 1);
    data.luckyNumber.day = new Date().getDate();
}

export default () => {
    let data: informations;

    try {
        data = JSON.parse(readFileSync('public/data.json', 'utf8'));

        if (data.luckyNumber.day !== new Date().getDate()) {
            generateNewNumber(data);
        }

        writeFileSync('public/data.json', JSON.stringify(data, null, 2));
    } catch(_) {
        if (!existsSync('public'))
            mkdirSync('public');

        data = defaultData;
        generateNewNumber(data);
        writeFileSync('public/data.json', JSON.stringify(data, null, 2));
    }
    
    return data;
}