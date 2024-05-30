type SubNavLink = {
  text: string;
  url: string;
};

type NavLink = {
  text: string;
  url?: string;
  subLinks?: SubNavLink[];
};

export const navLinks: NavLink[] = [
  {
    text: "Pricing",
    url: "/pricing",
  },
  {
    text: "About",
    url: "/about",
  },
  {
    text: "Blog",
    url: "/blog",
  },
  {
    text: "Wall of Love",
    url: "/wall",
  },
  {
    text: "Resources",
    subLinks: [
      {
        text: "404",
        url: "/404",
      },
      {
        text: "Support",
        url: "/support",
      },
    ],
  },
];
