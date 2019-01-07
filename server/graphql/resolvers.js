const bcrypt = require("bcryptjs");
const Printer = require("../mongooseModels/printer");

module.exports = {
  createPrinter: async args => {
    try {
      const existingPrinter = await Printer.findOne({
        gepszam: args.printerInput.gepszam
      });
      if (existingPrinter) {
        throw new Error("Ez a nyomtató már létezik");
      }

      const printer = new Printer({
        gepszam: args.printerInput.gepszam,
        marka: args.printerInput.marka,
        tipus: args.printerInput.tipus,
        sn: args.printerInput.sn
      });

      const result = await printer.save();

      return { ...result._doc, _id: result.id };
    } catch (err) {
      throw err;
    }
  }
};
