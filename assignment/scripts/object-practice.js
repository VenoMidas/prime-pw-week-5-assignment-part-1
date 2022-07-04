console.log('***** Object Practice *****');

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Mark',
  lastName: 'Schumacher',
  hasSiblings: false,
  shoeCount: 8,
  favThreeFoods: ['egg roll', 'ribs', 'pizza'],
};

console.log('A little about me:', me);

/**
 * Displays content of object
 * 
 * @param {object} object - is for object with firstName, lastName, hasSiblings, shoeCount, and favThreeFoods.
 */
function aboutMe(object) {
  const aboutMe = document.getElementById('about-me');
  aboutMe.innerHTML = `<h3>First Name: ${object.firstName}</h3> <h3>Last Name: ${object.lastName}</h3> <h4>Has Siblings: ${object.hasSiblings}</h4> <h4>Shoe Count: ${object.shoeCount}</h4?> <h4>Favorite Foods: ${object.favThreeFoods}</h4>`;
}

// for...of returns not iterable
// for...in iterates over properties of objects
// something about this can inherit properties of their prototype
// i stopped digging there, more to learn about prototypes someday
/**
 * Displays objects parameters and values
 * 
 * @param {object} object - is for an object
 */
function aboutMeLoop(object) {
  const aboutMeLoop = document.getElementById('about-me-loop');
  aboutMeLoop.innerHTML = '';
  for (let prop in object) {
    aboutMeLoop.innerHTML += `<h2>${prop}: ${object[prop]}</h2>`
  }
}

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/

let fullName = me.firstName + ' ' + me.lastName;
console.log('My full name is:', fullName);

/**
 * Display value of input variable 
 * 
 * @param {any} nameVar - is for a variable (can be string, bool, number)
 */
function fullNameDisplay(nameVar) {
  const fullName = document.getElementById('full-name');
  fullName.innerHTML = nameVar
}

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/

console.log('My favorite foods are:', me.favThreeFoods);
console.log('My first favorite food is:', me.favThreeFoods[0]);
// Even though the array is only 3 foods, I used .length-1 to access the 'last' item 
// instead of me.favThreeFoods[2] which won't be the last item if the array ever gets
// items added or removed.
console.log('My last favorite food is:', me.favThreeFoods[me.favThreeFoods.length-1]);

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/

console.log('My current shoe count is:', me.shoeCount);
me.shoeCount += 1; 
console.log('My updated shoe count is:', me.shoeCount);

/**
 * Display shoe count on the DOM
 */
function displayShoeCount() {
  const shoeCount = document.getElementById('shoe-count');
  shoeCount.innerHTML = `Shoe Count: ${me.shoeCount}`;
}

// had to move the script to run after the HTML is created to is has something to target.
// I know we talked about this, can't remember if we talked about any other options like a wait or async something to hold this if the script ran in the head.
displayShoeCount();

/**
 * Increase shoe count and run displayShoeCount
 */
function increaseShoeCount() {
  me.shoeCount += 1;
  displayShoeCount();
}

/**
 * Decrease shoe count and run displayShoeCount
 */
function decreaseShoeCount() {
  me.shoeCount -=1;
  displayShoeCount();
}
/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

me.favoriteColor = 'blue';
console.log('This is me with a favorite color added:', me);

/**
 * Update favorite color with text input
 */
function changeFavoriteColor() {
  me.favoriteColor = document.getElementById('color-input').value;
  displayFavoriteColor();
}

/**
 * Display favorite color
 */
function displayFavoriteColor() {
  const favColorDisplay = document.getElementById('favorite-color-display');
  favColorDisplay.innerHTML = `My favorite color: ${me.favoriteColor}`;
}

displayFavoriteColor();