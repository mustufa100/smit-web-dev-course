// //Task_Number_1

// function add(){
//     return function(num){
//         let sum = 10
//         console.log(sum += num)
//     }
// }
// let number = +prompt("Enter number to be added")
// let innerFunction = add()
// innerFunction(number)

// //Task_Number_2

// function SearchArray(arr,input){
//     if(arr.length === 0){
//         return false
//     }
//     if(arr[0] === input){
//         return true
//     }
//     return SearchArray(arr.slice(1),input)
// }
// let arr = [2,4,6,8,10,12,14,16]
// console.log(SearchArray(arr,14))

// // Task_Number_3

// function AddPara(paraText){
//     let pageBody = document.getElementById("page-body")
//     let para = "p"
//     let myPara = document.createElement(para)
//     myPara.innerText = paraText
//     pageBody.appendChild(myPara)
//     console.log(pageBody)
// }
// AddPara("A new paragraph is added")

// // Task_Number_4

// function AddListItem(listText){
//     let pageBody = document.getElementById("page-body")
//     let uList = document.getElementById("u-list")
//     let listItem = "li"
//     let newListItem = document.createElement(listItem)
//     newListItem.innerText = listText
//     uList.appendChild(newListItem)
//     console.log(pageBody)
// }
// AddListItem("List Item 3")

// //Task_Number_5

// function changeBackground(tagName, colorName){
//     let pageBody = document.getElementById("page-body")
//     // let tagName = " "
//     // let colorName = " "
//     let elementReference = document.querySelector(tagName)
//     elementReference.style.backgroundColor = colorName
//     console.log(pageBody)
// }
// changeBackground("ul", "green")

// //Task_Number_6

// function saveToLocalStorage(egkey, obj) {    //The key is a string that represents the name of the item being stored in the localStorage, 
//     // and the object is the value being stored.
// try {
// const Object = JSON.stringify(obj);
// localStorage.setItem(egkey, Object);
// console.log(`Object saved to localStorage with key: ${egkey}`);
// } catch (error) {
// console.error('Error saving object to localStorage:', error);
// }
// }
// saveToLocalStorage(); 

// // Task_Number_7

// function getObject(keyName){
//     let objName = localStorage.getItem(keyName)
//     return JSON.parse(objName)
// }
// let obj = getObject("courses")
// console.log(obj)

// //Task_Number_8

// function saveToLocalStorage(egkey, obj) {
//     try {
//       const Object = JSON.stringify(obj);
//       localStorage.setItem(egkey, Object);
//       console.log(`Object saved to localStorage with key: ${egkey}`);
      
//       // Retrieve object from localStorage
      
//       const retrievedObject = JSON.parse(localStorage.getItem(egkey));
//       console.log(`Object retrieved from localStorage with key: ${egkey}`);
      
//       return retrievedObject;
//     } catch (error) {
//       console.error('Error saving/retrieving object to/from localStorage:', error);
//     }
//   }
//   const myObj = { name: "John", age: 30 };

//   // Save object to localStorage and retrieve it
//   const retrievedObject = saveToLocalStorage("myKey", myObj);
  
//   console.log(retrievedObject); // { name: "John", age: 30 }



                                                //objects
    
let person = {
    name : "mustufa",                       // properties
    phoneno : "03322881354",                // key
    shirtcolor : "black",                   //value
    gymgayai : false,
    kaam : function(gymjao){                //method 
        console.log(gymjao + this.name)
    }

};
person.kaam(" gym jao ");

                                                    //object of objects

const employee = {
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345"
    },
    skills: {
      programming: {
        languages: ["JavaScript", "Python", "Java"],
        frameworks: ["React", "Angular", "Django"]
      },
      design: {
        tools: ["Photoshop", "Illustrator", "Sketch"],
        skills: ["UI design", "UX design"]
      }
    }
  };
  
  console.log(employee.address.city); // Outputs "Anytown"
  console.log(employee.skills.programming.languages[0]); // Outputs "JavaScript"
  

                                            // array of object


let gymmembers = [provideobejct("maaz","03362077151","black")]
console.log(gymmembers);
                                            


                                            // function for creating a object
                                            
function provideobejct(name1,phone,color){
    return{
        name : name1,                       // properties
        phoneno : phone,                    // key
        shirtcolor : color,                 //value        
    }
}


                                            // DOM (document object model)


let paragraph = document.getElementById("para");
// paragraph.innerText="hello world";

// let paragraph = document.querySelector("p");
// paragraph.innerHtml = "<b>coding</b>"
// paragraph.style.backgroundColor = "black";
// paragraph.style.color = "#fff";
// console.log(paragraph);


setInterval(function(){
    paragraph.style.backgroundColor = "black";
    paragraph.style.color = "#fff";
},1000);

console.log(paragraph)
// let paragraph = document.querySelector("p");
// paragraph.innerHtml = "<b>coding</b>"
// setInterval(function(){
//     paragraph.style.backgroundColor = "black";
//     paragraph.style.color = "#fff";
// },500)




// setInterval(function(){

//     if(paragraph.style.display ==="none"){
//         paragraph.style.display ="block";
//     }
//     else{
//         paragraph.style.display = "none";
//     }},1000);