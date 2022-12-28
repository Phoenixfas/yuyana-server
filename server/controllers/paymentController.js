const axios = require("axios");

// @desc   Generate a random string for the transaction reference
const generateTxRef = () => {
  const length = 16;
  var result = "tx-";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

// @desc    Initiate payment
exports.initPayment = async (req, res) => {
  const { amount, email, first_name, last_name } = req.body;
  // validate the data
  if (!amount || !email || !first_name || !last_name) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }
  const formData = {
    amount: amount,
    currency: "ETB",
    email: email,
    first_name: first_name,
    last_name: last_name,
    tx_ref: generateTxRef(),
    callback_url: "http://localhost:5000/payment/callback",
    customization: {
      title: "Yuyana",
      description: "Payment for Yuyana",
    },
  };

  try {
    const response = await axios({
      method: "post",
      url: "https://api.chapa.co/v1/transaction/initialize",
      headers: {
        Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      data: formData,
    });
    res.status(200).send(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
