class Node {
    constructor (data, next) {
        this.data = data;
        this.next = next;
    }
    getData () {
        return this.data;
    }
}
class LinkedList {
    init () {
        this.head = new Node('A', null);
        let nodeB = new Node('B', null);
        this.head.next = nodeB;

        let nodeC = new Node('C', null);
        nodeB.next = nodeC;

        this.tail = new Node ('D', null);
        nodeC.next = this.tail;
    }
    remove (removePosition) {
        let p = this.head;
        let i = 0;

        while (p.next !== null && i < removePosition - 1) {
            p = p.next;
            i++;
        }
        let temp = p.next;
        p.next = p.next.next;
        temp.next = null;
    }
    add (newNode) {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    insert (insertPosition, newNode) {
        let p = this.head;
        let i = 0;

        while (p.next != null && i < insertPosition - 1) {
            p = p.next;
            i++;
        }
        newNode.next = p.next;
        p.next = newNode;
    }
    getHead () {
        return this.head;
    }
}

function print (node) {
    let p = node;
    while (p != null) {
        let data = p.getData();
        console.log(data + '->');
        p = p.next;
    }
    console.log('End');
}
let linkedList = new LinkedList();

linkedList.init();
// linkedList.add(new Node('E', null));
// linkedList.insert(2, new Node('G', null));
// linkedList.remove(2);
print(linkedList.getHead());
