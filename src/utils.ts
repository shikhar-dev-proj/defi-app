import { pools, tokens } from "./app.const";
import { Token } from "./types";

export const formatAddress = (addr: string): string => addr?.slice(0,4) + '....' + addr?.slice(addr.length-4, addr.length)

export const token0 = (pair: string): Token => {
  const [t0, ] = pair.split('/');
  const token = tokens.find(t => t.id === t0)
  return token ? token : tokens[0]
}

export const token1 = (pair: string): Token => {
  const [, t1] = pair.split('/');
  const token = tokens.find(t => t.id === t1)
  return token ? token : tokens[0]
}

export const formatBigNumber = (labelValue: string) => {
  // Nine Zeroes for Billions
  const val = Math.round(+labelValue/1e+18).toString()
  return Math.abs(Number(val)) >= 1.0e+9

    ? Math.round(Math.abs(Number(val)) / 1.0e+9) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(val)) >= 1.0e+6

      ? Math.round(Math.abs(Number(val)) / 1.0e+6) + "M"
      // Three Zeroes for Thousands
      : Math.abs(Number(val)) >= 1.0e+3

        ? Math.round(Math.abs(Number(val)) / 1.0e+3) + "K"

        : Math.round(Math.abs(Number(val)));
}