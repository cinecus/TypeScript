//? video No BS TS#7

function simpleState<T>(initial: T): [() => T, (v: T) => void] {
    let val: T = initial
    return [
        () => val,
        (v: T) => {
            val = v
        }
    ]
}

const [val1getter, val1setter] = simpleState(20)
console.log(val1getter())
val1setter(10)
console.log(val1getter())

const [val2getter, val2setter] = simpleState<string | null>(null)
console.log(val2getter())
val2setter("str")
console.log(val2getter())

interface Rank<RankItem> {
    item: RankItem;
    rank: number;
}

function ranker<RankItem>(items: RankItem[], rank: (v: RankItem) => number): RankItem[] {   //Rank Item เป็น Generic Type 
    const ranks: Rank<RankItem>[] = items.map((item) => ({
        item,
        rank: rank(item)
    }))

    ranks.sort((a, b) => a.rank - b.rank)
    return ranks.map((rank) => rank.item)
}


interface Pokemon {
    name: string;
    hp: number;
}

const pokemon: Pokemon[] = [
    {
        name: "Bulbasaur",
        hp: 20
    },
    {
        name: "Megasaur",
        hp: 5
    },
]

const ranks = ranker(pokemon, ({ hp }) => hp)
console.log(ranks)