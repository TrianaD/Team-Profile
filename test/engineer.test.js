//const  = require('process');
const Engineer = require ('./lib/Engineer'); 
describe ("Engineer", () => {
    const testEngr = {
        name:"Bob",
        empid: 10,
        email: "bob@bob.com",
    };
    expect(testEngr.Engineer[0]).toBeInstanceOf(Engineer);

    });