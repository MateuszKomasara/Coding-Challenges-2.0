// 8kyu Object Oriented Piracy
// This Kata teaches you the very basic of method 

// Taking into account that an average crew member on board adds 1.5 units to the draft, a ship that has a draft of more than 20 without crew is considered worthy to loot. Any ship weighing that much must have a lot of booty!
// Add the method
// isWorthIt
// to decide if the ship is worthy to loot. For example:
// titanic.isWorthIt() // return false
// reation.
// Good luck!

function Ship(draft,crew) {
    this.draft = draft,
    this.crew = crew,
    this.isWorthIt = function() {
      return this.draft - this.crew * 1.5 > 20 ;
    }
 }