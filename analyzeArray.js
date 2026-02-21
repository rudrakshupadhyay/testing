function avgArr(arr) {
  let sumArr = 0;
  arr.forEach((element) => {
    sumArr += element;
  });
  return sumArr / arr.length;
}
function minArr(arr) {
  let mini = Number.MAX_SAFE_INTEGER;
  arr.forEach((element) => {
    mini = Math.min(mini, element);
  });
  return mini;
}
function maxArr(arr) {
  let maxi = Number.MIN_SAFE_INTEGER;
  arr.forEach((element) => {
    maxi = Math.max(maxi, element);
  });
  return maxi;
}
function analyzeArray(arr) {
  return {
    average: avgArr(arr),
    min: minArr(arr),
    max: maxArr(arr),
    length: arr.length,
  };
}

export { analyzeArray };
