function PrestigeContent(Prestiged, Monsters = [], Weapons = []) {
    if(Prestiged > 1) {
        Monsters.push(
            {
                "Name": "The RPG Monger",
                "HP": 70,
                "Attack": 4,
                "Description": "A rivaling RPG Salesman. Take him out to ensure the Power of the RPG does not fall into the wrong hands.",
                "Killcount": 0,
                "Gold": 20
            }, {
                "Name": "RPG Shattering Star",
                "HP": 200,
                "Attack": 4,
                "Description": "Gained his title after somehow managing to accidentally break 25 RPGs within 10 seconds.",
                "Killcount": 0,
                "Gold": 20
            }, {
                "Name": "The Gun Devil",
                "HP": 350,
                "Attack": 7,
                "Description": "A mysterious Devil wielding the power of Guns. Prove to the World that RPGs are superior!",
                "Killcount": 0,
                "Gold": 25
            }, {
                "Name": "The Demon Lord",
                "HP": 700,
                "Attack": 10,
                "Description": "Completely unrelated to the Monsters that attacked the Kingom. Might as well fight him for good measure, though.",
                "Killcount": 0,
                "Gold": 70
            }
        )
        Weapons.push(
            {
                "Name": "Terra RPG",
                "Attack": 30,
                "Description": "Way cooler than the Terra Blade.",
                "Price": 300,
                "Owned": false,
                "HealthBonus": 10
            }, {
                "Name": "LitRPG",
                "Attack": 40,
                "Description": "Wait a sec... This is just a book. Weirdly enough, it's pretty effective.",
                "Price": 1000,
                "Owned": false,
                "HealthBonus": 15
            }, {
                "Name": "Heavenly Demonic RPG",
                "Attack": 60,
                "Description": "Heavenly *and* Demonic? How does that even work?",
                "Price": 3000,
                "Owned": false,
                "HealthBonus": 25
            },
        )
    }

    const Returned = [Monsters, Weapons]
    return Returned
}

function test() {
    console.log("Im another file")
}