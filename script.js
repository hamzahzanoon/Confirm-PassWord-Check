const input1 = document.querySelector("#pswrd_1");
const input2 = document.querySelector("#pswrd_2");
const errorText = document.querySelector(".error-text");
const button = document.querySelector("button");
const showBtn = document.querySelector(".show");


function active1() {

    if(input1.value.length >= 6) {
        button.removeAttribute("disabled" ,"");
        button.classList.add("active");
        input2.removeAttribute("disabled" ,"")
    }else {
        button.setAttribute("disabled" ,"");
        button.classList.remove("active");
        input2.removeAttribute("disabled" ,"")
        
    }
} 

button.onclick = function() {
    if(input1.value != input2.value) {
        errorText.style.display = "block";
        errorText.classList.remove ("matched");
        errorText.textContent = "Error! Confirm Password Matched";
        return false;
    }else {
        errorText.style.display = "block";
        errorText.classList.add ("matched");
        errorText.textContent = "Nice! Confirm Password Matched";
        return false;
    }
}

function active2() {
    if(input2.value != "") {
        showBtn.style.display = "block";
        showBtn.onclick = function() {
            if((input1.type == "password") && (input2.type == "password")) {
                input1.type = "text";
                input2.type = "text";
                this.textContent = "Hide"
                this.classList.add("active");
            }else {
                input1.type = "password";
                input2.type = "password";
                this.textContent = "Show"
                this.classList.remove("active");
            }
        }  
    }else {
        showBtn.style.disbliy = "none";
    }
}