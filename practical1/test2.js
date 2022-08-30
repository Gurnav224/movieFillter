
const movies=[
    {name:"3 Idiot", type:"educational"},
    {name:"Joker", type:"thrill"},
    {name:"Batman", type:"thrill"},
    {name:"Kota factory", type:"educational"},
    {name:"Family Man", type:"thrill"},
    {name:"Cubicals", type:"Motivational"},
    {name:"Asur", type:"educational"},
    {name:"Lakshay", type:"Motivational"},
    {name:"Scam 1996", type:"educational"},
    {name:"Avenger", type:"thrill"},
    {name:"Super 30", type:"educational"},
    {name:"Life of Pie", type:"thrill"},
    {name:"Chhichhore", type:"Motivational"},
    {name:"Mission Mangal", type:"educational"},
    {name:"Thor", type:"thrill"}
];


function thrill(){
    let getthrill = movies.filter(function(abc){
      return abc.type=='thrill';
    })
    let showthrill="";
    for (let i = 0; i < getthrill.length; i++) {
        showthrill += getthrill[i].name +"<br/>";
    }
    document.getElementById('demo').innerHTML = showthrill
}


function educational(){
    let geteducational = movies.filter(function(abc){
        return abc.type=='educational';
    })
    let showEducational = ""

    for(let i=1; i<geteducational.length; i++){
        showEducational += geteducational[i].name + "<br/>";
    }

    document.getElementById('demo').innerHTML = showEducational;
}


function Motivational(){
    let getmotivational = movies.filter(function(abc){
        return abc.type=='Motivational';
    })
    let showMotivational = "";

    for(let i=0; i<getmotivational.length; i++){
        showMotivational += getmotivational[i].name + "<br/>";
    }
    document.getElementById('demo').innerHTML = showMotivational;
}