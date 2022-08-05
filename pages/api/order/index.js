/* 
    Data we need -> Firstname, lastname, email, cartArray

const data = {
  payment_method: "bacs",
  payment_method_title: "Direct Bank Transfer",
  set_paid: true,
  billing: {
    first_name: "John",
    last_name: "Doe",
    address_1: "969 Market",
    address_2: "",
    city: "San Francisco",
    state: "CA",
    postcode: "94103",
    country: "US",
    email: "john.doe@example.com",
    phone: "(555) 555-5555"
  },
  shipping: {
    first_name: "John",
    last_name: "Doe",
    address_1: "969 Market",
    address_2: "",
    city: "San Francisco",
    state: "CA",
    postcode: "94103",
    country: "US"
  },
  line_items: [
    {
      product_id: 93,
      quantity: 2
    },
    {
      product_id: 22,
      variation_id: 23,
      quantity: 1
    }
  ],
  shipping_lines: [
    {
      method_id: "flat_rate",
      method_title: "Flat Rate",
      total: "10.00"
    }
  ]
}

*/

import { WooCommerce } from "..";

function handler(req, res) {
  if (req.method === "POST") {
    const reqData = req.body;
    const { firstName, lastName, email, cart } = JSON.parse(reqData);

    const finalCart = cart.map((item) => ({
      product_id: item.product_id,
      quantity: item.quantity,
    }));
    const data = {
      payment_method: "bacs",
      payment_method_title: "Direct Bank Transfer",
      set_paid: true,
      billing: {
        first_name: firstName,
        last_name: lastName,
        address_1: "969 Market",
        address_2: "",
        city: "San Francisco",
        state: "CA",
        postcode: "94103",
        country: "US",
        email: email,
        phone: "(555) 555-5555",
      },
      shipping: {
        first_name: firstName,
        last_name: lastName,
        address_1: "969 Market",
        address_2: "",
        city: "San Francisco",
        state: "CA",
        postcode: "94103",
        country: "US",
      },
      line_items: finalCart,
      shipping_lines: [
        {
          method_id: "flat_rate",
          method_title: "Flat Rate",
          total: "10.00",
        },
      ],
    };

    WooCommerce.post("orders", data)
      .then((response) => {
        console.log(response.data);
        res.status(200).json(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
        res.status(400).json(error.response.data);
      });
  }
}
export default handler;
