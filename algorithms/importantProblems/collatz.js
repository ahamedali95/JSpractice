const isEven = (num) => {
  return num % 2 === 0;
}

const evenOperation = (num) => {
  return num / 2;
}

const oddOperation = (num) => {
  return 3 * num + 1;
}

const evaluate = (num) => {
  if(isEven(num)) {
    return evenOperation(num);
  } else {
    return oddOperation(num);
  }
}

const numberOfSteps = (num) => {
  let numberOfSteps = 1;

  while(num > 1) {
    num = evaluate(num);
    numberOfSteps++;
  }

  return numberOfSteps;
}
//3 => 10 => 5 => 16 => 8 => 4 => 2 => 1 **8 STEPS**
//4 => 2 => 1 **3 STEPS**

const longestChain = (num) => {
  const previousChains = {};
  let longestChain = 0;
  let currentNum = 0;

  for(let i = 1; i <= num; i++) {
    if(!!previousChains[i]) {
      console.log("I exist: ", previousChains[i])
      if(previousChains[i] > longestChain) {
        longestChain = previousChains[i];
        currentNum = i;
      }
    } else {
      const result = numberOfSteps(i);
      previousChains[i] = result;
      if(result > longestChain) {
        longestChain = result;
        currentNum = i;
      }
    }

    console.log(previousChains)
  }

  return currentNum;
}

numberOfSteps(20)
