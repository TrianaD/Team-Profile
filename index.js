const inquirer = require('inquirer');
const fs = require ('fs');
const generatefile = require("./generate");

// employee array and importing classes
const Employees = [];
const Manager= require('./lib/Manager');
const Engineer= require('./lib/Engineer');
const Intern= require('./lib/Intern');


const begin = async () => {
    await createMgr();

    
}

describe