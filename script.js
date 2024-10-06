


// js for auto typing start
var typed = new Typed(".auto-type",{
    strings: ["Java", "Oracle","HTML-CSS-JS"],
    typeSpeed: 300,
    backSpeed:300,
    loop:true
});

// js for auto typing end 


//log in  js start  

const mainDiv = document.getElementById("div1");
const childDiv = document.getElementById("div2");
const childDiv1 = document.getElementById("div3");
const login = document.getElementById("login");



let changeMode = "left";
childDiv.innerText ="log in"
childDiv1.innerText="sign up"

mainDiv.addEventListener("click",()=>{
    if(changeMode === "left" ){
        changeMode = "right";  
        
       childDiv.innerHTML ="sign up"
       childDiv1.innerHTML="log in"
        childDiv.style.transform = "translate(95px)";
        childDiv1.style.transform ="translate(-95px)";
        // childDiv.style.opacity="0.2"
       

    }
    else{
        changeMode = "left";
        
       childDiv.innerHTML ="log in"
        childDiv1.innerHTML="sign up"
        childDiv.style.transform ="translate(1px)";
          childDiv1.style.transform ="translate(7px)"
    }
    
})

//log in  js ends 

//sign up js starts

childDiv.addEventListener("click",()=>{
    window.location.href = 'login.html';
})
childDiv1.addEventListener("click",()=>{
    window.location.href = 'signup.html';
})



var typed = new Typed(".channel",{
    strings: ["#Facebook", "#Instagram","#Telegram"],
    typeSpeed: 200,
    backSpeed:300,
    loop:true
});

//sign up js ends 




// drop down list js start
const list1 = document.getElementById("dropdown-list");
const btnlist1 = document.getElementById("arrow-btn1");
const list2 = document.getElementById("list2")
const list3 = document.getElementById("dropdown-head")

let arrow= "up";
 let display1= "hide"
 list2.style.display="none"
 list1.addEventListener("click",()=>{

    if(arrow == "up" && display1 == "hide"){ 
        arrow ="down"
         display1="visible1"
        btnlist1.style.transform = "rotate(180deg)"
          list2.style.display=""
        //   list2.style.transform="translate(0px ,100px, )"
        list3.style.paddingTop="100px"
        
    }
    else{
        arrow="up" 
        display1="hide"
        btnlist1.style.transform = "rotate(2deg)"
        list2.style.display="none"
        list3.style.paddingTop="0px"
        
       
             }

})


const list4 = document.getElementById("dropdown-list1");
const btnlist2 = document.getElementById("arrow-btn2");
const list5 = document.getElementById("list3");
const list6 = document.getElementById("dropdown-head1");


let arrow1 = "up"
let display2 ="hide"
list5.style.display="none"
list4.addEventListener("click",()=>{
    if(arrow1 == "up"){
        arrow1 = "down"
        display2="visible1"
        btnlist2.style.transform="rotate(180deg)"
        list5.style.display=""
        list6.style.paddingTop="100px"
    }
    else{
        arrow1="up"
        btnlist2.style.transform="rotate(2deg)"
        list5.style.display="none"
        list6.style.paddingTop ="0px"
    }
})

// drop down list js ends 










 






