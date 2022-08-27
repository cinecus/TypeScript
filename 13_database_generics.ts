//? video No BS TS#12

interface Database<T> {
    get(id: string): T;
    set(id: string, value: T): void
}

interface Persistable {
    saveToString(): string;
    restoreFromString(storedState: string): void
}

class InMemoryDatabase<T> implements Database<T> {
    // private db: Record<string, string> = {}
    protected db: Record<string, T> = {}
    get(id: string): T {
        return this.db[id]
    }
    set(id: string, value: T): void {
        this.db[id] = value
    }
}

class PersistentMemoryDB<T> extends InMemoryDatabase<T> implements Persistable {
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

// const myDB = new PersistentMemoryDB()
// myDB.set('foo', 10)
// // myDB.db["foo"] = "baz"  // set ค่าได้เหมือนกัน ถ้า ใส่ private มันจะใช้ไม่ได้
// console.log(myDB.get("foo"))
// console.log(myDB.saveToString())

// const saved = myDB.saveToString()

// const myDB2 = new PersistentMemoryDB()
// myDB2.restoreFromString(saved)
// console.log(myDB2.get("foo"))
