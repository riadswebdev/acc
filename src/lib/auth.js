import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_DB_URI);
const db = client.db();

const appUrl = process.env.NEXT_PUBLIC_APP_URL;
const vercelOrigin =
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined;
const trustedOrigins = ["http://localhost:3000", appUrl, vercelOrigin].filter(
  Boolean,
);

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins,
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  database: mongodbAdapter(db, {
    client,
  }),
});
