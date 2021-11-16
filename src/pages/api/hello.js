import { dbConnect, server } from "../../utils/mongoose";

dbConnect();

export default function handler(req, res) {
  res.status(200).json("hola");
  // MONGODB_URL=mongodb://localhost:27017/tablerodetareas
}
