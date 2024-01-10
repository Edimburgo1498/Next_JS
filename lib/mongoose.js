import mongoose from "mongoose";
const opciones = {
//   user: "usuario",
//   pass: "123",
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const connect = async() => {
    try {
        await mongoose.connect(process.env.URI_MONGO);
        console.log("Mongo db conectado")
    } catch (error) {
        console.log('error connect', error)
    }
}

export default connect;