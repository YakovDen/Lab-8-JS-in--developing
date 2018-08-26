/**
 * 
 */
function check() {
   
   var doc= document;
   
   var divCostServiceHidden = doc.getElementById('divCostService');
   var divUserSystemTypeHidden = doc.getElementById('divUserSystemType');
   var divTimeHidden = doc.getElementById('divTime');
   var divPercentHidden = doc.getElementById('divPercent');
   var divPeriodHidden = doc.getElementById('divPeriod');
  
   var elem = doc.getElementById('select');
   var input = elem.options[elem.selectedIndex].value;  


    if(input=='calculated'){
      //hidden for SavingAccount
      divTimeHidden.style.display = 'none';
      divPercentHidden.style.display = 'none';
      divPeriodHidden.style.display = 'none';

      //visible for CheckingAccount
      divCostServiceHidden.style.display = 'block';
      divUserSystemTypeHidden.style.display = 'block';
    }
    else if(input=='deposit'){
      //hidden for CheckingAccount  
      divCostServiceHidden.style.display = 'none';
      divUserSystemTypeHidden.style.display = 'none'; 

      //visible for SavingAccount
      divTimeHidden.style.display = 'block';
      divPercentHidden.style.display = 'block';
      divPeriodHidden.style.display = 'block';

    }
  else{
      divCostServiceHidden.style.display = 'block';
      divUserSystemTypeHidden.style.display = 'block';

      divTimeHidden.style.display = 'block';
      divPercentHidden.style.display = 'block';
      divPeriodHidden.style.display = 'block';
      
  }


    
  //}


   /* if(doc.getElementById('calculation')=="calculation")       
       { console.log("DOM ready");}
       else if(doc.getElementById('deposit')=='deposit'){
         console.log("DOM dosn't ready");
       }
     else{
         console.log(false);
     }   */

}