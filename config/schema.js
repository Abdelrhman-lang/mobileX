import {
  integer,
  numeric,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  phone: text("phone"),
  address: text("address"),
});

export const cartTable = pgTable("cart", {
  id: serial("id").primaryKey(),
  userId: text("user_id"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const cartItemsTable = pgTable("cart_items", {
  id: serial("id").primaryKey(),
  cartId: integer("cart_id")
    .references(() => cartTable.id)
    .notNull(),
  externalId: text("external_id").notNull(),
  name: text("name").notNull(),
  price: numeric("price").notNull(),
  image: text("image").notNull(),
  quantity: integer("quantity").default(1).notNull(),
});
export const whislistTable = pgTable("whislist", {
  id: serial("id").primaryKey(),
  userId: text("user_id"),
});

export const whislistItemsTable = pgTable("whislist_items", {
  id: serial("id").primaryKey(),
  whislistId: integer("whislist_id")
    .references(() => whislistTable.id)
    .notNull(),
  externalId: text("external_id").notNull(),
  name: text("name").notNull(),
  price: numeric("price").notNull(),
  image: text("image").notNull(),
});

export const ordersTable = pgTable("orders", {
  id: serial("id").primaryKey(),
  userId: text("user_id"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  status: text("status").default("pending").notNull(),
});

export const orderItemsTable = pgTable("order_items", {
  id: serial("id").primaryKey(),
  orderId: integer("order_id")
    .references(() => ordersTable.id)
    .notNull(),
  externalId: integer("external_id").notNull(),
  name: text("name").notNull(),
  price: numeric("price").notNull(),
  image: text("image").notNull(),
  quantity: integer("quantity").default(1).notNull(),
});
