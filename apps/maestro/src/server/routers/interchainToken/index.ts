import { router } from "~/server/trpc";
import { getInterchainTokenABI } from "./getInterchainTokenABI";
import { getInterchainTokenDetails } from "./getInterchainTokenDetails";
import { getInterchainTokenServiceABI } from "./getInterchainTokenServiceABI";
import { recordInterchainTokenDeployment } from "./recordInterchainTokenDeployment";
import { recordRemoteTokensDeployment } from "./recordRemoteTokensDeployment";
import { searchInterchainToken } from "./searchInterchainToken";

export const interchainTokenRouter = router({
  getInterchainTokenABI,
  getInterchainTokenServiceABI,
  getInterchainTokenDetails,
  searchInterchainToken,
  recordInterchainTokenDeployment,
  recordRemoteTokensDeployment,
});

// export type definition of API
export type InterchainTokenRouter = typeof interchainTokenRouter;
