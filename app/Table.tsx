"use client";

import Image from "next/image";
import { Coin } from "types";

type Props = {
  data: Coin[];
};
export const Table = ({ data }: Props) => {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-4 pb-4">
      <h1 className="mb-4 mt-10 text-center text-4xl font-semibold">
        Coin Watcher
      </h1>
      {data.map(coinData => {
        const imageName = `${coinData.id.toLowerCase()}-${coinData.symbol.toLowerCase()}`;

        return (
          <div
            key={crypto.randomUUID()}
            className="flex items-center gap-4 rounded-sm border border-zinc-700 p-4"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-200">
              <Image
                height={24}
                width={24}
                alt="hi"
                src={`https://cryptologos.cc/logos/${imageName}-logo.png?v=031`}
              />
            </div>
            <h2 className="w-32 items-center truncate font-medium">
              {coinData.name}{" "}
              <span className="ml-1 text-zinc-600">{coinData.symbol}</span>
            </h2>
            <p>ID: ${Number(coinData.priceUsd).toFixed(2)}</p>
          </div>
        );
      })}
    </div>
  );
};
