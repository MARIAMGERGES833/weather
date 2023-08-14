// let myRequest = new XMLHttpRequest();
// let posts =[];

// myRequest.open("GET" , "https://jsonplaceholder.typicode.com/posts")

// myRequest.send();

// myRequest.addEventListener("readystatechange", function(){
//     if(myRequest.readyState==4 && myRequest.status==200){
//         posts=JSON.parse(myRequest.response);
//         console.log(posts);
//         display();
//     }
// })

// function display(){
//    let cartona ="";
//     for(let i=0; i<posts.length ;i++){
// cartona += `<tr>
// <td>${posts[i].id}</td>
// <td>${posts[i].title}</td>
// <td>${posts[i].body}</td>
// </tr>`
//     }
//     document.getElementById("demo").innerHTML= cartona
// }




//another API
// function getData(key){
// let select = document.getElementById("select")
// let myRequest = new XMLHttpRequest;
// let allData = [];
// myRequest.open("GET" ,`https://forkify-api.herokuapp.com/api/search?q=${key}`);
// myRequest.send()

// myRequest.addEventListener("readystatechange", function(){
//     if(myRequest.readyState==4 && myRequest.status ==200 ){
//         let{recipes:allData} =JSON.parse(myRequest.response)
//         console.log(allData)
//         display(allData);
//     }
// })
// }
// getData("pizza")

// function display(posts){
//    let cartona ="";
//     for(let i=0; i<posts.length ;i++){
// cartona += `   
//      <div class="col-md-4 text-center mb-4">
//      <a href="${posts[i].source_url}"><img src="${posts[i].image_url}" class="" ></a>
// <h3>${posts[i].title}</h3>
// <p>click to image for sources</p>

// </div>`
//     }
//     document.getElementById("demo").innerHTML= cartona
// }


// select.addEventListener("change",function(evenInfo){
//     getData(evenInfo.target.value)
// })



function User(name,age,salary){
this.name = name;
this.salary = salary;
this.age = age;

}
User.prototype.login = function (){
    console.log("hi")

}

let nour = new User("nour" , 33 , 121212)
nour.friends.push("ahmed")
let ahmed = new User ("ahmed" , 33 , 1515)
console.log(ahmed)