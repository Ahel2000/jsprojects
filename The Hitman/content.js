const text=document.querySelectorAll('h1,h2,h3,h4,h5,p,li,td,caption,span,a')

for(var i=0;i<text.length;i++){
    if(text[i].innerHTML.includes('Rohit Sharma')){
	text[i].innerHTML=text[i].innerHTML.replace('Rohit Sharma','The Hitman')
    }else if(text[i].innerHTML.includes('Rohit')){
	text[i].innerHTML=text[i].innerHTML.replace('Rohit','The Hitman')
    }
}