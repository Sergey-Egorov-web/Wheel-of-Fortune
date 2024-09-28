const root = document.getElementById("root");

// выводим вопрос

renderElement("h1", word.question, "question");

// передаём ответ, с которым будем сверяться

const answer = word.answer;

// выводим сколько букв в слове, каждая буква скрыта за (?), буква это элемент массива

const hiddenWordArray = printHiddenWord(word.answer.length);

// создаём поле ввода букв

renderElement("input", "", "inputWord");

// создаём кнопку ввода

renderElement("button", "Ввести", "inputBtn");

let inputLetter;
let userAnswer;

renderElement("p", "Назовите букву русского алфавита", "hintText"); //объявляем названную букву

// обработчик события нажатия кнопки 'Ввести'

inputBtn.addEventListener("click", callbackPush);

function callbackPush() {
  console.log(inputWord.value);
  // проверка, что введена только одна буква
  if (inputWord.value.length != 1) {
    alert("Нужно ввести одну букву");
    inputWord.value = "";
    return;
  }
  // проверка, что введенная буква русская

  if (alphabet.includes(inputWord.value) == false) {
    alert("Нужно ввести строчную букву русского алфавита");
    inputWord.value = "";
    return;
  }

  // выводим сообщение
  printMessage(
    "hintText",
    `Вы назвали букву '${inputWord.value.toUpperCase()}' нажмите check для проверки или 
     введите другую букву и нажмите Ввести`
  );
  inputLetter = inputWord.value;
  inputWord.value = ""; //очищаем поле ввода
}

// создаём кнопку проверки ввода

renderElement("button", "check", "checkBtn");

// обработчик события нажатия кнопки 'check'

checkBtn.addEventListener("click", function () {
  let element;
  let counter = 0;
  for (let j = 0; j < word.answer.length; j++) {
    if (inputLetter == answer[j]) {
      hiddenWordArray[j] = inputLetter;
      // console.log(hiddenWordArray[j]);
      element = document.getElementById(`${j}letter`);
      element.value = hiddenWordArray[j];
      counter++;

      printMessage(
        "hintText",
        "Правильная буква! Играем дальше, называйте следующую букву"
      );
    }
    if (counter == 0) {
      printMessage("hintText", "Нет такой буквы в этом слове");
    }
  }
});
//функция создания элемента, принимает параметры Имя элемента, текст элемента, Id и создаёт
// элемент с такими параметрами

function printMessage(tagId, message) {
  textElement = document.getElementById(tagId);
  textElement.textContent = message;
}
// функция создаёт новый элемент в DOM

function renderElement(tagName, tagNameText, tagId) {
  const element = document.createElement(tagName);
  const elementText = tagNameText;
  element.append(elementText);
  root.append(element);
  element.setAttribute("id", tagId);
  // return element;
}

// функция printHiddenWord принимает длину wordLength, создаёт массив из wordLength элементов
// после создаёт wordLength элементов Output и аппендит его в root. Функция возвращает получившийся массив.

function printHiddenWord(wordLength) {
  const hiddenLetter = " ? ";
  let hiddenWord = [];
  for (let i = 0; i < wordLength; i++) {
    hiddenWord.push(hiddenLetter);
    renderElement("output", hiddenLetter, `${i}letter`);
  }
  return hiddenWord;
}
