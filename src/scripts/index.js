const questions = document.querySelectorAll('.question')
const questionsContainer = document.querySelectorAll('.question-container')

questions.forEach((question, index) => {
    question.addEventListener('click', () => {
        questionsContainer[index].classList.contains('active') ? questionsContainer[index].classList.remove('active') : questionsContainer[index].classList.add('active')
    })
});