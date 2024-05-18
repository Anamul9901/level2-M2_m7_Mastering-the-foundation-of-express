import express, { NextFunction, Request, Response } from "express";
const app = express();
const port = 3000;

//parsers
app.use(express.json()); // api e json data pathale eita use korte hobe. na hole data asbe nah
app.use(express.text()); // api e text data pathale eita use korte hobe. na hole data asbe nah

//router
const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);

  res.json({
    success: true,
    message: "User is created successfully",
    data: user,
  });
});

courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);

  res.json({
    success: true,
    message: "Course is created successfully",
    data: course,
  });
});

//middelwar
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname, req.body);
  next(); // next use na korle porer function e jabe nah.
};

app.get("/", logger, (req: Request, res: Response) => {
  //api hit: http://localhost:3000?email=anamul@gmail.com&name=anamul
  console.log(req.query); //  api te ja query hesebe debo ta dekhabe({ email: 'anamul@gmail.com', name: 'anamul' })
  res.send("Hello World!!!!!!");
});
app.get("/:userId/:subId", (req: Request, res: Response) => {
  //api hit: http://localhost:3000/1/2
  console.log(req.params); //  userId r subId dekhabe({ userId: '1', subId: '2' })
  res.send("Hello World!!!!!!");
});

app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  // res.send("Got data");
  res.json({
    message: "successfully received data",
  });
});

export default app;
