import { WooCommerce } from "..";

function handler(req, res) {
  WooCommerce.get("products", {
    per_page: 20,
  }).then((response) => {
    res.status(200).json(response.data);
  });
}

export default handler;
