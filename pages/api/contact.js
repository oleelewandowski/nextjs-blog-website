import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      message.trim() === ""
    ) {
      res.status(422).json({ status: "Invalid input!" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    const user = process.env.DB_USER;
    const password = process.env.DB_PASSWORD;
    const host = process.env.DB_HOST;
    const cluster = process.env.DB_CLUSTER;

    const dbUrl = `mongodb+srv://${user}:${password}@${cluster}.6kqwhaa.mongodb.net/${host}?retryWrites=true&w=majority`;

    let client;

    try {
      client = await MongoClient.connect(dbUrl);
    } catch (error) {
      res.status(500).json({ status: "Could not connect to the database! " });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ status: "Storing message failed! " });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ status: "Successfully stored message!", message: newMessage });
  }
};

export default handler;
