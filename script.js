let userseq=[];
let gameseq=[];
let btncolors=["palegreen","black","plum","gray"]
let level=0;
let started=false;
let heading=document.querySelector('h4')
let btn=document.querySelector('.btn')
document.addEventListener('keypress',function(){
    if(started==false){
        console.log("pressed");
        started=true;
        levelup();
    }
})
function levelup(){
    userseq=[]
    level++;
    heading.innerText=`Level ${level}`
    let choice=Math.floor(Math.random()*3)
    let randomcolor=btncolors[choice]
    let randombtn=document.querySelector(`.${randomcolor}`)
    gameseq.push(randomcolor)
    console.log(gameseq);
    btnflash(randombtn)
}
function btnflash(btn){
    btn.classList.add('flash')
    setTimeout(function(){
        btn.classList.remove('flash')
    },400)
}
function check(idx){
    if(userseq[idx] == gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup(),1000)
        }
    }
    else{
        heading.innerHTML=`Game Over !Your score was <b>${gameseq.length-1}</b> <br> Press any key to start the Game`
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white"
        },150)
        reset();
    }
}
let allbtns=document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener('click',function(){
        console.log(this);
        let btn=this;
        btnflash(btn)
        let usechoice=btn.getAttribute('id')
        userseq.push(usechoice)
        console.log(userseq);
        check(userseq.length-1)
    })
}

function reset(){
    started=false;
    level=0;
    userseq=[];
    gameseq=[];
}