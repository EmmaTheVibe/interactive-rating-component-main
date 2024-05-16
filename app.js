const scores = document.querySelectorAll('.score')
const button = document.querySelector('button')
const choice = document.querySelector('.choice')
const rater = document.querySelector('.rater')
const thanks = document.querySelector('.thanks')

scores.forEach((score, index) => {
    score.addEventListener('click', function(){
        choice.innerText = index + 1
        scores.forEach(score => (
            score.classList.remove('clicked')
        ))
        this.classList.add('clicked')
        if (score.classList.contains('clicked')){
            button.addEventListener('click', function(){
                rater.style.display = 'none'
                thanks.style.display = 'flex'
            })
        }
    })
})
