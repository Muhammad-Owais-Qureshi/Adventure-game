#! /usr/bin/env node
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fueldecrease() {
        let decrese = this.fuel - 25;
        this.fuel = decrese;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Villan {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fueldecrease() {
        let decrese = this.fuel - 25;
        this.fuel = decrese;
    }
}
console.log("=============================================");
console.log("========Well come to Adventure game==========");
console.log("=============================================");
let hero = await inquirer.prompt([
    {
        name: "Name",
        type: "input",
        message: "Enter your name"
    }
]);
let enemy = await inquirer.prompt({
    name: "villan",
    type: "list",
    choices: ["Robot", "Alein"],
    message: "Select your opponent"
});
let playHero = new Player(hero.Name);
let playvillan = new Villan(enemy.villan);
do {
    if (enemy.villan === "Robot") {
        let ask = await inquirer.prompt({
            name: "select",
            type: 'list',
            choices: ["Attack", "Life drink", "Run"]
        });
        if (ask.select === "Attack") {
            let random = Math.floor(Math.random() * 2);
            if (random > 0) {
                playHero.fueldecrease();
                console.log(`${playHero.name} Fuel is:${playHero.fuel}`);
                console.log(`${playvillan.name} Fuel is:${playvillan.fuel}`);
            }
            if (random <= 0) {
                playvillan.fueldecrease();
                console.log(`${playvillan.name} Fuel is:${playvillan.fuel}`);
                console.log(`${playHero.name} Fuel is:${playHero.fuel}`);
            }
            if (playHero.fuel == 0) {
                console.log("You Loss :Game Over");
                process.exit();
            }
            if (playvillan.fuel == 0) {
                console.log("You win");
                process.exit();
            }
        }
        if (ask.select === "Life drink") {
            playHero.fuelIncrease();
            console.log(`Your Health is: ${playHero.fuel}`);
        }
        if (ask.select === "Run") {
            console.log("You loss: Game Over");
            process.exit();
        }
    }
    if (enemy.villan === "Alein") {
        let ask = await inquirer.prompt({
            name: "select",
            type: 'list',
            choices: ["Attack", "Life drink", "Run"]
        });
        if (ask.select === "Attack") {
            let random = Math.floor(Math.random() * 2);
            if (random > 0) {
                playHero.fueldecrease();
                console.log(`${playHero.name} Fuel is:${playHero.fuel}`);
                console.log(`${playvillan.name} Fuel is:${playvillan.fuel}`);
            }
            if (random <= 0) {
                playvillan.fueldecrease();
                console.log(`${playvillan.name} Fuel is:${playvillan.fuel}`);
                console.log(`${playHero.name} Fuel is:${playHero.fuel}`);
            }
            if (playHero.fuel == 0) {
                console.log("You Loss :Game Over");
                process.exit();
            }
            if (playvillan.fuel == 0) {
                console.log("You win");
                process.exit();
            }
        }
        if (ask.select === "Life drink") {
            playHero.fuelIncrease();
            console.log(`Your Health is: ${playHero.fuel}`);
        }
        if (ask.select === "Run") {
            console.log("You loss: Game Over");
            process.exit();
        }
    }
} while (true);
