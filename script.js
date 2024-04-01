const hamburger = document.querySelector('.hamburger input');
const sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('change', () => {
    if (hamburger.checked) {
        sidebar.classList.add('open');
        sidebar.style.display = 'flex';
        sidebar.style.animation = 'show 0.3s forwards';
    } else {
        sidebar.style.animation = 'hide 0.3s forwards';
        setTimeout(() => {
            sidebar.style.display = 'none';
            sidebar.classList.remove('open');
        }, 300);
    }
});
