function showhiddenitems(radio){
    const pronoun =document.getElementById("pronoun");
    const inputgender =document.getElementById("inputgender")
    
    if(radio.value==="custom"){
        pronoun.style.display = "block";
        inputgender.style.display="block";
    }
    else{
        pronoun.style.display = "none";
        inputgender.style.display = "none";
    }
}

const firstname =document.getElementById("firstname")
const sur_name =document.getElementById("surname")
const date =document.getElementById("date")
const month =document.getElementById("month")
const year =document.getElementById("year")
const email =document.getElementById("email")
const password =document.getElementById("password")

function checkfieldarenotempty(){
    firstname.classList.remove("error");
    sur_name.classList.remove("error");
    date.classList.remove("error");
    month.classList.remove("error");
    year.classList.remove("error");
    email.classList.remove("error");
    password.classList.remove("error");

    if (firstname.value === "") {
        firstname.classList.add("error");
    }
    if (sur_name.value === "") {
        sur_name.classList.add("error");
    }
    if (email.value === "") {
        email.classList.add("error");
    }
    if (password.value === "") {
        password.classList.add("error");
    }
    if (year.value === ("2025" || "2024" || "2023" )) {
        date.classList.add("error");
        month.classList.add("error");
        year.classList.add("error");
    }

}

let radio=document.getElementsByName("gender")
let selected =null;

function showvaluesonconsole(event){
    event.preventDefault()

    console.log("name" + " = "+firstname.value)
    console.log("surname" + " = "+sur_name.value)
    console.log("date of birth" + " = "+date.value+" " +month.value+" " +year.value)
    console.log("email" + " = "+email.value)
    console.log("Password" +" = "+password.value)
    
    for(let i= 0;i<radio.length;i++){
        if(radio[i].checked){
            selected=radio[i].value;
            break;
        }
    }

    if(selected){
        console.log("Gender = " + selected)
    }
    else{
        console.log("gender is not selected")
    }
    if(selected ==="custom"){
        if(inputgender.value !=""){
            console.log("Written gender =" + inputgender.value);
        }   
    }
}

function namevalidation(){
    if(firstname.value.length < 3){
        alert("Your name is short minimum character is 3")
    }
    if(sur_name.value.length < 3){
        alert("Your surname is short minimum character is 3")
    }

    let calculateage = year.value;
    if(year.value <=2007){
        console.log("you are 18 years old");
    }
    else{
        alert("you must be 18years old to sign up on this website")
    }

    let aderate = email.value.indexOf("@");
    let dot =email.value.lastIndexOf(".");

    if(email.value.length >= 6){
        if(aderate > 0 && dot > aderate+1 && dot < email.value.length -1){
            console.log("right email");
        }
        else{
            console.log("wrong email2");
        }
    }
    else{
        alert("Your email is too short please enter right email")
    }

    let upperletter = false;
    let lowerletter = false;
    let number = false;
    let specialcharacter = false;

    for(let i =0;i< password.value.length ;i++ ){
        if(password.value[i] >="A" && password.value[i] <="Z"){
            upperletter = true;
        }
        if(password.value[i] >="a" && password.value[i] <="z"){
            lowerletter = true;
        }
        if(password.value[i] >= 0 && password.value[i] <= 9){
            number = true;
        }
        if(password.value[i] === "@" || password.value[i] === "%" || password.value[i] === "$"){
            specialcharacter = true;
        }
    }

    
    let message= ""
    
    if(upperletter === false){
        message += "Your password does not exist upperletter"
    }
    if(lowerletter === false){
        message += "Your password does not exist lowerletter"
    }
    if(number === false){
        message += "Your password does not exist number"
    }
    if(specialcharacter === false){
        message += "Your password does not exist specialcharacter"
    }
    if(password.value.length >= 8){
        if(message ===""){
            console.log("right password");
        }
        else{
            console.log(message);
            
        }
    }
    else{
        alert("Your password too short")
    }


    if(selected ==="custom"){
        if(pronoun.value ==="#"){
            alert("please select your pronoun")
        }
        else{
            console.log("Pronoun" + " = " + pronoun.value);
        }   
    }
}