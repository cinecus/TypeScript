//? video No BS TS#9

interface MyUser {
    name: string;
    id: number;
    email?: string
}

type MyUserOptionals = Partial<MyUser>  // Partial เป็น Utility type

// interface MyUserOptionals {
//     name?: string;
//     id?: string;
//     email?: string;
// }

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
    return {
        ...user,
        ...overrides
    }
}

console.log(merge({
    name: "Jack",
    id: 1,
    email: "dontemail@dontemail.com"
}, {
    email: "gggmail@gggmail.com"
}))


type RequiredMyUser = Required<MyUser>; // เป็น Utility type เลือกทั้งหมด

type JustEmailAndName = Pick<MyUser, "email" | "name">

type UserWithoutID = Omit<MyUser, "id">

const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutID> => { // เป็น Utility type => Obj => [type key,type]
    return users.reduce((a, v) => {
        const { id, ...other } = v
        return {
            ...a,
            [id]: other
        }
    }, {})
}

console.log(mapById([
    {
        id: 1,
        name: "Mr. Foo"
    },
    {
        id: 2,
        name: "Mr. baz"
    },
]))
