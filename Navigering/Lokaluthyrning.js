// script.js
const bookBtns = document.querySelectorAll('.book-btn');
const bookingModal = document.querySelector('.booking-modal');
const closeBtn = document.querySelector('.close-btn');

bookBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        bookingModal.classList.remove('hidden');
    });
});

closeBtn.addEventListener('click', () => {
    bookingModal.classList.add('hidden');
});

window.addEventListener('click', (event) => {
    if (event.target === bookingModal) {
        bookingModal.classList.add('hidden');
    }
});