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
import { Coin } from "types";
import { formatUsd } from "utils/formatUsd";

type Props = {
  data: Coin[];
};

/**
 * Displays the difference crypto currencies in a table.
 */
export const CoinsTable = ({ data }: Props) => {
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
            return (
              <TableRow key={crypto.randomUUID()}>
                <TableCell className="text-center">{coin.rank}</TableCell>
                <TableCell className="flex items-center">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-md bg-zinc-200">
                    <ImageWithFallback
                      height={24}
                      width={24}
                      alt="hi"
                      src={coin.imageUrl}
                      className="h-6 w-6"
                    />
                  </div>
                  <h2 className="items-center truncate font-medium">
                    {coin.name}{" "}
                    <span className="ml-1 text-zinc-600">{coin.symbol}</span>{" "}
                    {coin.id}
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
