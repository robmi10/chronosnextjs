import Stripe from "stripe";

const Checkout = async (req, res) => {
  try {
    const body = req.body;


    const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET ?? "", {
      apiVersion: "2020-08-27",
    });

    const session = await stripe.checkout.sessions.create({
      shipping_address_collection: { allowed_countries: ["SE"] },
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
      line_items: [body.lineItems],
      mode: "payment",
    });

    res.status(200).send({ message: "success", data: session });
  } catch (error) {
    res.status(500).send({ message: "error", data: error.message });
    console.error(error);
  }
};

export default Checkout;
