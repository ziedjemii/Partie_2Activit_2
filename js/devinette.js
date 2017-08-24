/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
var chance=1;
while (chance <= 6) {
var estimation=Number(prompt("Saisissez un nombre :"));
if(estimation==solution){
	console.log("félicitation la réponse était bien " + solution + " vous avez trouvez du " + chance + " coup");
	chance=0;
	break;
}
else if (estimation<solution)
	console.log(estimation + " est trop petit");
else if (estimation>solution)
	console.log(estimation + " est trop grand");
chance++;
}
if (chance!=0)
console.log("perdu la réponse était " + solution +  "vous avez trouvez du chance" + coup );