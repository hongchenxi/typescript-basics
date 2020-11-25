// global objects
const a: Array<number> = [1, 2, 3]

const date = new Date()
date.getTime()

const reg = /abc/
reg.test('abc')

// build-in object
Math.pow(2, 2)

// DOM and BOM
let body = document.body
let allLis = document.querySelectorAll('li')
allLis.keys()

document.addEventListener('click', (e) => {
  e.preventDefault()
})

// Utility Types
interface IPerson {
  name: string,
  age: number
}

let ifxi: IPerson = { name: 'ifxi', age: 12 } 

type IPartial = Partial<IPerson>
let ifxi2: IPartial = { name: 'ifxi2' }

type IOmit = Omit<IPerson, 'name'>
let ifxi3: IOmit = { age: 13 }
