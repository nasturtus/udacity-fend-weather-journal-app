**Weather Journal App**

**_Description_**

The Weather Journal App:

1. Allows a user to enter a US postal code and a word or paragraph depicting their feeling.
2. Fetches temperature (in celsius) using the Open Weather Map API for the given postal code.

**_The project illustrates:_**

- Use of GET and POST methods and routes
- Setting up a server in Express
- Communication between server and client
- Dynamically updating the front end based on data received from the server

**_How users can get started with the project_**

1. Run `node server.js` from the root project folder to start the server on port 3000.
2. Now go to your browser and enter `localhost:3000` to open the homepage.
3. Enter a valid postal code and a word or paragraph in the textbox and textarea respectively. 
4. Click **Generate**.
5. You will find the **Most Recent Entry** placeholder (at the bottom) populate with various details.

***Routes***
`/getlatestdata`: This is a GET method that will publish the latest entry stored in the server to your browser.
`/addlatestdata`: This is a POST method that will send data from the client to the server, save it at the server end. The server will then push the latest consolidated entry to the client so that the client can update the UI (specifically the **Most Recent Entry** section at the bottom of the page.)

**Note**
For security reasons, it is recommended that fetch is done from the proxy server and that the API key is not exposed by storing it in a `.env` file and adding that file to `.gitignore`.

This project, being educational and covering the fundamentals, uses fetch from the client side. Anyone cloning this repo will need to enter their own Open Weather Map API key.

