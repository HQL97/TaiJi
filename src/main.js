let demo = document.querySelector("#demo");
let style=document.querySelector("#style");
let div=document.querySelector("#div1");
let n=-1;
let divstring=`#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*接下来把div变成一个圆圈*/
#div1{
    border-radius:50%
}
/*改变div的背景色*/
#div1{
background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
border:none;
box-shadow:0 0 4px grey;
}
#div1::before{
    content:'';
    display:block;
    width:100px;
    height:100px;
    border-radius:50%;
    position:absolute;
    transform:translateX(-50%);
    left:50%;
background: radial-gradient(circle, rgba(255,255,255,1) 8%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 25%);
}
#div1::after{
    content:'';
    display:block;
    width:100px;
    height:100px;
    border-radius:50%;
    position:absolute;
    bottom:0%;
    transform:translateX(-50%);
    left:50%;
background: radial-gradient(circle, rgba(0,0,0,1) 8%, rgba(255,255,255,1) 8%, rgba(255,255,255,1) 25%);
}
`;
let div1string="";
let step=()=>{
    setTimeout(()=>{
        if(n<divstring.length-1){
            n = n+1;
            if(divstring[n]==="\n"){
                div1string+="<br>"
            }else if(divstring[n]===" "){
                div1string+="&nbsp;";
            }else if(divstring[n]!=="/"&&divstring[n]!=="*"){
                div1string+=divstring[n];
            }
        demo.innerHTML=div1string;
        style.innerHTML=divstring.substr(0,n);
        window.scrollTo(0,999);
        div1.scrollTo(0,999);
        step();
        }else{
            return ;
        }  
    },1);
};
step();