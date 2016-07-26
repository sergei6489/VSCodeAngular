export class Passenger
{
    public id:number;
    public name: string;
    public surname:string;
    public age:number;
    public isMale:boolean;
    public isSelect: boolean;

    constructor( id:number,  name: string,  surname:string,  age:number, isMale:boolean)
    {
        this.id= id;
        this.name = name;
        this.surname=surname;
        this.age=age;
        this.isMale = isMale;
    }

    updatePassenger(passenger: Passenger)
    {
        this.name = passenger.name;
        this.surname = passenger.surname;
        this.age = passenger.age;
        this.isMale = passenger.isMale;
    }  
}