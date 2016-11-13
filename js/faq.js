    function expand_collapse(id) {
       var e = document.getElementById(id);
       var f = document.getElementById(id+"_arrows");
       if(e.style.display == 'none'){
          e.style.display = 'block';
       }
       else {
          e.style.display = 'none';
       }
    }
