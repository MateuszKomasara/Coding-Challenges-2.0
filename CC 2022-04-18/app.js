// Is the string Uppercase? 8kyu

// Create a method to see whether the string is ALL CAPS.
// This keyword

String.prototype.isUpperCase = function() {
  return this == this.toUpperCase();
}

