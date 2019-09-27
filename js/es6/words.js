let wordInterval;
let wordsContainer;
let currentWord = 0;
let words = [];
let wordArray = [];
let wordsArray = ["Developer", "Back End", "UX Designer", "Front End", "Creater", "Modern"];

WordLength();
startWords();

function WordLength() {
  let length = 10;
  let spaceAdd = 0;
  let spaceArray = [];
  let letterArray = [];

  for(let i = 0; i < wordsArray.length; i++){
    if(wordsArray[i].length > length){
        length = wordsArray[i].length;
    }      
  }

  for(let i = 0; i < wordsArray.length; i++){
    let strLength = wordsArray[i].length;
    if (strLength < length) {
      spaceAdd = length - strLength;
      for(let j = 0; j < spaceAdd+1; j++){
        if (Math.ceil(spaceAdd/2) == j) {
          letterArray[j] = wordsArray[i];
        } else {
          letterArray[j] = "&nbsp;";
        }
      }
      addWords(letterArray);
      letterArray = [];
    } else {
      addWords(wordsArray[i]);
    }
  }
}

function addWords(word) {
  wordsContainer = document.getElementById('words');
  let createSpan = document.createElement('span');
  createSpan.classList.add("main__word");

  let str;

  for(var i = 0; i < word.length; i++){
    str = word[i].replace(" ", "\xa0");

    let createInnerSpan = document.createElement('span');
    if (str != "&nbsp;") {
      if (str.length > 1) {
        let split = str.split("");
        for(var j = 0; j < split.length; j++){
          createInnerSpan = document.createElement('span');
          createInnerSpan.innerHTML = split[j];
          createInnerSpan.classList.add("main__letter");
          createSpan.appendChild(createInnerSpan);
        }
      } else {
        createInnerSpan.innerHTML = str;
        createInnerSpan.classList.add("main__letter");
        createSpan.appendChild(createInnerSpan);
      }
    } else {
      createInnerSpan.innerHTML = word[i];
      createInnerSpan.classList.add("main__letter");
      createSpan.appendChild(createInnerSpan);
    }
  }

  wordsContainer.appendChild(createSpan);
}

function startWords() {
  try {
    words = document.getElementsByClassName('main__word');

    currentWord = 0;
    wordArray = [];
    
    words[currentWord].style.opacity = 1;
    for (let i = 0; i < words.length; i++) {
      splitLetters(words[i]);
    }
    
    changeWord();
    clearInterval(wordInterval);
    wordInterval = setInterval(changeWord, 4000);
  } catch (error) {
    // Ruh-roh - there are no wordz
    // No worries
  }
}

function changeWord() {
  let cw = wordArray[currentWord];
  let nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (let i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (let i = 0; i < nw.length; i++) {
    nw[i].className = 'main__letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
    cw[i].className = 'main__letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
    nw[i].className = 'main__letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  let content = word.innerText;
  word.innerText = '';
  let letters = [];
  for (let i = 0; i < content.length; i++) {
    let letter = document.createElement('span');
    letter.className = 'main__letter';
    letter.innerText = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}