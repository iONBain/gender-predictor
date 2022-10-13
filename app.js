const bgContainer = document.getElementById("container");
// const serverUrl = "https://api.publicapis.org/entries"
// const serverUrl = "https://catfact.ninja/fact"
const serverUrl = "https://api.genderize.io?name="
const btnFetch = document.getElementById("fetch")
const opTxt = document.getElementById("output")
const opTxt2 = document.getElementById("output2")
const ipTxt = document.getElementById("input")
let newURL;
function fetchURL(name){

    return serverUrl + name
}

function fetchData(){
    // console.log("Hi, working good")
    newURL = fetchURL(ipTxt.value)
    // console.log(newURL)
    fetch(newURL).then(data => data.json()).then( data =>{
        
        console.log(data.gender);
        if(data.probability === 0){
            opTxt.textContent = `Sorry, we couldn't find any results. Pls try some other name.`
            opTxt2.textContent = "😢"
        }else{
            opTxt.textContent = `Gender is ${data.gender}`
            opTxt2.textContent = `Probability is ${Math.round(data.probability*100,2)}%`
        }
    }
    ).catch(e => console.log(e))
}
btnFetch.addEventListener("click", fetchData)
