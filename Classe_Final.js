class Aliment{
    constructor(nom, poids){
        this.nom = nom; 
        this.poids = poids; 
    }

    informationAliments(){
        return this.nom + ", " + this.poids;  
    }
    
}

class Croute extends Aliment{
    constructor(nom, poids, type, prix, taille){
    super(nom, poids);
    this.type = type ;  
    this.prix = prix;
    this.taille = taille;
    } 

    prixCroute(){
        return (this.taille * this.prix);  
    }


}

class Fromage extends Aliment{ 
  constructor(nom, poids, prixFromage){
    super(nom, poids);
    this.prixFromage = prixFromage;  
    }
    prixFromage(){ 
        return (this.poids * this.prixFromage );
    }
} 
class Garniture extends Aliment{
    constructor(nom, poids, prixGarniture){
        super(nom, poids);
        this.prixGarniture = prixGarniture;  
        }
        informationGarniture(){
            return this.nom + ", " + this.poids + ", " + this.garniture + ", " + this.prixGarniture ;
        }
        prixGarniture(){
            return (this.poids * this.prixGarniture); 
            
        }
} 
class Epices extends Epices {
        super(nom, poids);
}

class Pizza {
    constructor(numeroPizza, taille, croute, fromage, garniture,prixComplet, tempsCuisson ){
    this.prixComplet = prixComplet ; 
    this.tempsCuisson = tempsCuisson ; 
    this.numeroPizza = numeroPizza; 
    this.taille = taille; 
    this.croute = croute ; 
    this.fromage = fromage ; 
    this.garniture = garniture; 
    
    }
    informationPizza(){ 
        return this.numeroPizza + ", " + this.taille + ", " + this.croute + ", " + this.fromage + ", " + this.garniture + ", " + this.prixComplet + ", " + this.tempsCuisson 
    }

    infoTempsCuisson(){
            return this.TempsCuisson;
    }
    modifierTempsCuisson(nouveauTempsCuisson) { 
            this.tempsCuisson = nouveauTempsCuisson;
    }
    
    infoTailleCroute(){
        return this.croute ;  
    }
    modifierCroute(){
        this.croute = nouvelleCroute ; 
    }

    infoTaille(){
        return this.taille; 
    }  
    modifierTaille(nouvelleTaille){
        this.taille = nouvelleTaille ; 
    }
    
    infosGarniture(){
        return this.garniture ; 
    }
        
    ajouterGarniture(garniture){

        this.garnitures(this.garnitures.length) = garniture;
    
    }
    
    infosFromage(){
        return this.fromage ; 

    }

    ajouterFromage(){
        this.fromages(this.fromages.length) = fromage; 
    }

    calculPrixComplet(prixComplet){
        (( this.garniture + this.fromage + this.croute ) * this.taille) = prixComplet;    
    }




}

class Commande extends Pizza{ 
    constructor(numCommande, dateCommande, heureCommande){
    super(this.numeroPizza, prixComplet)
    this.numCommande = numCommande ; 
    this.dateCommande = dateCommande ; 
    this.heureCommande = heureCommande ; 

    
    }
    informationCommande(){
        return this.numCommande + ", " + this.dateCommande + ", " + this.heureCommande + ", " + this.nom ; 
    }
}

class Client {
    constructor(nom, prenom, numTel, adresseCourriel){
        super(commande)
        this.nom= nom ; 
        this.prenom = prenom; 
        this.numTel = numTel; 
        this.adresseCourriel =adresseCourriel;  
        
    }
    informationClient(){
        return this.nom + ", " + prenom + ", " + numTel + ", " + this.adresseCourriel
    }
}

