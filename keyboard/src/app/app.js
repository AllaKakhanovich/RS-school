function myFunction() {
  const area = document.createElement("textarea");
  const text = document.createTextNode("write here");
  area.appendChild(text);
  document.body.prepend(area);
  area.className = "field";
  
  let div = document.createElement('div');
  div.className = "message";
  div.innerHTML = "часть keyboard (только цифры и англ. буквы) в системе window";
  document.body.prepend(div);  
}

myFunction();

const keyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,
  113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 97,
  115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13, 122, 120, 99, 
  118, 98, 110, 109, 44, 46, 47];

init();

function init() {
  let letter = '';

  for (let i = 0; i < keyboard.length; i++) {
    if (i === 13 || i === 26 || i === 38) {
      letter += '<div class="clearfix"></div>';
    }

    letter += '<div class="letter" data="' + keyboard[i] + '" >' + String.fromCharCode(keyboard[i]) + '</div>';
  }
  document.querySelector('#keyboard').innerHTML = letter;
}

document.querySelectorAll('#keyboard .letter').forEach(function(element) {  
  element.onclick = function(event) { 
    let textarea = document.getElementsByClassName('field')[0];    
    let code = element.getAttribute('data');    
    let char = String.fromCharCode(code);

    textarea.value += char;

    document.querySelectorAll('#keyboard .letter').forEach(function(element) {
      element.classList.remove('active');      
    });

    element.classList.add('active');
  }
});

document.onkeypress = function(event) {
  document.querySelectorAll('#keyboard .letter').forEach(function(element) {
    element.classList.remove('active');
  });
  document.querySelector('#keyboard .letter[data="' + event.keyCode + '"]').classList.add('active');
}

