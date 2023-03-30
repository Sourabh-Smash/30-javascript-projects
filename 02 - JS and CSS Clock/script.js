const secondHand=document.querySelector('.second-hand');
const minHand=document.querySelector('.min-hand');
const hourHand=document.querySelector('.hour-hand');


const setDate=()=>{
   const now=new Date();

   const seconds=now.getSeconds();
   const secondsDegree=((seconds/60)*360)+90;
   secondHand.style.transform=`rotate(${secondsDegree}deg)`;
   

   const mins=now.getMinutes();
   const minutesDegree=((mins/60)*360)+90;
   minHand.style.transform=`rotate(${minutesDegree}deg)`;

   const hours=now.getMinutes();
   const hoursDegree=((hours/12)*360)+90;
   hourHand.style.transform=`rotate(${hoursDegree}deg)`;
}
setInterval(setDate, 1000);