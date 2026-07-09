import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { verifyAuth } from "./auth";
import constants from "node:constants";

export const create = mutation({
    args: {
        name: v.string(),
    },
    handler: async (ctx, args) => {
        const identity = await verifyAuth(ctx);
       const projectId = await ctx.db.insert("projects", {
            name: args.name,
            ownerId: identity.subject,
        })
        return projectId;
    }
});

export const get = query({
    args: {},
    handler: async (ctx) => {
        const identity = await verifyAuth(ctx);
        return await ctx.db.query("projects").withIndex("by_owner", (q) => q.eq("ownerId", identity.subject)).collect();
    },
});