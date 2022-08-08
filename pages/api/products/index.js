import { WooCommerce } from "..";

async function handler(req, res) {
  try {
    const response = await WooCommerce.get("products", {
      per_page: 20,
    });

    res.status(200).json(response.data);
    res.end();
  } catch (e) {
    res.json(e);
    res.status(405).end();
  }
}

export default handler;
