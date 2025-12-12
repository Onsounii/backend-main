const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    nom: { type: String, required: true },        // nom complet mta user 
    login: { type: String, required: true, unique: true }, // email wala login
    motdepasse: { type: String, required: true }, // password
    role: { type: String, enum: ["user", "manager"], default: "user" },
    isActive: { type: Boolean, default: false },  // hedhi lel activation
    activationCode: { type: String },            // hedha code d'activation
    dateCreation: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
