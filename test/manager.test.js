//const  = require('process');
const Manager = require ('./lib/Manager'); 
describe ("Manager", () => {
    const testMgr = {
        name:"Bob",
        empid: 10,
        email: "bob@bob.com",
    };
    expect(testMgr.Manager[0]).toBeInstanceOf(Manager);

    });