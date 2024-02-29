let digitalclock = () => {

    let date = new Date();


    let hours = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let tdate = date.getDate();
    let month = date.getMonth();
    let year = date.getUTCFullYear();
    let day = date.getDay(); 
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let ampm = hours >= 12 ? 'PM' : 'AM';


    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;
    document.getElementById("ampm").innerHTML = ampm;
    document.getElementById("tdate").innerHTML = tdate;
    document.getElementById("month").innerHTML = month;
    document.getElementById("year").innerHTML = year;
    document.getElementById("day").innerHTML = days[day];

    setTimeout(digitalclock, 500)

}

digitalclock();