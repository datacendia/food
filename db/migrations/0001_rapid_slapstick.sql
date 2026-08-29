CREATE TABLE "dish_edits" (
	"dish_id" integer PRIMARY KEY NOT NULL,
	"name" text,
	"name_es" text,
	"fusion" text,
	"fusion_es" text,
	"price" real,
	"category" text,
	"needs_licence" boolean,
	"tiers" jsonb,
	"updated_by" text,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "site_copy" (
	"key" text PRIMARY KEY NOT NULL,
	"en" text NOT NULL,
	"es" text NOT NULL,
	"section" text DEFAULT 'general' NOT NULL,
	"updated_by" text,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "locale" text DEFAULT 'es' NOT NULL;--> statement-breakpoint
ALTER TABLE "dish_edits" ADD CONSTRAINT "dish_edits_updated_by_users_id_fk" FOREIGN KEY ("updated_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "site_copy" ADD CONSTRAINT "site_copy_updated_by_users_id_fk" FOREIGN KEY ("updated_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;