import mongoose from "mongoose";

// windows is available in browser
// like windows we have global variable in node env

global.mongoose = {
  conn: null,
  promise: null,
};

export async function dbConnect() {
  if (global.mongoose && global.mongoose.conn) {
    console.log("Using Existing mongoose connection");
    return global.mongoose.conn;
  } else {
    console.log("Creatnig new mongoose connection");
    const user = process.env.MONGODB_USER;
    const password = process.env.MONGODB_PASSWORD;
    const database = process.env.MONGODB_DATABASE;

    const conString = `mongodb+srv://yuhuynguyen:dPt23ygaeI7OLNfZ@cluster0.aqz5rfx.mongodb.net/dbbase29`;

    const promise = mongoose
      .connect(conString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true,
      })
      .then((mongoose) => mongoose);

    global.mongoose = {
      conn: await promise,
      promise,
    };

    return await promise;
  }
}
