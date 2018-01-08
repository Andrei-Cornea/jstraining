// 1. Modify the Queue class to create a Deque class. A deque is a queue-like structure
// that allows elements to be added and removed from both the front and the back of
// the list. Test your class in a program.

 function Deque() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.enqueueFront = enqueueFront;
    this.dequeue = dequeue;
    this.dequeueBack = dequeueBack;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.length = length;
    }
    
    function enqueue(element) {
      this.dataStore.push(element);
    }
    
    function enqueueFront(element) {
      this.dataStore.unshift(element);
    }
    
    function dequeueBack() {
      return this.dataStore.pop();
    }
    
    function dequeue() {
      return this.dataStore.shift();
    }
    
    
    function front() {
      return this.dataStore[0];
    }
    
    function back() {
      return this.dataStore[this.dataStore.length-1];
    }
    
    function toString() {
      var retStr = this.dataStore.join("\n") ;
      return retStr;
    }
    
    function empty() {
      if (this.dataStore.length == 0) {
        return true;
      }
      else {
        return false;
      }
    }
    
    function length(){
      return this.dataStore.length;
    }
    
// 2. Use the Deque class you created in Example 5-1 to determine if a given word is a
// palindrome.

    var q = new Deque();
    var test = "racecar";
    var split = test.split('');
    
    for(var i in split) {
      q.enqueue(split[i]);
    }

    function isPalindrome() {
      var result = "" ;
    
      for(var i = q.length(); i > 0 ; --i){
        result += q.dequeueBack()
      }

      if(test == result){
        console.log("is Palindrome!", result);
      }
      
    }
    
    isPalindrome()

