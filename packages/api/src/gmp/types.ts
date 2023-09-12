type BaseGMPResponse<T> = T & {
  time_spent: number;
};

export type GMPTxStatus =
  | "called"
  | "confirming"
  | "confirmable"
  | "express_executed"
  | "confirmed"
  | "approving"
  | "approvable"
  | "approved"
  | "executing"
  | "executed"
  | "error"
  | "express_executable"
  | "express_executable_without_gas_paid"
  | "executable"
  | "executable_without_gas_paid"
  | "insufficient_fee";

export type ChainType = "evm" | "cosmos";

export type SortOrder = "asc" | "desc";

type BaseGMPParams = {
  contractMethod?: string;
  sourceChain?: string;
  destinationChain?: string;
  sourceAddress?: `0x${string}`;
  contractAddress?: `0x${string}`;
  senderAddress?: `0x${string}`;
  relayerAddress?: `0x${string}`;
  /**
   * Unix timestamp in seconds
   */
  fromTime?: number;
  /**
   * Unix timestamp in seconds
   */
  toTime?: number;
};

// SearchGMP

export type SearchGMPParams = BaseGMPParams & {
  contractMethod?: "callContrct" | "callContrctWithToken";
  txHash?: string | `0x${string}`;
  txLogIndex?: number;
  status?: GMPTxStatus;
  from?: number;
  size?: number;
  sort?: Record<string, SortOrder>;
};

type HexAmount = {
  type: string;
  hex: string;
};

type SearchGMPCall = {
  blockNumber: number;
  blockHash: `0x${string}`;
  transactionIndex: number;
  address: `0x${string}`;
  removed: boolean;
  data: unknown;
  topics: `0x${string}`[];
  transactionHash: `0x${string}`;
  logIndex: number;
  event: string;
  eventSignature: string;
  id: string;
  chain: string;
  contract_address: `0x${string}`;
  chain_type: ChainType;
  destination_chain_type: ChainType;
  returnValues: {
    sender: string;
    destinationChain: string;
    destinationContractAddress: string;
    payloadHash: string;
    payload: string;
    symbol: string;
    amount: HexAmount;
  };
};

type GMPTokenInfo = {
  token_price: {
    usd: number;
  };
  gas_price: string;
  symbol: string;
  gas_price_gwei: string;
  decimals: number;
  name: string;
  contract_address: `0x${string}`;
};

type GMPAxelarTokenInfo = Pick<
  GMPTokenInfo,
  "token_price" | "symbol" | "decimals" | "name"
>;

type SearchGMPFees = {
  base_fee: number;
  destination_base_fee: number;
  destination_native_token: GMPTokenInfo;
  express_fee: number;
  source_express_fee: {
    base_fee: number;
    total: number;
    express_gas_overhead_fee: number;
  };
  source_token: GMPTokenInfo;
  source_base_fee: number;
  axelar_token: GMPAxelarTokenInfo;
  destination_express_fee: {
    base_fee: number;
    total: number;
    express_gas_overhead_fee: number;
  };
};

export type SearchGMPResponseData = {
  call: SearchGMPCall;
  fees: SearchGMPFees;
  status: GMPTxStatus;
  is_invalid_destination_chain: boolean;
  is_call_from_relayer: boolean;
  is_invalid_call: boolean;
};

export type SearchGMPResponse = BaseGMPResponse<{
  data: SearchGMPResponseData[];
  total: number;
}>;

export type GetContractsResponse = BaseGMPResponse<{
  constant_address_deployer: `0x${string}`;
  express_contract: {
    address: `0x${string}`;
  };
  gateway_contracts: Record<string, { address: `0x${string}` }>;
  gas_service_contracts: Record<string, { address: `0x${string}` }>;
  time_spent: number;
}>;

export type GetGasPriceParams = {
  sourceChain: string;
  destinationChain: string;
  sourceTokenSymbol?: string;
  sourceTokenAddress?: `0x${string}`;
};

export type GetGasPriceResponse = BaseGMPResponse<{
  method: "getGasPrice";
  params: GetGasPriceParams & {
    method: "getGasPrice";
  };
  result: {
    source_token: GMPTokenInfo;
    destination_native_token: GMPTokenInfo;
  };
  time_spent: number;
}>;

// GetGMPStatistics

type BaseStats<T = {}> = T & {
  key: string;
  num_txs: number;
};

export type GetGMPStatisticsParams = BaseGMPParams;

export type GetGMPStatisticsResponse = {
  messages: BaseStats<{
    source_chains: BaseStats<{
      destination_chains: BaseStats<{ contracts: BaseStats[] }>[];
    }>[];
  }>[];
  time_spent: number;
};

// GetGMPChart

export type GetGMPChartParams = BaseGMPParams;

export type GetGMPChartResponse = {
  data: {
    timestamp: number;
    num_txs: number;
  }[];
};

// GetGMPCumulativeVolume

export type GetGMPCumulativeVolumeParams = BaseGMPParams;

export type GetGMPCumulativeVolumeResponse = {
  data: {
    timestamp: number;
    volume: number;
    cumulative_volume: number;
    num_txs: number;
  }[];
};

// GetGMPTotalVolume

export type GetGMPTotalVolumeParams = BaseGMPParams;

export type GetGMPTotalVolumeResponse = number;

// EstimateTimeSpent

export type EstimateTimeSpentParams = Pick<
  BaseGMPParams,
  | "contractMethod"
  | "sourceChain"
  | "destinationChain"
  | "sourceAddress"
  | "contractAddress"
  | "fromTime"
  | "toTime"
>;

export type EstimateTimeSpentResponse = BaseStats<{
  express_execute: number | null;
  confirm: number | null;
  approve: number | null;
  execute: number | null;
  total: number;
}>[];

// GetFees

export type GetFeesParams = {
  sourceChain: string;
  destinationChain: string;
  sourceTokenSymbol?: string;
  sourceTokenAddress?: `0x${string}`;
};

type ExpressFee = {
  relayer_fee: number;
  relayer_fee_usd: number;
  express_gas_overhead_fee: number;
  express_gas_overhead_fee_usd: number;
  total: number;
  total_usd: number;
};

type TokenPrice = {
  usd: number;
};

type Token = {
  contract_address: string;
  symbol: string;
  name: string;
  decimals: number;
  token_price: TokenPrice;
  gas_price: string;
  gas_price_gwei: string;
};

type GetBaseFeesResult = {
  base_fee: number;
  base_fee_usd: number;
  source_base_fee: number;
  source_base_fee_string: string;
  source_base_fee_usd: number;
  destination_base_fee: number;
  destination_base_fee_string: string;
  destination_base_fee_usd: number;
  express_supported: boolean;
  express_fee: number;
  express_fee_string: string;
  express_fee_usd: number;
  express_execute_gas_limit_adjustment: number;
  express_execute_gas_limit_adjustment_with_multiplier: number;
  source_express_fee: ExpressFee;
  destination_express_fee: ExpressFee;
  source_token: Token;
  destination_native_token: Token & {
    name: string;
    symbol: string;
  };
  axelar_token: {
    name: string;
    symbol: string;
    decimals: number;
    token_price: TokenPrice;
  };
};

export type GetFeesResponse = BaseGMPResponse<{
  method: "getBaseFees";
  params: GetFeesParams & { method: "getFees" };
  result: GetBaseFeesResult;
}>;
