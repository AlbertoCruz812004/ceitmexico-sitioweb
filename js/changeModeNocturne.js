const toggleNightMode = () => {
    switchButton = document.getElementById('toggle');
    body = document.querySelector('body');
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
        switchButton.classList.remove('bx-sun');
        switchButton.classList.add('bx-moon');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        switchButton.classList.remove('bx-moon');
        switchButton.classList.add('bx-sun');
    }
};
