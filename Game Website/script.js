gsap.to("#navbar",{
    backgroundColor: "#90EE80",
    duration: 1,
    height: "80px",
    marginTop:"-10px",
    scrollTrigger:{
        trigger:"#navbar",
        scroller:"body",
        start: "top -10%",
        end: "top -11%",
        scrub: 2
    }
})
gsap.to("a",{
    color:"#000",
    scrollTrigger:{
        trigger:"a",
        scroller:"body",
        start: "top -10%",
        end: "top -11%",
        scrub: 2
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger: "#main",
        scroller:"body",
        start:"top -30%",
        end:"top -80%",
        scrub:2
    }
})
gsap.from("#in-about-us",{
    y:50,
    opacity: 1,
    duration:10,
    stagger: 0.4,
    scrollTrigger:{
        trigger:"#in-about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        scrub: 3
    }
})
gsap.from("#about-us img",{
    y:50,
    opacity: 1,
    duration:10,
    stagger: 0.4,
    scrollTrigger:{
        trigger:"#about-us img",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        scrub: 3
    }
})
function startQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = `
        <h3>Football Quiz</h3>
        <p>1. Which country won the first ever World Cup in 1930?</p>
        <input type="radio" name="q1" value="Uruguay"> Uruguay<br>
        <input type="radio" name="q1" value="Brazil"> Brazil<br>
        <input type="radio" name="q1" value="Germany"> Germany<br><br>

        <p>2. Who is known as the "King of Football"?</p>
        <input type="radio" name="q2" value="Pelé"> Pelé<br>
        <input type="radio" name="q2" value="Maradona"> Maradona<br>
        <input type="radio" name="q2" value="Messi"> Messi<br><br>

        <p>3. Which team has won the most Champions League titles?</p>
        <input type="radio" name="q3" value="Real Madrid"> Real Madrid<br>
        <input type="radio" name="q3" value="Barcelona"> Barcelona<br>
        <input type="radio" name="q3" value="Bayern Munich"> Bayern Munich<br><br>

        <button onclick="submitQuiz()">Submit</button>
    `;
}

function submitQuiz() {
    const answers = {
        q1: 'Uruguay',
        q2: 'Pelé',
        q3: 'Real Madrid'
    };

    let score = 0;

    Object.keys(answers).forEach(key => {
        const selectedAnswer = document.querySelector(`input[name="${key}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === answers[key]) {
            score++;
        }
    });

    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = `<p>You scored ${score} out of 3!</p>`;
}