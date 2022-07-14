const candidate = Array(45).fill().map((v, i) => i + 1);
const shuffle = [];

for(let i = candidate.length; i>0;  i--){
    const random = Math.floor(Math.random()*i);
    const spliceArray = candidate.splice(random,1);
    const value = spliceArray[0];
    shuffle.push(value);
}
console.log(shuffle);
const winBalls = shuffle.splice(0, 6).sort((a,b) => a-b);
const bonus = shuffle[6];
console.log(winBalls, bonus);

function colorize(number, $tag){
    if(number<10){
        $tag.style.backgroundColor = 'red';
        $tag.style.color = 'white';
    } else if(number<20){
        $tag.style.backgroundColor = 'orange';
    }else if(number<30){
        $tag.style.backgroundColor = 'yellow';
    }else if(number<40){
        $tag.style.backgroundColor = 'blue';
        $tag.style.color = 'white';
    }else {
        $tag.style.backgroundColor = 'green';
        $tag.style.color = 'white';
    }
}

const $result = document.querySelector('#result');
function drawBall (number, $parent){
    const $ball = document.createElement('div');
    $ball.className='ball';
    colorize(number, $ball);
    $ball.textContent = number;
    $parent.appendChild($ball)
}
for(let i=0; i<winBalls.length; i++ ){
    setTimeout(()=> {
        drawBall(winBalls[i], $result)
    }, 1000 * (i + 1));
}

const $bonus = document.querySelector('#bonus');
setTimeout(() => {
    const $ball = document.createElement('div');
    drawBall(bonus, $bonus)
}, 7000);

const $myNUm = document.querySelector('#myNum');
function drawBall (number, $parent){
    const $ball = document.createElement('div');
    $ball.className='ball';
    colorize(number, $ball);
    $ball.textContent = number;
    $parent.appendChild($ball)
}
const myRandom = Math.floor(Math.random()*45);

for(let i=0; i<1; i++ ){
    setTimeout(()=> {
        drawBall(myRandom,$myNUm)
    }, 8000 * (i + 1));
}


if($myNUm==$result || $myNUm==$bonus){
    alert("100원을 따셧습니다");
}


