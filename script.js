const sidebar = document.querySelector('.sidebar');
        hamburger.addEventListener('change', () => {
        sidebar.style.display = hamburger.checked ? 'flex' : 'none';
        if(!hamburger.checked) {
            sidebar.classList.add('show');
            sidebar.classList.remove('hide');
        } else {
                document.getElementById("check").onclick = function(){
                document.querySelector(".sidebar").style.animationName = "hide"
            };
            sidebar.classList.add('hide');
            sidebar.classList.remove('show');
        }
        })