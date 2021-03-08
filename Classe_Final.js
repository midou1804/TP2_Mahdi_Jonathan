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
    constructor(taille,numeroPizza, croute, fromage, garniture,prixComplet, tempsCuisson){
    this.numeroPizza = numeroPizza;
    this.taille = taille;
    this.croute = croute ;
    this.fromage = fromage ;
    this.garniture = garniture; 
    this.prixComplet = prixComplet ; 
    this.tempsCuisson = tempsCuisson ; 
    
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
         return this.prixComplet;
    }

}

class Commande{ 
        tps = 0.05 ;
        tvq = 0.09975 ; 
    constructor(numCommande, dateCommande, heureCommande,listepizzas, prixComplet,tps, tvq){
        
        this.numCommande = numCommande ; 
        this.dateCommande = dateCommande ; 
        this.heureCommande = heureCommande ; 
        this.listepizzas = listepizzas; // NOTE !! : Liste à créer !! 
        this.prixComplet = prixComplet;
        this.tps = tps = tps// A t-on besoin du "this." pour déclarer des valeurs par défaut ???  
        this.tvq = tvq ; 
    
    }
    informationCommande(){
        return this.numCommande + ", " + this.dateCommande + ", " + this.heureCommande + ", " + this.listepizzas+ ", " + this.prixComplet; 
    }
    informationTpsTvq(){
        return this.tps + ", " + this.tvq ; 
    }
    claculPrixComplet(){
        var nouveauPrixComplet = ((this.tps + this.tvq ) * this.prixComplet ) ;
        return nouveauPrixComplet ;
    }
}

class Client {
    constructor(nom, prenom, numTel, adresseCourriel){
        this.nom = nom ; 
        this.prenom = prenom; 
        this.numTel = numTel; 
        this.adresseCourriel = adresseCourriel;   
        
    }
    informationClient(){
        return this.nom + ", " + this.prenom + ", " + this.numTel + ", " + this.adresseCourriel ; 
    }
}

class Taille extends Pizza{ // Lire TP2: 7.ii  
    constructor(taille,nom, diametre,facteur){
        super(taille) ; //La classe ne veut pas aller chercher la taille de la pizza 
     this.nom = nom ;
     this.diametre = diametre ;
     this.facteur = facteur ; 
      
    }
     
    // NOTE : Je ne sais pas ce que ca va donner ?!
     
      
     
     // Transforme la taille inscrite dans la classe pizza en un facteur dans la classe taille.  ++ Correction probléme de MAJ 
    getFacteur(){  
     if((this.taille).toUpperCase() == "P") {
        this.facteur = 1;
   } else if (this.taille.toUpperCase() == "M") {
            this.facteur = 2 ;
   } else if(this.taille.toUpperCase() == "G") {
            this.facteur = 3;
   } else {
        console.log("erreur");
    }    
    
   return this.facteur;   
    }
     
    
    informationTailleClass(){
        return this.taille;  
    }

}
    /*
    // Code pour tester la classe Aliment : 
    Aliment1 = new Aliment ('Aliment1' ,'45') ; 
    console.log(Aliment1);

    //Tester classe Croute 
    croute1 = new Croute ('brule' ,60 ,'calcine', 1020, 'M') ;
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

    // Test pizza  !!! 
        pizza1 = new Pizza (4504 , 'G', 'Mince', 'suisse, mozerella et cheddar', 'tomate, peperroni et olives', (50*(this.tps+this.tvq)), 8); 
        console.log(pizza1);   
        console.log(pizza1.infoTaille())
    //Test de la classe commande  

    commande1 = new Commande (2345 ,2021-12-30 , "20:34", 'troisfromages', 40, 0.05, 0.09975 ) ;  
    console.log(commande1); 
    console.log(commande1.informationTpsTvq()); 
    console.log(commande1.prixComplet)
    console.log(commande1.informationCommande()) ;
    console.log(commande1.claculPrixComplet());
    
    //Test de la classe client  
        client1 = new Client ('Mahdi' , 'Hmissi', '3502504567', 'ghth@.com') ; 
        console.log(client1);

       console.log(client1.informationClient()); 
       
    //Test de la classe taille 
       taille3 = new Taille ('g','Petite', 12) ;
       console.log(taille3)  ;
        console.log(taille3.informationTailleClass());
        console.log(taille3.getFacteur()); // Le test fonctionne . miniscule et MAJ combinés .  

    //test tableau
    
    var peproni = new Garniture('peperoni', 5, 15);
    var champignons = new Garniture('champignon', 5, 20);
    var poivron = new Garniture('poivron', 5, 30);

    var mozzarela = new Fromage('mozzarela', 5, 15)

    var pizza2 = new Pizza(3, 2, 2, [mozzarela], [peproni, champignons, poivron], 25, 10);

    console.log(pizza2);
    //pizza2.calculPrix();
    console.log(pizza2.calculPrix());    
    */
        


        

    
    
    




