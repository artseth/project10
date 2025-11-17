class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    } 

    startEngine() {
    console.log(`This ${this.make} ${this.model}'s engine is now running`);
};


}

const car_01 = new Car ('Ferrari', 'Enzo', '2024');
 car_01.startEngine();


 //Object Literals//

 const person = {
    firstName : "Alice",
    lastName : 'Morrison',
    age : Number ('20'),
    getFullName : function() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old`
       
    }
    
 }

 console.log(person.getFullName());
 console.log(person.lastName )
 console.log(typeof person.age)


 const players = [
    {name:'Mark', age: parseInt('25'), position: 'striker'},
    {name: 'Steven', age: parseInt('21'), position: 'goal keeper'},
    {name: 'Tshepiso', age: parseInt('23'), position: 'defence'},
 ]

 console.log(players[1].position)

 players[0].name = 'Tebogo';

 console.log (players)

 //TRY-CATCH ERROR HANDLING
const employee = {name: 'Tshepiso', surname: 'molokwane'}

try{
    const developerAge = employee.age;
        if(developerAge === undefined){
            throw new Error('The age value cannot be found on the object');
            console.log (`The developer's age is: + ${developerAge}` );
        }
}
catch(error){
    console.error('Error:', error.message)
}

const arrayNames = ['Hope', 'Noma', 'Tshepiso',]
try{
    const selectedName = arrayNames[6];
    if(selectedName === undefined){
        throw new Error ('The value cannot be found');
        console.log ('array names:', selectedName);
    }
    
}
catch(error) {
    console.error(error.message)
}