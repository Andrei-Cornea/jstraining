    function Node(element) {
        this.element = element;
        this.next = null;
    }

    function CLList() {
        this.head = new Node("head");
        this.head.next = this.head;
        this.currNode = this.head;
        this.find = find;
        this.insert = insert;
        this.display = display;
        this.back = back;
        this.findPrevious = findPrevious;
        this.advance = advance;
        this.remove = remove;
        this.showCurrNode = showCurrNode;
    }

    function remove(item) {
        var prevNode = this.findPrevious(item);
        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next;
        }
    }

    function findPrevious(item) {
        var currNode = this.head;
        while (!(currNode.next == null) &&
            (currNode.next.element != item)) {
            currNode = currNode.next;
        }
        return currNode;
    }

    function display() {
        var currNode = this.head;
        while (!(currNode.next == null) && !(currNode.next.element == "head")) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }

    function find(item) {
        var currNode = this.head;
        while (currNode.next && currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    function insert(newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
        if (current.element === "head") {
            this.currNode = newNode;
        }
    }

    /*
    1. Implement the advance(n) function so that when executed, the current node is moved n nodes forward in the list.
    */
    function advance(n) {
        var i = 0;
        var currNode = this.currNode;
        while (i < n) {
            this.currNode = currNode.next;
            i++;
        }
    }

    // 2. Implement the back(n) function so that when executed, the current node is moved
    // n spaces backward in the list.

    function back(n) {
        var i = 0;
        var currNode = this.findPrevious(this.currNode.element);
        if (currNode) {
            while (i < n) {
                this.currNode = currNode;
                i++;
            }
            return true;
        }
        return false;
    }
    /*
    3. Implement the show() function, which displays the data associated with the current
    node.
    */
    function showCurrNode() {
        return this.currNode.element;
    }

    var cities = new CLList();
    cities.insert("Conway", "head");
    cities.insert("Russellville", "Conway");
    cities.insert("Carlisle", "Russellville");
    cities.insert("Alma", "Carlisle");
    cities.display();
    // cities.remove("Carlisle");
    // cities.display();
    console.log("currnode", cities.currNode.element)
    cities.advance(1);
    cities.advance(1);
    console.log(cities.showCurrNode());
    cities.back(1);
    console.log(cities.showCurrNode());
    console.log(cities)