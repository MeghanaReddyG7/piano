const pianoKeys=document.querySelectorAll(".piano-keys .key"),
volumeSlider =document.querySelector(".volume-slider input"),
keysCheckbox =document.querySelector(".keys-checkbox input");
let allKeys=[],
audio=new Audio(`tunes/a.wav`);
const playTune= (key) => {
    audio.src=`tunes/${key}.wav`;//passing audio src based on key pressed
    audio.play();

    const clickedKey=document.querySelector(`[data-key="${key}"]`);//getting clicked key element 
    clickedKey.classList.add("active");//adding active class to the clicked key element
    setTimeout(()=>{  //removing active class after 150 ms from the clicked key element
         clickedKey.classList.remove("active");
    },150);
    
}
const handleVolume=(e)=>{
    audio.volume=e.target.value;//passing the range slider value as an audio volume
}
const showHideKeys=()=>{
    //toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key)//adding datakey value to the allkeys array
    //calling playTune function with passing data-key value as an argument
    key.addEventListener("click",() => playTune(key.dataset.key));
    
});
const pressedkey=(e)=>{
    //if the pressed key is in the allkeys array,only call the playTune function
    if(allKeys.includes(e.key)) playTune(e.key);
}
document.addEventListener("keydown",pressedkey);
volumeSlider.addEventListener("input",handleVolume);
keysCheckbox.addEventListener("click",showHideKeys);