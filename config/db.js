const mongoose = require('mongoose');

// // Fonction bch tconnecti  lel DB)
const connectDB = async () => {
 try {
 // Nconnectiw 3al MongoDB l'URL elli mawjoud fil environnement variables (MONGO_URI)
 await mongoose.connect(process.env.MONGO_URI);
 // Ken naj7et, naffichiou message
 console.log('MongoDB connecté ');
 } catch (err) {
 // Ken saret ghalta, naffichiou el ghalet
 console.error(err.message);
 // Nwa9fou el process mta3 el serveur (yetsakker)
process.exit(1);
 }
};

// // Nexportiw el fonction bech najmou nesta3mlouha fel fichier principal (server.js)
module.exports = connectDB;