document.addEventListener('DOMContentLoaded',function(){
function setUpFunction(){
    var buttons=document.getElementsByClassName("buttonn");
     for(let i=0;i<buttons.length;i++){
      buttons[i].onclick =function(){
       
            const parentDiv=buttons[i].closest('div');
            const guitarImg = parentDiv.querySelector('.guitar-img1');
            const guitarId = guitarImg.dataset.target;
                localStorage.setItem('Selected Guitar',guitarId);
                window.location.href='shipping.html?guitar='+guitarId;
        }
    }   
}
    function setUpImg(){
          const selectedGuitarId=localStorage.getItem('Selected Guitar');
          const imgs = document.querySelectorAll('.guitar-img');
          imgs.forEach(function(imgg){
          if(imgg.dataset.target==selectedGuitarId){
               imgg.style.display='block';
              }
        else{
            imgg.style.display='none';
            }
        })
       
    }
        if(document.querySelector('.buttonn')) {
        setUpFunction();
    }
    if(document.querySelector('.guitar-img') && localStorage.getItem('Selected Guitar')) {
        setUpImg(); 
        }
    });
 

