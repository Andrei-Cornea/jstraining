// Exercises
// 1. Create a grades object that stores a set of student grades in an object. Provide a
// function for adding a grade and a function for displaying the student’s grade average.

function Grades () {
    var grades = [];
    this.add = add; 
    this.getAverage = average; 
    
    function add (grade) { 
      grades.push(grade); 
    }
    
    function average () {
      var total = 0;
      
      for (var i = 0; i < grades.length; i++ ) {
        total += grades[i];
      }
  
      return total / grades.length;
    }
  }
  
  var gradesAndrei = new Grades();
  gradesAndrei.add(1);
  gradesAndrei.add(2);
  gradesAndrei.add(3);
  console.log(gradesAndrei.getAverage());
  
  // 2. Store a set of words in an array and display the contents both forward and backward.
  
  var text = ["how","are","you","today"];
  
      
  function dForward (words) {
      var result = "";
    
    for (var i = 0; i < words.length; i++) {
          result += words[i] + " ";
    }
    
    return result;
    
  }
  
  function dBackward (words) {
      var result = "";
      var length = words.length;
    
    for (var i = 0; i < length; i++) {
          result += words.pop() + " ";
    }
    
    return result;
    
  }
  
  console.log( dForward(text));
  console.log( dBackward(text));
  
  // 3. Modify the weeklyTemps object in the chapter so that it stores a month’s worth of
  // data using a two-dimensional array. Create functions to display the monthly average,
  // a specific week’s average, and all the weeks’ averages.
  
  // 4. Create an object that stores individual letters in an array and has a function for
  // displaying the letters as a single word.
  