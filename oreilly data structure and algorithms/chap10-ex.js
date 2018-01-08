function Node(data, left, right){
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
  }
  
  function show(){
    return this.data;
  }
  
  function BST(){
    this.root = null;
    this.nodes = 0;
    this.insert = insert;
    this.inOrder = inOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
    this.getNrOfNodes = getNrOfNodes;
  }
  
  function insert(data) {
      var n = new Node(data, null, null);
      if (this.root == null) {
          this.root = n;
      }
      else {
          var current = this.root;
          var parent;
          while (true) {
              parent = current;
              if (data < current.data) {
                  current = current.left;
                  if (current == null) {
                      parent.left = n;
                      break;
                  }
              }
              else {
                  current = current.right;
                  if (current == null) {
                      parent.right = n;
                      break;
                  }
              }
          }
      }
  }
  
  function inOrder(node) {
      if ( !(node == null) ) {
          inOrder(node.left);
          console.log(node.show() + " ");
          inOrder(node.right);
      }
  }
  
  function preOrder(node) {
      if ( !(node == null) ) {
        console.log(node.show() + " ");  
        inOrder(node.left);
        inOrder(node.right);
      }
  }
  
  function postOrder(node) {
      if ( !(node == null) ) {
        inOrder(node.left);
        inOrder(node.right);
        console.log(node.show() + " "); 
      }
  }
  
  function getMin() {
    var current = this.root;
    while(current.left){
      current = current.left;
    }
    return current.data;
  }
  
  function getMax() {
    var current = this.root;
    while(current.right){
      current = current.right;
    }
    return current.data;
  }
  
  function find(data) {
      var current = this.root;
      while (current.data != data) {
          if (data < current.data) {
              current = current.left;
          }
          else {
              current = current.right;
          }
          if (current == null) {
              return null;
          }
      }
      return current;
  }
  // 1. Add a function to the BST class that counts the number of nodes in a BST.
  function getNrOfNodes() {
    
    var nodes = 0;
    var countNodes =  function(data){
        if(data){
          nodes++;
          countNodes(data.left);
          countNodes(data.right);
        }
    }
    
    countNodes(this.root)
  
    return nodes;
  }
  
  var nums = new BST();
  nums.insert(23);
  nums.insert(45);
  nums.insert(16);
  nums.insert(37);
  nums.insert(3);
  nums.insert(99);
  nums.insert(22);
  // console.log(nums.root)
  // console.log("Inorder traversal: ");
  // inOrder(nums.root);
  console.log(nums.getMin())
  console.log(nums.getMax())
  console.log(nums.find(3))
  console.log(nums.getNrOfNodes())