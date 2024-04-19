import { CoinsTable } from "app/CoinsTable";
import { Coin } from "types";
import { unstable_noStore as noStore } from "next/cache";

async function fetchCoins() {
  noStore();

  const response = await fetch("https://api.coincap.io/v2/assets?limit=1000");
  const data = await response.json();

  return data as { data: Coin[] };
}

export default async function Page() {
  const coins = await fetchCoins();

  return (
    <main className="bg-zinc-900 text-zinc-100">
      <CoinsTable data={coins.data} />
    </main>
  );
}
