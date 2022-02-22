


console.log('**********************************');
 
let nums = [2, 7, 11, 15];
let target = 9;
 
for (let i = 0; i < nums.length; i++) {
  if (target === nums[i] + nums[i + 1]) {
    console.log(nums.indexOf(nums[i]), nums.indexOf(nums[i + 1]));
  }
}
 
console.log('*/*//*///*/*/*/*/*/*/*/*/*/*/*/*/');
 
let start = 0;
do {
  if (target === nums[start] + nums[start + 1]) {
    console.log(nums.indexOf(nums[start]), nums.indexOf(nums[start + 1]));
  }
  start++;
} while (start < nums.length);
 
console.log('**********************************');
 
let nums2 = [3, 2, 4];
let target2 = 6;
 
for (let i = 0; i < nums2.length; i++) {
  if (target2 === nums2[i] + nums2[i + 1]) {
    console.log(nums2.indexOf(nums2[i]), nums2.indexOf(nums2[i + 1]));
  }
}
 
console.log('*/*//*///*/*/*/*/*/*/*/*/*/*/*/*/');
 
let start2 = 0;
do {
  if (target2 === nums2[start2] + nums2[start2 + 1]) {
    console.log(nums2.indexOf(nums2[start2]), nums2.indexOf(nums2[start2 + 1]));
  }
  start2++;
} while (start2 < nums2.length);
 
console.log('**********************************');
 
let nums3 = [3, 3];
let target3 = 6;
 
for (let i = 0; i <= nums3.length; i++) {
  if (target3 === nums3[i] + nums3[i + 1]) {
    console.log(i, i+1);
  }
}
 
console.log('*/*//*///*/*/*/*/*/*/*/*/*/*/*/*/');
 
let start3 = 0;
do {
  if (target3 === (nums3[start3] + nums3[start3 + 1])) {
    console.log(start3, start3+1);
  }
  start3++;
} while (start3 < nums3.length);
