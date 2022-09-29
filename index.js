const fs = require('fs');

// var readData="";
const getQuotes = () => {
    // const quote = Document.getElementById("quotes");
    // const author = Document.getElementById("author");
    var data = fs.readFileSync('C:/Users/compaq/Desktop/desktop/node/JavaScriptQoutes/quotes.json/', "utf-8");
    const realData = JSON.parse(data);
    var ran = Math.ceil(Math.random() * 10);
    // quote.innerText=realData[ran].text;
    document.getElementById('author').innerText = realData[ran].author;
    console.log(realData[ran].text);
    console.log(realData[ran].author);
}
getQuotes();
// const getQuotes = async () => {
//     const api = "C:/Users/compaq/Desktop/desktop/node/JavaScriptQoutes/quotes.json";
//     try {
//         // let data=  await fetch(api);
//         // let realData=await data.json();
//         let data = fs.readFileSync('qoutes.json', "utf-8");
//         let readData = JSON.parse(data);
//         console.log(realData);
//         // let var rnum=Math.floor(Math.random()*100);
//         // console.log(rnum);
//         // console.log(realData[rnum].text);
//         // console.log(realData[rnum].author);
//     }
//     catch (error) {

//     }
// };

// getQuotes();
// console.log(Math.floor(Math.random() * 1000));
