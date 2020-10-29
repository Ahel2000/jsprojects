  let url = 'http://feeds.bbci.co.uk/news/technology/rss.xml';
  const textarea = document.querySelector('#feed-textarea > ul');

  const date = new Date();
  document.querySelector('#date').innerHTML = date.toDateString();
    
    feednami.load(url)
    .then(feed => {
      textarea.value = ''
      for(let entry of feed.entries){
          let li = document.createElement('li');
          li.innerHTML = `<h4><a href="${entry.link}">${entry.title}</a></h4>`;
          //append HTML content to list 
          textarea.appendChild(li);
      }
    });



  