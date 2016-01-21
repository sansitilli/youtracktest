

function post2Core(){

    var xhr = new XMLHttpRequest();
    xhr.open("POST",window.location.origin+"/simpleContact/core/core.php",true);
    xhr.send( new FormData( document.getElementById("simpleContactFormData") ) );


    xhr.onreadystatechange = function() {

        if( xhr.readyState == 4 ) {
            setTimeout(function(){  alert('Thank You.\nYour message has been received.');
                                    document.getElementById("simpleContactFormData").reset();
                                    document.getElementById("simpleContactFormContainer").style.display = "none"
            },250)
        }
    }
}

//validate

function isValid(){
    var isNotValid = "" ;

    if(! document.getElementById("Email").value.length > 0 ) {
        isNotValid += "Email is required.\n" ;
    }
    if (! /\S+@\S+\.\S+/.test(document.getElementById("Email").value) && document.getElementById("Email").value.length > 0 ) {
        isNotValid += "Email is not Valid.\n" ;
    }
    if(! document.getElementById("Name").value.length > 0 ) {
        isNotValid += "Your Name is required.\n" ;
    }
    if(! document.getElementById("Subject").value.length > 0 ) {
        isNotValid += "Email Subject is required.\n" ;
    }
    if(! document.getElementById("Message").value.length > 0 ) {
        isNotValid += "A Message is required.\n" ;
    }



    if( isNotValid.length > 0 ) {
        alert( isNotValid ) ;
        return false;
    }
    else {
        return true;
    }
}


//handel

function clickHandle(e) {

    if( e.id === "simpleContact" ){
        document.getElementById("simpleContactFormContainer").style.display = "block" ;
    }
    else if( e.id === "xBar" ) {
        document.getElementById("simpleContactFormContainer").style.display = "none" ;
    }
    else if( e.id === "btnSubmit" ) {
        if( isValid() ) {
            post2Core();
        }
    }
}


function addClickEvents() {
    document.getElementById("simpleContact").addEventListener("click", function(){clickHandle(this)}, false);
    document.getElementById("xBar").addEventListener("click", function(){clickHandle(this)}, false);
    document.getElementById("btnSubmit").addEventListener("click", function(){clickHandle(this)}, false);
}






//inject
function addCSS() {
    var link = document.createElement( 'link' );

    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = window.location.origin+"/simpleContact/css/simpleContact.css";

    document.head.appendChild( link );
}


function addHTML() {

    var hhtml = document.createElement("div");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", window.location.origin+"/simpleContact/html/simpleContact.html", true);
    xhr.send();


    xhr.onreadystatechange = function() {

        if( xhr.readyState == 4 ) {
            hhtml.innerHTML = xhr.responseText;
            document.body.appendChild(hhtml.firstChild);
            document.body.appendChild(hhtml.lastChild);
            addClickEvents();
        }
    }
}


function simpleContact() {
    window.onload = function() {
        addCSS();
        addHTML();
    }

}






// Lets  Go

simpleContact();