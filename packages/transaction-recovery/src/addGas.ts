import cosmos from "@axelarjs/cosmos";

const addGas = async (): Promise<any> => {
  console.log("running addGas");
  const config = {
    environment: "TESTNET",
    axelarRpcUrl: "https://axelartest-rpc.quickapi.com",
  };
  const signingClient = await cosmos.AxelarSigningClient.init(config);

  const txHash = `A6516262B303AF6D5D1599F46B52D2ED47DC1C1FFA3E56822A4313916C9AC8C4`;
  const tx = await signingClient.getTx(txHash);
  console.log({ tx });

  // send ibc transfer with memo field using message ID from tx above
  // todo

  return {};
};

export default addGas;
