let nameHero = "Spider-Man";
let xpHero = 30000;

if (xpHero <= 1000) {
    console.log("O Herói de nome " + nameHero + " está no nível de Ferro");
}else if (xpHero > 1000 && xpHero < 2000){
    console.log("O herói de nome " + nameHero + " está no nivel de Bronze");
}else if (xpHero > 2000 && xpHero < 5001){
    console.log("O herói de nome " + nameHero + " está no nivel de Prata");
}else if (xpHero > 5000 && xpHero < 7001){
    console.log("O herói de nome " + nameHero + " está no nivel de Ouro");
}else if (xpHero > 7000 && xpHero < 8001){
    console.log("O herói de nome " + nameHero + " está no nivel de Platina");
}else if (xpHero > 8000 && xpHero < 9001){
    console.log("O herói de nome " + nameHero + " está no nivel de Ascendente");
}else if (xpHero > 9000 && xpHero < 10001){
    console.log("O herói de nome " + nameHero + " está no nivel de Imortal");
}else if (xpHero >= 10001){
    console.log("O herói de nome " + nameHero + " está no nivel de Radiante");
}