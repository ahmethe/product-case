import fs from "fs";
import path from "path";
import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const { searchParams } = new URL(req.url, `http://${req.headers.host}`);

    const minPrice = parseInt(searchParams.get("minPrice")) || 0;
    const maxPrice = parseInt(searchParams.get("maxPrice")) || 9999;
    const minPopularity = parseFloat(searchParams.get("minPopularity")) || 0;

    if (maxPrice <= minPrice) {
      return res
        .status(400)
        .json({ message: "Maximum Price should be greater than Minimum Price." });
    }

    const filePath = path.join(process.cwd(), "api", "data", "products.json");
    const json = fs.readFileSync(filePath, "utf8");
    const products = JSON.parse(json);

    if (!Array.isArray(products)) {
      return res.status(500).json({ message: "Failed to fetch products." });
    }

    const goldPrice =
      (await getGoldPricePerGram(process.env.GOLD_API_KEY)) ?? 100;

    const productDtos = products.map((p) => {
      const adjustedPopularity = Math.round(p.popularityScore * 5 * 10) / 10;
      const price = (p.popularityScore + 1) * p.weight * goldPrice;
      return {
        name: p.name,
        popularityScore: adjustedPopularity,
        price: parseFloat(price.toFixed(2)),
        images: p.images || [],
      };
    });

    const filtered = productDtos
      .filter(
        (p) =>
          p.popularityScore >= minPopularity &&
          p.price >= minPrice &&
          p.price <= maxPrice
      )
      .sort((a, b) => b.popularityScore - a.popularityScore || a.price - b.price);

    res.status(200).json(filtered);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
}

async function getGoldPricePerGram(apiKey) {
  try {
    const response = await fetch("https://www.goldapi.io/api/XAU/USD", {
      headers: {
        "x-access-token": apiKey,
        Accept: "application/json",
      },
    });
    if (!response.ok) return null;
    const data = await response.json();
    const pricePerOunce = data.price;
    return pricePerOunce / 31.1035;
  } catch {
    return null;
  }
}
