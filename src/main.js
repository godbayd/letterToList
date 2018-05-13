function letterToList(str, elem){
  //maybe add cache here to store already appended elems
  //so that we can program the function to only
  //construct  new Objects if an elem isnt repeated
  //to avoid overlapping
  this.str = str;
  this.elem = document.querySelector(elem);
}

letterToList.prototype.separateLetters = function(){
  //maybe some regex here to replace
  //white space and punctuation
  //with according html entity
  let replaceSpace = this.str.replace(/[\s]/g, '\u00a0');
  augArr = replaceSpace.split(' ').toString();
  arr = augArr.split('');
  //regex added
  let ul = document.createElement('UL');
  ul.setAttribute('style', 'margin: 0px; padding: 0px; list-style-type: none');

  arr.map((letter) => {
    let li = document.createElement('LI');
    li.setAttribute('style', 'float: left');
    let strLetter = document.createTextNode(letter);
    li.appendChild(strLetter);
    ul.appendChild(li);
  });
  this.elem.appendChild(ul);
}

let indi1 = new letterToList('test test', '.letter-anim');
indi1.separateLetters();
console.log(indi1.elem.innerHTML);
