// Task
// Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

// Examples
// (1, 2)     => 1
// (3, 5)     => 1
// (-10, 100) => 2
// (-1, -9)   => 3
// (19, -56)  => 4

function quadrant(x, y) {
    return x > 0 && y > 0? 1: x < 0 && y > 0? 2: x < 0 && y < 0? 3: x > 0 && y < 0? 4: x
  }