function getQuote() {
  const input = document.getElementById("inputSpecs");
  let inputArr = Array.from(input).map(x => parseInt(x.value));
  let i = -1;
  let sum = 0;
  while (++i < 4) {
      sum += inputArr[i];
    }

    len = sum * inputArr[4];
    quant = len * inputArr[5];
    document.getElementById("quoteSum").innerHTML = quant;
}

function getTax() {
  tax = (getQuote(0.2));
  document.getElementById("tax").innerHTML = tax;
}