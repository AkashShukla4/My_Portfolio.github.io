

// ===================== Show Message after contacting =====================


    let contactMe = document.querySelector('[value = "Send Message"]');

    contactMe.addEventListener('click', callBack);

    function callBack(){
        setTimeout(() => {alert('Thank You for Contacting Me!')}
        ,800);
    }


  
  
