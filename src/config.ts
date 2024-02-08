import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "no"] as const;

export const pathnames = {
  "/": "/",
  "/art": {
    en: "/art/[image]",
    no: "/kunst/[image]",
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
