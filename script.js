let currentCount =2;

const increment =() => {
    currentCount = currentCount * 2;
    document.getElementById('count').textContent = currentCount;
}

const decrement =() => {
    currentCount--;
    document.getElementById('count').textContent = currentCount;
}


const resetCount =() => {
    currentCount = 0;
    document.getElementById('count').textContent = currentCount;
}

console.log("Hello World")
