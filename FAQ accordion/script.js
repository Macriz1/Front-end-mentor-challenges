let questions = document.querySelectorAll('.questions');
let spans = document.querySelectorAll('.unchecked');
let answers = document.querySelectorAll('.content');

spans.forEach((span) =>{
    span.addEventListener('click', (e)=>{
     if(e.target == spans[0]){
       answers[0].textContent = 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML CSS, and JavaScript. Its suitable for all levels and ideal for portfolio building';
        span.classList.toggle('checked');
        answers[0].classList.toggle('content-show');
     
    }else if(e.target == spans[1]){
        answers[1].textContent = 'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.'
        span.classList.toggle('checked');
        answers[1].classList.toggle('content-show');

    }else if(e.target == spans[2]){
        answers[2].textContent = 'Yes, you can use projects completed on Frontend Mentor in your portfolio. Its an excellent way to showcase your skills to potential employers!'
        span.classList.toggle('checked');
        answers[2].classList.toggle('content-show');
    }else{
        answers[3].textContent = 'The best place to get help is inside Frontend Mentors Discord community. There a help channel where you can ask questions and seek support from other community members.'
        span.classList.toggle('checked');
        answers[3].classList.toggle('content-show');
    }

    


    })  
})
