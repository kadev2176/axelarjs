import type { NextConfig } from "next";

import * as trpcNext from "@trpc/server/adapters/next";

import { logger } from "~/lib/logger";
import { createContext } from "~/server/context";
import { appRouter } from "~/server/routers/_app";

export const config: NextConfig = {
  maxDuration: 20,
};

export default trpcNext.createNextApiHandler({
  router: appRouter,
  /**
   * @link https://trpc.io/docs/context
   */
  createContext,
  /**
   * @link https://trpc.io/docs/error-handling
   */
  onError({ error }) {
    if (error.code === "INTERNAL_SERVER_ERROR") {
      // send to bug reporting
      logger.always.error("[tRpcError: Something went wrong]: ", { error });
    }
  },
  /**
   * Enable query batching
   */
  batching: {
    enabled: true,
  },
  /**
   * @link https://trpc.io/docs/caching#api-response-caching
   */
  // responseMeta() {
  //   // ...
  // },
});
