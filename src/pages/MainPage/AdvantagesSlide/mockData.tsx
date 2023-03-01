import { CoffeePhoneIcon, SalePhoneIcon, VaseIcon } from "../../../public";
import { DataType } from "./types";

export const contentData: DataType[] = [
  {
    id: 1,
    title: "Comandă online",
    content: "Cafeaua ta se află doar la un click distanță",
    icon: <CoffeePhoneIcon />,
  },
  {
    id: 2,
    title: "Abonamente",
    content:
      "Ia un abonament de 30, 60, 90 cafenele pe lună și profită de reducere",
    icon: <VaseIcon />,
  },
  {
    id: 2,
    title: "Economisește timpul",
    content: " Pentru ați lua cafeau, fă o comandă maxim 2 minute înainte",
    icon: <SalePhoneIcon />,
  },
];
