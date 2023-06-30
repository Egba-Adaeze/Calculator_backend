import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
  value1: { type: number, required: true },
  value2: { type: number, required: true },
 
});

const data_model = mongoose.model("data", DataSchema);

export default data_model;