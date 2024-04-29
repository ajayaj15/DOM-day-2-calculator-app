function handleKeyDown(event){
    if (event.key.match(/[0-9]/)) {
        onButtonClick(event.key);
    } else if (event.key === 'Backspace') {
        backspace();
    } else {
        alert('Only numbers are allowed!');
    }
}

function calculateResult() {
    const expression = document.getElementById('buttons').value;
    if (expression) {
        try {
            const result = eval(expression);
            document.getElementById('buttons').value = result;
        } catch (error) {
            document.getElementById('buttons').value = 'Error';
        }
    }
}

function onButtonClick(value) {
    document.getElementById('buttons').value += value;
}

 
function clearbuttons(){
    document.getElementById('buttons').value = '';
}

function backspace(){
   const buttons = document.getElementById('buttons');
    if(buttons.value){
        buttons.value = buttons.value.slice(0, -1)
    }
}