class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    //append: insert a new node at the end of the linked list
    append(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
        }else{
            let current = this.head
            while (current.next !== null){
                current = current.next;
            }
            current.next = newNode;
        }
    }

    //prepend: insert a new node at the beginning of the linked list
    prepend(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    //delete: remove the first occurrence of a node with the given data
    delete(data){
        if(!this.head){
            return; // list is empty
        }
        if(this.head.data === data){
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while(current.next !== null){
            if(current.next.data === data){
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    //search: find first occurrence of a node with given data
    search(data){
        let current = this.head;
        while(current !== null){
            if(current.data === data){
                return true; // data found
            }
            current = current.next;
        }
        return false; // data not found
    }

    //print: display elements of the linked list
    print(){
        let current = this.head;
        const elements = [];
        while(current !== null){
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join('->'));
    }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);

linkedList.prepend(5);

linkedList.print(); // Output: 5 -> 10 -> 20 -> 30
linkedList.delete(20);
linkedList.print(); // Output: 5 -> 10 -> 30

console.log(linkedList.search(10)); // Output: true
console.log(linkedList.search(50)); // Output: false