let array = [];
const container = document.getElementById("bars-container");

function generateArray(size = 50) {
  array = [];
  container.innerHTML = "";
  for (let i = 0; i < size; i++) {
    const value = Math.floor(Math.random() * 300) + 10;
    array.push(value);
    const bar = document.createElement("div");
    bar.style.height = `${value}px`;
    bar.classList.add("bar");
    container.appendChild(bar);
  }
}

async function bubbleSort() {
  const bars = document.getElementsByClassName("bar");
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      bars[j].style.background = "yellow";
      bars[j + 1].style.background = "yellow";
      await new Promise(resolve => setTimeout(resolve, 30));
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        bars[j].style.height = `${array[j]}px`;
        bars[j + 1].style.height = `${array[j + 1]}px`;
      }
      bars[j].style.background = "#ff5722";
      bars[j + 1].style.background = "#ff5722";
    }
    bars[array.length - i - 1].style.background = "lime";
  }
}

async function selectionSort() {
  const bars = document.getElementsByClassName("bar");
  for (let i = 0; i < array.length; i++) {
    let minIdx = i;
    bars[minIdx].style.background = "blue";
    for (let j = i + 1; j < array.length; j++) {
      bars[j].style.background = "yellow";
      await new Promise(resolve => setTimeout(resolve, 30));
      if (array[j] < array[minIdx]) {
        bars[minIdx].style.background = "#ff5722";
        minIdx = j;
        bars[minIdx].style.background = "blue";
      } else {
        bars[j].style.background = "#ff5722";
      }
    }
    [array[i], array[minIdx]] = [array[minIdx], array[i]];
    bars[i].style.height = `${array[i]}px`;
    bars[minIdx].style.height = `${array[minIdx]}px`;
    bars[i].style.background = "lime";
  }
}

async function insertionSort() {
  const bars = document.getElementsByClassName("bar");
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      bars[j + 1].style.height = `${array[j + 1]}px`;
      bars[j + 1].style.background = "yellow";
      j--;
      await new Promise(resolve => setTimeout(resolve, 30));
    }

    array[j + 1] = key;
    bars[j + 1].style.height = `${key}px`;
    bars[j + 1].style.background = "lime";
  }
}

generateArray();
