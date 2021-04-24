// constants
const NUMBER_OF_ENTRIES = 3;
const SECTION3_NODE = document.getElementById('section3');


// model
class Model {
  constructor() {

  }
}



// view

class View {
  constructor() {
    this.entries = [];
    for (i=0; i<NUMBER_OF_ENTRIES; i++) {
      const entry = new Entry();
      this.entries.push(entry);
    }
  }
}

class Entry {
  constructor(id) {
    let tempNode = document.createElement('div');
    tempNode.id = id;
    tempNode.classList.add = 'entry';
    tempNode.innerText = 'This is entry Nr. ' + id;
    this.node = tempNode;

    this.alterIsHighlighted = function () {
      if (this.isHighlighted) {
        this.isHighlighted = false;
      } else {
        this.isHighlighted = true;
      }
    }
  }
}

class ViewList {

}



// controller
