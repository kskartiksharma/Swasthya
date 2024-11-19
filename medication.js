const mongoose = require("mongoose");

const medicationSchema = new mongoose.Schema(
    {
        username: String,
        medication: [String],
        dosage: String,
        date: String,
        email: String,
    },
    {
        collection: "MedicationInfo",
    }
);

mongoose.model("MedicationInfo", medicationSchema);