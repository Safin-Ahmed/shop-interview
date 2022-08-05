import { WooCommerce } from "..";

function handler(req, res) {
  WooCommerce.get("products").then((response) => {
    res.status(200).json(response.data);
  });
}

export default handler;
