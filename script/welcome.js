const check = function () {

    const checked = document.getElementById ('mySpan')
   
    if (checked.innerText ==='') {
    checked.innerText = "✔"
    
} else {checked.innerText=''} }



const goToBenchmark = function()
 { const checked = document.getElementById ('mySpan')
 if (checked.innerText !=='') 
 {window.location.href="index.html"}
	 }
