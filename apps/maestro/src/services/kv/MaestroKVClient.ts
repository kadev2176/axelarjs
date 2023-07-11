import { type VercelKV } from "@vercel/kv";
import { z } from "zod";

import { hex40Literal, hex64Literal } from "~/lib/utils/schemas";

export type RemoteInterchainToken = {};

export const interchainTokenDetailsSchema = z.object({
  name: z.string(),
  symbol: z.string(),
  decimals: z.number(),
  address: hex40Literal(),
  deployerAddress: hex40Literal(),
  chainId: z.number(),
  axelarChainId: z.string(),
  tokenId: hex64Literal(),
  salt: hex64Literal(),
  deploymentTxHash: hex64Literal(),
  remoteTokens: z.array(
    z.object({
      chainId: z.number(),
      axelarChainId: z.string(),
      address: hex40Literal(),
    })
  ),
});

export type IntercahinTokenDetails = z.infer<
  typeof interchainTokenDetailsSchema
>;

export const accountDetailsSchema = z.object({
  address: hex40Literal(),
  nonce: z.number(),
  interchainTokensIds: z.array(hex64Literal()),
});

export type AccountDetails = z.infer<typeof accountDetailsSchema>;

export const COLLECTIONS = {
  interchainTokens: "interchain-tokens",
  accounts: "accounts",
};

export const COLLECTION_KEYS = {
  interchainTokenDetails: (chainId: number, tokenAddress: `0x${string}`) =>
    [COLLECTIONS.interchainTokens, chainId, tokenAddress].join("/"),

  accountDetails: (accountAddress: `0x${string}`) =>
    [COLLECTIONS.accounts, accountAddress].join("/"),
};

export default class MaestroKVClient {
  constructor(private kv: VercelKV) {}

  async getInterchainTokenDetails(variables: {
    chainId: number;
    tokenAddress: `0x${string}`;
  }) {
    const key = COLLECTION_KEYS.interchainTokenDetails(
      variables.chainId,
      variables.tokenAddress
    );
    const val = await this.kv.get<IntercahinTokenDetails>(key);
    return val;
  }

  async hgetInterchainTokenDetails(
    variables: {
      chainId: number;
      tokenAddress: `0x${string}`;
    },
    field: keyof IntercahinTokenDetails
  ) {
    const key = COLLECTION_KEYS.interchainTokenDetails(
      variables.chainId,
      variables.tokenAddress
    );
    return this.kv.hget<IntercahinTokenDetails>(key, field);
  }

  async setInterchainTokenDetails(
    variables: {
      chainId: number;
      tokenAddress: `0x${string}`;
    },
    details: IntercahinTokenDetails
  ) {
    const key = COLLECTION_KEYS.interchainTokenDetails(
      variables.chainId,
      variables.tokenAddress
    );
    return this.kv.set(key, details);
  }

  async patchInterchainTokenDetials(
    variables: {
      chainId: number;
      tokenAddress: `0x${string}`;
    },
    details: Partial<IntercahinTokenDetails>
  ) {
    const key = COLLECTION_KEYS.interchainTokenDetails(
      variables.chainId,
      variables.tokenAddress
    );
    const value = await this.kv.get<IntercahinTokenDetails>(key);

    await this.kv.set(key, { ...value, ...details });
  }

  async getAccountDetails(accountAddress: `0x${string}`) {
    const key = COLLECTION_KEYS.accountDetails(accountAddress);
    const val = await this.kv.get<AccountDetails>(key);
    return val;
  }

  async hgetAccountDetails(
    accountAddress: `0x${string}`,
    field: keyof AccountDetails
  ) {
    const key = COLLECTION_KEYS.accountDetails(accountAddress);
    const val = await this.kv.hget<AccountDetails>(key, field);
    return val;
  }

  async setAccountDetails(
    accountAddress: `0x${string}`,
    details: AccountDetails
  ) {
    const key = COLLECTION_KEYS.accountDetails(accountAddress);
    await this.kv.set(key, details);
  }

  async patchAccountDetails(
    accountAddress: `0x${string}`,
    details: Partial<AccountDetails>
  ) {
    const key = COLLECTION_KEYS.accountDetails(accountAddress);
    const val = await this.kv.get<AccountDetails>(key);
    const newVal = { ...val, ...details };
    await this.kv.set(key, newVal);
  }
}
