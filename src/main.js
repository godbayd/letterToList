function lettersToList(str, elem){
  //maybe add cache here to store already appended elems
  //so that we can program the function to only
  //construct  new Objects if an elem isnt repeated
  //to avoid overlapping
  this.str = str;
  this.elem = document.querySelector(elem);
}

lettersToList.prototype.separateLetters = function(){
  //maybe some regex here to replace
  //white space and punctuation
  //with according html entity
  const replaceSpace = this.str.replace(/[\s]/g, '\u00a0');
  augArr = replaceSpace.split(' ').toString();
  arr = augArr.split('');
  //regex added
  const ul = document.createElement('UL');
  ul.setAttribute('style', 'margin: 0px; padding: 0px; list-style-type: none');

  arr.map((letter) => {
    const li = document.createElement('LI');
    li.setAttribute('style', 'float: left');
    const strLetter = document.createTextNode(letter);
    li.appendChild(strLetter);
    ul.appendChild(li);
  });
  this.elem.appendChild(ul);
}

const indi1 = new lettersToList('test test', '.letter-anim');
indi1.separateLetters();
