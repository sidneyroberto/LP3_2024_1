import { connect, connection } from "mongoose";

const connectToDB = async () => {
  await connect(`${process.env.DB_URL}`);
};

connection.on("connecting", () =>
  console.log("Opening connection to database..."),
);

connection.on("connected", () =>
  console.log(`App connected to database ${connection.db.databaseName}`),
);

connection.on("disconnecting", () =>
  console.log("Closing connection to database..."),
);

connection.on("disconnected", () =>
  console.log(`App disconnected to database ${connection.db.databaseName}`),
);

export default connectToDB;
