import * as dotenv from "dotenv";
import * as express from "express";
import * as cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";
import { urlencoded, json } from "body-parser";
import * as morgan from "morgan";
import swaggerUi = require("swagger-ui-express");

dotenv.config();

var port: number;
if (process.env.PORT) {
  port = parseInt(process.env.PORT as string, 10);
} else {
  port = 8000;
}

const app = express();
const server = createServer(app);
const io = new Server(server);


app.use(cors());
// parse application/x-www-form-urlencoded
app.use(urlencoded({ extended: false }));

// parse application/json
app.use(json());

app.use(morgan("dev"));


app.get("/", (req: express.Request, res: express.Response) => {
  return res.send("server start");
});




server.listen(port, () => {
  console.log(`app is listen at port : ${port}`);
});
