// dropdown func
(function dropDown(){
    let dropDownItem = document.querySelectorAll(".dropdown-item");
    dropDownItem.forEach(el =>{
        el.addEventListener('click', function(){
            let currAccItem = el;
            let currAccBody = currAccItem.querySelector('.dropdown-text');
            function addClassActive(h) {
                currAccBody.style.height = `${h}px`;
            }
            if(!currAccItem.classList.contains('active')){
                let cacheHeight = currAccBody.offsetHeight;
                currAccBody.style.height = 'auto';
                let currHeight =  currAccBody.offsetHeight;
                currAccBody.style.height = cacheHeight +'px';
                setTimeout(addClassActive, 20, currHeight);
            } else setTimeout(addClassActive, 20, 0);
            currAccItem.classList.toggle('active'); 
        });
    })
}());

// Mob menu
const enable = (e) => {
    document.getElementById('burger').classList.toggle('open');
    document.getElementById('nav').classList.toggle('nav-open');
    document.getElementsByTagName('body')[0].classList.toggle('locked');
}