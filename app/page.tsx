import { Table } from "app/Table";
import { Coin } from "types";
import { unstable_noStore as noStore } from "next/cache";

async function fetchCoins() {
  noStore();

  const response = await fetch("https://api.coincap.io/v2/assets?limit=10");
  const data = await response.json();

  return data as { data: Coin[] };
}

export default async function Page() {
  const coins = await fetchCoins();

  return (
    <main className="bg-zinc-900 text-zinc-100">
      <Table data={coins.data} />
    </main>
  );
}
