import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { publicProcedure, router } from "~/server/trpc";

export const gmpRouter = router({
  getTransactionStatus: publicProcedure
    // a procedure must have a schema for input validation, we use zod for this: https://zod.dev/
    .input(
      z.object({
        txHash: z.string().regex(/^(0x)?[0-9a-f]{64}$/i),
      })
    )
    // a procedure can either be a query or a mutation
    // a query is a read-only operation, a mutation is a write operation
    .query(async ({ input, ctx }) => {
      try {
        const gmpResponse = await ctx.clients.gmp.searchGMP({
          txHash: input.txHash as `0x${string}`,
        });

        if (gmpResponse.data.length) {
          return gmpResponse.data[0].status;
        }

        // If we don't find the transaction, we throw a 404 error
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Transaction not found",
        });
      } catch (error) {
        // If we get a TRPC error, we throw it
        if (error instanceof TRPCError) {
          throw error;
        }
        // otherwise, we throw an internal server error
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to get transaction status",
        });
      }
    }),
});

// export type definition of API
export type GMPRouter = typeof gmpRouter;
