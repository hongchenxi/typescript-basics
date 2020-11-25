class Animal {
  readonly name: string
  constructor(name) {
    this.name = name
  }
  run() {
    return `${this.name} is running`
  }
}

const snake = new Animal('ss')
console.log(snake.run())

class Dog extends Animal {
  eat() {
    return `${this.name} is eating`
  }
}

const xchw = new Dog('xchw')
console.log(xchw.run())
console.log(xchw.eat())

class Cat extends Animal {
  static categories = ['China']
  constructor(name) {
    super(name)
    console.log(this.name)
  }
  run() {
    return 'diao' + super.run()
  }
}

const diao = new Cat('diao')
console.log(diao.run())
console.log(Cat.categories)