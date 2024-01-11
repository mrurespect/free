$(document).ready(function () {
if (typeof document !== "undefined"){
    let element =` <div class="col-md-3">
                <div class="item position-relative bg-white p-5">
                    <div class="icon  position-absolute start-50 top-0  translate-middle  border border-light rounded-circle mx-1 bg-black text-white   border-3 p-3">
                        <i class="fa-brands fa-linkedin "></i>
                    </div>
                    <h3>Branding</h3>
                    <div class="brdr w-25 mx-auto my-2 "></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolor necessitatibus quidem rem sed? Illum modi neque suscipit tempora voluptatibus?</p>
                </div>
            </div>`
    let insideTag=element;
    for (let i = 0; i < 8; i++)insideTag+=element;
    document.getElementById("element").innerHTML=insideTag;
}
$(window).scroll(function () {
    let windowScroll =$(window).scrollTop();  // the value of scroll
  //  console.log(windowScroll);
    var about_offset= $('#about').offset().top;
    if (windowScroll>about_offset-50){
        $("#main_nav").css({'background-color':'rgba(0,0,0,0.7)','padding-left':'60px','padding-right':'60px'})
        $("#buttonUp").fadeIn(500);
    }
    else{
        $("#main_nav").css({'background-color':'transparent','padding-left':'0','padding-right':'0'});
        $("#buttonUp").fadeOut(500);
    }
})
$("a[href^='#']").click(function (e) {  // any link who have an href and the href start with #
    let linkHref = $(e.target).attr('href');
    let section_offset= $(linkHref).offset().top;
    //$(window).scrollTop(about_offset);  // we do it with annimate to set timing
    $('html,body').animate({scrollTop : section_offset},1000) ;//some browser the html is responsible for scroll top,for others its the body
})
$("#buttonUp").click(function (){

    $('html,body').animate({scrollTop : 0},1000)
})               

    $('#loading .fa-spin').fadeOut(1000 ,function () {
        $('#loading').fadeOut(1000,function () {
            $('#loading').remove();
            $('body').css('overflow','auto');
        });
    });
    $(".skitter-large").skitter({
        interval : 7000,
        auto_play:false
    });
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

let sidebar= $('#sideBar');
let boxWidth=$('.box').outerWidth();
sidebar.css({left:-boxWidth});
$('#setting').click(function () {
       // $('.box').slideToggle(500,function () {
         //   $('.colors').fadeToggle(500,function () {
           //     $('.box h4').toggle(500);
            //})
        //})
   
    if (sidebar.css('left')==='0px')sidebar.animate({left:-boxWidth},1000)
    else sidebar.animate({left:0},1000)
   
})
let colorBoxes=$('.color-box');
colorBoxes.eq(0).css('backgroundColor','#09c')
colorBoxes.eq(1).css('backgroundColor','teal')
colorBoxes.eq(2).css('backgroundColor','orange')
colorBoxes.eq(3).css('backgroundColor','lightgreen')
colorBoxes.eq(4).css('backgroundColor','tomato')
colorBoxes.eq(5).css('backgroundColor','red')

colorBoxes.click(function (e){
    let bgColor=$(e.target).css('backgroundColor')
    $('p').css({color:bgColor})
  
    sidebar.css({backgroundColor:bgColor})
    sidebar.animate({left:-boxWidth},1000)
})
var typed = new Typed('.typing', {
    strings: ['<i>We Are Professional</i> Developers.', '<i>We Are Professional</i> Designers.'],
    typeSpeed: 50,
    loop:true,
    showCursor:false
});



})