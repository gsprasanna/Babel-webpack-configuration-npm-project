
class Human{
    constructor(name,age,gender){
        this._name=name;
        this._age=age;
        this._gender=gender;
        this._stamina=10;
    }
    set age(newage){
        this._age=newage;
    }
    get age(){
        return this._age + "years";
    }
    walk(){
        if(this._stamina>=2){
            console.log(this._name + "walked");
            this._stamina -=2;
        }else{
            this.consumeEnergyDrink();
            this.walk();
        }
    }
    talk(){
        if(this._stamina>=4){
            console.log(this._name + "talked");
            this._stamina -=2;
        }else{
            this.consumeEnergyDrink();
            this.talk();
        }
    }
    consumeEnergyDrink(){
        this._stamina +=5;
        console.log(this._name+"is energised");
    }
}

const sathya = new Human("Sathya",20,"male");







