let enteredText = '';
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        btn.style.width = '66px';
        btn.style.height = '66px';
        btn.style.marginLeft= '9px';
        setTimeout(()=>{btn.style.width = '70px';
                        btn.style.height = '70px';
                        btn.style.marginLeft = '5px';},100)
        try{
            if(e.target.innerHTML ==='='){
                enteredText = eval(enteredText);
                document.querySelector('input').value = enteredText;
            }
            else if(e.target.innerHTML==="X"){
                enteredText = enteredText + '*';
                document.querySelector('input').value = enteredText;
            }
            else{
                enteredText = enteredText + e.target.innerHTML;
                 document.querySelector('input').value = enteredText;
            }
        }
        catch(err){
            document.querySelector('input').value = " Please enter Valid input";
            document.querySelector('input').style.fontSize = '20px';
            setTimeout(()=>{cleanAll()},2000)
        }
        
    })
})

function cleanAll(){
    document.getElementById('clean').style.width = '45px';
    document.getElementById('clean').style.height='21px';
    document.querySelector('input').value = "";
    enteredText="";
    setTimeout(()=>{document.getElementById('clean').style.width='50px';
                    document.getElementById('clean').style.height='24px';},100)
}