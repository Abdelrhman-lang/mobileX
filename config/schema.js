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
  role: text("role").default("user").notNull(),
});

export const productsTable = pgTable("products", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  title: varchar("title").notNull(),
  description: varchar("description").notNull(),
  category: varchar("category").notNull(),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  quantity: integer("quantity").notNull().default(0),
  lowStock: integer("lowStock").default(5),
  createdAt: timestamp("created_at").defaultNow(),
  image: text("image"),
});

export const cartTable = pgTable("cart", {
  id: serial("id").primaryKey(),
  userEmail: text("user_email"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const cartItemsTable = pgTable("cart_items", {
  id: serial("id").primaryKey(),
  cartId: integer("cart_id")
    .references(() => cartTable.id)
    .notNull(),
  productId: integer("product_id")
    .references(() => productsTable.id)
    .notNull(),
  name: text("name").notNull(),
  price: numeric("price").notNull(),
  image: text("image").notNull(),
  quantity: integer("quantity").default(1).notNull(),
});
export const whislistTable = pgTable("whislist", {
  id: serial("id").primaryKey(),
  userEmail: text("user_email"),
});

export const whislistItemsTable = pgTable("whislist_items", {
  id: serial("id").primaryKey(),
  whislistId: integer("whislist_id")
    .references(() => whislistTable.id)
    .notNull(),
  productId: integer("product_id")
    .references(() => productsTable.id)
    .notNull(),
  name: text("name").notNull(),
  price: numeric("price").notNull(),
  image: text("image").notNull(),
});

export const ordersTable = pgTable("orders", {
  id: serial("id").primaryKey(),
  userEmail: text("user_email"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  status: text("status").default("pending").notNull(),
});

export const orderItemsTable = pgTable("order_items", {
  id: serial("id").primaryKey(),
  orderId: integer("order_id")
    .references(() => ordersTable.id)
    .notNull(),
  productId: integer("product_id")
    .references(() => productsTable.id)
    .notNull(),
  name: text("name").notNull(),
  price: numeric("price").notNull(),
  image: text("image").notNull(),
  quantity: integer("quantity").default(1).notNull(),
});
