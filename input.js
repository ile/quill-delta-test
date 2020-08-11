import Delta from 'quill-delta';

class MyDelta {

  constructor(element){
    this.root = element;
    this.data = new Delta();
    this.constructDelta(this.data, element);
  }

  update() {
    let data = new Delta();
    this.constructDelta(data, this.root);
    console.log('Creating a diff....');
    let diff = this.data.diff(data);

    console.log('new data', data);
    console.log('diff', diff);
  }

  constructDelta(data, element) {
  	if (!element.children) {
  		return;
  	}

	for (let i = 0; i < element.children.length; i++) {
      let el = element.children[i];

      let attributes = {};

      if (el.textContent) {
        attributes.text = el.textContent;
      }

      for (let j = 0; j < el.attributes.length; j++) {
      	attr = el.attributes[j];
        attributes[attr.name] = attr.value
      }

      data.insert({ node: el.nodeName },  attributes)
      if (el.nodeName == 'div') {
        this.constructDelta(data, el);
      }
    }
  }
}

// Construct initial data
let root = document.getElementById('root');
let delta = new MyDelta(root);
console.log('initial data', delta.data);

// Add new node, do a diff
let p = document.createElement('p')
p.appendChild(document.createTextNode("Test 5"))
root.appendChild(p);
delta.update();