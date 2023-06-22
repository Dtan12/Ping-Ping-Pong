/* The Paddle class defines the properties and methods for a rectangular game paddle. */
//1. Class starts with 'class' keyword
//2. the class name starts with a capital letter 
//3. the classname is followed by {}
//4. within the {}, write constructor and behaviour functions
//5. constructor function can be empty but MUST BE created.
//6. class is made up of functions



class Paddle {

  /**
   * This is a constructor function that initializes four properties for an object.
  */
  constructor() {
    this.xPosition = 20;
    this.yPosition = 300;
    this.width = 20;
    this.height = 120;
  }
  /**
   * The function displays a rectangle with specified position, width, and height.
  */
  display() {
    rect(this.xPosition, this.yPosition, this.width, this.height);
  }
}