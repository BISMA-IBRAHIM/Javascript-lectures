const  url ='https://countriesnow.space/api/v0.1/countries';



   //FETCH API WITH ASYNC AWAIT 
   async function getData(){
      const response = await fetch(url) //2second
      console.log(response)
      const data = response.json()
         console.log(data)
   }
    getData();
           
 

     // FETCH API WITH . THEN 
    //  fetch(url).then(response => response.json())
    //     .then(data =>{
    //         console.log(data)
    //     })
    //     .catch(error => {
    //         console.error('Error while fetching a data :', data )
    //     })




        // Fetch api ( fetch countries data )
        // fetch(url).then(response => response.json())
        //  .then(data =>{
        //     console.log(data)
        //  const countriesArray= data.data;
        //   countriesArray.forEach(country => {
        //     console.log(country.country);
            
        //   });
        // })


        //fetch api (fetch cities data into an array)
    //     fetch(url).then(response => response.json())
    //     .then(data =>{
    //         console.log(data)
    //         const citiesArray = data.data;
    //         citiesArray.forEach(cities => {
    //             console.log(cities.cities);
    //         });
    //     })
    //   .catch(error => {
    //     console.error('Error while fetching data:',error);
    //   });










// C O D E    // B R E A K 
// N E W  // C O D E 





// const url ='https://dog.ceo/api/breeds/image/random';
// // async function getData(){
// //     const  response = await fetch(url)
// //     const data = await response.json()
// //     console.log(data)
// // }
// // getData();

// const request = new Request(url);
// fetch(request).then(Response=> Response.json())
// .then(data=> console.log('success:',data))
// .catch(error => console.log(`Error: ${error}`))




