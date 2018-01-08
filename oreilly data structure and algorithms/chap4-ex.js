function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

function push(element) {
  this.dataStore[this.top++] = element;
}

function pop() {
  return this.dataStore[--this.top];
}

function peek() {
  return this.dataStore[this.top-1];
}

function length() {
  return this.top;
}

function clear() {
  this.dataStore = [];
}

// 3. An example of a real-world stack is a Pez dispenser. Imagine that your virtual Pez
// dispenser is filled with red, yellow, and white colors and you don’t like the yellow
// ones. Write a program that uses a stack (and maybe more than one) to remove the
// yellow ones without changing the order of the other candies in the dispenser


var pez = new Stack();
var tempPez = new Stack();

pez.push("red");
pez.push("yellow");
pez.push("red");
pez.push("white");
pez.push("white");
pez.push("yellow");

// console.log(pez.dataStore)
for(var i=pez.length(); i > 0 ; --i){
      var data = pez.pop();
      if(data != "yellow"){
          tempPez.push(data);  
      }
      if(!pez.length()){
          pez.clear();
      }
}

for(var i=tempPez.length(); i > 0 ; --i){
      var data = tempPez.pop();
      if(data != "yellow"){
          pez.push(data);  
      }
}
console.log("tempPez",tempPez.dataStore);