
// 제목을 클릭하면 모달창을 띄우고 모달의 x를 클릭하면 모달이 닫힌다
window.onload=function(){
    // 테이블의 제목 td 전부 가져오기
    const title = document.querySelectorAll(".titleText");

    for(var text of title){
        text.addEventListener('click', showModal);
    }

    // 모달의 닫기 
    let close = document.querySelector(".close");
    close.addEventListener('click',hideModal);

}

function hideModal(){
    let modal = document.querySelector("#modalWrap")
    modal.classList.add("hide");
    
}

function showModal() {
    // 어떤 제목을 클릭했냐? 해당 제목의 글번호와 일치하는 
    // 내용을 찾아서 모달안에 넣어줘야 한다 

    // 지금은 모달 display를 block으로 바꾸기만 할꺼!!
    let modal = document.querySelector("#modalWrap");
    // modal.style.display="block";
    // 자바스크립트에서 태그의 class를 다루기 위해서는 
    // classList를 이용한다
    // .classList.remove("클래스명") - 클래스삭제
    // .classList.add("클래스명") - 클래스추가
    // .classList.toggle("클래스명") - 해당클래스가 있으면 삭제,없으면 추가
    // .classList.contains("클래스명") - 클래스 존재여부확인(true,false)
    
    modal.classList.remove("hide");

    
}