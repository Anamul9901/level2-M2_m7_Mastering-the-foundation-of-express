const fs = require("fs");

//reading text asynchronously

fs.readFile("./texts/read.txt", "utf-8", (err, data) => {
  if (err) {
    throw Error("Error in reading file");
  }
//   console.log(data);

  // writing text asynchronously
  fs.writeFile("./texts/write2.txt", data, "utf-8", (err) => {
    if (err) {
      throw Error("Error in writing file");
    }
  });
});

console.log('testing asynconus');