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
        const section = document.querySelector(".wrapper");

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

                    var imgsize = imagesArray.length;
                    var imgsize = imagesArray.slice();

                   function getRandomImg(){
                       return imgsize.splice([Math.floor(Math.random() * imgsize.length)],1)[0];
                    }


                thumbnail.setAttribute('src', image = getRandomImg());

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

// random genrated images to use
var imagesArray = [
    "https://images.pexels.com/photos/1735658/pexels-photo-1735658.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    "https://images.pexels.com/photos/3075988/pexels-photo-3075988.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/3879062/pexels-photo-3879062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/2414036/pexels-photo-2414036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/2397645/pexels-photo-2397645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/3268257/pexels-photo-3268257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/1884306/pexels-photo-1884306.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/4108271/pexels-photo-4108271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/2249055/pexels-photo-2249055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/3312569/pexels-photo-3312569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/3989816/pexels-photo-3989816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/2569471/pexels-photo-2569471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/3324591/pexels-photo-3324591.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/4142982/pexels-photo-4142982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/3099153/pexels-photo-3099153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/1713953/pexels-photo-1713953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/1749057/pexels-photo-1749057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/2987769/pexels-photo-2987769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
];