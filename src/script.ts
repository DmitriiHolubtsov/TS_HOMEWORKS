function reverseArray<T>(arr: T[]): T[] {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  
    return arr;
  }
  
  const arr = [1, 2, 3];
  const reversedArr = reverseArray(arr);
  
  console.log(reversedArr);
  console.log(arr === reversedArr);