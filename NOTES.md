 //to draw a rectangle or square we use:
  //rect(x, y, width, height);

  /* `rectMode(CENTER);` sets the mode of how the rectangle is drawn. In this case, it sets the mode to
  center, which means that the `rect()` function will use the center of the rectangle as the
  reference point for the `x` and `y` parameters instead of the default top-left corner. */
  rectMode(CENTER);

  //2. Square Ball
  /* `rect(300, 300, 10, 10);` is drawing a square ball at the center of the canvas with a width and
  height of 10 pixels. */
  // rect(300, 300, 10, 10);

  1. Declaring a variable and constants
  2. Defining a variable  and constants
  3. Function call
  4. Function definition
  5. Loops
  6. Conditional programming 
  7. Comments
  8. p5 libraries
  9. Function preload, setup and draw
  10. Debugging
  11. Sprite class- p5.play.js 
  12. Classes and objects 
  E.g. 
Imagine you have a box of Lego bricks. Each brick has a specific shape and color. Now, let's say you want to build something specific, like a car or a house. To build that thing, you follow a set of instructions or a blueprint. In programming, a class is like a blueprint or a set of instructions.

A class defines what an object should look like and what it can do. It describes the properties (like color, shape, size) and behaviors (like moving, making sounds) that an object of that class should have. It's like a plan for creating objects.

Now, let's say you follow the blueprint and actually build a car using the Lego bricks. The car you built is an object. It's a specific instance based on the blueprint or class. It has its own unique characteristics and can perform actions.

So, to summarize, a class is like a blueprint that describes how an object should be created and what it can do. An object is a specific instance of a class, like the car you built using the Lego bricks. The class provides a way to create many similar objects with the same properties and behaviors.

In programming, we use classes and objects to organize and represent things in our code. They help us create reusable and structured code, just like using Lego bricks and instructions to build different things.

In JavaScript, a class is a way to define a blueprint for creating objects. It helps you organize and structure your code by encapsulating related data and functionality into a single entity.

To create a class in JavaScript, you use the class keyword followed by the name of the class. Here's an example of a simple class called Car:

# class Car {
#  constructor(make, model) {
#    this.make = make;
#    this.model = model;
#  }

#  drive() {
#    console.log("The car is driving.");
#  }
# }


In the example above, we defined a Car class. It has a constructor method, which is a special method that gets called when you create a new object from the class. The constructor takes in the make and model parameters and assigns them to the object's properties using the this keyword.
The drive method is also defined within the class. It represents a behavior that all Car objects can perform. In this case, it simply logs a message to the console.
To create an object from the Car class, you use the new keyword and call the class as if it were a function, passing any required parameters to the constructor:

# const myCar = new Car("Toyota", "Camry");
# const car1 = new Car("Mercedes", "E 200");

# const car2 = new Car();-- when constructor contains all the information

In the example above, myCar is an instance (or object) of the Car class. It has its own unique make and model properties, inherited from the class's constructor.

You can then access the properties and call the methods of the object using dot notation:

# console.log(myCar.make); // Output: "Toyota"
# console.log(myCar.model); // Output: "Camry"
# myCar.drive(); // Output: "The car is driving."


By using classes, you can create multiple objects (instances) that share the same properties and behaviors defined in the class. It provides a convenient and organized way to work with objects in JavaScript.






# VARIABLES  n CONSTANTS
Imagine you have a box where you can store things. A variable is like a box where you can put different things. In programming, a variable is a named container that can hold information. It's like a label on a box that helps you remember what's inside.

For example, let's say you have a variable called "age" that stores your age. You can put your age inside the variable like this:

# age = 10;

Now, whenever you want to know your age, you can just look inside the "age" variable.

Variables can hold different types of information. They can hold numbers, like your age or the number of cookies you have. They can also hold words, like your name or the name of your favorite color.

Now, let's talk about constants. A constant is like a special box where you put something that you know will never change. It's like a label on a box that says, "This thing will always stay the same."

For example, let's say you have a constant called "PI" that represents the mathematical value of pi. The value of pi is always the same, so you can put it in a constant like this:

# PI = 3.14159;

Once you put something in a constant, you can't change it. It will always stay the same.

Variables and constants help us remember and work with information in our programs. They make it easy for us to store and retrieve data whenever we need it, just like putting things in boxes and taking them out when we want to use them.

When it comes to variables and constants, there is a difference between declaring and defining them. Let's break it down:

# Declaring a variable or constant:

Declaring a variable or constant means announcing its existence and reserving a space in memory to hold a value.
When you declare a variable or constant, you are telling the computer, "Hey, I'm going to use this name to refer to something."
Declaration is like giving a name to a box without putting anything inside it yet.
Defining a variable or constant:

Defining a variable or constant means assigning a specific value to it.
It's like putting something inside the box you previously declared, filling it with a value.
Defining a variable or constant is when you give it an initial value or update its value.
Let's illustrate this with an example:

# // Declaration of a variable, constant
# let myVariable;
# var ffff;
# const myConstant;

# // definition of a constant
# myConstant = 42;

# // Definition of the previously declared variable
# myVariable = "Hello, World!";

# // declaration and definition of a constant
# const myConstant = 42;


# // declaration and definition of a variable
# var abc = 3;


In the example above, myVariable is declared first by using the let and var keyword. It's just a declaration, and the value is not assigned yet.

On the other hand, myConstant is both declared and defined at the same time. It is declared using the const keyword and assigned the value of 42 immediately. Since it's a constant, its value cannot be changed afterward.

Later in the code, the variable myVariable is defined by assigning the string value "Hello, World!" to it.

So, to summarize:

# - Declaration is like reserving a space and giving a name to a variable or constant.
# - Definition is when you actually assign a value to the variable or constant.Remember, variables allow you to store and change values, while constants hold values that remain the same throughout the program.