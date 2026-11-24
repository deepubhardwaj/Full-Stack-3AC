// console.log("first")
// for(let i=1;i<=99999999;i++){
//     let k=0;
//     k++;
// }
// setTimeout(()=>{
//     console.log("timeout")
// },0);
// new Promise((res,rej)=>{
//     res("passed")
// }).then((r)=>{console.log(r)})

// let timeout=setTimeout((a)=>{
//     console.log("timeout",a)
// },2000,"hello");

// function stop(){
//     clearTimeout(timeout);
// }
// let count=0;
// let interval=setInterval(()=>{
//     console.log("interval")
//     document.querySelector("button").textContent= ++count
//     if(count==1000000){
//         clearInterval(interval)
//     }
// },10);
// function stop(){
//     clearInterval(interval);
// }
// let interval1=setInterval(()=>{
//     document.querySelector("body").style.background=
//     `rgb(${Math.random()*88},rgb(${Math.random()*233},rgb(${Math.random()*111})`
// },100);
// function stop(){
//     clearInterval(interval);
// }


// let api="https://jsonplaceholder.typicode.com/posts";
// function postdata(){
//     let data=fetch(api,{
//         method:"POST",
//         body:JSON.stringify({ title: "first",  body: "hello world", }),
//         headers: {
//             "Content-type": "application/json",
//             "token":"xyz"
//         }
//     });
//     data.then((result)=>{return result.json()})
//     .then((res)=>{console.log(res)})
//     .catch((er)=>{console.log(er) })
// }
// postdata();
// function putdata(){
//     let data=fetch(api+"/44",{
//         method:"PUT",
//         body:JSON.stringify({ title: "first",  body: "hello world", }),
//         headers: {
//             "Content-type": "application/json",
//             "token":"xyz"
//         }
//     });
//     data.then((result)=>{return result.json()})
//     .then((res)=>{console.log(res)})
//     .catch((er)=>{console.log(er) })
// }
// postdata();
// function deletedata(){
//     let data=fetch(api+"/44klj",{
//         method:"DELETE",
//         body:JSON.stringify({ title: "first",  body: "hello world", }),
//         headers: {
//             "Content-type": "application/json",
//             "token":"xyz"
//         }
//     });
//     data.then((result)=>{return result.json()})
//     .then((res)=>{console.log(res)})
//     .catch((er)=>{console.log(er) })
// }
// postdata();
// function deletedata(){
//     let data=fetch(api+"/44klj",{method:"DELETE"});
//     data.then((result)=>{return result.json()})
//     .then((res)=>{console.log(res)})
//     .catch((er)=>{console.log(er) })
// }
// deletedata();
// function getdata(){
//     let data=fetch(api);
//     data.then((result)=>{return result.json()})
//     .then((res)=>{console.log(res)})
//     .catch((er)=>{console.log(er) })
// }
// getdata();
// let obj={name:'raj',age:18};
// // {"name":"raj","age":18};
// let converted=JSON.stringify(obj);
// console.log(converted);
// console.log(JSON.parse(converted));


// console.log($);
// console.log(jQuery);

// // Select all buttons and update their text
// $("button").text("updated text");

// console.log($("button"));

// // Selectors
// $("#idname");
// $(".className");
// $("*");
// $("div, h1");

// // Descendant and child selectors
// $("div, h1").text("updated text");

// $("div > h1").text("updated text");

// // First button
// $("button:first").text("button first updated");

// // Last button
// $("button:last").text("button last updated");

// // Second button
// $("button:nth-child(2)").text("button nth-child(2) updated");

// // Even buttons
// $("button:even").text("button even updated");

// // Odd buttons
// $("button:odd").text("button odd updated");

// let elem=$("button:first");
// console.log(elem);
// console.log(elem.text());
// elem.text("first button updated");


// console.log($);
// console.log(jQuery);
// console.log($("button"));
// $("#idname");
// $(".classname");
// ("*");
// $("div,h1")
// $("div h1")
// $("div > h1").text("text updated");
// $("button:first").text("button first updated");
// $("button:nth-child(2)").text("second child ");
// let elem=$("button:first")
// console.log(elem.text());
// console.log("div").html
// $("input").val("this is updated value");
// $("input").css({padding:"15px 20px", background:"green",borderRadius:"10px",color:"white"});
// $(".box").fadeOut(2000);
// $(".box").fadeIn(2000);
// $(".box").fadeToggle(2000);
// $(".box").fadeOut(1000);
// $(".box").slideUp(1000);
// $(".box").slidedown(1000);
// $(".box").slideToggle(1000);
// $(".box").animate({width:"200px",height:"200px",opacity:0.5},1000);
// $(".box").delay({width:"100px",height:"100px",opacity:1},1000);
// $(".box").animate({width:"200px",height:"200px",opacity:0.5},1000).animate({width:"100px",height:"100px",opacity:1},1000);

// console.log($);
// console.log(jQuery);

// // AJAX Request
// $.ajax({

//     url: "https://jsonplaceholder.typicode.com/posts",

//     method: "POST",

//     data: {
//         name: "raj",
//         username: "raj123"
//     },

//     dataType: "json",

//     beforeSend: () => {
//         console.log("loading...");
//     },

//     success: (res) => {
//         console.log(res);
//     },

//     error: (err) => {
//         console.log(err);
//     },

//     complete: () => {
//         console.log("completed");
//     }

// });


let api = "https://jsonplaceholder.typicode.com/posts";

let callback = (res) => {
    console.log(res);
};

// GET Request
$.get(api, callback);

// GET JSON Request
$.getJSON(api, callback);

// POST Request
$.post(
    api,
    {
        name: "raj",
        username: "raj123"
    },
    callback
);


$("button:first").on("click", () => {

    $.get(api, (res) => {

        res.forEach(elem => {

            $("ul:first").append(`<li>${elem.title}</li>`);

        });

    });

});


console.log($("h1").parent())
console.log($("h1").parents())
console.log($("body").children())
console.log($("div").prev())
console.log($("div").next())
console.log($("div").siblings().text)

