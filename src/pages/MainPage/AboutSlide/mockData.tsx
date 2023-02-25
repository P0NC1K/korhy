import {
  CoffeeCupIcon,
  CoffeeMachineIcon,
  CoffeeStreetCupIcon,
  CupIcon,
  IceCupIcon,
  TeaCupIcon,
} from "../../../public";
import { dataProps } from "./types";

export const contentData: dataProps[] = [
  {
    id: 1,
    title: "Latte",
    content:
      "Combinație perfectă între cafeaua fină si laptele dulce cu o textură catifelată.",
    icon: <CupIcon />,
    anchor: "right",
  },
  {
    id: 2,
    title: "Espresso",
    content:
      "Dulce, amar, acru și sărat, un echilibru perfect între aceste 4 se combină într-o ceașcă simplă de cafea.",
    icon: <CoffeeMachineIcon />,
    anchor: "right",
  },
  {
    id: 3,
    title: "Long black",
    content:
      "Cafea mai ușor de băut ca espresso dublu și în același timp mai aromată ca un espresso lung.",
    icon: <CoffeeCupIcon />,
    anchor: "right",
  },
  {
    id: 4,
    title: "Cappuccino",
    content:
      "Fratele mai mic al latte-ului. Pentru momentele când vreai să savurezi gustul la cafea mai tare ca dulcețea laptelui.",
    icon: <CoffeeStreetCupIcon />,
    anchor: "left",
  },
  {
    id: 5,
    title: "Ceai",
    content:
      "Cappuccino este o specialitate de cafea, la fel de eficientă precum un espresso, dar mai lungă și dulce.",
    icon: <TeaCupIcon />,
    anchor: "left",
  },
  {
    id: 6,
    title: "Cold Brew",
    content:
      "Cafea puternică dar plină de o explozie de gusturi. Și dacă nu vă place singură, combinați-o cu lapte sau apă tonică.",
    icon: <IceCupIcon />,
    anchor: "left",
  },
];
