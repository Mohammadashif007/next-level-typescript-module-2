{
    // ! interface => generic interface

    interface Developer<T, X=null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartWatch: T;
        bike?: X;
    }

    interface phoneDetails {
        brand: string;
        display: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }

    interface bike {
        brand: string;
        enginCC: string;
    }

    const richDeveloper: Developer<phoneDetails, bike> = {
        name: "John",
        computer: {
            brand: "HP",
            model: "w2-vv",
            releaseYear: 2001,
        },
        smartWatch: {
            brand: "Apple",
            display: "OLED",
            heartTrack: true,
            sleepTrack: true,
        },
        bike: {
            brand: "Yamaha",
            enginCC: "200cc",
        },
    };

    interface watch {
        brand: string;
        display: string;
    }

    const poorDeveloper: Developer<watch> = {
        name: "Tim",
        computer: {
            brand: "walton",
            model: "w-2",
            releaseYear: 2011,
        },
        smartWatch: {
            brand: "walton",
            display: "poor",
        },
    };
}
