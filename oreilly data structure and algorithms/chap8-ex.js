function HasTable() {
    this.table = new Array(137);
    this.values = [];
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;
  }
  
  function put(key, data) {
    var keyLow = key.toLowerCase();
  var pos = this.betterHash(keyLow);
  if (this.table[pos] == undefined) {
    this.table[pos] = keyLow;
    this.values[pos] = data;
  }
  else {
    while (this.table[pos] != undefined) {
      pos++;
  }
    this.table[pos] = keyLow;
    this.values[pos] = data;
  }
  }
  
  function get(key) {
  var hash = -1;
  var keyLow = key.toLowerCase();
  hash = this.betterHash(keyLow);
  if (hash > -1) {
    for (var i = hash; this.table[hash] != undefined; i++) {
      if (this.table[hash] == keyLow) {
        return this.values[hash];
      }
    }
  }
  return undefined;
  }
  
  // function simpleHash(data) {
  //   var total = 0;
  //   for (var i = 0; i < data.length; ++i) {
  //     total += data.charCodeAt(i);
  //   }
  //     return total % this.table.length;
  // }
  
  function betterHash(string) {
  const H = 37;
  var total = 0;
  var data = string.toLowerCase();
    // console.log("data",data);
  for (var i = 0; i < data.length; ++i) {
  total += H * total + data.charCodeAt(i);
  }
  total = total % this.table.length;
  if (total < 0) {
  total += this.table.length-1;
  }
    // console.log(data + ": " + total);
  return parseInt(total);
  }
  
  function showDistro() {
    for(var i = 0 ; i < this.table.length; ++i){
      if(this.table[i] != undefined){
        console.log( i + ': ', this.table[i], " = ",this.values[i]);
      }
    }
  }
  
  
  // 1. Use linear probing to create a simple dictionary to store the definitions of words.
  // Your program should have two parts. The first part reads a text file that contains a
  // list of words and definitions and stores them in a hash table. The second part of the
  // program allows a user to enter a word and see the definition of that word.
  
  var cuvinte = [
    "PROLETCULTISM = Curent cultural (apărut în Uniunea Sovietică după Revoluția din Octombrie) ale cărui principii estetice se reduceau la ideea formării unei culturi „pur proletare” și care respingea întreaga moștenire culturală a trecutului.", 
    "ETIMOLOGISM = Tendință de a reforma limba literară, apropiind forma actuală a cuvintelor de o formă mai veche a ei, pretinsă a fi mai corectă", 
    "FULEU = 1. Alergare în pas mare, mâinile mișcându-se în ritmul picioarelor. 2. Distanța parcursă de un cal din momentul când se desprinde de pământ și până îl atinge din nou, marcată de două urme succesive ale aceluiași picior.", 
    "DEGRINGOLADA = 1. Prăbușire, rostogolire rapidă, cădere. 2. Fig. Decădere treptată, degradare progresivă, ruinare.",
    "OBSTINA = vb. I. Refl. (Livr.) A se încăpățâna, a se îndârji.", 
    "CHISNOVÁT =  adj., s. m. și f. (Reg.) (Om) poznaș, glumeț, comic. ", 
    "PANTOMIM =  Exprimare a ideilor și a sentimentelor prin gesturi, mimică, dans; p. ext. ansamblu de gesturi, de mișcări prin care se exprimă anumite idei și sentimente. 2. S. f. Gen de reprezentație teatrală în care actorii exprimă diverse acțiuni dramatice (numai) prin gesturi sau mimică; scenariul unei astfel de reprezentații.", 
    "APOLOG =  Scurtă povestire (în versuri sau în proză) cu sens moralizator, prezentată în formă alegorică."
  ];
  
  var dictionar = new HasTable();
  
  for(var i = 0; i < cuvinte.length; ++i){
    var elem = cuvinte[i].split(" = ");
    dictionar.put(elem[0],elem[1])
  }
  // console.log(dictionar.table)
  // console.log("proba",dictionar.get("PROLETCULTISM"));
  dictionar.showDistro();