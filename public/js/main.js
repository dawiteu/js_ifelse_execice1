console.log( 1 == "1"); 
console.log( 1 === "1"); 

/*
let pren = prompt('Entre le prenom ? '); 

if(pren.length < 5){
    alert('trop court');
}

let ch1 = Math.round(Math.random() * 10); 
let ch2 = Math.round(Math.random() * 10); 
let resadd = ch1+ch2; 
let resmul = ch1*ch2; 



let repadd = prompt(`Combien font ${ch1}+${ch2}? (aide: ${resadd})`); 

if(resadd == repadd){
    alert('supeer');
}else{
    //alert(`erreur!!\n ta reponse: ${rep} \n bonne reponse: ${res}`);
    alert('erreur'); 
}




let repmul = prompt(`Combien font ${ch1}x${ch2}? (aide: ${resmul})`); 

if(resmul == repmul){
    alert(`supeer la reponse c'etais bien ${resmul} `);
}else if(repmul > resmul){
    alert(`erreur!! tu etais a ${repmul-resmul} unité pres. `);
}else{
    alert(`erreur!! tu etais a ${resmul-repmul} unité pres. `);
}


let tab = []; 

let toadd1 = prompt('Valeur a ajouter (1) ');
tab.push(toadd1); 

let toadd2 = prompt('Valeur a ajouter (2) ');
tab.push(toadd2); 

let toadd3 = prompt('Valeur a ajouter (3) ');
tab.push(toadd3); 

if(tab.length >= 2){
    alert('le tab est plein! '+tab); 
}


let grandNombres = []; 
let petitNombres = []; 

let nb1 = prompt('Entre un nombre'); 
let nb2 = prompt('Entre un nombre'); 
let nb3 = prompt('Entre un nombre'); 
let nb4 = prompt('Entre un nombre'); 
let nb5 = prompt('Entre un nombre'); 


if(nb1 >= 12){
    grandNombres.push(nb1);
}else{
    petitNombres.push(nb1); 
}

if(nb2 >= 12){
    grandNombres.push(nb2);
}else{
    petitNombres.push(nb2); 
}

if(nb3 >= 12){
    grandNombres.push(nb3);
}else{
    petitNombres.push(nb3); 
}

if(nb4 >= 12){
    grandNombres.push(nb4);
}else{
    petitNombres.push(nb4); 
}


if(nb5 >= 12){
    grandNombres.push(nb5);
}else{
    petitNombres.push(nb5); 
}


alert(` Les gands: ${grandNombres} \n Les petits: ${petitNombres}`); 

*/


/*
alert('Un petit jeux: horizontal (a,b,c) + nchiffre (ex b3); \n Essaye de trouver la position.'); 

let positions = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];

let positnoms = ['HG', 'HM', 'HD','CG','CM', 'CD', 'BG', 'BC', 'BD'];

//console.log(positions[0]); 

let randompos = Math.round(Math.random() * positions.length); 

console.log(positions[randompos]); 


let rep = prompt(`
Je suis ${positions[randompos]} 
[ HG ] - [ HM ] - [ HD ] \n
[ CG ] - [ CM ] - [ CD ] \n 
[ BG ] - [ BM ] - [ BG ] \n
`); 

if(positions[positnoms.indexOf(rep)] == positions[randompos]){
    alert('bravo tu as reussi'); 
}else{
    alert('Desole tu as echouer!'); 
}

*/

let jours = ["lundi", "mardi","mercredi", "jeudi","vendredi"]; 

let userjour = prompt("Entre un jour de la semaine:"); 

userjour = userjour.toString();

userjour = userjour.toLowerCase(); 


if(jours.indexOf(userjour) >= 0 && jours.indexOf(userjour) <= 2){
    console.log('tu es en e-learning');
}else if(jours.indexOf(userjour) >= 2 && jours.indexOf(userjour) <= jours.length){
    console.log('Tu es en presentielle');
}else{
    console.log('valeur incconue; ');
}