const domFormName = document.getElementById('formName');
const domFormKm = document.getElementById('formKm');
const domFormAge = document.getElementById('formAge');

const domButtonGenerate = document.querySelector('#generate');
const domButtonCancel = document.querySelector('#cancel');





domButtonGenerate.addEventListener('click', 
    function () {
        const domForNameText = domFormName.value;
        console.log(domForNameText);
    }
);


domButtonCancel.addEventListener('click', 
    function() {
        const domForNameText = domFormName.value;
        console.log(domForNameText)
        domForNameText.value = "";
    }
);

