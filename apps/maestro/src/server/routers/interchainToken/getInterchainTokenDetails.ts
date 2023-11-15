import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { hex40Literal } from "~/lib/utils/validation";
import { publicProcedure } from "~/server/trpc";

export const getInterchainTokenDetails = publicProcedure
  .input(
    z.object({
      chainId: z.number(),
      tokenAddress: hex40Literal(),
    })
  )
  .query(async ({ input, ctx }) => {
    // translate the chainId to the corresponding axelar chainId
    const axelarChainId = ctx.configs.evmChains[input.chainId]?.info.id;

    const tokenRecord =
      await ctx.persistence.postgres.getInterchainTokenByChainIdAndTokenAddress(
        axelarChainId,
        input.tokenAddress
      );

    if (!tokenRecord) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: `Interchain token ${input.tokenAddress} not found on chain ${input.chainId}`,
      });
    }

    if (tokenRecord.deployerAddress !== ctx.session?.address) {
      return {
        ...tokenRecord,
        // salt is not returned if the caller is not the deployer
        salt: "0x".concat("0".repeat(64)),
      };
    }

    return tokenRecord;
  });
