import {
  generatePrivateKey,
  PrivateKeyAccount,
  privateKeyToAccount,
} from "viem/accounts";

export async function createDummyAccount() {
  if (!globalThis.sessionStorage)
    return privateKeyToAccount(generatePrivateKey());

  const itemKey = "axelar-autogenerated-id-for-deposit-address-api";

  let generatedKeyForAPILogging = globalThis.sessionStorage.getItem(
    itemKey
  ) as `0x${string}`;

  if (!generatedKeyForAPILogging) {
    generatedKeyForAPILogging = generatePrivateKey();
    globalThis.sessionStorage.setItem(itemKey, generatedKeyForAPILogging);
  }
  return privateKeyToAccount(generatedKeyForAPILogging);
}

export function signOtc(account: PrivateKeyAccount, message: string) {
  return account.signMessage({ message });
}