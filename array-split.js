const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const part = nums.slice(2, 6); //slice => first start index number and koto number agee porjonto kataba ba slice korba 
// console.log(part);
// console.log(nums);
const removed = nums.splice(2, 3); //splice => first start index and koto number index porjonto element delete korba sei index number porjonto
console.log(removed);
//  console.log(nums);

const together = nums.join(' mai '); //join => array er moddhey jesob element ase sei gula por por kono element add kora and when you apply join  method the array elements are strings notice the together value
console.log(together);
console.log(nums);