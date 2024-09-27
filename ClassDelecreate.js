class students {
  constructor (name, classes, year){
    this.name = name;
    this.class = classes;
    this.year = year
  }

  student () {
    return `
    MY name is ${this.name}. I read in Class ${this.class}. I passed Year ${this.year}
    `
  }
}


console.log(new students("Sabbir","10", 2023).student())
