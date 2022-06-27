// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// // P.S. Each array includes only integer numbers. Output is a number too.


functionÂ arrayPlusArray(arr1,Â arr2) {
constÂ arr3Â =Â arr1.concat(arr2);
returnÂ arr3.reduce((acc,Â cÂ )=>Â accÂ +Â c,0);

}
