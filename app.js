const but=document.querySelector('.advaic')
const paragragh=document.querySelector('.para')
const compList=document.querySelector('.list')

// but.addEventListener('click',(e)=>{
//     fetch('https://api.adviceslip.com/advice')
//       .then(response => response.json())
//       .then(json =>  {

//         console.log(json.slip.advice)
//         paragragh.textContent=json.slip.advice;

//       });
        
        

// })

// but.addEventListener('click', (e)=>{
//   fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => 
//       {
//   console.log(json) 
//   console.log(json[0]);
//   json.forEach((e)=>{
//     const info=`
//     Name: ${e.name},
//     userName: ${e.username},
//     Email: ${e.email},
//     Address: ${e.address.street},${e.address.suite},${e.address.city},${e.address.zipcode},
//     // location: ${e.geo.lat},${e.geo.lng},
//     Phone: ${e.phone},
//     website:${e.website},
//     Company: ${e.company.name},${e.company.catchPhrase}, ${e.company.catchPhrase},${e.company.bs}
    
//     `
//     console.log(info);
//     compList.textContent+=info
//   })
  
//       });
       
// })


but.addEventListener('click', (e)=>{
  fetch(' https://randomuser.me/api/')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        json.results.forEach((userInfor)=>{
          const data=`
          Naam: ${userInfor.name.first}, ${userInfor.name.last},
          Email: ${userInfor.email},
          Photo: <img src="${userInfor.picture.large}" alt="User Photo" />
          `
console.log(userInfor);

compList.innerHTML+=data

        })
    
      });
      
        
        
})

        