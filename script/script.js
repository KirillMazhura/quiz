document.addEventListener('DOMContentLoaded', function() {
    const btnOpenModal = document.querySelector('#btnOpenModal');
    const modalBlock = document.querySelector('#modalBlock');
    const closeModal = document.querySelector('#closeModal');
    const questionTitle = document.querySelector('#question');
    const formAnswers = document.querySelector('#formAnswers');
    const answerItem1 = {
        fileLocation: "./image/burger.png",
        name: "Стандарт"
    }
    const answerItem2 = {
        fileLocation: "./image/burgerBlack.png",
        name: "Чёрный"
    }
    btnOpenModal.addEventListener('click', () => {
        modalBlock.classList.add('d-block')
        playTest();
    })
    closeModal.addEventListener('click', () => {
        modalBlock.classList.remove('d-block')
    })
    const playTest = () => {
        const renderQuestions = () => {
            questionTitle.textContent = 'Какого цвета бургер вы хотите?';
            formAnswers.innerHTML=`
            <div class="answers-item d-flex flex-column">
                <input type="radio" id="answerItem1" name="answer" class="d-none">
                <label for="answerItem1" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src="${answerItem1.fileLocation}" alt="burger">
                  <span>${answerItem1.name}</span>
                </label>
              </div>
              <div class="answers-item d-flex justify-content-center">
                <input type="radio" id="answerItem2" name="answer" class="d-none">
                <label for="answerItem2" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src="${answerItem2.fileLocation}" alt="burger">
                  <span>${answerItem2.name}</span>
                </label>
              </div>
            `;
        }
        renderQuestions();
    }
})