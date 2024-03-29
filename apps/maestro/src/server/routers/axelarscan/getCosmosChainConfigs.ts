import { TRPCError } from "@trpc/server";

import { IS_STAGING } from "~/config/app";
import { NEXT_PUBLIC_DISABLED_CHAINS } from "~/config/env";
import { publicProcedure } from "~/server/trpc";

export const getCosmosChainConfigs = publicProcedure.query(async ({ ctx }) => {
  try {
    const { cosmos } = await ctx.services.axelarscan.getChainConfigs({
      disabledChains: NEXT_PUBLIC_DISABLED_CHAINS,
      isStaging: IS_STAGING,
    });

    return cosmos;
  } catch (error) {
    // If we get a TRPC error, we throw it
    if (error instanceof TRPCError) {
      throw error;
    }
    // otherwise, we throw an internal server error
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Failed to get chain config",
    });
  }
});
