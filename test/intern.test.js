//const  = require('process');
const Intern = require ('./lib/Intern'); 
describe ("Intern", () => {
    const testIntern = {
        name:"Bob",
        empid: 10,
        email: "bob@bob.com",
    };
    expect(testMgr.Intern[0]).toBeInstanceOf(Intern);

    });