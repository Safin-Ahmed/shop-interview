const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
export const WooCommerce = new WooCommerceRestApi({
  url: process.env.WP_BASE_URL, // Your store URL
  consumerKey: process.env.WC_CONSUMER_KEY, // Your consumer key
  consumerSecret: process.env.WC_CONSUMER_SECRET, // Your consumer secret
  version: "wc/v3", // WooCommerce WP REST API version
});

function handler(req, res) {
  res.status(200).json({
    message: "it works!",
  });
}

export default handler;
