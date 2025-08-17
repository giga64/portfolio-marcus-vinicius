$(document).ready(function(){
    // --- Navbar e Scroll-Up Button ---
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
        // fecha o menu ao clicar em um item no mobile
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
    });

    // --- Menu Responsivo ---
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // --- Animação de Digitação (Typed.js) ---
    var typed = new Typed(".typing", {
        strings: ["Tecnologia.", "Inovação.", "Estratégia."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // --- Efeito de Cursor (Blur) ---
    const cursorBlur = $('#cursor-blur');
    $(window).on('mousemove', function(e){
        cursorBlur.css({
            'top': e.clientY + 'px',
            'left': e.clientX + 'px'
        });
    });

    // --- Animações ao Rolar (AOS) ---
    AOS.init({
        duration: 800,
        once: true,
        offset: 50,
    });
});