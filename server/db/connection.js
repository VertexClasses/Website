const mongoose = require("mongoose");
const DB = process.env.DATABASE;

// DB Value

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex:true,
    // useFindAndModify:false
  })
  .then(() => console.log("Successful"))
  .catch((err) => {
    console.log("Unsuccessful");
  });
