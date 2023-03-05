import { Button } from "../../../components";
import market1 from "../../../public/img/market1.jpg";
import market2 from "../../../public/img/market2.jpg";

export const contentData = [
  {
    id: 1,
    image: market1,
    name: "Human Coffee",
    street: "Strada Elena Cuza 8, București",
    Button: <Button label="Comandă" $variant="contained" $size="small" />,
  },
  {
    id: 2,
    image: market2,
    name: "Beans & Dots",
    street: "Strada Ion Brezoianu 23-25, București",
    Button: <Button label="Comandă" $variant="contained" $size="small" />,
  },
];
