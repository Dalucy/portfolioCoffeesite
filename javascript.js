 

 $(document).ready(function(){
    
    $("button.nav").click(function(){
        $(".cart").fadeToggle();
        });


    $(".cart").click(function(){
        $(this).hide();
      });

    $("button.add").click(function(){
        $(".cart").fadeToggle();
        });


    $(".cart").click(function(){
        $(this).hide();
      });

  });


 var B = 0;
 var I = 0;
 var E = 0;

    
    function PlusB(){
      document.getElementById("amountB").innerHTML = ++B;
      
    }

    function MinB(){
      if (B > 0) {
        document.getElementById("amountB").innerHTML = --B;
      }  
    }

    function PlusI(){
      document.getElementById("amountI").innerHTML = ++I;
    }
    
    function MinI(){
      if (I > 0) {
        document.getElementById("amountI").innerHTML = --I;
      }  
    }

    function PlusE(){
      document.getElementById("amountE").innerHTML = ++E;
    }

    function MinE(){
      if (E > 0) {
        document.getElementById("amountE").innerHTML = --E;
      }  
    }




