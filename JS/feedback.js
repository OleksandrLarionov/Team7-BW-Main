const stars = document.querySelectorAll('.stella')

const submitForm = function(){

    stars.forEach((star, index1) =>{
        star.addEventListener('mouseover', () => {
            stars.forEach((star, index2) => {
                index1 >= index2 ? star.classList.add('active') : star.classList.remove('active')
            })
        })
    })


    const getForm = document.getElementById('main-form')
    getForm.addEventListener('submit', function(e){
        e.preventDefault()
        const commentField = document.getElementById('comment')
        alert('Thank you for your comment')
        commentField.value = '' 
        
        
        stars.forEach((star) => {
            star.classList.remove('active');
        })  
    })
}
submitForm()


