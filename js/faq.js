    function expand_collapse(id) {
       var e = document.getElementById(id);
       var f = document.getElementById(id+"_arrows");
       if(e.style.display == 'none'){
          e.style.display = 'block';
          f.innerHTML = '&#9650';
       }
       else {
          e.style.display = 'none';
          f.innerHTML = '&#9660';
       }
    }