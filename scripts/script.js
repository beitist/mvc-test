// constants
let NUMBER_OF_ENTRIES = 3;
const UL_NODE = document.getElementById('entry-list');

const INPUT_FIELD = document.getElementById('number-of-entries');
const INPUT_BUTTON = document.getElementById('update-entries');

const readInputField = function() {
  NUMBER_OF_ENTRIES = INPUT_FIELD.value;
}

INPUT_BUTTON.addEventListener('click', readInputField);

// model
class Model {
  constructor() {
    this.entries = [];
    this.addEntry = function(id) {
      this.entries.push(new DataEntry(id));
    }

    for (let i = 0; i < NUMBER_OF_ENTRIES; i++) {
      this.addEntry(i);
    }

    this.getEntrys = function() {
      const entries = [];
      for (const entry of this.entries) {
        entries.push(entry);
      }
      return entries;
    }

  }
}

class DataEntry {
  constructor(id) {
    this.id = id;
    this.isHighlighted = false;
    
    this.getId = function() {
      return this.id;
    }

  }
}

// view

class View {
  constructor() {
    this.updateView = function() {
      this.viewList.mainNode.innerHTML = '';
      for (const entryView of this.viewList.entries) {
        this.viewList.mainNode.appendChild(entryView.node);
      }
    }

    this.viewList = new ViewList();
    
    this.addEntry = function(id) {
      this.viewList.entries.push(new EntryView(id));
    }

    this.checkIfIdExists = function(id) {
      if (this.viewList.entries.find(id)) {
        alert('Found!');
      }
    }


  }
}

class EntryView {
  constructor(id) {
    let tempNode = document.createElement('li');
    tempNode.id = id;
    tempNode.classList.add = 'entry';
    tempNode.innerText = 'This is entry Nr. ' + id;

    this.entryButton = document.createElement('button');
    this.entryButton.id = 'button' + id;
    this.entryButton.addEventListener('click', (function(idInternal) {
      controller.highlightSelectedNode(idInternal);
    })(id));
    tempNode.appendChild(this.entryButton);

    this.node = tempNode;
    this.id = id;
    this.isHighlighted = false;

  }
}

class ViewList {
  constructor() {
    this.mainNode = UL_NODE;
    this.entries = [];
  }
}



// controller

class Controller {
  constructor() {

    this.init = function() {
      this.createEntries();
    }

    this.createEntries = function() {
      let totalEntries = model.getEntrys();
      for (const entry of totalEntries) {
        view.addEntry(entry.id);
      }
      view.updateView();
    }

    this.highlightSelectedNode = function(id) {
      let totalEntries = model.getEntrys();
      for (const entry of totalEntries) {
        entry.isHighlighted = false;
      }
      totalEntries[id].isHighlighted = true;
      view.updateView();
    }
  }
}


// Let's go!

let model = new Model();
let view = new View();
let controller = new Controller();
controller.init();