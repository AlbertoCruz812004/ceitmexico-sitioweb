window.addEventListener("scroll", ()=>{
    const header = document.querySelector('header');
    header.classList.toggle('dark-glass-effect', window.scrollY > 55);
});