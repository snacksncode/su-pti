interface informations { 
    luckyNumber: {
        maxNumber: number;
        number: number;
        day: number;
    };
    team: Array<{
        name: string;
        role: string;
        isLeader: boolean;
        img: string;
        desc: string;
    }>;
    bgImg: string;
}