const requestNumber = document.querySelector(".numberRequest");
const connectionsNumber = document.querySelector(".numberConnections");
const NAME = document.querySelector(".profileInfoTitle");
let numberSaveRequest= Number(requestNumber.innerHTML);
let numberSaveConnections= Number(connectionsNumber.innerHTML);

function requestAccept(){
    numberSaveRequest--
    numberSaveConnections++
    requestNumber.innerHTML=numberSaveRequest;
    connectionsNumber.innerHTML= numberSaveConnections;
}

function requestDecline(){
    numberSaveRequest--
    requestNumber.innerHTML=numberSaveRequest;
}

function buttonAccept(element){
    requestAccept();
    element.parentElement.remove();
}

function buttonDecline(element){
    requestDecline();
    element.parentElement.remove();
}

function changeName(){
    document.querySelector(".editButton").removeAttribute("href")
    let newName=window.prompt("NEW NAME");
    NAME.innerHTML=newName;
}