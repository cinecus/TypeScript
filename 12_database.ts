//? video No BS TS#12

interface Database {
    get(id: string): string;
    set(id: string, value: string): void
}

interface Persistable {
    saveToString(): string;
    restoreFromString(storedState: string): void
}

class InMemoryDatabase implements Database {
    // private db: Record<string, string> = {}
    protected db: Record<string, string> = {}
    get(id: string): string {
        return this.db[id]
    }
    set(id: string, value: string): void {
        this.db[id] = value
    }
}

class PersistentMemoryDB extends InMemoryDatabase implements Persistable {
    saveToString(): string {
        return JSON.stringify(this.db)   //ใส่ private จะป้องกัน class ที่มา extends ได้  //ใส่เป็น protect แทน
    }
    restoreFromString(storedState: string): void {
        this.db = JSON.parse(storedState)
    }
}

// const myDB = new InMemoryDatabase()
// myDB.set('foo', 'bar')
// // myDB.db["foo"] = "baz"  // set ค่าได้เหมือนกัน ถ้า ใส่ private มันจะใช้ไม่ได้
// console.log(myDB.get("foo"))

const myDB = new PersistentMemoryDB()
myDB.set('foo', 'bar')
// myDB.db["foo"] = "baz"  // set ค่าได้เหมือนกัน ถ้า ใส่ private มันจะใช้ไม่ได้
console.log(myDB.get("foo"))
console.log(myDB.saveToString())

const saved = myDB.saveToString()

const myDB2 = new PersistentMemoryDB()
myDB2.restoreFromString(saved)
console.log(myDB2.get("foo"))
