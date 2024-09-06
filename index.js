
//Création d'un objet vide
let etudiant = {
    nom : "BYTYQI ",
    prenom : "Genis ",
    civilite : "Mr. ",
    age : new Date().getFullYear() - 2001,
    section : "BTS SIO "
};

let lesEtudiants = new Array();
lesEtudiants[0] = etudiant;

lesEtudiants[1] = {
    nom : "BYTYQI2 ",
    prenom : "Genis2 ",
    civilite : "Mr. ",
    age : new Date().getFullYear() - 2001,
    section : "BTS SIO "

};

afficherEtudiants(lesEtudiants);

//Fonction afficheEtudiants
function afficherEtudiants(tableau){

    let cases = tableau.length;
    for(i =0;i<cases;i++){
        let elementSelectionne = tableau[i].nom;
        console.log(elementSelectionne);
    }


}