import { publicProcedure, router } from "~/server/trpc";
import { authRouter } from "./auth";
import { axelarjsSDKRouter } from "./axelarjsSDK";
import { axelarscanRouter } from "./axelarscan";
import { erc20Router } from "./erc20";
import { gmpRouter } from "./gmp";
import { interchainTokenRouter } from "./interchainToken";

export const appRouter = router({
  uptime: publicProcedure.query(async () => ({
    uptime: process.uptime(),
  })),
  gmp: gmpRouter,
  axelarscan: axelarscanRouter,
  erc20: erc20Router,
  axelarjsSDK: axelarjsSDKRouter,
  interchainToken: interchainTokenRouter,
  auth: authRouter,
});

export type AppRouter = typeof appRouter;
