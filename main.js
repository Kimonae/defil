window.onscroll = function() { scrollIndicator() } ;
function scrollIndicator() {
 // Votre code ici

 var hauthtml = document.querySelector(".content").scrollHeight;

 var meshtml = window.scrollY;

 //var hauteur = document.querySelector(".content").scrollHeight;

 var pourcentagescroll = meshtml / hauthtml *250 +"%";


 var ga = document.getElementById("bar");

 ga.style.width = pourcentagescroll; 
 

 console.log(hauthtml);
 console.log(meshtml);
 console.log(pourcentagescroll);
}