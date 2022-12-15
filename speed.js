const msg = document.getElementById("text");
const typewords = document.getElementById('type');
const btn = document.getElementById('btn');
let timeStart, timeEnd

const setofWords = [
    "This tutorial will teach you JavaScript from basic to advanced.",
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit at, quae dolorem ducimus provident modi.',
    'JavaScript is easy to learn.',
    'JavaScript is the worlds most popular programming language.',
    'The two most important syntax rules for fixed values are'
]
const startTyping = () => {
    let randomNum  =Math.floor(Math.random()*setofWords.length);
    msg.innerText = setofWords[randomNum];
    let date = new Date();
    timeStart = date.getTime();
    btn.innerText = 'Done 👍'

};
const stopTyping = () =>{
     let date = new Date();
     timeStop  =date.getTime();
     totalTime = ((timeStop - timeStart)/ 1000);
     console.log(totalTime);
     
    let totalStr = typewords.value;
    let wordsCount = wordsCounter(totalStr);

    let speed = Math.floor((wordsCount / totalTime)* 60);
    let finalMsg ='You type total '+ speed + ' words per minutes.';

    finalMsg += matchWords(msg.innerText,totalStr);

    msg.innerText = finalMsg;

};
const matchWords = (str1,str2)=>{
    let msgwords = str1.split(' ');
    let typewords = str2.split(' ');
    let count  =0;

    msgwords.forEach(function (items,index){
        if(items == typewords[index]){
            count ++
        }
    })

    let errorWords = (msgwords.length - count);
    return count + ' words correct out of ' + msgwords.length + 
    ' words and total number of error are ' + errorWords + ".👌"
}
const wordsCounter = (str)=>{
    let response = str.split(" ").length;
    console.log(response);
    return response
}
btn.addEventListener('click', function(){
    if(this.innerText == 'Start 👆'){
        typewords.disable= 'false';
        startTyping();
    }else if(this.innerText == 'Done 👍'){
        typewords.disable = 'true';
        stopTyping()
    }
})
