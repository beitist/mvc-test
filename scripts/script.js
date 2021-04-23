// constants
const NUMBER_OF_ENTRIES = 3;
const SECTION3_NODE = document.getElementById('section3');

// model




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
  constructor() {
    let tempNode = document.createElement('div');
    tempNode.id =
  }
}



// controller
