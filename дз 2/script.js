let addCkeckBox = document.querySelector('.addCkeckBox');
let newCheckBox = document.querySelector('.newCheckBox');
let form1 = document.querySelector('.form1');

addCkeckBox.addEventListener('click', function () {
    let checkBox = newCheckBox.value;
    if (checkBox !== '') {
        form1.insertAdjacentHTML('beforeend',
            `<div class="group" name="group">
            <input type="checkbox" name="check">
            <span>${checkBox}</span>
        </div>`);
    }
    else if (checkBox == '') {
        document.querySelector('.alert1').style.display = 'block';
    }
    f2.inputText.value = '';
})

let alert1_button = document.querySelector('.alert1_button');
alert1_button.addEventListener('click', function () {
    document.querySelector('.alert1').style.display = 'none';
})

let alert2_button = document.querySelector('.alert2_button');
alert2_button.addEventListener('click', function () {
    document.querySelector('.alert2').style.display = 'none';
})

form1.addEventListener('click', function (event) {
    if (this.children.length > 1 && event.target.type == 'checkbox') {
        event.target.parentElement.remove();
    }
    else {
        document.querySelector('.alert2').style.display = 'block';
    }
})

// f1.check.addEventListener('click', function (){
//   this.checked = false;
// })


function checkFalse(){
    if(event.target.type === "checkbox"){
        f1.check.checked = false;
    }
}