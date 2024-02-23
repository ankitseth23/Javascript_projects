let card = document.querySelector(".trends");
let card2 = document.getElementById("trendsSec");
let about =document.querySelector(".about");
let contact =document.querySelector(".contact");


let blog = document.querySelector(".trendsB");
let mainPage = document.querySelector(".main");

function homes(){
    mainPage.style.display="flex";
    card.style.display="block";
    card2.style.display="block";
    blog.style.display="block";
    about.style.display="none";

    

    document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="rgb(2,173,173)";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black";


}
function shops(){
    mainPage.style.display="none";
    blog.style.display="none";
    about.style.display="none"

    document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="rgb(2,173,173)";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black";

}


function blogs(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="block";
    about.style.display="none";

    document.getElementById("blog").style.color="rgb(2,173,173)";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black";

}



function abouts(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="none";
    about.style.display="block";


    document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="rgb(2,173,173)";
}


function contacts(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="none";
    about.style.display="none";
    contact.style.display="block";


    document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black";
    document.getElementById("contact").style.color="rgb(2,173,173)";

}


//cart

function show(img){
    let newImg = document.getElementById("newImg");
    console.log(img);
    newImg.src=img.src;

  
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="none";
    about.style.display="none";
    contact.style.display="none";

  document.querySelector(".cart").style.display="flex"

}

function addcart(){
    alert("Added to Cart");
    location.reload()
}


