var num1 = Math.ceil(Math.random() * 9);
var num2 = Math.ceil(Math.random() * 9);
var result = num1 * num2;

var by = document.body;
var word = document.createElement('div');
word.textContent = String(num1) + ' * ' + String(num2)+ ' = ';
document.body.append(word);

var fm = document.createElement('form');
document.body.append(fm);

var inputWindow = document.createElement('input');
fm.append(inputWindow);
//document.body.append(inputWindow);

var btn = document.createElement('button');
btn.textContent = 'input!';
fm.append(btn);
//document.body.append(btn);

var resultWindow = document.createElement('div');
document.body.append(resultWindow);

fm.addEventListener('submit', function 콜백함수 (e) {
    e.preventDefault();
    console.log(result, inputWindow.value);
    if( result === Number(inputWindow.value)){
        resultWindow.textContent = '딩동댕';
        num1 = Math.ceil(Math.random() * 9);
        num2 = Math.ceil(Math.random() * 9);
        result = num1 * num2;
        word.textContent = String(num1) + ' * ' + String(num2)+ ' = ';
        inputWindow.value = '';
        inputWindow.focus();
    }else {
        resultWindow.textContent = '땡';
        inputWindow.value = '';
        inputWindow.focus();
    }
} 
);
