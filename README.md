# egpt
making chatgpt accessible to those who can't

## code breakdown

`server.js`: Basic express server that listens on port 8080, it has two routes the `/` route which is invoked via a get request to get the HTML, CSS and JS and `/ask` route which is invoked via a post request and the request body constains your question

`gpt.js`: this function contains the necessary code to interact with GPT-3 it uses the api key in the .env file and specifies the model to be used alone with the question you asked

[Frontend code made by steven samir](https://github.com/stevensamir20/eGPT)