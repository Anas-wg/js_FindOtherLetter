// 시작버튼
function start(){
    alert("시작하시겠습니까?")
}

start()


// logic
// n * m 배열 생성 => 이게 안되니까 i개의 배열 요소 생성
// 랜덤한 숫자 생성 => 인덱스 번호로 대입, 이게 틀린 글자로 연결

let arr = [];
let med;

// i개 만큼 배열 요소 생성, 
function makeArr(i){
    for(let n = 0; n < i; n++){
        arr.push('멵');
    }
    let random = Math.floor(Math.random() * i);
    med = random;

    // random으로 뽑힌 인덱스 번호에 다른 글자 삽입;
    arr.splice(random,1,'먽');
    // document.write(arr);
};


makeArr(25);
console.log(arr);


// 배열 요소를 버튼으로 만드는 함수
function makebtn(){
    for(let i = 0; i < arr.length; i++){
        let btn = document.createElement('button');
        if(i == med){
            btn = document.createElement("button");
            btn.id = "answer";
        }else{
            btn = document.createElement("button")
            btn.classList.add("empty");
        }
        let btnText = document.createTextNode(arr[i]);
        btn.appendChild(btnText);
        // document.body.appendChild(btn);
        document.getElementById("select_area").appendChild(btn);
    }
}

makebtn();


let answer = document.getElementById("answer");
let empty = document.getElementsByClassName("empty");

answer.onclick = function(){correct()};
empty.onclick = function(){retry()};

function correct(){
    if(answer = true){
        // 정답을 고르면 timer 스탑
        setTimeout(function(){
            clearInterval(PLAYTIME);
            alert("정답")
        },0)
    }
    // i = i + 5
    location.reload();
}

function retry(){
    if(empty = true){
        alert("오답, 다시!")
    }
    location.reload();
}


// 제한시간 timer
const Timer = document.getElementById('Timer');
let time = 11000;
// 1초정도 딜레이가 있음, 10초부터 1초까지 나오려면 11초를 해야함 왜일까...?
let sec = 11;

function TIMER(){
    PLAYTIME = setInterval(function(){
        time= time - 1000;
        if(sec > 0){
            sec = sec-1;
            Timer.value = sec;
        }
    },1000);
}


TIMER();

setTimeout(function(){
    clearInterval(PLAYTIME);
    alert("시간초과, 다시하시겠습니까?");
    location.reload();
},11000)


