let questions = document.querySelectorAll(".question");
questions.forEach(question =>{question.addEventListener("click", ()=>{
    document.querySelector(".answer").style.display = "block";
    document.querySelector(".questionTitle").style.fontWeight = 700 ;
})})