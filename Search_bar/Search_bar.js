function searchFunction() {
    var input, filter;
    input = document.getElementById('search_input').value;
    fetch('https://www.reddit.com/'+ input +'/.json').then(function(response){
    return response.json();
    console.log(input);
    }).then(function(obj){
    console.log(obj); 
    })
}