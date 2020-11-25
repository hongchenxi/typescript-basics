interface Phone {
  networking(): void
  call(num: number): void
}

interface SmartPhone extends Phone {
  networking(): void
}


class xiaomi implements SmartPhone {
  networking() {

  }

  call(num: number) {
    
  }
}
