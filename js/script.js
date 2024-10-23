function average(numbers) {
    if (numbers.length === 0) return 0;
  
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  }

  const numbersArray = [1, 2, 3, 4, 5];
  const avg = average(numbersArray);
  console.log(avg);