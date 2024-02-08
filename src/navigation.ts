import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "no"] as const;
export const localePrefix = "always"; // Default

export const pathnames = {
  "/": "/",

  "/art/[image]": {
    en: "/art/[image]",
    no: "/kunst/[image]",
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
