const mongoose = require("mongoose");
const Listing = require("./models/Listing"); // adjust path if needed

async function removeIsVerified() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/hustlehub"); // ✅ correct port

    const result = await Listing.updateMany({}, { $unset: { isVerified: "" } });
    console.log("Removed isVerified from listings:", result.modifiedCount);

  } catch (err) {
    console.error(err);
  } finally {
    await mongoose.disconnect();
  }
}

removeIsVerified();
