let date=document.getElementById("date");
let calculate=document.getElementById("calculate");
let year=document.getElementById("year");
let month=document.getElementById("month");
let day=document.getElementById("day")

calculate.addEventListener('click',()=>{
    let bDate = new Date(date.value);
    let bYear = bDate.getFullYear()
    let bMonth = bDate.getMonth()
    let bDay = bDate.getDate()

    let CurrentDate = new Date()
    let cYear = CurrentDate.getFullYear()
    let cMonth = CurrentDate.getMonth()
    let cDay = CurrentDate.getDate()

    let y=0,m=0,d=0;

    if(bDay<=cDay){
        d=cDay-bDay
    }
    else{
        d=cDay+30-bDay
        cMonth-=1
    }
    if(bMonth<=cMonth){
        m=cMonth-bMonth
    }
    else{
        m=12+cMonth-bMonth
        cYear-=1
    }
    y=cYear-bYear
    year.innerText= y<10 ? `0${y}`:y
    month.innerText= m<10 ? `0${m}`:m
    day.innerText= d<10 ? `0${d}`:d
})