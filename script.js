document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;

            // Toggle visibility of the answer
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });
});
