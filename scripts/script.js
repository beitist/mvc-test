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

    for (let i = 0; i < NUMBER_OF_ENTRIES; i++) {
      this.addEntry(i);
    }

    this.addEntry = function(id) {
      this.entries.push(new DataEntry(id));
    }

    this.getEntrys = function() {
      const entries = [];
      for (const entry of this.entries) {
        entries.push(entry);
      }
      return entries;
    }

    this.highlightById = function(id) {
      for (const entry in this.entries) {
        entry.isHighlighted = false;
      }
      this.entries[id].isHighlighted = true;
      view.updateView();
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
      this.viewList.updateViewList();
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
    tempNode.appendChild(entryButton);

    this.node = tempNode;
    this.id = id;
    this.isHighlighted = false;

  }
}

class ViewList {
  constructor() {
    this.mainNode = UL_NODE;
    this.entries = [];

    this.updateViewList = function() {
      this.mainNode.innerHTML = '';
      for (const node of this.entries) {
        this.mainNode.appendChild(node);
      }
    }
  }
}



// controller

class Controller {
  constructor() {

    this.init = function() {
      this.createEntries;
    }

    this.updateView = function() {
      const dataEntries = model.getEntrys();
      for (const entry of dataEntries) {

      }
    }
    this.createEntries = function() {
      for (let i = 0; i < NUMBER_OF_ENTRIES; i++) {
        view.addEntry(i);
      }
    }

    this.highlightSelectedNode = function(id) {
      model.highlightById(id);
    }
  }
}


// Let's go!

let model = new Model();
let view = new View();
let controller = new Controller();