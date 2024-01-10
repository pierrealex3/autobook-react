import express from "express";
import ReactDOMServer from "react-dom/server";
import cors from "cors";

const server = express();
server.use(express.static("dist"));
server.use(express.static("public")); // PA allow images to be fetched
server.use(cors({
  origin: 'http://localhost:4242'
}));

server.get("/", (req, res) => {
  
  res.send(`
    <html>
      <head>
        <title>Autobook</title>
      </head>
      <body>
        <div id="appx"></div>        
        <script src="/main.js"></script>
      </body>
    </html>
  `)
});

server.listen(4242, () => console.log("Server is running..."));
