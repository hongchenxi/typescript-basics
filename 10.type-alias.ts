// type aliase
let sum: (x: number, y: number) => number
const result = sum(1, 2)

type PlusType = (x: number, y: number) => number
let sum2: PlusType
const result2 = sum2(1, 2)

type StrOrNumber = string | number
let result3: StrOrNumber = '123'
result3 = 123

const str: 'name' = 'name'
const number: 1 = 1

type Directions = 'Up' | 'Down' | 'Left' | 'Right'
let where: Directions = 'Left'

interface IName {
  name: string
}

type IPerson = IName & { age: number }
let person: IPerson = { name: 'ifxi', age: 20}
