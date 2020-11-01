//Get the date
const date = new Date();

//Get hours from date
const hour = date.getHours();

const button = document.querySelector('button');
const messageArea = document.querySelector('#message');
const prompt=document.querySelector('#prompt');

button.addEventListener('click', function(){
//check for morning, noon, or evening
if (hour > 17){
    messageArea.innerHTML = `<h1>Good evening!</h1>`;
    prompt.innerHTML="";
} else if (hour > 12){
    messageArea.innerHTML = `<h1>Good afternoon!</h1>`;
    prompt.innerHTML="";
} else {
    messageArea.innerHTML = `<h1>Good morning!</h1>`;
    prompt.innerHTML="";
}
})