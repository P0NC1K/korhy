import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YouTubeIcon,
} from "../../public";

export const internalLinks = [
  {
    id: 1,
    label: "Companie",
    links: [
      { id: 1, label: "Despre noi", href: "" },
      { id: 2, label: "Ofertele noastre", href: "" },
    ],
  },
  {
    id: 2,
    label: "Product",
    links: [
      { id: 1, label: "Abonamente", href: "" },
      { id: 2, label: "Cafenelele Disponibile", href: "" },
      { id: 3, label: "Comandă", href: "" },
    ],
  },
];

export const externalLinks = [
  {
    id: 1,
    icon: <FacebookIcon />,
    href: "",
  },
  {
    id: 2,
    icon: <TwitterIcon />,
    href: "",
  },
  {
    id: 3,
    icon: <YouTubeIcon />,
    href: "",
  },
  {
    id: 4,
    icon: <LinkedinIcon />,
    href: "",
  },
  {
    id: 5,
    icon: <InstagramIcon />,
    href: "",
  },
];

export const BottomLink = [
  {
    id: 1,
    label: "Privacy",
    href: "",
  },
  {
    id: 2,
    label: "Accessibility",
    href: "",
  },
  {
    id: 3,
    label: "Terms",
    href: "",
  },
];
