//fetch('https://www.reddit.com/r/'+ input +'/top/.json').then(function(response){
    let articles = [];

fetch('https://www.reddit.com/top/.json').then(function(response){
    return response.json();
    
    
     }).then(function(obj){
  //      console.log(obj)
        for (let i = 0; i < 5; i++) {
//            console.log(obj.data.children[i])
                let article = {
                    "image": obj.data.children[i].data.url,
                    "link": obj.data.children[i].data.permalink,
                    "title": obj.data.children[i].data.title,
                    "thumbnail": obj.data.children[i].data.thumbnail,
                   
                }

                articles.push(article);
            }
        }
    )
        .then( async function () {
                console.log(articles)
                buildDom()
            }
        )
        .then( function () {

        } 
    )

    
    // helper function for populating the articles
    function buildDom() {
        const section = document.querySelector(".body_Section");

        // loop through all the articles retieved
        for (let i = 0; i < articles.length; i++) {
            // Time to create som DOM elements! :D

            // Create <article>
            let article = document.createElement("article");
            article.setAttribute('class', 'topList__article post'+i);

            // Create <a> for headline
            let link = document.createElement("a");
            link.setAttribute('class', 'topList__link');
            link.setAttribute('href', "https://reddit.com"+articles[i].link);
          
            // Create <h2> inside the <a>
            let headline = document.createElement("h2");
            headline.setAttribute('class', 'topList__headline');
            headline.textContent = articles[i].title;
            link.appendChild(headline);
            article.appendChild(link);

            // Create <img> for thumbnail
            let imageWrapper = document.createElement("a")
            imageWrapper.setAttribute('href', "https://reddit.com"+articles[i].link)
            imageWrapper.setAttribute('class', 'imageWrapper')
            let thumbnail = document.createElement("img");
            thumbnail.setAttribute('class', 'topList__thumbnail');
            if (articles[i].image.includes('.jpg', '.png', '.jpeg')) {
                console.log('has an image')
            thumbnail.setAttribute('src', articles[i].image);
                }
                else{
                    console.log('nope')

                //add the ramdom image generated image here
                }
            imageWrapper.appendChild(thumbnail);
            article.appendChild(imageWrapper)

            let close = document.createElement("a");
            close.setAttribute('class', 'close_button')
            close.textContent = "x"
            article.appendChild(close);
            // Add article to section
            
            section.appendChild(article);



            //homemade comments
            let comment_wrapper = document.createElement('section')
            comment_wrapper.setAttribute('class', 'comment_wrapper')
            article.appendChild(comment_wrapper)

            let comment = document.createElement('section')
            comment.setAttribute('class', 'comment')
            comment_wrapper.appendChild(comment)

            let commnet_text = document.createElement('p')
            commnet_text.setAttribute('class', 'comment_p')
            commnet_text.textContent = "why tho?"
            comment.appendChild(commnet_text)
            
            let ups = document.createElement('p')
            ups.setAttribute('class', 'comment_ups')
            ups.textContent = "↑ 1004"
            comment.appendChild(ups)
            
            let downs = document.createElement('p')
            downs.setAttribute('class', 'comment_downs')
            downs.textContent = "↓ 34"
            comment.appendChild(downs)
        
            //next comment

            let comment1 = document.createElement('section')
            comment1.setAttribute('class', 'comment')
            comment_wrapper.appendChild(comment1)

            let commnet1_text = document.createElement('p')
            commnet1_text.setAttribute('class', 'comment_p')
            commnet1_text.textContent = "why tho?"
            comment1.appendChild(commnet1_text)
            
            let ups1 = document.createElement('p')
            ups1.setAttribute('class', 'comment_ups')
            ups1.textContent = "↑ 1004"
            comment1.appendChild(ups1)
            
            let downs1 = document.createElement('p')
            downs1.setAttribute('class', 'comment_downs')
            downs1.textContent = "↓ 34"
            comment1.appendChild(downs1)
            
            let redirect = document.createElement('a')
            redirect.setAttribute('class', 'reddit_redirected')
            redirect.setAttribute('href', 'https://reddit.com'+articles[i].link)
                article.appendChild(redirect)

            let redirect_icon = document.createElement('img')
            redirect_icon.setAttribute('class', 'redirect_icon')
            redirect_icon.setAttribute('src', '#')
                redirect.appendChild(redirect_icon)


        }
    }
