let search_Bar = document.querySelector('#search_input')
/*
search_Bar.addEventListener('keydown', KeyPressed(e))
 */
function KeyPressed(e){
    if (e.keyCode == 13) {
     searchFunction(search_Bar.value);
    }
}

searchFunction();

function searchFunction(input) {
    if (search_Bar.value === ""){
        input = "top"
    }
    else{
        input = "r/"+ input
    }
console.log(input)
    console.log('hellow')
    
    fetch('https://www.reddit.com/'+ input +'/.json').then(function(response){
    return response.json();
    console.log(input);
    }).then(function(obj){
    console.log(obj); 
        


    if (input !== "top"){
        document.querySelector('.tittle').textContent = input
        GotoMainPage()
    }

    })
}

let Search_icon = document.querySelector('.search')

Search_icon.addEventListener('click', GotoSearchBar)

 let back_icon = document.querySelector('.back_arrow')

back_icon.addEventListener('click', GotoMainPage)
 
function GotoSearchBar(){
    document.querySelector('.front').style.display = "none"
    document.querySelector('.subreddit_search').style.display = "grid"
}

function GotoMainPage(){
    document.querySelector('.front').style.display = "grid"
    document.querySelector('.subreddit_search').style.display = "none"
} 