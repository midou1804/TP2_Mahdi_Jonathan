class Aliment {
    constructor (nom, poids) {
        this.nom = nom;
        this.poids = poids;
    }

}

class Croute extends Aliment {
    constructor(nom, poids, type, prix, taille){
        super(nom, poids);
        this.type = type;
        this.prix = prix;
        this.taille = taille;
    }

    //GV: les noms des méthodes doit commencer par minuscule
    TailleCroute(TailleCrouteMenu){ 
        this.TailleCroute
        switch(TailleCrouteMenu){
            case 1:
                TailleCroute = "Petite";
                break;
            case 2: 
                TailleCroute = "Moyenne";
                break;
            case 3:
                TailleCroute = "Grande";
                break;
            default:
                console.log = "Mauvaise valeur";
                break;
        }
    }
    PrixCroute(PrixCroute){ //GV: L'attribut prix de la croute a un valeur fixe.
        switch(TailleCrouteMenu){
            case 1:
                PrixCroute = 0;
                break;
            case 2: 
                PrixCroute = 0;
                break;
            case 3:
                PrixCroute = 0;
                break;
            default:
                console.log = "Mauvaise valeur";
                break;
        }
    }
}

class Fromage extends Aliment {
    constructor(nom, poids, prix) {
        super(nom, poids);
        this.prix = prix;
    }

    //GV: Il manque les méthodes
}

class Garniture extends Aliment {
    constructor(nom, poids, prix) {
        super(nom, poids)
        this.prix = prix
    }

    //GV: Il manquel es méthodes
}

class Epices extends Aliment {
    constructor(nom, poids, epices) { //GV: X Pas besoin de constructor
        super(nom, poids)
        this.epices = epices;
    }
}

class Pizza {
    constructor(numeroDePizza, taille, croute, tempsDeCuisson) {
        this.numeroDePizza = numeroDePizza;
        this.taille = taille;
        this.croute = croute;
        this.tempsDeCuisson = tempsDeCuisson;
        //GV: fromages
        //GV: garnitures
        //GV: prixComplet
        //GV: tempsCuisson
    }

    //GV: il manque les méthodes
}

class Commande{
    constructor(numeroDeCommande, dateDeLaCommande, heureDeLaCommande, pizzas, montanttotal){

    }

    //GV: Incomplet
}

class Client {
    constructor(nom, prenom, numeroDeTelephone, adresseCourriel, numeroDeCommande){
        this.nom = nom;
        this.prenom=prenom;
        this.numeroDeTelephone = numeroDeTelephone;
        this.adresseCourriel = adresseCourriel;
        this.numeroDeCommande = numeroDeCommande; //GV: commande (pas le numéro de commande, c'est la commande au complet)
    }
}





