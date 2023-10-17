const second = 1000;
const minuts = 60* second;
const  hour = 60* minuts;
const day = 24*hour;


const DayElement= document.getElementById("day");
const hoursElement= document.getElementById("hours");
const mintuesElement= document.getElementById("mintues");
const secoundElement= document.getElementById("scoend");
const containerTime = document .querySelector(".containerTime");




const timerFunction = () =>{
     let now = new Date();

  
     let dd = String(now.getDate()).padStart(2,"0");
     let mm = String(now.getDate()+1).padStart(2,"0");
     let yyyy = now.getFullYear();
     
        const EnterDate = prompt("Enter Day").padStart(2,"0");


        const EnterMonth = prompt("Enter Month").padStart(2,"0");
        
        let  trgetdate = `${EnterMonth}/${EnterDate}/${yyyy}`;
        console.log(trgetdate);
         now = `${mm}/${dd}/${yyyy}`;
          if(now>trgetdate){
             trgetdate = `${EnterMonth}/${EnterDate}/${yyyy +1}`
          }

    setInterval(()=>{
        const timer = new Date(trgetdate).getTime();
    const Tody = new Date().getTime();

    const diff = timer -Tody;
    const leftday =  Math.floor(diff/day);
    const lefthours =  Math.floor((diff%day)/hour);
    const leftminutes =  Math.floor((diff%hour)/minuts);
    const leftsecound =  Math.floor((diff%minuts)/second);
        DayElement.innerText = leftday;
        hoursElement.innerText = lefthours;
        mintuesElement.innerText = leftminutes;
        secoundElement.innerText = leftsecound;    
        if(diff<0){
            
        }

    },0)
    
    
    
}

timerFunction();