
// 부모창에 입력한 이름을 가져와서 자식창의 input태그에 넣기 
// 새창을 열어줘 부모창(메인창)은 window.opener 이다. 

let parentName = window.opener.document.getElementById("name");

// 자식의 input 태그 가져오기 
let childName = document.getElementById("childName");
// input 태그의 value에 부모의 이름 input태그 value 값 넣기 

childName.value = parentName.value;

// 이메일을 클릭하면 부모창의 input태그에 넣기 

const list = document.querySelectorAll(".emailText");

list.forEach( text => {  text.addEventListener('click', () =>{
    //부모창의 이메일 input 태그 가져오기 
    let parentEmail=window.opener.document.getElementById("email");
    parentEmail.value = text.innerText;
    window.close();

}) } );


// for ( var text of list){
    //       a(text);
    //  }
//    function a(text){
 //       text.addEventListener('click',function(){
//      });