const hourEl = document.querySelector('#hour');
const minuteEl = document.querySelector('#minute');
const secondEl = document.querySelector('#second');
const ampmEl = document.querySelector('.ampm');


const updateTime = () => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    if (h>12) {
        h-=12;
        ampmEl.innerHTML = 'PM';
    }
    hourEl.innerHTML = h;
    minuteEl.innerHTML = m;
    secondEl.innerHTML = s;
}

setInterval(updateTime,1000);