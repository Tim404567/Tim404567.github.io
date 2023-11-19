let Monsters = [
    {
        "Name": "Goblin",
        "HP": 3,
        "Attack": 1,
        "Description": "A small Goblin. No match for an RPG.",
        "Killcount": 0,
        "Gold": 1
    }, {
        "Name": "Hobgoblin",
        "HP": 7,
        "Attack": 1,
        "Description": "A slightly bigger Goblin.",
        "Killcount": 0,
        "Gold": 2
    }, {
        "Name": "Skeleton",
        "HP": 12,
        "Attack": 2,
        "Description": "Sticks and Stones may Break their Bones, but RPGs are much more effective.",
        "Killcount": 0,
        "Gold": 3
    }, {
        "Name": "Dragon",
        "HP": 17,
        "Attack": 2,
        "Description": "Very Intimating. Much less intimidating after being hit by an RPG, though.",
        "Killcount": 0,
        "Gold": 5
    }, {
        "Name": "Dungeons",
        "HP": 20,
        "Attack": 3,
        "Description": "Wait, i think i got the order mixed up...",
        "Killcount": 0,
        "Gold": 7
    }, {
        "Name": "Wizard of the Coast",
        "HP": 25,
        "Attack": 3,
        "Description": "Infamous for his immense Greed.",
        "Killcount": 0,
        "Gold": 10
    }, {
        "Name": "Angel with a shotgun",
        "HP": 35,
        "Attack": 4,
        "Description": "Known for his poor taste in Pop Music.",
        "Killcount": 0,
        "Gold": 15
    }
]

let Weapons = [
    {
        "Name": "RPG RPG",
        "Attack": 1,
        "Description": "What can i say? Its an rpg.",
        "Price": 0,
        "Owned": true
    }, {
        "Name": "Slightly better RPG",
        "Attack": 2,
        "Description": "The marketing doesn't lie.",
        "Price": 10,
        "Owned": false
    }, {
        "Name": "Holy RPG",
        "Attack": 5,
        "Description": "Holy Hand Grenades not included.",
        "Price": 20,
        "Owned": false
    }, {
        "Name": "Dark RPG",
        "Attack": 7,
        "Description": "The Ultimate RPG in Terms of attack and defense.",
        "Price": 35,
        "Owned": false
    }, {
        "Name": "Ultima Weapon",
        "Attack": 12,
        "Description": "...said weapon being an RPG.",
        "Price": 50,
        "Owned": false
    }, {
        "Name": "Enma's RPG",
        "Attack": 18,
        "Description": "What do we say to the God of Death? - Nothing, he's only in the third Game.",
        "Price": 70,
        "Owned": false
    }, {
        "Name": "Enma's RPG",
        "Attack": 18,
        "Description": "What do we say to the God of Death? - Nothing, he's only in the third Game.",
        "Price": 70,
        "Owned": false
    }, {
        "Name": "The Big Crunch",
        "Attack": 25,
        "Description": "Requires 1.79e308 useless Paperclips.",
        "Price": 120,
        "Owned": false
    } 
]

let currentMonster = 0
let HighestMonster = 0
let currentWeapon = 0


let MaxPlayerHP = 10
let PlayerHP = 10
let PlayerAttack = Weapons[currentWeapon].Attack

let MonsterHP = Monsters[currentMonster].HP
let MonsterAttack = Monsters[currentMonster].Attack

let Gold = 0

function MakeShop() {
    const ShopDiv = document.querySelector("#Shop")
    ShopDiv.innerHTML = ""

     for (let i = 0; i < Weapons.length; i++) {
        const element = Weapons[i];

        const div = document.createElement('div')
        div.className = 'Weapon'
        if(element.Owned == false) {
            div.innerHTML = `
            <p> ${element.Name} <\p>
            <p> ${element.Description} <\p>
            <p> Power: ${element.Attack}<\p>
            <p> Cost: ${element.Price} Gold <\p>
            <input type="button" value="Buy" onclick="BuyWeapon(${i})"/>
        `
        } else {
            div.innerHTML = `
            <p> ${element.Name} <\p>
            <p> ${element.Description} <\p>
            <p> Power: ${element.Attack}<\p>
            <p> Cost: ${element.Price} Gold <\p>
            <input type="button" value="Equip" onclick="EquipWeapon(${i})"/>
        `
        }

        ShopDiv.appendChild(div);
    }
}

function ChangeMonster(ID) {
    currentMonster = ID

    if(currentMonster == -1) {
        currentMonster = 0
    }
    const MonsterDescriptionLabel = document.querySelector("#MonsterDescription")
    const MonsterHPLabel = document.querySelector("#MonsterHP")
    const MessageLog = document.querySelector("#MessageLog")
    MonsterHP = Monsters[currentMonster].HP
    MonsterAttack = Monsters[currentMonster].Attack
    PlayerHP = MaxPlayerHP
    MonsterHPLabel.innerHTML = MonsterHPLabel.innerHTML = Monsters[currentMonster].Name + ": " + MonsterHP + "HP"
    MonsterDescriptionLabel.innerHTML = Monsters[currentMonster].Description

    if(Monsters[currentMonster].Killcount > 1) {
        MessageLog.innerHTML = "Killed "+ Monsters[currentMonster].Killcount+ " " + Monsters[currentMonster].Name + "s" + "."
    } else {
        MessageLog.innerHTML = "Killed "+ Monsters[currentMonster].Killcount+ " " + Monsters[currentMonster].Name + "."
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    const MonsterHPLabel = document.querySelector("#MonsterHP")
    const PlayerHPLabel = document.querySelector("#PlayerHP")
    const AttackButton = document.querySelector("#Attack")
    const RPGLabel = document.querySelector("#Weapon")
    const WeaponDescriptionLabel = document.querySelector("#WeaponDescription")
    const NextMonster = document.querySelector("#NextMonster")
    const PreviousMonster = document.querySelector("#PreviousMonster")
    const MonsterDescriptionLabel = document.querySelector("#MonsterDescription")
    AttackButton.addEventListener("click", attack)
    RPGLabel.innerHTML = "Current RPG: " + Weapons[currentWeapon].Name
    WeaponDescriptionLabel.innerHTML = Weapons[currentWeapon].Description
    MonsterDescriptionLabel.innerHTML = Monsters[currentMonster].Description
    MonsterHPLabel.innerHTML = Monsters[currentMonster].Name + ": " + MonsterHP + "HP"
    PlayerHPLabel.innerHTML = "You: " + PlayerHP + "HP"
    setInterval(Gameloop, 1000)
    MakeShop()

    NextMonster.addEventListener("click", function() {
        if(currentMonster < HighestMonster) {
            ChangeMonster(currentMonster+1)
        }
    })

    PreviousMonster.addEventListener("click", function() {
        if(currentMonster > -1) {
            ChangeMonster(currentMonster-1)
        }
    })
});

function BuyWeapon(ID) {
    const RPGLabel = document.querySelector("#Weapon")
    const WeaponDescriptionLabel = document.querySelector("#WeaponDescription")

    if(Gold >= Weapons[ID].Price) {
        Gold - Weapons[ID].Price
        currentWeapon = ID
        PlayerAttack = Weapons[ID].Attack
        RPGLabel.innerHTML = "Current RPG: " + Weapons[ID].Name
        WeaponDescriptionLabel.innerHTML = Weapons[ID].Description
        Weapons[ID].Owned = true
        MakeShop()
        MessageLog.innerHTML = "Bought " + Weapons[ID].Name + "."
    } else {
        MessageLog.innerHTML = "You can't afford " + Weapons[ID].Name + "."
    }

}

function EquipWeapon(ID) {
    const RPGLabel = document.querySelector("#Weapon")
    const WeaponDescriptionLabel = document.querySelector("#WeaponDescription")
    const MessageLog = document.querySelector("#MessageLog")

    currentWeapon = ID
    PlayerAttack = Weapons[ID].Attack
    RPGLabel.innerHTML = "Current RPG: " + Weapons[ID].Name
    WeaponDescriptionLabel.innerHTML = Weapons[ID].Description
    MessageLog.innerHTML = "Equipped " + Weapons[ID].Name + "."
}

function attack() {
    const MonsterHPLabel = document.querySelector("#MonsterHP")
    MonsterHP=MonsterHP-PlayerAttack
    const MessageLog = document.querySelector("#MessageLog")
    const GoldLabel = document.querySelector("#Gold")

    if(MonsterHP <=0) {
        Monsters[currentMonster].Killcount++
        if(Monsters[currentMonster].Killcount > 1) {
            MessageLog.innerHTML = "Killed "+ Monsters[currentMonster].Killcount+ " " + Monsters[currentMonster].Name + "s" + "."
        } else {
            MessageLog.innerHTML = "Killed "+ Monsters[currentMonster].Killcount+ " " + Monsters[currentMonster].Name + "."
        }

        if(currentMonster == Monsters.length-1) {
            location.href = "./Ending.html"
        }

        if(Monsters.length-1 > currentMonster) {
            ChangeMonster(currentMonster+1)
            HighestMonster++
        }

        MonsterHP = Monsters[currentMonster].HP
        MonsterAttack = Monsters[currentMonster].Attack
        PlayerHP = MaxPlayerHP
        Gold = Gold + Monsters[currentMonster].Gold
        GoldLabel.innerHTML = "Gold: " + Gold
    }
    MonsterHPLabel.innerHTML = MonsterHPLabel.innerHTML = Monsters[currentMonster].Name + ": " + MonsterHP + "HP"
}

function Gameloop() {
    const MessageLog = document.querySelector("#MessageLog")
    PlayerHP = PlayerHP - MonsterAttack
    const PlayerHPLabel = document.querySelector("#PlayerHP")
    PlayerHPLabel.innerHTML = "You: " + PlayerHP + "HP"

    if(PlayerHP <= 0) {
        MonsterHP = Monsters[currentMonster].HP
        MessageLog.innerHTML = "You died."
        if(currentMonster - 1 > -1) {
            currentMonster--
            let MonsterHP = Monsters[currentMonster].HP
            let MonsterAttack = Monsters[currentMonster].Attack
            const MonsterHPLabel = document.querySelector("#MonsterHP")
            MonsterHPLabel.innerHTML = Monsters[currentMonster].Name + ": " + MonsterHP + "HP"
        }
        PlayerHP = MaxPlayerHP
    }
    
}