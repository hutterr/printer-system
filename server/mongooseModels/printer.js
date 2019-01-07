const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const printerSchema = new Schema({
  gepszam: {
    type: String,
    required: true
  },
  marka: {
    type: String,
    required: true
  },
  tipus: {
    type: String,
    required: true
  },
  sn: {
    type: String,
    required: true
  },
  szamlalo: {
    type: Schema.Types.ObjectId,
    ref: "Szamlalo"
  },
  javitasok: {
    type: Schema.Types.ObjectId,
    ref: "Javitasok"
  }
});

module.exports = mongoose.model("Printer", printerSchema);
