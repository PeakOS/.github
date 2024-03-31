const hamburger = document.querySelector('.hamburger input');
        const sidebar = document.querySelector('.sidebar');
        hamburger.addEventListener('change', () => {
        sidebar.style.display = hamburger.checked ? 'flex' : 'none';
        });