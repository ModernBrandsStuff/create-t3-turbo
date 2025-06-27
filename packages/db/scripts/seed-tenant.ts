import { db } from "@acme/db";
import { tenants } from "@acme/db";

await db.insert(tenants).values({ name: "Acme Inc." });
console.log("Seeded Acme tenant ✔");

import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schema from "./schema";

const sqlite = new Database("dev.db");          // points at the same file as DATABASE_URL
export const db = drizzle(sqlite, { schema });  // <-- exported!
