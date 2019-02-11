class Dog{
    name:string;

    constructor(name:string){
        this.name=name;
    }
    sayHello(){
        return this.name+"hoge";
    }
}

let shiro = new Dog("白太郎")

document.body.innerHTML = shiro.sayHello();