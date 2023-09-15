import { ENVIRONMENTS } from "@axelarjs/core";

import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { vi } from "vitest";

import { type AutocalculateGasOptions, type SendOptions } from "../types";
import { addGas } from "./addGas";

const MOCK_ADD_GAS_RESPONSE = {
  code: 0,
  height: 2561692,
  txIndex: 6,
  events: [[]],
  rawLog: "",
  transactionHash:
    "448337FAAAA9EAD528BB9D6B1DD32BDD5171988A87B9C5D1F8578D9927714918",
  msgResponses: [],
  gasUsed: 130739,
  gasWanted: 250000,
};

vi.mock("../cosmosSigner/signer", () => {
  const mockAddGasSignAndBroadcast = () => MOCK_ADD_GAS_RESPONSE;

  const getCosmosSigner = vi.fn(() => ({
    signAndBroadcast: vi.fn().mockImplementation(mockAddGasSignAndBroadcast),
  }));

  return {
    getCosmosSigner,
  };
});

describe("addGas", () => {
  test("broadcast an IBC transfer", async () => {
    const txHash =
      "6118C285B0C7A139C5636184BECBF8C201FF36B61F44060B82EFE4C535084D9C";

    const token = {
      denom:
        "ibc/9463E39D230614B313B487836D13A392BD1731928713D4C8427A083627048DB3",
      amount: "1",
    };
    const offlineSigner = await DirectSecp256k1HdWallet.fromMnemonic(
      process.env["COSMOS_WALLET_MNEMONIC"] as string,
      { prefix: "osmo" }
    );

    const sendOptions: SendOptions = {
      txFee: {
        gas: "250000",
        amount: [{ denom: "uosmo", amount: "30000" }],
      },
      rpcUrl: "https://rpc.osmotest5.osmosis.zone",
      environment: ENVIRONMENTS.testnet,
      offlineSigner,
    };

    const res = await addGas({
      txHash,
      token,
      sendOptions,
      chain: "osmosis-6",
    });

    expect(res).toEqual({
      broadcastResult: MOCK_ADD_GAS_RESPONSE,
      info: "",
      success: true,
    });
  });

  test("autocalculate", async () => {
    const txHash =
      "6118C285B0C7A139C5636184BECBF8C201FF36B61F44060B82EFE4C535084D9C";

    const autocalculateGasOptions: AutocalculateGasOptions = {
      gasLimit: BigInt(700_000),
      gasMultipler: 1.1,
    };

    const offlineSigner = await DirectSecp256k1HdWallet.fromMnemonic(
      process.env["COSMOS_WALLET_MNEMONIC"] as string,
      { prefix: "osmo" }
    );

    const sendOptions: SendOptions = {
      txFee: {
        gas: "250000",
        amount: [{ denom: "uosmo", amount: "30000" }],
      },
      environment: ENVIRONMENTS.testnet,
      offlineSigner,
    };

    const res = await addGas({
      txHash,
      token: "autocalculate",
      sendOptions,
      autocalculateGasOptions,
      chain: "osmosis-6",
    });

    expect(res).toEqual({
      broadcastResult: MOCK_ADD_GAS_RESPONSE,
      info: "",
      success: true,
    });
  });
});