/*kódinszpektorba lévő szöveg megváltoztatása*/

console.log("hello");
console.log("hello2");

(function () {
	'use strict'
	//minden amit ide irók az strict módban fog futni
	//a strict mód szigorubb szabályokkal futtatja a javascript kodot; és több hibát fog kiirni a böngésző
	//amit anélkül nem tenne meg
	//változó dekralása varr-ral, ez egy ujradekralálható változó lessz (nem ugat érte a böngésző)
	
	var szoveg2 = "valami";
	console.log(szoveg2);
	//erre nem kapunk hibát mert a var kulcssszóval deklarált változót ujradeklaráljuk:
	var szoveg2 = "valami";
	//a let kulcsszóval létrehozott változót nem lehet ujradeklarálni a következő sort ha kikommentezzük, kapunk nem kapunk
	// szoveg3 = "szoveg3 ezt let-el hoztuk létre
	
	//ez egy értékadás, nem deklarálás:
	szoveg3 = "uj erteketkap a szoveg3";
	//a console.log egy fügvény, aminek átadjuk a szöveg3 változót
	//a console.log egy más ember által irt kód, ami azt csinálja a neki adott változóval, hogy kiirja a consolra
	console.log(szoveg3);
	
	//kiirathatjuk eggyszerre a szoveget és a változót is:
	let szam1 = 94;
	console.log("a szam 1 valtozó éréke: "+szam1);
}()); // itt van vége a strict módnak, ez után már nem fog strict módban futni a kód


// implicid global változó lessz a szöveg
// global: a szöveg változó mindenhol elérhető a kódban
// implicid global változót lehetőleg ne használjunk

szoveg = "ez itt egy szöveg";
szoveg = "1/12; VI/; 26;";
console.log(szoveg);