//#region forEach

// const arr = [45, 4, 9, 17, 25];

// function myFunction(item) {
//     return item * 2;
// }

// function myForEach(array,callback) {

//     for (let index = 0; index < array.length; index++) {
//          array[index]=callback(array[index]);
//     }
// }

// myForEach(arr,myFunction);
// console.log(arr);
//#endregion

//#region map

// const arr = [45, 4, 9, 17, 25];
// console.log(arr);

// function myFunction(item) {
//     return item * 2;
// }

// function myMap(array,callback) {
//     const newArr=[];
//     for (let index = 0; index < array.length; index++) {
//          array[index]=callback(array[index]);
//          newArr.push(array[index]);
//     }
//     return newArr
// }
// const newArr = myMap(arr,myFunction);
// console.log(newArr);

//#endregion

//#region filter
// const arr = [45, 4, 9, 17, 25];
// function myFunction(item) {
//     return item > 18;
// }

// function myFilter(array,callback) {
//     const newArr=[];
//     for (let index = 0; index < array.length; index++) {
//          if (callback(array[index],index,array)) {
//             newArr.push(array[index]);
//          }
//     }
//     return newArr
// }

// const newArr = myFilter(arr,myFunction);
// console.log(newArr);
//#endregion

//#region some

// const arr = [44, 24, 55, 16, 85];

// function myFunction(item) {
//     return item > 18;
// }

// function mySome(array,callback) {

//     let check=true;
//     for (let index = 0; index < array.length; index++) {
//          if (check===callback(array[index],index,array)) {
//             return true;
//          }
//     }
//       return false;
// }

// console.log("Some over 18 is" + " "+ mySome(arr,myFunction));
//#endregion

//#region every

// const arr = [44, 24, 55, 19, 85];

// function myFunction(item) {
//     return item > 18;
// }

// function myEvery(array, callback) {

//     let check = false;
//     for (let index = 0; index < array.length; index++) {
//         if (check === callback(array[index], index, array)) {
//             return false;
//         }

//     }

//     return true;
// }

// console.log("All over 18 is" + " " + myEvery(arr, myFunction));
//#endregion

//#region reduce
// const arr = [44, 24, 55, 19, 85];

// function myReduce(array, value) {
//     const total = array[0];
//     if (typeof value !== "number") {
//         for (let index = 1; index < array.length; index++) {
//             total += array[index];

//         }
//     }
//     else {
//     for (let index = 1; index < array.length; index++) {
//         total += value

//     }
//     }
//     return total;

// }

// console.log("The sum is" + " " + myReduce(arr,10));
//#endregion

//#region slice

// const arr = [45, 4, 9, 17, 25];

// function mySlice(array,value,value2) {
//     const newArr = [];

//     if (typeof value2 !== "number") {
//         for (let index = value; index < array.length; index++) {
//             newArr.push(array[index]);

//         }
//     }
//     else {
//         for (let index = value; index < value2; index++) {
//             newArr.push(array[index]);
//         }

//     }
//     return newArr;
// }

// const newArr = mySlice(arr,1,3);
// console.log(newArr);
//#endregion

//#region indexOf

// const arr = [44, 24, 55, 64, 85];

// function myIndexOf(array, item) {

//         for (let index = 0; index < array.length; index++) {
//             if (item===array[index]) {
//                 return index+1;
//             }
//         }

// }

// console.log("The item is found in position" + " " + myIndexOf(arr,55));

//#endregion

//#region lastIndexOf
// const arr = [44, 64, 32, 64, 35];

// function myLastIndexOf(array, item) {

//         for (let index = array.length-1; index < array.length; index--) {
//             if (item===array[index]) {
//                 return index+1;

//             }
//         }

// }

// console.log("The item is found in position" + " " + myLastIndexOf(arr,64));

//#endregion

//#region find

// const arr = [5, 4, 19, 17, 25];

// function myFunction(item) {
//   return item > 18;
// }

// function myFind(array, callback) {
//   for (let index = 0; index < array.length; index++) {
//      if (callback(array[index])) {
//         return array[index];
//      } 
//   }
// }

// console.log("First number over 18 is" + " " + myFind(arr,myFunction));


//#endregion

//#region findIndex


// const arr = [5, 4, 19, 17, 25];

// function myFunction(item) {
//   return item > 18;
// }

// function myFindIndex(array, callback) {
//   for (let index = 0; index < array.length; index++) {
//      if (callback(array[index])) {
//         return index;
//      } 
//   }
// }

// console.log("First number over 18 has index" + " " + myFindIndex(arr,myFunction));


//#endregion

//#region arrayFrom

// const str = "Kanan";
// const array=[];

// function myArrayFrom(string) {
//     for (let index = 0; index < string.length; index++) {
//          array.push(string[index]); 
//     }
// }

// myArrayFrom(str);
// console.log(array);
//#endregion

//#region arrayKeys

// const arr = [44, 24, 55, 64, 85];

// function myArrayKeys(array) {

//         for (let index = 0; index < array.length; index++) {
//             console.log(index);
//         }

// }

// myArrayKeys(arr);

//#endregion

//#region arrayEntries

// const arr = [44, 24, 55, 64, 85];

// function myArrayEntries(array) {

//         for (let index = 0; index < array.length; index++) {
//             console.log(index + "."+array[index]);
//         }

// }

// myArrayEntries(arr);

//#endregion

//#region arrayIncludes

// const arr = [44, 24, 55, 64, 85];

// function myArrayIncludes(array,item) {

//         for (let index = 0; index < array.length; index++) {
//              if (array[index]===item) {
//                 return true;
//              }

//         }
//         return false;

// }

// console.log(myArrayIncludes(arr,85));

//#endregion

//#region arraySpread

// const arr = [44, 24, 55, 64, 85];
// const arr2=[32, 56, 23, 14, 71];
// const arr3=[21, 16, 43, 84, 91];

// function myArraySpread(array,array2,array3) {

//         for (let index = 0; index < array2.length; index++) {
//             array.push(array2[index]);
//         }
//         for (let index = 0; index < array3.length; index++) {
//             array.push(array3[index]);
//         }


// }

// myArraySpread(arr,arr2,arr3);
// console.log(arr);
//#endregion


