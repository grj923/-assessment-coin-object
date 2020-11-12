let coin = {
  state: 0,
  flip: function () {
    this.state = Math.floor(Math.random() * 2);
    return this.state;
  },

  toString: function () {
    if (this.state === 0) {
      let paragraph = document.createElement("p");
      paragraph.innerHTML = "Heads";
      document.body.append(paragraph);
    } else {
      let paragraph = document.createElement("p");
      paragraph.innerHTML = "Tails";
      document.body.append(paragraph);
    }
  },

  toHTML: function () {
    let image = document.createElement("img");
    if (this.state === 0) {
      console.log(" A picture of a heads goes here");
    } else {
      console.log("A picture of a tail goes here");
      return image;
    }
    /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
  },
};

// coin.flip();
// coin.toString();
// coin.toHTML();
// console.log(coin.state);

// let paragraph = document.createElement("p");
// paragraph.innerHTML = "Heads";
// document.body.append(paragraph);

function display20Flips() {
  for (i = 0; i < 20; i++) {
    coin.flip();
    coin.toString();

    // console.log(i);
  }
  // uses a loop to flip the coin 20 times. Each time the coin flips,
  // display the result of each flip as a string on the page (make use of your toString() method)
}
function display20Images() {
  for (i = 0; i < 20; i++) {
    coin.flip();
    coin.toHTML();
    // console.log("Figure out how to get an image up");
  }
  // using a loop to flip the coin 20 times…but this time instead of displaying the result as a string,
  // display the result of each flip as an HTML IMG element on the page (make use of your toHTML() method).
}
display20Flips();
display20Images();
