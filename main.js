let Monsters = [
    {
        "Name": "Goblin",
        "HP": 3,
        "Attack": 1,
        "Description": "Placeholder",
        "Killcount": 0,
        "Gold": 1
    }, {
        "Name": "Hobgoblin",
        "HP": 3,
        "Attack": 1,
        "Description": "Placeholder",
        "Killcount": 0,
        "Gold": 1
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
            <p> Cost: ${element.Price} Gold <\p>
            <input type="button" value="Buy" onclick="BuyWeapon(${i})"/>
        `
        } else {
            div.innerHTML = `
            <p> ${element.Name} <\p>
            <p> ${element.Description} <\p>
            <p> Cost: ${element.Price} Gold <\p>
            <input type="button" value="Equip" onclick="EquipWeapon(${i})"/>
        `
        }

        ShopDiv.appendChild(div);
    }
}

function ChangeMonster(ID) {
    currentMonster = ID
    const MonsterHPLabel = document.querySelector("#MonsterHP")
    const MessageLog = document.querySelector("#MessageLog")
    MonsterHP = Monsters[currentMonster].HP
    MonsterAttack = Monsters[currentMonster].Attack
    PlayerHP = MaxPlayerHP
    MonsterHPLabel.innerHTML = MonsterHPLabel.innerHTML = Monsters[currentMonster].Name + ": " + MonsterHP + "HP"

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
    AttackButton.addEventListener("click", attack)
    RPGLabel.innerHTML = "Current RPG: " + Weapons[currentWeapon].Name
    WeaponDescriptionLabel.innerHTML = Weapons[currentWeapon].Description

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

        if(Monsters.length-1 > currentMonster) {
            currentMonster++
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