


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


//frequently ask question start

var faq1 = document.getElementById("faq-one");
var faq1Ans = document.getElementById("faq-one-ans");




var faq1Display = "hide"
faq1Ans.style.display="none"
faq1.addEventListener("click",()=>{
     if(faq1Display == "hide"){
        faq1Display ="visible"
        faq1Ans.style.display=""
        faq1.style.borderLeft="none"
        faq1.style.borderRight="none"
        faq1.style.borderBottom="none"
        faq1.style.borderTop="1px solid grey"
        faq1.style.borderRadius="0px"

        faq1Ans.style.borderBottom="1px solid grey"
        faq1Ans.style.paddingBottom="7px"
               
     }
     else{
        faq1Display="hide"
        faq1Ans.style.display="none"
        faq1.style.border=""
        faq1.style.borderRadius=""
     }
})

var faq2 = document.getElementById("faq-two");
var faq2Ans = document.getElementById("faq-two-ans");

var faq2Display = "hide"
faq2Ans.style.display="none"
faq2.addEventListener("click",()=>{
     if(faq2Display == "hide"){
        faq2Display ="visible"
        faq2Ans.style.display=""
        faq2.style.borderLeft="none"
        faq2.style.borderRight="none"
        faq2.style.borderBottom="none"
        faq2.style.borderTop="1px solid grey"
        faq2.style.borderRadius="0px"

        faq2Ans.style.borderBottom="1px solid grey"
        faq2Ans.style.paddingBottom="7px"
               
     }
     else{
        faq2Display="hide"
        faq2Ans.style.display="none"
        faq2.style.border=""
        faq2.style.borderRadius=""
     }
})


var faq3 = document.getElementById("faq-three");
var faq3Ans = document.getElementById("faq-three-ans");

var faq3Display = "hide"
faq3Ans.style.display="none"
faq3.addEventListener("click",()=>{
     if(faq3Display == "hide"){
        faq3Display ="visible"
        faq3Ans.style.display=""
        faq3.style.borderLeft="none"
        faq3.style.borderRight="none"
        faq3.style.borderBottom="none"
        faq3.style.borderTop="1px solid grey"
        faq3.style.borderRadius="0px"

        faq3Ans.style.borderBottom="1px solid grey"
        faq3Ans.style.paddingBottom="7px"
               
     }
     else{
        faq3Display="hide"
        faq3Ans.style.display="none"
        faq3.style.border=""
        faq3.style.borderRadius=""
     }
})


var faq4 = document.getElementById("faq-four");
var faq4Ans = document.getElementById("faq-four-ans");

var faq4Display = "hide"
faq4Ans.style.display="none"
faq4.addEventListener("click",()=>{
     if(faq4Display == "hide"){
        faq4Display ="visible"
        faq4Ans.style.display=""
        faq4.style.borderLeft="none"
        faq4.style.borderRight="none"
        faq4.style.borderBottom="none"
        faq4.style.borderTop="1px solid grey"
        faq4.style.borderRadius="0px"

        faq4Ans.style.borderBottom="1px solid grey"
        faq4Ans.style.paddingBottom="7px"
               
     }
     else{
        faq4Display="hide"
        faq4Ans.style.display="none"
        faq4.style.border=""
        faq4.style.borderRadius=""
     }
})

//frequently ask question ends










 






