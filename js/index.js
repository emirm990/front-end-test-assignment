let picture1 = 'url("img/carousel/project-jezik.jpg")';
let picture2 = 'url("img/carousel/project-boy-and-girl.jpg")';
let picture3 = 'url("img/carousel/project-buttons.jpg")';
let picture4 = 'url("img/carousel/project-social-media.jpg")';
let picture5 = 'url("img/carousel/project-jes.jpg")';

let pictureArray = [picture1, picture2, picture3, picture4, picture5];

let next = document.getElementById("next");
let prev = document.getElementById("prev");

let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");
let item5 = document.getElementById("item5");
let count = 0;
let count2 = 1;
let count3 = 2;
let count4 = 3;
let count5 = 4;

let devices = document.querySelector(".--foreground");
let animatedButton = document.querySelector(".--animated-button");
let animatedText = document.querySelector(".--animated-text");

let modal = document.getElementById('myModal');
let modalVideo = document.getElementById("modal-video");
let openModal = document.getElementById("open-video");

//kada zatvorimo modal, source se refreshuje i prekine s puštanjem videa
modal.addEventListener("click", function(){
    modalVideo.src = modalVideo.src;
})

openModal.onclick = function() {
    modal.style.display = "block";
  }

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
function animation(){
    devices.style.animationName = "devices";
    setTimeout(function(){
        animatedText.style.animationName = "text";
    },500)
    setTimeout(function(){
        animatedButton.style.animationName = "button";
    },500)
    
}
animation();
// funkcija changeImg nije elegantna ali radi
function changeImg(arg){
    if (arg==0){
        if(count < 4){
            count++;
        }else (count=0)
        if (count2 < 4){
            count2++;
        }else (count2 = 0)
        if (count3 <4){
            count3++;
        }else (count3=0)
        if (count4 < 4){
            count4++;
        }else (count4=0)
        if (count5 < 4){
            count5++
        }else (count5=0)
        item1.style.backgroundImage = pictureArray[count];
        item2.style.backgroundImage = pictureArray[count2];
        item3.style.backgroundImage = pictureArray[count3];
        item4.style.backgroundImage = pictureArray[count4];
        item5.style.backgroundImage = pictureArray[count5];
    }else {
        if(count > 0){
            count--;
        }else (count=4)
        if (count2 > 0){
            count2--;
        }else (count2 = 4)
        if (count3 > 0){
            count3--;
        }else (count3=4)
        if (count4 > 0){
            count4--;
        }else (count4 = 4)
        if (count5 > 0){
            count5--;
        }else (count5=4)
        item1.style.backgroundImage = pictureArray[count];
        item2.style.backgroundImage = pictureArray[count2];
        item3.style.backgroundImage = pictureArray[count3];
        item4.style.backgroundImage = pictureArray[count4];
        item5.style.backgroundImage = pictureArray[count5];
    }
}
next.addEventListener("click", function(){
    changeImg(0);
});
prev.addEventListener("click",function(){
    changeImg(1);
})