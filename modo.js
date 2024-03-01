const btn_mode = document.getElementById('mode');

btn_mode.addEventListener('click', _ => {
    document.body.classList.toggle('light');
});