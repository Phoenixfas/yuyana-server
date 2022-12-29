const emailjs = require("@emailjs/nodejs");
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
    callback_url: "https://test.afriopia.com/payment/verify",
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

// @desc    Verify payment
/*


exports.verifyPayment = async (req, res) => {
  const { tx_ref, status } = req.body;

  var templateParams = {
    user_name: "Abebe",
    user_email: "abebe123@gmail.com",
    user_subject: "Check this out!",
    message: "This is a test message sent from yuyana to verify chapa payment",
  };

  try {
    const response = await axios({
      method: "get",
      url: `https://api.chapa.co/v1/transaction/verify/${tx_ref}`,
      headers: {
        Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
    });
    res.status(200).console.log(response);

    emailjs
      .send("service_7qzgs2r", "template_62hczls", templateParams, {
        publicKey: "H3d4wkxOfYSB8wkZa",
        privateKey: "n5e9BNTil8uT9F-Fk-pOF", // optional, highly recommended for security reasons
      })
      .then(
        function (response) {
          res.json({ message: "SUCCESS!", response });
        },
        function (err) {
          res.json({ message: "FAILED...", err });
        }
      );
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};


*/
