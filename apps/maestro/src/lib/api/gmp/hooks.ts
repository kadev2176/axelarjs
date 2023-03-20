import { useQuery } from "wagmi";
import { searchGMP, getContracts } from "./index";
import { SearchGMPParams } from "./types";

export function useSearchGMPQuery(params: SearchGMPParams) {
  return useQuery(["gmp-search", params], searchGMP.bind(null, params));
}

export function useContractsQuery() {
  return useQuery(["gmp-contracts"], getContracts);
}
