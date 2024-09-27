class Parson {
  constructor(name,age){
    this.name = name ;
    this.age = age;
  }

  sleep(){
    console.log(`${this.name} is slipping now`)
  }
}

const kodon = new Parson ("Kodom",20)

kodon.sleep()