//start Landing
//select allpolits
const links = document.querySelectorAll(".landing-page .links");
links.forEach(link=>{
    link.addEventListener("click",(e)=>{

            document.querySelector(e.target.dataset.scrollto).scrollIntoView({
                behavior: 'smooth'
            });
        
    });
});
//select landingpage element
let landingpage = document.querySelector(".landing-page");
let imgsArr = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];
// let backgInterval = setInterval(()=>{
//     let randomnum = Math.floor(Math.random()* imgsArr.length);
//     landingpage.style.backgroundImage = 'url("media/'+imgsArr[randomnum] +'")' 
// },1000);

// end landing
// start setings
document.querySelector(" .setting-box i").onclick = function(){
    document.querySelector(".setting-box").classList.toggle("open");
    this.classList.toggle("fa-spin");
}
//change background color
const colors = document.querySelectorAll(".colors li");
colors.forEach(li=>{
    li.addEventListener("click", (e)=>{ 
            document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
            //set color in local storage
            localStorage.setItem("color-option", e.target.dataset.color);
            //remove active class and add
            handleActive(e);
}); 
});
//check color in local storag & save main-color in laocal storag
let maincolor = localStorage.getItem("color-option");
if(maincolor !==null){
    document.documentElement.style.setProperty("--main-color",maincolor);
    //remove active class from all children
    document.querySelectorAll(".colors li").forEach(el=>{
        el.classList.remove("active");
            if (el.dataset.color === maincolor) {
                el.classList.add("active")
            }
    });  
} 
//change active class on random background
const randombg = document.querySelectorAll(".random-background span");
//loop all span
randombg.forEach(span=>{
    //click on every span
    span.addEventListener("click",(e)=>{
        //remove active class fromm all
        e.target.parentElement.querySelectorAll(".active").forEach(el=>{
            el.classList.remove("active");
        });
        //add active class to current element
            e.target.classList.add("active");
            let backgroundoption = e.target.dataset.background;
            if (backgroundoption === 'yes') {
                localStorage.setItem("background",true);
                var inte=setInterval(()=>{
                let randomnum = Math.floor(Math.random()* imgsArr.length);
                landingpage.style.backgroundImage = 'url("media/'+imgsArr[randomnum] +'")' 
                },2000);
            }else{
                clearInterval(inte);
                localStorage.setItem("background",false);
            }
            
    });
});

//polit option
let polit = document.querySelectorAll(".polit-option span");
polit.forEach(sp=>{
    sp.addEventListener("click",(e)=>{
        handleActive(e);
    });
    document.querySelector(".hide").addEventListener("click",(e)=>{
        let pol= document.querySelector(".nav-polits");
        pol.style.setProperty("display","none");
        localStorage.setItem("bullets-option",'none');

    });
    document.querySelector(".show").addEventListener("click",(e)=>{
        let pol= document.querySelector(".nav-polits");
        pol.style.setProperty("display","block");
        localStorage.setItem("bullets-option","block");
    });
    
});
//set display polit in local storage
let bulletLocalItem = localStorage.getItem("bullets-option");
let pol= document.querySelector(".nav-polits");
if (bulletLocalItem === "none") {
    pol.style.setProperty("display","none");
}else{
    pol.style.setProperty("display","block");
};
// end setting
//start skills
let ourSkill = document.querySelector(".skills");
window.onscroll = function(){
    // skill offset Top
    let skillOffSetTop = ourSkill.offsetTop;
    //outer height
    let skillOuterHeight = ourSkill.offsetHeight;
    //window height
    let windowHeight = this.innerHeight;
    //window scroll top
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop = (skillOffSetTop + skillOuterHeight - windowHeight)) {
        let allspan = document.querySelectorAll(".skills .skill-progress span");
            allspan.forEach(skill=>{
            skill.style.width = skill.dataset.progress;
            });
    }
}
//end skills
//start galary
//creat popup with the image
let ourGalary = document.querySelectorAll(".galary img");
ourGalary.forEach(img =>{
    img.addEventListener("click",(e)=>{
        //add overlay div
        let overlay = document.createElement("div");
        //add class name to div
        overlay.className = "popup-overlay";
        //append div to the body
        document.body.appendChild(overlay);
        //add img-box div
        let imgBox = document.createElement("div");
        // add alter text
        if (img.alt !== null) {
            let alter  = document.createElement("h3");
            //creat txetnode
            let alttxt = document.createTextNode(img.alt);
            //append text to h3
            alter.appendChild(alttxt);
            //append alter to imgbox
            imgBox.appendChild(alter);
        }
        //add class to div
        imgBox.className = 'img-box';
        //append imgbox to body
        document.body.appendChild(imgBox);
        
        //creat img 
        let image = document.createElement("img");
        //add image
        image.src = img.src;
        //append img to img-box
        imgBox.appendChild(image);
        //creat span 
        let close = document.createElement('span');
        //creat txtnode and add it to span
        let clostxt = document.createTextNode('X');
        close.appendChild(clostxt);
        //add close span to imgbox
        imgBox.appendChild(close);
        close.onclick = function(){
            document.querySelector(".popup-overlay").remove();
            document.querySelector(".img-box").remove();
        };
    });
});
//End galary
//start polits
//select allpolits
const polits = document.querySelectorAll(".nav-polits .polits");
polits.forEach(polit=>{
    polit.addEventListener("click",(e)=>{

            document.querySelector(e.target.dataset.scrolto).scrollIntoView({
                behavior: 'smooth'
            });
        
    });
});
//end polits
//handle active state
function handleActive(ev) {
    //remove active class from all children
    ev.target.parentElement.querySelectorAll(".active").forEach(element=>{
        element.classList.remove("active");
    });
    //add active class on self
    ev.target.classList.add("active");
};
//menu button
//get links menu,arrow and menu elements
let  menuButton = document.querySelector(".links-menu");
let arrowMenu =document.querySelector(".links-menu .arrow");
let menu = document.querySelector(".menu");
//set display of menu  =none
menu.style.display = 'none';
//set display of arrow  =none
arrowMenu.style.display = 'none';
//show arrow and links menu when click
menuButton.addEventListener("click" , (e)=>{
if (arrowMenu.style.display === 'none' && menu.style.display === 'none') {
        arrowMenu.style.display = 'block';
        menu.style.display = 'block';
    }else{
        arrowMenu.style.display = 'none';
        menu.style.display = 'none';
    }
    
});
//scroll to the specified section
let menuLinks = document.querySelectorAll(".menu ul li a");
menuLinks.forEach(element=>{
    element.addEventListener("click" ,(e)=>{
        document.querySelector(e.target.dataset.scrollto).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
