const check = function () {

    const checked = document.getElementById ('mySpan')
   
    if (checked.innerText ==='' ) {
    checked.innerText = "✔"
    
} else {checked.innerText=''} }


goToBenchmark()

const goToBenchmark = function()
 { const checked = document.getElementById ('mySpan')
   const number=document.getElementById("num")
   const select = document.getElementById('diff')
   if (!(number.value < 5 || number.value > 10) && checked.innerText !=='' && select.value !== "not_selected"){
      window.location.href="index.html"
    }
   let questionsNumber = JSON.parse(number.value)
   localStorage.setItem('number',questionsNumber)
   
   let testDifficulty = JSON.stringify(select.value)
   localStorage.setItem('difficulty',testDifficulty)
	 }

