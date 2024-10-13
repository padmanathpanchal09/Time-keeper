
const year =new Date();

const currentYear = year.getFullYear();

const endOfYear = new Date(currentYear,11,31,23,59,59)

function getTimeRemaining(){

    const now = new Date();
    let timeDiff = endOfYear.getTime() - now.getTime();
    
    const year = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((timeDiff % (1000 * 60* 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30 ))
    const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    const minutes = Math.floor((timeDiff % (1000 * 60 *60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 *60) / 1000));
    const miliSeconds = Math.floor(timeDiff % 1000);

    return {year,months,days,hours,minutes,seconds,miliSeconds}
    
}

const getAllTime = document.querySelectorAll('.times');




setInterval(() => {
    const allTime =  getTimeRemaining();
    const timeValues =[allTime.year,allTime.months,allTime.days,allTime.hours,
        allTime.minutes,allTime.seconds,allTime.miliSeconds];

        getAllTime.forEach((element,index)=>{
            element.textContent = timeValues[index]
        }) 
}, 1);



