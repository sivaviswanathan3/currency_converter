let select=document.querySelectorAll(".cureency")
let input=document.getElementById('input')

let btn = document.getElementById("btn");

 
 

  
fetch("https://api.frankfurter.app/currencies")
.then(res=>(res.json()))
.then(data=>displayDropDown(data));

function displayDropDown(data){
  
  let curr= Object.entries(data)
 
 
  for(let i=0;i<curr.length;i++){
   let opt= `<option value="${curr[i][0]}">${curr[i][0]}</option>`

   select[0].innerHTML+=opt
   select[1].innerHTML+=opt
  }
 
} 

btn .addEventListener("click",()=>{

  let curr1=select[0].value
  let curr2=select[1].value
  let inputval=input.value
      
  convert(curr1,curr2,inputval)

  if(curr1===curr2){
    let resultdiv=document.createElement("div")
    resultdiv.id="error"
    document.getElementById("container").appendChild(resultdiv)
    document.getElementById("error").innerHTML="'please change the value'";
  }



  
  


})
function convert(curr1,curr2,inputval){
 
   fetch(`https://api.frankfurter.app/latest?amount=${inputval}&from=${curr1}&to=${curr2}`)
  .then(resp=>(resp.json()))
  .then(resp=>
    document.getElementById("result").value=Object.entries(resp.rates)[0][1])
 
  
  }


 
