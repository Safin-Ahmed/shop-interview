import { WooCommerce } from "..";

async function handler(req, res) {
  const queries = req.query;
  try {
    const response = await WooCommerce.get("products", {
      per_page: 20,
      category: queries.category ? queries.category : "",
      parent: queries.parent ? queries.parent : "",
      slug: queries.slug ? queries.slug : "",
    });

    res.status(200).json(response.data);
    res.end();
  } catch (e) {
    res.status(500).json(e);
    res.end();
  }
}

export default handler;
