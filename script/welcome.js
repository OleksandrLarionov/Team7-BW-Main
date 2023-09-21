const check = function () {

    const checked = document.getElementById ('mySpan')
   
    if (checked.innerText ==='' ) {
    checked.innerText = "✔"
    
} else {checked.innerText=''} }



const goToBenchmark = function(e)
 { const checked = document.getElementById ('mySpan')
 const number=document.getElementById("num")
 console.log(number)
    e.preventDefault();
 if (checked.innerText !=='' && number.value>5) 
 {
    console.log("ciao")
    window.location.href="index.html"}
	 }
