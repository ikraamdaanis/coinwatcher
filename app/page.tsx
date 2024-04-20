import { CoinsTable } from "app/CoinsTable";
import { Coin, GeckoCoin } from "types";
import { unstable_noStore as noStore } from "next/cache";
import { normalise } from "utils/normalise";
import { cache } from "react";

const fetchGecko = cache(async () => {
  try {
    const response2 = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?x_cg_demo_api_key=${process.env.GECKO_API_KEY}&vs_currency=usd&order=market_cap_desc&per_page=20`
    );
    const data2 = (await response2.json()) as GeckoCoin[];

    if (!Array.isArray(data2)) {
      const data = data2 as {
        status: {
          error_code: number;
          error_message: string;
        };
      };

      throw new Error(data.status.error_message);
    }

    return data2 || [];
  } catch (error) {
    const err = error as Error;
    console.error(err.message);
    return [];
  }
});

async function fetchCoins() {
  noStore();

  const response = await fetch("https://api.coincap.io/v2/assets?limit=10");
  const data = (await response.json()) as { data: Coin[] };

  const coins = normalise(data.data, ["id"]);

  const geckoCoins = (await fetchGecko()) || [];

  console.log(Object.keys(coins));
  console.log(geckoCoins.map(coin => coin.id.replace(/[^a-zA-Z]/g, "")));
  (geckoCoins || [])?.forEach(coin => {
    const index = `${coin.id.replace(/[^a-zA-Z]/g, "")}`;

    if (coins[index]) {
      coins[index].imageUrl = coin.image;
    }
  });

  return { data: Object.values(coins) };
}

export default async function Page() {
  const coins = await fetchCoins();

  return (
    <main className="bg-zinc-900 text-zinc-100">
      <CoinsTable data={coins.data} />
    </main>
  );
}
