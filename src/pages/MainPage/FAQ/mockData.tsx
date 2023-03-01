import { CreditCardIcon, MailIcon, SlashIcon } from "../../../public";
import { dataProps } from "./types";

export const contentData: dataProps[] = [
  {
    id: 1,
    title: "Ce sa fac dacă vreau sa schimb cafeneaua?",
    content:
      "La moment nu este posibila schimbarea cafenelei dacă deja a-ți procurat abonamentul, astfel pentru aceasta e nevoie sa procurati un alt abonament pentru cafeneaua dorită.",
    icon: <MailIcon />,
  },
  {
    id: 2,
    title: "Pot sa fac comanda din timp dacă nu am abonament?",
    content:
      "Da, simplu fără sa cumparati abonament, alegeți cafeneaua la care ve-ți efectua comanda, după alegeți cafeaua dorită și indicați in cat timp veți ajunge. După achitati ori cash la cafenea ori online prin site.",
    icon: <CreditCardIcon />,
  },
  {
    id: 3,
    title: "Cum fac comanda?",
    content:
      "Pentru a face o comanda, trebuie sa intrati la secțiunea comanda, alegeți cafeaua dorită, menționați în cat timp ajungeți și achitati. Daca aveti abonament procurat alegeti cafeaua disponibila la abonament si mentionati in cat timp veți ajunge la cafenea.",
    icon: <SlashIcon />,
  },
];
