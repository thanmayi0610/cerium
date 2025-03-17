//import { serve } from '@hono/node-server'
//import { Hono } from 'hono'
/*
import axios from "axios";
const app = new Hono()
const baseUrl = 'https://a90b05cb-e593-4a77-a500-82b909c678f2.mock.pstmn.io';
try{
  const response = axios.get(`${baseUrl}/cities`);
  console.log(`Status`:${response.status});npm
}

  catch(e){
    console.log("Error",e);
  }

/*
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
*/
//serve(app);

/*import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()



app.get('/', (c) => {
  return c.text('Hello Hono!')
})


// serve({
//   fetch: app.fetch,
//   port: 3000
// }, (info) => {
//   console.log(Server is running on http://localhost:${info.port})
// })

// //serve(app);
// */

/*
const data ={
  name:"Ram",
  age: 30
};
const jsonstring = JSON.stringify(data);
console.log(jsonstring);


const parsedData = JSON.parse(jsonstring);
console.log(parsedData);
*/
import axios from "axios";

const baseURl = "https://a90b05cb-e593-4a77-a500-82b909c678f2.mock.pstmn.io";


  try {
    //const response = await axios.get(`${baseURl}/cities`);
    const response = await axios.post(
      `${baseURl}/cities`,
      {
        title:"Buy Fruit"
      },
      {
        headers: {},
      }
    );

    const statusCode = response.status;

    const data = response.data;
    console.log("Status:" ,statusCode);
    console.log("Data: ",data);
   
    //console.log(`Status: ${response.status}`);
  } catch (e) {
    console.log("Error", e);
  }





