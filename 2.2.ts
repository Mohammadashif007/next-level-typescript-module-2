{
    // ! interface
    type user1 = {
        name: string;
        age: number;
    };

    interface user2 {
        name: string,
        age: number
    }

    // ! we can extend type to interface

    interface userWithRole3 extends user1 {
        designation: string
    }

    interface userWithRole2  extends user2 {
        role : string
    }

    // ! use type alice extend property by intersection

    type userWithRole1 = user1 & { role: string };

    const user: userWithRole2 = {
        name: "Ashif",
        age: 56,
        role: "Manager",
    };

    const employ : userWithRole3 = {
        name: 'Radha',
        age: 44,
        designation: "swiper"
    }

    type rollNumber = number;

    // ! when we deal with primitive type we will use type alice, and when we deal with object we will use type interface or type alice


    // ! we can use interface in an array because in js everything is object, array is one kind of object.

    type Roll1 = number[];

    interface Roll2 {
        [index: number]:number
    }

    const rollNumber1: Roll2 = [1, 2, 3, 4];

// ! interface uses in function

type add1 = (num1: number, num2: number) => number

interface add2 {
    (num1: number, num2: number): number;
}

const add: add2 = (num1, num2) => num1 + num2;






}
