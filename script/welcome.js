const check = function () {

    const checked = document.getElementById ('mySpan')
   
    if (checked.innerText ==='' ) {
    checked.innerText = "✔"
    
} else {checked.innerText=''} }



const goToBenchmark = function(){
    const checked = document.getElementById('mySpan')
    console.log(checked)

    if (checked.innerText !=='' && number.value>4 && number.value<10) {
        console.log("ciao")
        window.location.href="index.html"}
}

goToBenchmark()
