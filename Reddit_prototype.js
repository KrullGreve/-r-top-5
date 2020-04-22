 fetch('https://www.reddit.com/hot/.json').then(function(response){
return response.json();


 }).then(function(obj){
     console.log(obj)
     let x = obj.data.children[0].data.url

      let post1 = JSON.stringify(x);
     document.querySelector('.post1').innerHTML += "<br><a href=" + post1 + ">top post</a>"
 }).catch(function(error){
     console.error('something went worng')
 })


