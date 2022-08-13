let clock = () => {
    let date = new Date( );
    let hrs = date.getHours( );
    let mins = date.getMinutes( );
    let secs = date.getSeconds( );
    let time = `${hrs}:${mins}:${secs}`
}

clock();

let period = "AM";
if (hrs == 0) hrs = 12;

if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
}

hrs = hrs < 10 ? `0${hrs}` : hrs;
mins = mins < 10 ? `0${mins}` : mins;
secs = secs < 10 ? `0${secs}` : secs;

document.getElementById("clock").innerText = time;

setTimeout(clock, 1000);


let clock = ( ) => {
    let date = new Date ( );
    let hrs = date.getHours( );
    let mins = date.getMinutes( );
    let secs = date.getSeconds( );
    let period = "AM";
    if (hrs == 0) {
        hrs = 12;
    } else if (hours - 12) {
        hrs = hrs - 12;
        period = "PM";
    }
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    let time = `${hrs}:${mins}:${secs}:${period}`;
    document.getElementById("clock").innerText = time;
    setTimeout(clock, 1000);
};

clock( );