function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.getElement = getElement;
  this.contains = contains;
  this.appendLarger = appendLarger;
}



function append(elem) {
  this.dataStore[this.listSize++] = elem;
}

function find(elem) {
  for (var i = 0; i < this.dataStore.length; i++) {
    if( this.dataStore[i] === elem){
      return i;
    }  
  }
      return -1;
}

function remove(elem) {
  var foundAt = this.find(elem);
  
  if(foundAt > -1){
  this.dataStore.splice(foundAt, 1);
  --this.listSize;
    return true;
  }
  return false;
}

function length() {
  return this.listSize-1;
}

function toString() {
  return this.dataStore;
}

function insert(elem, after) {
  var insertPos = this.find(after);
  
  if(insertPos > -1) {
    this.dataStore.splice(insertPos+1, 0, elem);
    this.listSize++;
    return true;
  }
  return false; 
}

function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = pos = 0;
}

function contains(elem) {
  return this.find(elem);
}

function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.listSize-1;
}

function prev() {
  if(this.pos > 0){
    --this.pos;
  } else {
      console.log("First element reached!!");
    
  }
}

function next() {
    if(this.pos < this.length()){
      this.pos++;
    } else {
      console.log("Last element reached!!");
    
    }
}

function currPos() {
  return this.pos;
}

function moveTo(elem) {
  var moveAt = this.find(elem);
  
  if(moveAt > -1){
    this.pos = moveAt;
    return true;
  }
  return false;
}

function getElement() {
  return this.dataStore[this.pos];
}

/*
1. Write a function that inserts an element into a list only if the element to be inserted
is larger than any of the elements currently in the list. Larger can mean either greater
than when working with numeric values, or further down in the alphabet, when working with
textual values
*/

function appendLarger(elem) {
    var self = this;
    var isDuplicate = (function(data){
      for(var x = 0; x < self.listSize ; x++ ){
        
        if( data === self.dataStore[x]){
         debugger;
          return true;
        }
      }
      return false;
    })(elem);
    
    var isSameType = (function(data){
      for(var x = 0; x < self.listSize ; x++ ){
        
        if( typeof data === typeof self.dataStore[x]){
         debugger;
          return true;
        }
      }
      return false;
    })(elem);
    
    var isBigger = (function(data){
      for(var i = 0; i < self.listSize ; i++ ){
        
        if( data > self.dataStore[i]){
          debugger;
          return true;
        }
      }
      return false;
    })(elem);
//  
//  
//  console.log("sametype",isSameType)
//  console.log("isBigger",isBigger)
//  console.log("isDuplicate",isDuplicate)
  
  if(!isDuplicate && isSameType && isBigger){
    
      this.append(elem)
        return true; 
    
  } else if( !isSameType && !isDuplicate) {
    this.append(elem)
        return true;
  }
  
  return false;
}

var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");
console.log("a",names.appendLarger("a"))
console.log("1",names.appendLarger(1))
console.log("a",names.appendLarger("a"))
console.log("1",names.appendLarger(1))
console.log("Clayton",names.appendLarger("Clayton"))
console.log("1",names.appendLarger(1))
console.log("dataStore",names.dataStore)


/*
3. Create a Person class that stores a person’s name and their gender. Create a list of at
least 10 Person objects. Write a function that displays all the people in the list of the
same gender. 
*/

function Person(name, gender){
    this.name = name;
    this.gender = gender;
}

var Persons = new List();

Persons.getByGender = function (gender) {
    var result = [];
    for (index in this.dataStore) {
     if ( this.dataStore[index].gender === gender) result.push(this.dataStore[index].name)   
    }
    
    return result;
}

Persons.append(new Person("andrei", "male"))
Persons.append(new Person("andreea", "female"))
Persons.append(new Person("andrei", "male"))
Persons.append(new Person("raluca", "female"))
Persons.append(new Person("and", "male"))
Persons.append(new Person("abc", "male"))
Persons.append(new Person("eeee", "female"))
console.log(Persons.dataStore)

console.log(`Males = ${Persons.getByGender("male")}`)


