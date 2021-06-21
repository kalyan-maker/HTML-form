let firstName =  document.querySelector('#fname');
let lname =  document.querySelector('#lname');
let gender =  document.querySelector('#gender');
let food =  document.querySelector('#food');
let address =  document.querySelector('#address');
let inputState =  document.querySelector('#inputState');
let inputCounty =  document.querySelector('#inputCounty');
let form =  document.querySelector('#form');


var row ;
var data;

function validateInput(){
    //check first name is empty
    if(firstName.value.trim()===""){
        onError(firstName,"");
    }else {
        onSuccess(firstName);
    }
    if(lname.value.trim()===""){
        onError(lname,"");
    }else {
        onSuccess(lname);
    }
    if(address.value.trim()===""){
        onError(address,"");
    }else {
        onSuccess(address);
    }
    if(inputState.value.trim()===""){
        onError(inputState);
    }else {
        onSuccess(inputState,"");
    }
    if(inputCounty.value.trim()===""){
        onError(inputCounty,"");
    }else {
        onSuccess(inputCounty);
    }

    data = {
        "name" : firstName.value ,
        "name1" : lname.value,
        "gen" : gender.options[gender.selectedIndex].text,
        "addr" : address.value,
        "check" : food.options[food.selectedIndex].text,
        "state" : inputState.value,
        'country' : inputCounty.value,
    }

    createtablerow();
    
}

document.querySelector("button")

.addEventListener('click', (event) => {
    event.preventDefault();
    validateInput();
})

function onSuccess(input){
        let parent = input.parentElement;
        let messageEle = parent.querySelector("small");
        messageEle.style.visibility = "hidden";
        // messageEle.innerText = "";
        parent.classList.remove("error");
        parent.classList.add("success");
}

function onError(input,message){
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "visible";
    messageEle.innerText = message;
    parent.classList.add("error");
    parent.classList.remove("success");
}

function createtablerow() {

    table = document.querySelector('.table');    
    var columnCount = table.rows[0].cells.length;

     //Add the data rows.
        row = table.insertRow(-1);

        var cell1 = row.insertCell(-1);
        var cell2 = row.insertCell(-1);
        var cell3 = row.insertCell(-1);
        var cell4 = row.insertCell(-1);
        var cell5 = row.insertCell(-1);
        var cell6 = row.insertCell(-1);
        var cell7 = row.insertCell(-1)

        cell1.innerHTML = data.name;;
        cell2.innerHTML = data.name1;
        cell3.innerHTML = data.gen;
        cell4.innerHTML = data.addr;
        cell5.innerHTML = data.check;
        cell6.innerHTML = data.state;
        cell7.innerHTML = data.country;
         //here i am adding the row
        table.appendChild(row);


}
