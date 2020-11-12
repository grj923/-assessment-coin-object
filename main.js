let coin = {
  state: 0,
  flip: function () {
    this.state = Math.floor(Math.random() * 2);
    return this.state;

    /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
  },

  toString: function () {
    if (this.state === 0) {
      console.log("Heads");
      let paragraph = document.createElement("p");
      paragraph.innerHTML = "Heads";
      document.body.append(paragraph);
    } else {
      console.log("Tails");
      let paragraph = document.createElement("p");
      paragraph.innerHTML = "Tails";
      document.body.append(paragraph);
    }
    /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
  },

  toHTML: function () {
    let image = document.createElement("img");
    /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
    return image;
  },
};

coin.flip();
coin.toString();
console.log(coin.state);

// let paragraph = document.createElement("p");
// paragraph.innerHTML = "Heads";
// document.body.append(paragraph);

function display20Flips() {
  // uses a loop to flip the coin 20 times. Each time the coin flips,
  // display the result of each flip as a string on the page (make use of your toString() method)
}
function display20Images() {
  // using a loop to flip the coin 20 times…but this time instead of displaying the result as a string,
  // display the result of each flip as an HTML IMG element on the page (make use of your toHTML() method).
}
