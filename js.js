
let num = document.getElementById("input");
let form = document.getElementById('form')

form.addEventListener('submit', evenNumberSearch)


function evenNumberSearch(e){
     if(num.value % 2 == 0){alert('Число парное')}
     else{alert('Число непарное')}

}




