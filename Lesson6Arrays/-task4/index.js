function swap(numbers) {
    const [start, ...rest] = numbers;
    return [...rest, start]
  }
  
  function swapManual(numbers) {
    let array =[];
    for(let i = 1; i<numbers.length; i++){
      array.push(numbers[i]);
    }
    array.push(numbers[0]);
    return array
  }
  