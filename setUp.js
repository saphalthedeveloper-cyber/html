 function setUpFunction(){
    var buttons=document.getElementsByClassName("buttonn");
    for(let i=0;i<buttons.length;i++){
    buttons[i].onclick =function(){
        localStorage.setItem('Selected Guitar',i);
    window.location.href='shipping.html';
        }
    }   
}
    window.onload=setUpFunction;


