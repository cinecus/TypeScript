//? video No BS TS#5

function printIngredient(quantity: string, ingredient: string, extra?: string) {
    console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : ''}`)
}


printIngredient("1C", "Flour")
printIngredient("1C", "Flour", "something more")

interface User {
    id: string;
    info?: {
        email?: string;
    }
}

function getEmail(user: User): string {
    if (user.info) {
        return user.info.email!   //ใส่เครื่องหมายตกใจ คือ ไม่มีทางเป็น null
    }
    return ""
}

function getEmailEasy(user: User): string {
    return user?.info?.email ?? ""
}

function addWithCallback(x: number, y: number, callback: () => void) {
    console.log([x, y])

    callback?.()
}