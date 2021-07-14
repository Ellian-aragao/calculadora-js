export const processingArray = (array) => {
  const result = applyOperation(array);
  return { operation: [...array, " = ", result], result };
};

export const operations = [".", "+", "-", "*", "/", "^"];

function applyOperation(array) {
  const valuesAndOperations = getIndexsOperationsAndArrayNumbers(array);
  const mapOperations = returnMapOperations();
  if (!valuesAndOperations.operations.length) {
    throw new Error("Deve-se utilizar ao menos uma operação");
  }
  return valuesAndOperations.operations.map((operation, index) =>
    mapOperations.get(operation)(
      valuesAndOperations.numbers[index],
      valuesAndOperations.numbers[index + 1]
    )
  );
}

function getIndexsOperationsAndArrayNumbers(array) {
  const numbersArray = [];
  const indexAndOperator = getIndexAndOperation(array);
  indexAndOperator
    .map((itens) => itens.index)
    .forEach((operationIndex, index, arrayOperations) => {
      if (index === 0) {
        numbersArray.push(mapper(array, 0, operationIndex));
      }
      if (index + 1 <= arrayOperations.length)
        numbersArray.push(
          mapper(array, operationIndex + 1, arrayOperations[index + 1])
        );
    });
  return {
    operations: indexAndOperator.map((itens) => itens.operation),
    numbers: numbersArray.map((numbers) =>
      numbers.reduce((prev, value) => prev + value)
    ),
  };
}

function getIndexAndOperation(array) {
  return array
    .map((item, index) =>
      isNaN(Number(item)) ? { operation: item, index: index } : null
    )
    .filter((item) => item);
}

function mapper(array, beforeOperationIndex, afterOperationIndex) {
  return array.slice(beforeOperationIndex, afterOperationIndex);
}

function returnMapOperations() {
  const map = new Map();
  [
    (a, b) => Number(a + '.' + b),
    (a, b) => Number(a) + Number(b),
    (a, b) => Number(a) - Number(b),
    (a, b) => Number(a) * Number(b),
    (a, b) => Number(a) / Number(b),
    (a, b) => Math.pow(Number(a), Number(b)),
  ].forEach((functions, index) => map.set(operations[index], functions));
  return map;
}
