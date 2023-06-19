const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(
      `MongoDB successfully connected at ${conn.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log(error).red;
    process.exit(1);
  }
};

module.exports = {
  connectDb,
};
