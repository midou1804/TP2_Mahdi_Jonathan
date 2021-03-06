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
        if(this.taille == 'P') {
            this.taille = 1 
        }
        else if (this.taille == 'M') 
                this.taille = 2 ;
        else if(this.taille == 'G') 
                this.taille = 3 
        else
            console.log("erreur")        

        return(this.taille * this.prix);              
    } 
        
        


}

class Fromage extends Aliment{ 
  constructor(nom, poids, prixFromage){
    super(nom, poids);
    this.prixFromage = prixFromage;  
    }
    calculPrixFromage(){ 
        return (this.poids * this.prixFromage );
    }
} 
class Garniture extends Aliment{
    constructor(nom, poids, prixGarniture){
        super(nom, poids);
        this.prixGarniture = prixGarniture;  
        }
        informationGarniture(){
            return this.nom + ", " + this.poids + ", " + this.prixGarniture ;
        }
        calculPrixGarniture(){
            return (this.poids * this.prixGarniture); 
            
        }
} 
class Epices extends Aliment {
        super(nom, poids){
            
        }
}

class Pizza {
    constructor(numeroPizza, taille, croute, fromage, garnitures,prixComplet, tempsCuisson){
    this.prixComplet = prixComplet ; 
    this.tempsCuisson = tempsCuisson ; 
    this.numeroPizza = numeroPizza; 
    this.taille = taille; 
    this.croute = croute ; 
    this.fromage = fromage ; 
    this.garnitures = garnitures; 
    
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
        
    ajouterGarnitures(garniture){

        this.garnitures(this.garnitures.length) = garnitures;
    
    }
    
    infosFromage(){
        return this.fromage ; 

    }

    ajouterFromage(){
        this.fromages(this.fromages.length) = fromage; 
    }

    calculPrix(){
        var totalPrixGarniture = 0;
        for (let i = 0; i < this.garnitures.length; i++) {
            totalPrixGarniture += this.garnitures[i].prixGarniture; 
        }

        var totalPrixFromage = 0;
        for (let i = 0; i < this.fromage.length; i++) {
            totalPrixFromage += this.fromage[i].prixFromage; 
        }

         Pizza.prixComplet = (totalPrixFromage + totalPrixGarniture + Croute.prix) * Pizza.taille ;
         console.log(Pizza.prixComplet);
    }

    //for (let index = 0; index < fromage.lengtfromagedex++) {
      //  fromage element = array[index];
    //    fromage


}

class Commande{ 
    constructor(numCommande, dateCommande, heureCommande,listepizzas ,prixComplet){
        
        this.numCommande = numCommande ; 
        this.dateCommande = dateCommande ; 
        this.heureCommande = heureCommande ; 
        this.listepizzas = listepizzas; // NOTE !! : Liste à créer !! 
        this.prixComplet = prixComplet; 
    
    }
    informationCommande(){
        return this.numCommande + ", " + this.dateCommande + ", " + this.heureCommande + ", " + this.listepizzas+ ", " + this.prixComplet; 
    }
}

class Client {
    constructor(nom, prenom, numTel, adresseCourriel){
        this.nom= nom ; 
        this.prenom = prenom; 
        this.numTel = numTel; 
        this.adresseCourriel = adresseCourriel;  
        
    }
    informationClient(){
        return this.nom + ", " + this.prenom + ", " + this.numTel + ", " + this.adresseCourriel ; 
    }
}

    /*
    // Code pour tester la classe Aliment : 
    Aliment1 = new Aliment ('Aliment1' ,'45') ; 
    //console.log(Aliment1);

    //Tester classe Croute 
    croute1 = new Croute ('brule' ,60 ,'calcine', 1020, 'G') ;
    console.log(croute1); 
    
    console.log(croute1.prixCroute());  


    //Tester classe fromage  

    fromage1 = new Fromage ('Fromage' ,50 ,5); 
    console.log(fromage1);
     
    console.log(fromage1.calculPrixFromage()); 

    //Tester classe garniture 
    
        garniture1 = new Garniture ('tomate', 45, 0.70); 
        console.log(garniture1); 
        console.log(garniture1.informationGarniture()) ;   

        console.log(garniture1.calculPrixGarniture()); 

    // pas de test pour epices 

    // Test pizza  
        pizza1 = new Pizza ('4504', 'M', 'Mince', 'suisse, mozerella et cheddar', 'tomate, peperroni et olives', 50, 8); 
        console.log(pizza1);   
 
    //Test de la classe commande  

    commande1 = new Commande (2345 ,2021-12-30 , "20:34", 'troisfromages', 40 ) ;  
    console.log(commande1); 

    console.log(commande1.informationCommande()) ;
    
    //Test de la classe client  
        client1 = new Client ('Mahdi' , 'Hmissi', '3502504567', 'ghth@.com') ; 
        console.log(client1);

       //console.log(client1.informationClient()); 

       */

    //test tableau
    
    var peproni = new Garniture('peperoni', 5, 15);
    var champignons = new Garniture('champignon', 5, 20);
    var poivron = new Garniture('poivron', 5, 30);

    var mozzarela = new Fromage('mozzarela', 5, 15)

    var pizza2 = new Pizza(3, 'M', 'mince', [mozzarela], [peproni, champignons, poivron], 25, 10);

    console.log(pizza2);

    console.log(pizza2.calculPrix);

    /*
    for (let i = 0; i < pizza2.length; i++) {
        
        var total = total += pizza2[5,i];
        
    }
    */


