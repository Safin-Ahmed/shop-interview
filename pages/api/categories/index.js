import { WooCommerce } from "..";

async function handler(req, res) {
  try {
    const response = await WooCommerce.get("products/categories");
    res.status(200).json(response.data);
    res.end();
  } catch (e) {
    res.status(500).json(e);
    res.end();
  }
}

export default handler;
