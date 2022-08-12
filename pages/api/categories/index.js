import { WooCommerce } from "..";

async function handler(req, res) {
  const queries = req.query;
  try {
    const response = await WooCommerce.get("products/categories", {
      parent: queries.parent ? queries.parent : null,
      exclude: [15],
    });
    res.status(200).json(response.data);
    res.end();
  } catch (e) {
    res.status(500).json(e);
    res.end();
  }
}

export default handler;
