import {
  triggerGetDepositAddressFromAxelar,
  validateAddress,
  validateChainIds,
  waitForDepositAddress,
} from "./helpers";
import { SendOptions } from "./types";

async function getDepositAddress(params: SendOptions) {
  /**
   * input validation
   */
  validateAddress(params.destinationAddress);
  validateChainIds([params.sourceChain, params.destinationChain]);

  /**
   * invoke API to get deposit address
   */
  triggerGetDepositAddressFromAxelar(params);

  /**
   * wait for and return deposit address
   */
  return waitForDepositAddress(params);
}

export default getDepositAddress;
