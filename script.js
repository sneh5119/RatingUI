function onfnc6(x,idstr){
    var parent =document.getElementById(idstr).childNodes;
    x.style.backgroundColor="orange";
    // var child= parent[3].childNodes;
    // child[3].style.backgroundColor="orange";

}


function onfnc7(x,idstr){
    var parent =document.getElementById(idstr).childNodes;
    x.style.backgroundColor="orange";
    
    parent[1].childNodes[3].style.backgroundColor="orange";
 
}

function onfnc8(x,idstr){
    var parent =document.getElementById(idstr).childNodes;
    x.style.backgroundColor="#FFDB58";
    parent[1].childNodes[3].style.backgroundColor="#FFDB58";
    parent[3].childNodes[3].style.backgroundColor="#FFDB58";
    parent[5].childNodes[3].style.backgroundColor="#FFDB58";
}

function onfnc9(x,idstr){
    var parent =document.getElementById(idstr).childNodes;
    x.style.backgroundColor="#90ee90";
    parent[1].childNodes[3].style.backgroundColor="#90ee90";
    parent[3].childNodes[3].style.backgroundColor="#90ee90";
    parent[5].childNodes[3].style.backgroundColor="#90ee90";
    parent[7].childNodes[3].style.backgroundColor="#90ee90";
}

function onfnc10(x,idstr){
    var parent =document.getElementById(idstr).childNodes;
    x.style.backgroundColor="#006400";
    parent[1].childNodes[3].style.backgroundColor="#006400";
    parent[3].childNodes[3].style.backgroundColor="#006400";
    parent[5].childNodes[3].style.backgroundColor="#006400";
    parent[7].childNodes[3].style.backgroundColor="#006400";
    parent[9].childNodes[3].style.backgroundColor="#006400";
}

function onoutfnc(x){
    x.style.backgroundColor="#555";
}

