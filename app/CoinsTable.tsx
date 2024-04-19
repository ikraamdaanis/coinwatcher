"use client";

import { ImageWithFallback } from "components/ImageWithFallback";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "components/ui/table";
import { useEffect } from "react";
import { Coin } from "types";
import { formatUsd } from "utils/formatUsd";

type Props = {
  data: Coin[];
};
export const CoinsTable = ({ data }: Props) => {
  useEffect(() => {
    console.dir(data);
  }, [data]);

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-4 pb-4">
      <h1 className="mb-4 mt-10 text-center text-4xl font-semibold">
        Coin Watcher
      </h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-16 text-center">#</TableHead>
            <TableHead className="">Coin Name</TableHead>
            <TableHead className="w-16 text-right">Price</TableHead>
            <TableHead className="w-44 text-right ">Market Cap</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(coin => {
            // const name = `${coin.id.toLowerCase()}-${coin.symbol.toLowerCase()}`
            //   .replaceAll(" ", "-")
            //   .replaceAll(".", "-");
            // const imageUrl = `https://cryptologos.cc/logos/${name}-logo.png?v=031`;
            const symbolName = coin.symbol === "IOTA" ? "miota" : coin.symbol;
            const imageUrl = `https://assets.coincap.io/assets/icons/${symbolName.toLowerCase()}@2x.png`;
            // const imageUrl = `https://cryptofonts.com/img/icons/${symbolName.toLowerCase()}.svg`;
            // const imageUrl = `https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400${symbolName.toLowerCase()}.svg`;

            return (
              <TableRow key={crypto.randomUUID()}>
                <TableCell className="text-center">{coin.rank}</TableCell>
                <TableCell className="flex items-center">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-md bg-zinc-200">
                    <ImageWithFallback
                      height={24}
                      width={24}
                      alt="hi"
                      src={imageUrl}
                      className="h-6 w-6"
                    />
                  </div>
                  <h2 className="items-center truncate font-medium">
                    {coin.name}{" "}
                    <span className="ml-1 text-zinc-600">{coin.symbol}</span>
                  </h2>
                </TableCell>
                <TableCell className="text-right">
                  {formatUsd(Number(coin.priceUsd))}
                </TableCell>
                <TableCell className="text-right">
                  {formatUsd(Number(coin.marketCapUsd))}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
