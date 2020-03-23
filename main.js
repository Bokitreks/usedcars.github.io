$(document).ready(function(){
    
    $('#prikazN').on('click',function(e){
        e.preventDefault();
        $('#burger').slideToggle();
    });


        
        
        

    if(localStorage.getItem("favs")!=0){
        document.getElementById("rMark").style.display="block";
    }

    
    document.getElementById("rMark").addEventListener('click',function(e){ 
    if(localStorage.getItem("favs")==0){

        document.getElementById("rMark").style.display="none";

    }

else{
    document.getElementById("rMark").style.display="block";
 
        e.preventDefault();
        localStorage.setItem("favs",0);

        alert("Mark removed");

        var boja=document.getElementsByClassName('automobil');
                    for(b=0;b<boja.length;b++){
                        boja[b].style.border="1px solid black";
                    }
                    document.getElementById("rMark").style.display="none";
                

}
    
});
   


   
      

    if(localStorage){
      document.getElementById("marke").value=localStorage.getItem("brand");
      var x = document.getElementById("marke").value;
      if(x!=0){
          filterMeSortMe();
      }else{}
       document.getElementById("karoserije").value=localStorage.getItem("tipe");
       var y=document.getElementById("karoserije").value;
       if(y!=0){
        filterMeSortMe();
    }else{}
       document.getElementById("cene").value=localStorage.getItem("price");
       var z = document.getElementById("cene").value;
       if(z!=0){
        filterMeSortMe();
    }
    }
    else{
        alert("Vas browser ne podrzava localstorage!");
    }

    document.getElementById("reset").addEventListener('click',function(){


        localStorage.setItem("brand",0);
        localStorage.setItem("tipe",0);
        localStorage.setItem("price",0);

    });
      

     
      

  



document.getElementById("marke").addEventListener('change',filterMeSortMe);
document.getElementById("karoserije").addEventListener('change',filterMeSortMe);
document.getElementById("cene").addEventListener('change',filterMeSortMe);



document.getElementById("dugme").addEventListener('click',function(){

 var ime=document.getElementById("ime").value;
 var mail=document.getElementById("mail").value;
 var broj=document.getElementById("phone").value;
 var komentar=document.getElementById("komentar").value;

 var regExpIme=/^[A-Z][a-z]{2,12}$/
 var regExpMail=/^[\w\.\-]{2,15}@[a-z \.]{2,10}\.[a-z]{2,5}$/
 var regExpNumber=/^(06)[0-9][0-9]{6,8}$/
 var regExpKomentar=/^[\w\.\,\-\s]{3,40}$/

if(regExpIme.test(ime)){
    console.log("Ime je ok");
    document.getElementById("ime").classList.remove("greska");
}else{
  
    document.getElementById("ime").classList.add("greska");
}
if(regExpMail.test(mail)){
    console.log("Mail je ok");
    document.getElementById("mail").classList.remove("greska");
}else{
  
    document.getElementById("mail").classList.add("greska");
}
if(regExpNumber.test(broj)){
    console.log("Broj je ok");
    document.getElementById("phone").classList.remove("greska");
}else{
  
    document.getElementById("phone").classList.add("greska");
}
if(komentar==""){
    document.getElementById("komentar").classList.add("greska");
}else{
    if(regExpKomentar.test(komentar)){
        document.getElementById("komentar").classList.remove("greska");
    }else{
        console.log("Greska komentar");
    }
    
}


});


$('table tr:even').css({

'background-color':'gray',

});

var nizSlika=["images/s1.jpeg","images/s2.jpeg","images/s3.jpg"];
var brojac=1;
setInterval(function(){
if(brojac==nizSlika.length){
    brojac=0;
    $('#slajderr').attr('src',nizSlika[brojac]);
  
    brojac++;
    
}else{
   
$('#slajderr').attr('src',nizSlika[brojac]);
brojac++;

}
},3500);
    



});




dohvatiAutomobile();


strela = document.getElementById("strela");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    strela.style.display = "block";
  } else {
    strela.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}






var nizMeni=[["Home","#vrh"],["Explore","#glavni"],["Tips","#tips"],["Services","#services"],["Contact","#contact"],["Author","#about"]]
var meni="<ul id='menii'>";
var nizBrand=[["Audi",1],["BMW",2],["Citroen",3],["Fiat",4],["Mercedes-Benz",5],["Volkswagen",6]];
var brendovi="";
var nizTipovi=[["Avant",1],["Sedan",2],["Hatchback",3],["SUV",4]];
var tipovi="";
var nizCene=[["Low to high",1],["High to low",2]];
var cene="";



for(var i=0;i<nizBrand.length;i++){
brendovi+="<option value='"+nizBrand[i][1]+"'>"+nizBrand[i][0]+"</option>";
}
console.log(brendovi);


document.getElementById("marke").innerHTML+=brendovi;


for(var i=0;i<nizTipovi.length;i++){
    tipovi+="<option value='"+nizTipovi[i][1]+"'>"+nizTipovi[i][0]+"</option>";
}

document.getElementById("karoserije").innerHTML+=tipovi;


for(var i=0;i<nizCene.length;i++){
    cene+="<option value='"+nizCene[i][1]+"'>"+nizCene[i][0]+"</option>";
}

document.getElementById("cene").innerHTML+=cene;


for(var i=0;i<nizMeni.length;i++){
meni+="<li><a class='link' href='"+nizMeni[i][1]+"' class='linkm'>" + nizMeni[i][0] + "</a></li>";


}
meni+="</ul>";
document.getElementById("meni").innerHTML=meni;






  
function ispisiAutomobile(data){

    var ispis="";

    for(auto of data){
       ispis+=`<div class="container-fluid automobil">

    <a href="#" class='fav' id="${auto.id}" > <img class="img-fluid" src="${auto.image.src}" alt="${auto.image.alt}"> </a>
   
       <div class="container-fluid opisAutomobila">
       <ul class="specs "container-fluid"">
       <h5>Car</h5>
       <li class="opisAuta">Brand : ${auto.brand}</li>
       <li class="opisAuta">Model : ${auto.specs.model}</li>
       <li class="opisAuta">Type : ${auto.type}</li>
       <li class="opisAuta">Price: ${auto.price}&euro;</li>
       
     </ul>
     <ul class="owner "container-fluid"">
        
        <h5>Owner</h5>
       <li class="opisVlasnika">Name : ${auto.owner.name}</li>
       <li class="opisVlasnika">Location : ${auto.owner.location}</li>
       <li><a href="#" class="brTel">Call the owner</a> </li>
       <li class="number sakrij"> ${auto.owner.number} </li>
   
   
     </ul>
   
   </div>
   
   
   
      </div>`
    }

    

    document.getElementById("glavni").innerHTML=ispis;
    var nizFavv=[];
    nizFav=document.getElementsByClassName('fav');
            for(n=0;n<nizFav.length;n++){
                nizFav[n].addEventListener('click',function(e){
                    e.preventDefault();
                    console.log(this.id);
                    if(localStorage.getItem("mark")==0){
                      
                    }else{
                        
                    
                   
                    localStorage.setItem("mark",this.id);
                    
                    if(localStorage.getItem("favs")==0){
                        alert("Marked for purchase");
                        localStorage.setItem("favs",nizFavv);
                        var boja=document.getElementsByClassName('automobil');
                        for(b=0;b<boja.length;b++){
                            boja[b].style.border="1px solid black";
                        }
                        this.parentElement.style.border="2px solid red";
                        nizFavv.push(this.id);
                        localStorage.setItem("favs",nizFavv);
                        console.log(localStorage.getItem("favs"));
                        document.getElementById("rMark").style.display="block";
                        
                        
                    }else{
                        
                        alert("Remove mark first");
                        
                    }

                    
                }
                })
               
            }

            var favCars=localStorage.getItem("favs");
            var favCarsId=[];
            for(var f=0;f<favCars.length;f++){

        if(f%2==0){
            favCarsId.push(favCars[f]);
            console.log(favCarsId);
        }else{
            console.log("zarez");
        }
    }       


    var f=document.getElementsByClassName("fav");
   
          for(var i=0;i<f.length;f++){

            for(var c=0;c<favCarsId.length;c++){
                if(f[i]==favCarsId[c]){
                    console.log("nista");
                }
                else{

                    console.log(favCarsId[c]);
                    
                    cc=document.getElementsByClassName("fav");
                    for(var s=0;s<cc.length;s++){
                        
                    if(cc[s].id==favCarsId[c]){
                        cc[s].parentElement.style.border="2px solid red";
                    }
                }
                          
                  }
            }

          }

              

          $('#skriveniT').hide();

          $('#prikazT').on('click',function(e){
             e.preventDefault();
             $('#skriveniT').slideToggle();
     
          });
     
     $(".sakrij").hide();
     $(".brTel").on('click',function(e){
         e.preventDefault();
         $(this).parent().next().slideToggle();
     });
   
    
    

}



function dohvatiAutomobile() {
    $.ajax({
    
        url:"cars.json",
        method:"GET",
        dataType:"JSON",
    
        success:function(data){
            ispisiAutomobile(data);
            
        },
        error:function(xhr,status,error){
            console.log("Greska");
        }
    
    
    }) 
}
    


var nav=document.getElementById("meni");
var topNav=nav.offsetTop;
function fixNav() {

if(window.scrollY>=topNav){
    document.body.style.paddingTop=nav.offsetHeight+"px";
    nav.classList.add('fixed-nav');

}else{
    nav.classList.remove('fixed-nav');
    document.body.style.paddingTop=0;
}

}

window.addEventListener('scroll',fixNav);


function filterMeSortMe(){

   

    var brend = document.getElementById('marke').value;

    var tip = document.getElementById('karoserije').value;

    var sorted = document.getElementById('cene').value;


    localStorage.setItem("brand",brend);
    localStorage.setItem("tipe",tip);
      localStorage.setItem("price",sorted);

    var tipoviNiz = [];

    var brandNizAkoJeTipNizNula;

    var tipoviAkoNemaBrenda;

    console.log(brend, tip, sorted)
    
    $.ajax({
    
        url:"cars.json",
        method:"GET",
        dataType:"JSON",
    
        success:function(data){
            

            if(brend != 0){

                var nizBrendova = data.filter(el => {

                    if(brend == el.idb)return el;

                })

                console.log(nizBrendova);

                if(tip != 0){

                    tipoviNiz = nizBrendova.filter(el => {

                        if(tip == el.idk)return el;

                    })

                    console.log(tipoviNiz);

                }

                if(tipoviNiz.length != 0){

                    if(sorted == 1){

                        tipoviNiz.sort((a,b) => {

                            if(a.price > b.price){

                                return 1;

                            }

                            if(a.price < b.price){

                                return -1;

                            }

                            if(a.price == b.price)return 0;

                        })

                    }

                    if(sorted == 2){

                        tipoviNiz.sort((a,b) => {

                            if(a.price > b.price){

                                return -1;

                            }

                            if(a.price < b.price){

                                return 1;

                            }

                            if(a.price == b.price)return 0;

                        })

                    }
                    
                    ispisiAutomobile(tipoviNiz);

                }

                else{

                 

                    if(tip != 0){

                        brandNizAkoJeTipNizNula = nizBrendova.filter(el => {

                            if(tip != 0 && tip == el.idk)return el;
    
                        })
    
                        console.log(brandNizAkoJeTipNizNula);
    
                            if(sorted == 1){
    
                                brandNizAkoJeTipNizNula.sort((a,b) => {
        
                                    if(a.price > b.price){
        
                                        return 1;
        
                                    }
        
                                    if(a.price < b.price){
        
                                        return -1;
        
                                    }
        
                                    if(a.price == b.price)return 0;
        
                                })
        
                            }
        
                            if(sorted == 2){
        
                                brandNizAkoJeTipNizNula.sort((a,b) => {
        
                                    if(a.price > b.price){
        
                                        return -1;
        
                                    }
        
                                    if(a.price < b.price){
        
                                        return 1;
        
                                    }
        
                                    if(a.price == b.price)return 0;
        
                                })
                        }

                        ispisiAutomobile(brandNizAkoJeTipNizNula);

                    }

                    else{

                                    if(sorted == 1){
                
                                        nizBrendova.sort((a,b) => {
                
                                            if(a.price > b.price){
                
                                                return 1;
                
                                            }
                
                                            if(a.price < b.price){
                
                                                return -1;
                
                                            }
                
                                            if(a.price == b.price)return 0;
                
                                        })
                
                                    }
    
                                    if(sorted == 2){
                
                                        nizBrendova.sort((a,b) => {
                
                                            if(a.price > b.price){
                
                                                return -1;
                
                                            }
                
                                            if(a.price < b.price){
                
                                                return 1;
                
                                            }
                
                                            if(a.price == b.price)return 0;
                
                                        })
                                }

                        ispisiAutomobile(nizBrendova);

                    }

                }

            }

            else{

                if(tip != 0){

                    tipoviAkoNemaBrenda = data.filter(el => {

                        if(tip == el.idk)return el;

                    })

                    if(sorted == 1){
                
                        tipoviAkoNemaBrenda.sort((a,b) => {

                            if(a.price > b.price){

                                return 1;

                            }

                            if(a.price < b.price){

                                return -1;

                            }

                            if(a.price == b.price)return 0;

                        })

                    }

                    if(sorted == 2){

                        tipoviAkoNemaBrenda.sort((a,b) => {

                            if(a.price > b.price){

                                return -1;

                            }

                            if(a.price < b.price){

                                return 1;

                            }

                            if(a.price == b.price)return 0;

                        })
                }

                    ispisiAutomobile(tipoviAkoNemaBrenda);

                }

                else{

                    if(sorted == 1){
                
                        data.sort((a,b) => {

                            if(a.price > b.price){

                                return 1;

                            }

                            if(a.price < b.price){

                                return -1;

                            }

                            if(a.price == b.price)return 0;

                        })

                    }

                    if(sorted == 2){

                        data.sort((a,b) => {

                            if(a.price > b.price){

                                return -1;

                            }

                            if(a.price < b.price){

                                return 1;

                            }

                            if(a.price == b.price)return 0;

                        })
                }

                ispisiAutomobile(data);

                }

            }

            
        },
        error:function(xhr,status,error){
            console.log("Greska");
        }
    
    
    }) 


}

var fnav=document.getElementById("fnav");
var snav=document.getElementById("burger");
    
var ispisfl="<ul>";


for(var i=0;i<nizMeni.length;i++){
ispisfl+="<li><a href='"+nizMeni[i][1]+"'>" + nizMeni[i][0] + "</a></li>";
}

ispisfl+="</ul>"

fnav.innerHTML+=ispisfl;
snav.innerHTML+=ispisfl;







