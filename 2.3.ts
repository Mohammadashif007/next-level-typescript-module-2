{
    // ! generic type
    // ! what is generic type-- when we can create different type on our own and we can reuse the type it's call generic type

    type genericArray<T> = Array<T>;

    // const rollNumber: number[] = [1, 2, 3,4,5];
    const rollNumber: genericArray<number> = [1, 2, 3, 4, 5];

    // const mentors: string[] = ["x", "y", "z"];
    const mentors: genericArray<string> = ["x", "y", "z"];

    // const boolArray: boolean[] = [true, false, false];
    const boolArray: genericArray<boolean> = [true, false, false];

    // generic object
    const users: genericArray<{ name: string; age: number; address?: string }> =
        [
            {
                name: "x",
                age: 33,
            },
            {
                name: "u",
                age: 21,
                address: "ctg",
            },
        ];

    // generic tuple
    type genericTuple<X, Y> = [X, Y];

    type user = {
        name: string,
        email: string
    }

    const person: genericTuple<string, string> = ["Mr.x", "Ms.x"];

    const userWithId: genericTuple<number, user> = [
        121,
        { name: "Tom", email: "tom@jerry.com" },
    ];
}
