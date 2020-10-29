  let url = 'http://feeds.bbci.co.uk/news/technology/rss.xml';
  const textarea = document.querySelector('#feed-textarea > ul');

  const date = new Date();
  document.querySelector('#date').innerHTML = date.toDateString();
    
    //use feednami api to get the news feeds from the given url
    feednami.load(url)
    .then(feed => {
      textarea.value = ''
      for(let entry of feed.entries){
        //create a new list item
          let li = document.createElement('li');
        // add the title of the news feed to the list of items
          li.innerHTML = `<h4><a href="${entry.link}">${entry.title}</a></h4>`;
          //append HTML content to list 
          textarea.appendChild(li);
      }
    });



  
