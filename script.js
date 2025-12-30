const img = document.querySelector('img')
const searchGif = document.getElementById('search')
    function fetchGif(){    
        
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=fUFpAWoDsSDeXC5mB9ch93T2WjkeecML&s=${searchGif.value.toLowerCase()}`)
            .then(function(response){
                console.log(response)
                return response.json()
            })
            .then(function(response) {
                img.src = (response.data.images.original.url);
            });
            
        }
const button = document.getElementById('gifButton')            
button.addEventListener('click',fetchGif)