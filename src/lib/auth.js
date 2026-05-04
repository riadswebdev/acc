import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_DB_URI);
const db = client.db("books");

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },
  socialProviders: {
    google: {
      clientId: process.env.Client_ID,
      clientSecret: process.env.Client_secret,
    },
  },

  database: mongodbAdapter(db, {
    client,
  }),
});
