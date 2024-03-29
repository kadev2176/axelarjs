import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { DeliverTxResponse, QueryClient, StdFee } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";

import { EnvironmentConfigs, getConfigs } from "../constants";
import type { AxelarRpcClientConfig } from "../types";
import { RpcImpl } from "./rpcImpl";
import {
  AxelarQueryService,
  setupQueryClientExtension,
  setupRpcClientBroadcastExtension,
} from "./types";

export * from "../types";

export type AxelarQueryClientService = QueryClient & AxelarQueryService;

let instance: AxelarQueryClientService;

export class AxelarQueryClient extends QueryClient {
  static async init(config: AxelarRpcClientConfig) {
    if (!instance) {
      const { axelarRpcUrl, environment } = config;
      const links: EnvironmentConfigs = getConfigs(environment);
      const rpc: string = axelarRpcUrl || links.axelarRpcUrl;

      const tmClient = await Tendermint34Client.connect(rpc);

      instance = QueryClient.withExtensions(
        tmClient,
        setupQueryClientExtension
      );
    }
    return instance;
  }
}

export function createAxelarRPCTxClient(
  config: AxelarRpcClientConfig & {
    axelarLcdUrl: string;
    chainId: string;
    onDeliverTxResponse?: (deliverTxResponse: DeliverTxResponse) => void;
    rpcImpl?: RpcImpl;
  },
  offlineSigner: DirectSecp256k1HdWallet,
  options?: {
    fee?: StdFee;
    broadcastPollIntervalMs?: number;
    broadcastTimeoutMs?: number;
  }
) {
  const axelarRpcUrl =
    config.axelarRpcUrl || getConfigs(config.environment).axelarRpcUrl;

  return setupRpcClientBroadcastExtension(
    config.rpcImpl ??
      new RpcImpl(
        axelarRpcUrl,
        config.axelarLcdUrl,
        offlineSigner,
        config.chainId,
        config.onDeliverTxResponse,
        options
      )
  );
}

export const createAxelarRPCQueryClient =
  AxelarQueryClient.init.bind(AxelarQueryClient);
