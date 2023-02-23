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

        //palesemente il value sulle option non mi legge il contenuto ma il suo value

        console.log(domFormNameText + domFormAgeText + domFormKmText);
    }
);


domButtonCancel.addEventListener('click', 
    function() {
        const domFormNameText = domFormName.value;
        const domFormKmText = domFormKm.value;
        const domFormAgeText = domFormAge.value;

        //date queste tre costanti al click, le costanti anvranno value vuoto
        //MA NON SUCCEDE. in più il pulsante cancella ora non cencella più

        domFormNameText.value = "";
        domFormKmText.value = "";
        domFormAgeText.value = "";

        //anche se facendo la prova con il console.log il tutto sembra essere oprativo
        //deduco ci sia un problema nell'ordinare al value di essere vuoto

        console.log(domFormNameText + domFormAgeText + domFormKmText);

    }
);

