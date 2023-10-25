//GET--->
// let loginForm = document.getElementById("loginForm");

// loginForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let age = document.getElementById("age");
//   let name = document.getElementById("name");

//   if (age.value == "" || name.value == "") {
//     alert("Ensure you input a value in both fields!");
//   } else {
//     // perform operation with form input
//     alert("This form has been successfully submitted!");
//     console.log(
//       `This form has a age of ${age.value} and name of ${name.value}`
//     );
// url="http://localhost:8082/getAgeName?"+"age="+age.value+"&name="+name.value
// console.log(url)
// let p = fetch(url)
// p.then((value1)=>{
//   return value1.json() 
// }).then((value2)=>{
//   return console.log(value2)
// })
//     age.value = "";
//     name.value = "";
//   }
// });

//POST-->
  let loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

//collecting the input values given by client using ids in variables so that we can print them in console and 
//also use them to call post api in json 
  let restaurant = document.getElementById("restaurant");
  let name = document.getElementById("name");
  let dishName = document.getElementById("dishName");
  let contactNo = document.getElementById("contactNo");
  let dishQuantity = document.getElementById("dishQuantity");

  if (restaurant.value == "" || name.value == "" || dishName.value == "" || contactNo.value == "" || dishQuantity.value == "") {
    alert("Ensure you input a value in all fields!");
  } else {
    alert("Your Order Have Been Placed!");
    console.log(
      `This form has
       restaurant --> ${restaurant.value} 
       name --> ${name.value} 
       dishName --> ${dishName.value}
       contactNo --> ${contactNo.value} 
       dishQuantity -> ${dishQuantity.value}`

    );

    const update = {
    Restaurant:restaurant.value,
    Name:name.value,
    DishName:dishName.value,
    ContactNo:contactNo.value,
    DishQuantity:dishQuantity.value
    };
    
    const options = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
    };

    fetch('http://localhost:8082/saveApi2', options)//giving post api link to call
  .then(data => {
       return data.json();//conveting to json
      }).then(update => {
      console.log(update);
    });

    restaurant.value = "";
    name.value = "";
    dishName.value = "";
    contactNo.value = "";
    dishQuantity.value = "";
  }
});