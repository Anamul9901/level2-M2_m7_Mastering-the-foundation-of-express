import express, { Request, Response } from "express";
const app = express();
const port = 3000;

//parsers
app.use(express.json()); // api e json data pathale eita use korte hobe. na hole data asbe nah
app.use(express.text()); // api e text data pathale eita use korte hobe. na hole data asbe nah

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!!!!!!");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  // res.send("Got data");
  res.json({
    message: "successfully received data",
  });
});

export default app;
