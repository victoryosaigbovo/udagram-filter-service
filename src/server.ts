import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 3000;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
 app.get("/filteredimage/", async (req, res) => {
    try {
      let {image_url} = req.query;
      //    1. validate the image_url query
      if (!image_url) {
        throw ("Please provide image_url in the query params")
      }
      //    2. call filterImageFromURL(image_url) to filter the image
      const filteredpath = await filterImageFromURL(image_url);
      //    3. send the resulting file in the response
      res.sendFile(filteredpath, (err) => {
      //    4. delete any files on the server on finish of the response
        deleteLocalFiles([filteredpath]);
      })
    } catch (e) {
      res.status(422).send(e.message)
    }
  });

   //! END @TODO1
   
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.status(200).send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();
