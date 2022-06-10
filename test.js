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

makeArr(16);
console.log(arr);


// 배열 요소를 버튼으로 만드는 함수
function makebtn(){
    for(let i = 0; i < arr.length; i++){
        let btn = document.createElement('button');
        if(i == med){
            btn = document.createElement("button")
            btn.id = "answer"
        }
        let btnText = document.createTextNode(arr[i]);
        btn.appendChild(btnText);
        document.body.appendChild(btn);
    }
}

makebtn();


let answer = document.getElementById("answer");

answer.onclick = function(){guess()};

function guess(){
    if(answer = true){
        alert("정답");
    }
    location.reload();
}

