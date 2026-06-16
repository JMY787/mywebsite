//objects
const weather = {
  tempature: 29.4,
  forecast: "partly cloudy",
  humidity: 0.38,
  precipitaion: 0.16,
  faveFoods: ["apples", "cake"],
  speak: () => {
    return "hello";
  },
};

// // console.log(weather.tempature);
// // console.log(weather.forecast);
// // console.log(weather.humidity);
// // console.log(weather.precipitaion);
// // console.log(weather.speak)
// // console.log(weather.faveFoods[1])
// // another way to return is brackets shown below
// // console.log(weather["faveFoods"])
// //delete.tempature when you want to delete something

// // for in loop
// //you can call key whatever you want its just a property
// //this just brings the keys or the left side
// for (const key in weather) {
//   console.log(key);
// }
// //this brings the keys and values and adds the two dots between
// for (const key in weather) {
//   console.log(key, ":", weather[key]);
// }
// //as param an object and key name
// //returns the key value
const returnValue = (obj, property)=>{

 }

//write a function that accepts a string as a parameter
//returns an object with the count of each letter in the string

//example ==>> countChar("aabbss")=>{a:2, b:2, s:2}
//example ==>> countChar("hello")=>{h:1, e:1, l:1, o:1}

function counrChar(str){
  const obj = {}
  for(let i = 0;i<str.length,i++){
      const key = str[i]
      if(key in obj){
        obj
      }
  }
  return obj
}
console.log(counrChar("aabbss"))


const oddsAndEvens = (arr)=>{
  const odds = []
  const evens = []

  for(let i =0;i<arr.length;i++){
    const eachNum = arr[i]
    if(eachNum%2===0){
      evens.push(eachNum)
    }else{
      odds.push
    }
  }
  return {odds:odds, evens:evens}
}


//json!!
//.stringify
//.parse()
//userObj is just what she named her property mine i named weather up top
localStorage.setItem("newVariable",JSON.stringify(userObj))
const myUser = localStorage.getItem("newVariable")
console.log(JSON.parse)

let bool = true
let num

//condition ? result : otherResult