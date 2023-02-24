const domFormName = document.getElementById('formName');
const domFormKm = document.getElementById('formKm');
const domFormAge = document.getElementById('formAge');

const domButtonGenerate = document.querySelector('#generate');
const domButtonCancel = document.querySelector('#cancel');

let kmPrice = 0.21;




domButtonGenerate.addEventListener('click', 
    function () {
        
        const domFormNameText = domFormName.value;
        const domFormKmText = parseInt(domFormKm.value);
        const domFormAgeText = domFormAge.value;

        let price = (domFormKmText * kmPrice);
        
        let minDiscount = ((price * 20) / 100);
        let minPrice = price - minDiscount;
             
        let overDiscount = ((price * 40) / 100);
        let overPrice = price - overDiscount;

        const carriageNumber = Math.floor(Math.random() * 10) + 1;
        const codeNumber = Math.floor(Math.random() * 10000) + 9000;

        if(domFormAgeText == 'minChoice'){
            document.getElementById('ticketOffer').innerHTML = 'Sconto 20%';
            document.getElementById('ticketPrice').innerHTML = `${minPrice.toFixed(2)} ${'€'}`;
        } else if(domFormAgeText == 'overChoice') {
            document.getElementById('ticketOffer').innerHTML = 'Sconto 40%';
            document.getElementById('ticketPrice').innerHTML = `${overPrice.toFixed(2)} ${'€'}`;
        } else {
            document.getElementById('ticketOffer').innerHTML = 'Prezzo standard';
            document.getElementById('ticketPrice').innerHTML = `${price.toFixed(2)} ${'€'}`;

        }
  
        document.getElementById('ticketName').innerHTML = domFormNameText;
        document.getElementById('ticketCarriage').innerHTML = carriageNumber;
        document.getElementById('ticketCode').innerHTML = codeNumber;

        const ticketContainer = document.getElementById('ticketContainer');
        ticketContainer.classList.remove('d-none');
        
    }
);


domButtonCancel.addEventListener('click', 
    function() {
        domFormName.value = "";
        domFormKm.value = "";
        domFormAge.value = "minChoice";

        ticketContainer.classList.add('d-none');
    }
);



