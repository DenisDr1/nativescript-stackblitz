import { Observable } from '@nativescript/core';

function calculateProduct(a, b) {
  let product = 1;
  let hasMultiples = false;

  for (let i = a; i <= b; i++) {
    if (i < 30 && i % 7 === 0) {
      product *= i;
      hasMultiples = true;
    }
  }

  return hasMultiples ? product : 0;
}

function calculateSum(x, y, z) {
  if (x % 5 === 0 && y % 5 === 0 && z % 5 === 0) {
    return x + y + z;
  } else {
    return (x + y + z) * (x + y + z) * (x + y + z);
  }
}

export function createViewModel() {
  const viewModel = new Observable();
  viewModel.inputA = '';
  viewModel.inputB = '';
  viewModel.resultLabelTask1 = '';

  viewModel.onCalculateButtonTapTask1 = () => {
    const a = parseInt(viewModel.get('inputA'));
    const b = parseInt(viewModel.get('inputB'));

    if (isNaN(a) || isNaN(b)) {
      viewModel.set('resultLabelTask1', 'Введіть дійсні числа.');
      return;
    }

    const result = calculateProduct(a, b);
    viewModel.set(
      'resultLabelTask1',
      `Добуток чисел, кратних 7 і менших, ніж 30 у проміжку [${a}, ${b}] дорівнює: ${result}`
    );
  };

  viewModel.inputX = '';
  viewModel.inputY = '';
  viewModel.inputZ = '';
  viewModel.resultLabelTask2 = '';

  viewModel.onCalculateButtonTapTask2 = () => {
    const x = parseInt(viewModel.get('inputX'));
    const y = parseInt(viewModel.get('inputY'));
    const z = parseInt(viewModel.get('inputZ'));

    if (isNaN(x) || isNaN(y) || isNaN(z)) {
      viewModel.set('resultLabelTask2', 'Введіть дійсні числа.');
      return;
    }

    const result = calculateSum(x, y, z);
    viewModel.set(
      'resultLabelTask2',
      `Результат обчислення для чисел (${x}, ${y}, ${z}) дорівнює: ${result}`
    );
  };

  return viewModel;
}
