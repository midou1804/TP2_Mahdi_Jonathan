/**
 * Projet : Création formulaire commande pizza 
 * Auteur : Mahdi Hmissi
 * Date : 10 février 2021
 */
 
function verifierNumeroDeTelephone(numTel) {
    
    if (!(isNaN(numTel)) & numTel.length == 9){
            
            return true ;

            }
            else 
                
                return false ;

    }
    // TEST : 
    console.log();
    //Function verifier numéro de téléphone :
    console.log("Test fonction numéro de téléphone") 
    console.log()      
    console.log("Entrée : '450250180'"); // Entrée 
    console.log("Resultat attendu: true");
    console.log("Résultat obtenu: " + verifierNumeroDeTelephone("450250180"));
     console.log(""); 
    // Test 2
    console.log("Entrée : '23444444h'"); // Entrée 2
    console.log("Resultat attendu: false");
    console.log("Résultat obtenu: " + verifierNumeroDeTelephone("23444444h")); 
    // Fin TEST 

function verifierEntier(entier){
    
    if (!isNaN(entier) & Number(entier) === parseInt(entier, 10)){ // Retourne vrai si la variable contient un nombre valide , // NOTE : Convertir le string en chiffre pour détécter les entiers.
        
           return true; 
              
    }
    else{
        
        return false ;  
    }
     
    
}

// TEST : 
console.log();
//Function verifier Entier :  
console.log("Test fonction Entier") 
console.log()    
console.log("Entrée : '4502'"); // Entrée 
console.log("Resultat attendu: true");
console.log("Résultat obtenu: " + verifierEntier("4502"));
 console.log(""); 
// Test 2
console.log("Entrée : 234.3"); // Entrée 2
console.log("Resultat attendu: false");
console.log("Résultat obtenu: " + verifierEntier("234.3")); 
// Fin TEST 
   


function verifierCodePostal(codePostal) { // Note : utiliser type of pour déterminer la nature de chaque carachtère.  
    validationCodePostal = /^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}[0-9]{1}$/ // on utilise cette expression regulière pour valider le format du code postal.
    if (validationCodePostal.test(codePostal) == true) 
    {
        
        return true ; 
    }
    else 
        
        return false; 
}

// TEST : 
console.log();
//Function code pastal :    
console.log("Test fonction code postal") 
console.log() 
console.log("Entrée : 'j2s7h5'"); // Entrée 
console.log("Resultat attendu: true");
console.log("Résultat obtenu: " + verifierCodePostal("j2s7h5"));
 console.log(""); 
// Test 2
console.log("Entrée : 'jjs45h'"); // Entrée 2
console.log("Resultat attendu: false");
console.log("Résultat obtenu: " + verifierCodePostal("jjs45h")); 
// Fin TEST 