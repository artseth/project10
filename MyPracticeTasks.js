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


 class Person{
    constructor(name, surname, age, race){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    personInfo(){
        console.log (`${this.name} ${this.surname}is a student at Town View and is ${this.age} years old ` )
    }
 }

 const person01 = new Person ('Tshepiso', 'Molokwane', 18)
 const person02 = new Person ('Noma', 'Hadebe', 16)

 person02.personInfo();


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


//Callbacks and Promises


        //CALLBACKS


function judge(grade) {
 switch (true) {
    case grade == "A":
        console.log("You got an", grade, ": amazing!");
        break;
    case grade == "B":
        console.log("You got a", grade, ": well done!");
        break;
    case grade == "C":
        console.log("You got a", grade, ": alright.");
        break;
    case grade == "D":
        console.log("You got a", grade, ": hmmm...");
        break;
        default:
        console.log("An", grade, "! What?!");
    }
 }


function getGrade(score, callback) {
 let grade;
 switch (true) {
    case score >= 90:
            grade = "A";
        break;
    case score >= 80:
        console.log(score);
            grade = "B";
        break;
    case score >= 70:
            grade = "C";
        break;
    case score >= 60:
            grade = "D";
        break;
    default:
            grade = "F";
    }
    callback(grade);
 }
 getGrade(94, judge);




        
 
 
            //PROMISES

function greet (name, callback){
    console.log(`hello,${name}`);
    callback();
}

function start() {
    console.log('Are you ready to start the program');
}

greet('Tshepiso', start);


let test = new Promise ((resolve, reject) =>{
    let a = 1 + 2;
    if (a === 2){
        resolve('success');
    } else{
        reject('failed:');
    }
}
)

test.then ((message) =>{
    console.log('This is in the then,' + message);
}).catch((message) =>{
    console.log(message + 'This is in the catch')
})

