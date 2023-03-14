import { Route } from "@tanstack/react-location";
import { Bemutatkozas } from "./Bemutatkozas";
import { Fooldal } from "./Fooldal";
import { Kapcsolat } from "./Kapcsolat";

export const routes: Route[] = [
  {
    path: "/",
    element: <Fooldal />,
  },
  {
    path: "/bemutatkozas",
    element: <Bemutatkozas />,
  },
  {
    path: "/kapcsolat",
    element: <Kapcsolat />,
  },
];
