//Best Performance Do-While Loop
//Second Performance For Loop Function
//Worst Performance For Loop

console.time('For Loop Without Function') //For Loop performance time start

 
let nums = [2, 7, 11, 15];                  //definition of array elements
let target = 9;                             //definition of target element
for (let i = 0; i < nums.length; i++) {     //loop of array length
  if (target === nums[i] + nums[i + 1]) {   //if array elements are equal to target
    console.log(nums.indexOf(nums[i]), nums.indexOf(nums[i + 1]));  //Write the index number of the equal elements to the screen
  }
}

console.timeEnd('For Loop Without Function')  // For Loop performance time end
 
console.log('*/*//*///*/*/*/*/*/*/*/*/*/*/*/*/');


console.time('Do-While Loop Without Function')   //Do-While Loop Performance time start

 
let start = 0;                                           //Definition of start index
do {
  if (target === nums[start] + nums[start + 1]) {               //if array elements are equal to target
    console.log(nums.indexOf(nums[start]), nums.indexOf(nums[start + 1]));  //Write the index number of the equal elements to the screen
  }
  start++;                                          //incrase start index
} while (start < nums.length);               //loop of array length


console.timeEnd('Do-While Loop Without Function') //Do-While Loop Performance time end
 

console.log("*********************************")

  
console.time('For Loop Function')   //For Loop Function performance time start
function targetSum(nums, target) {     //Creating a function and determining the value to be entered          
  for (let i = 0; i <= nums.length; i++) {   //loop of array length
    for (let j = i + 1; j <= nums.length; j++) {   //Second loop of array length
      if (nums[i] + nums[j] == target) {    //if array elements are equal to target
        
        return `${[i,j]}`;             //Return the index number of equal elements
      }
    }
  }
  return result;
}

console.log(targetSum([2, 7, 11, 15], 9));  //Call "For Loop Function" for write to screen
console.log(targetSum([3, 2, 4], 6));       //Call "For Loop Function" for write to screen
console.log(targetSum([3, 3], 6));          //Call "For Loop Function" for write to screen
console.timeEnd('For Loop Function')