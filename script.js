(function(){
    var words = [
        ' GROW UP',
        ' DREAM',
        ' STUDY GO',
        ' JUST GO',
        ' FOR DREAM'
        ], i = 0;
    setInterval(function(){
        $('#changingword').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 2500);
      
})();



$(window).on('scroll',function(){
    let scroll = $(window).scrollTop();
    let oTop = $('.skills-progress').offset().top - window.innerHeight;
    if(scroll>oTop){
        $(".skills-progress").addClass("progressbar-active");
    }
    else{
        $(".skills-progress").removeClass("progressbar-active");
    }
});


    // close navbar-collapse when a  clicked
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });