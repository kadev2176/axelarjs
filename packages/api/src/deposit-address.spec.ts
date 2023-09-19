import { ENVIRONMENTS } from "@axelarjs/core";

import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";

import { type OTC } from "./deposit-address";
import { createDepositAddressApiNodeClient } from "./deposit-address/node";

describe("deposit address client (node)", () => {
  describe("get OTC", () => {
    test("It should get an OTC", async () => {
      const api = createDepositAddressApiNodeClient(ENVIRONMENTS.testnet);
      const otcRes = await api.getOTC({
        signerAddress: "0xB8Cd93C83A974649D76B1c19f311f639e62272BC",
      });
      expect(
        otcRes.validationMsg?.includes(
          "Verify I'm a real user with this one-time-code"
        )
      ).toBeTruthy();
    });
  });

  describe("get deposit address", () => {
    test("It should get a deposit address after generating a unique OTC", async () => {
      const api = createDepositAddressApiNodeClient(ENVIRONMENTS.testnet);
      const dummyAccount = privateKeyToAccount(generatePrivateKey());
      const otcRes: OTC = await api.getOTC({
        signerAddress: dummyAccount.address,
      });
      const fromChain = "osmosis-6",
        toChain = "ethereum-2",
        asset = "uaxl";
      const depositAddressResponse = await api.requestDepositAddress({
        fromChain,
        toChain,
        destinationAddress: dummyAccount.address,
        signature: await dummyAccount.signMessage({
          message: otcRes.validationMsg,
        }),
        publicAddress: dummyAccount.address,
        asset,
      });
      const expectedResponse = `{"assetCommonKey":"${asset}","destinationAddress":"${dummyAccount.address}","destinationChainIdentifier":"${toChain}","sourceModule":"axelarnet","type":"link"}`;
      expect(depositAddressResponse.data.roomId).toEqual(expectedResponse);
    });
  });
});