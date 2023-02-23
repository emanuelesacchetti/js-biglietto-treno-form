const domFormName = document.getElementById('formName');
const domFormKm = document.getElementById('formKm');
const domFormAge = document.getElementById('formAge');

const domButtonGenerate = document.querySelector('#generate');
const domButtonCancel = document.querySelector('#cancel');





domButtonGenerate.addEventListener('click', 
    function () {
        const domFormNameText = domFormName.value;
        const domFormKmText = domFormKm.value;
        const domFormAgeText = domFormAge.value;

        document.getElementById('h1').innerHTML = domFormNameText
        document.getElementById('h2').innerHTML = domFormKmText

        if(domFormAgeText == 'minChoice'){
            document.getElementById('h3').innerHTML = 'minorenne'
        } else if(domFormAgeText == 'overChoice') {
            document.getElementById('h3').innerHTML = 'over 65'
        } else {
            document.getElementById('h3').innerHTML = 'maggiorenne'
        }
    }
);


domButtonCancel.addEventListener('click', 
    function() {
        domFormName.value = "";
        domFormKm.value = "";
        domFormAge.value = "";
    }
);



