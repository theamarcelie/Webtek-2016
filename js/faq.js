/*
FILE NAME: faq.js
WRITTEN BY: Peder Holm
WHEN: October 2016
PURPOSE: Get in contact */
function expand_collapse(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'none'){
          e.style.display = 'block';
       }
       else {
          e.style.display = 'none';
       }
    }
