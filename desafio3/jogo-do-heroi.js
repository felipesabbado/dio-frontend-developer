class Hero {
    constructor(name, age, sexo, type) {
        this.name = name
        this.age = age
        this.sexo = sexo
        this.type = type
    }

    attack() {
        let atk
        switch (this.type) {
            case "mago":
            case "maga":
                atk = "magia"
                break
            case "guerreiro":
            case "guerreira":
                atk = "espada"
                break
            case "ninja":
                atk = "shuriken"
                break
            case "monge":
            case "monja":
                atk = "artes marciais"
                break
            default:
                atk = "genérico"
        }

        if(this.sexo === "M") {
            console.log(`O ${this.type} ${this.name} usou ${atk}`)
        } else {
            console.log(`A ${this.type} ${this.name} usou ${atk}`)
        }
    }
}

let personagem1 = new Hero("João", 18, "M", "mago")
let personagem2 = new Hero("Maria", 23, "F", "guerreira")
let personagem3 = new Hero("Godofredo", 45, "M", "monge")
let personagem4 = new Hero("Rosicreide", 98, "F", "ninja")

personagem1.attack()
personagem2.attack()
personagem3.attack()
personagem4.attack()
