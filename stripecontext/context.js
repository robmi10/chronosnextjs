import React, { createContext, useEffect, useState } from "react";
import Stripe from "stripe";
export const StripeContext = createContext();
const StripeProvider = ({ children }) => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    getStripeData();
  }, []);

  const getStripeData = async () => {
    const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET ?? "", {
      apiVersion: "2020-08-27",
    });

    const response = await stripe.prices.list({
      limit: 10,
      expand: ["data.product"],
    });

    const prices = response.data.filter((price) => {
      return price.active;
    });

    setPrices(prices);
  };

  return (
    <StripeContext.Provider value={{ prices, setPrices }}>
      {children}
    </StripeContext.Provider>
  );
};

export default StripeProvider;
