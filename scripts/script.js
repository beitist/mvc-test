// constants
let NUMBER_OF_ENTRIES = 3;
const UL_NODE = document.getElementById('entry-list');

const INPUT_FIELD = document.getElementById('number-of-entries');
const INPUT_BUTTON = document.getElementById('update-entries');

const readInputField = function () {
  NUMBER_OF_ENTRIES = INPUT_FIELD.value;
  model = new Model();
  view.updateView();
};

INPUT_BUTTON.addEventListener('click', readInputField);

// model
class Model {
  constructor() {
    this.entries = [];

    this.addEntry = function (id) {
      this.entries.push(new DataEntry(id));
    };

    for (let i = 0; i < NUMBER_OF_ENTRIES; i++) {
      this.addEntry(i);
    }

  }
}

class DataEntry {
  constructor(id) {
    this.id = id;
    this.isHighlighted = false;
  }
}

// view
class View {
  constructor() {
    this.node = UL_NODE;

    this.updateView = function () {
      this.node.innerHTML = '';
      const listOfEntries = controller.getData();
      for (const entry of listOfEntries) {
        let tempNode = document.createElement('li');
        tempNode.id = entry.id;
        tempNode.classList.add('entry');
        tempNode.innerText = 'This is entry Nr. ' + entry.id;

        if (entry.isHighlighted) {
          tempNode.classList.add('highlight');
        }

        let entryButton = document.createElement('button');
        entryButton.id = 'button' + entry.id;
        entryButton.innerText = 'Highlight me!';
        entryButton.addEventListener(
          'click',
          (function (idInternal) {
            return function () {
              console.log('Button clicked at ' + idInternal);
              controller.highlightSelectedNode(idInternal);
            };
          })(entry.id)
        );
        tempNode.appendChild(entryButton);

        this.node.appendChild(tempNode);
      }
    };
  }
}


// controller

class Controller {
  constructor() {
    this.init = function () {
      view.updateView();
    };

    this.getData = function () {
      return model.entries;
    };

    this.highlightSelectedNode = function (id) {
      let totalEntries = this.getData();
      for (const entry of totalEntries) {
        if (entry.id == id) {
          entry.isHighlighted = true;
        } else {
          entry.isHighlighted = false;
        }
      }

      view.updateView();
    };
  }
}

// Let's go!

let model = new Model();
let view = new View();
let controller = new Controller();
controller.init();
