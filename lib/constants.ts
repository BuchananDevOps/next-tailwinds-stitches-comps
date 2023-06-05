export const SITE_URL = "https://buchanan.com"
export const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin
export const TWITTER_USER_NAME = "buchanancomp"
export const BRAND_NAME = "Buchanan Computer"
export const SITE_NAME_MULTILINE = ["Buchanan", "Computer"]
export const SITE_NAME = "Buchanan Computer"
export const META_DESCRIPTION =
  "Buchanan Computer is getting a makeover at the moment."
export const SITE_DESCRIPTION =
  "Buchanan Computer is getting a makeover at the moment."
export const TWEET_TEXT = META_DESCRIPTION
export const COOKIE = "user-id"

export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER

export const CODE_OF_CONDUCT = "https://buchanancomputer.com"
export const REPO = "https://github.com/BuchananDevOps/buchanan-computer.git"
export const NAVIGATION = [
  {
    name: "Portfolio",
    route: "/portfolio/",
  },
  {
    name: "Contact",
    route: "contact",
  },
]
