console.log("ready")
  
/*laod*/
$(window).on("load",function(){
  $(".loader-wrapper").fadeOut("slow");
});


/*nav
$(window).scroll(function(){
  if (isScrolledIntoView('#ho') === true) {
      $('.nav a').removeClass('active')
      $('.nav .hom').addClass('active')
  }
});

*/
function isScrolledIntoView(elm) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elmTop = $(elm).offset().top;
  var elmBottom = elmTop + $(elm).height();

  return ((elmBottom <= docViewBottom) && (elmTop >= docViewTop));
}
$(window).scroll(function(){
  if (isScrolledIntoView('#home') === true) {
      $('.nav-item a').removeClass('active')
      $('.nav-link.home').addClass('active')
  }
  else if (isScrolledIntoView('#abt') === true) {
    $('.nav-item a').removeClass('active')
    $('.nav-link.abt').addClass('active')
  }
  else if (isScrolledIntoView('#ser') === true) {
    $('.nav-item a').removeClass('active')
    $('.nav-link.ser').addClass('active')
  }
  else if (isScrolledIntoView('#cont') === true) {
    $('.nav-item a').removeClass('active')
    $('.nav-link.cont').addClass('active')
  }
});



$(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      
    });
  });


  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

 
  $("#submit-form").submit((e)=>{
    e.preventDefault()
    console.log("Entered") 
    $(".contact .btn-std").hide()   
    $(".subload").show()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxc-44qkBPPAgUejyIBiGY635Vlzjpigm2-FTe3ow/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
          $(".contact .btn-std").show()   
          $(".subload").hide()
          $("#success_alert").modal()
        },
        error:function (err){
          $(".contact .btn-std").show()   
          $(".subload").hide()
          $("#error_alert").modal()

        }
    })
  })

 $(document).ready(function(){
  $(".close").click(function(){
    window.location.reload()
  })
  $(".clos").click(function(){
    window.location.reload()
  })
 })
  console.log("end")