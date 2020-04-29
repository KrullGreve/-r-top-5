fetch('https://www.reddit.com/hot/.json').then(function(response){
    return response.json();
    
    
     }).then(function(obj){
         console.log(obj)
         let x = obj.data.children[1].data.url
            let y = obj.data.children[1].data.thumbnail
            let example = JSON.stringify(y)
            if (example == ""){
            document.querySelector('#lol').src = y
            }

          let post1 = JSON.stringify(x);
         document.querySelector('.post1').innerHTML += "<br><a href=" + post1 + ">top post</a>"
     }).catch(function(error){
         console.error('something went worng')
     })
    
    