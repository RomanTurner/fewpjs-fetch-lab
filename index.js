function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => renderBooks(json));
}

function fetchTests() {
  fetch("https://anapioficeandfire.com/api/characters")
    .then((resp) => resp.json())
    .then((json) => visit(json));
}

function visit(object) {
  if (isIterable(object)) {
    forEachIn(object, function (accessor, child) {
      visit(child);
    });
  } else {
    var value = object;
    console.log(value);
  }
}

function forEachIn(iterable, functionRef) {
  for (var accessor in iterable) {
    functionRef(accessor, iterable[accessor]);
  }
}

function isIterable(element) {
  return isArray(element) || isObject(element);
}

function isArray(element) {
  return element.constructor == Array;
}

function isObject(element) {
  return element.constructor == Object;
}


function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

function allegiances(character) {
  let ally = document.querySelector('.ally');
  let valueX = Object.values(character);
  let trueValue = valueX.filter((x) => x != "" && x.length != 0);
  console.log(trueValue);
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
  fetchTests();
});

