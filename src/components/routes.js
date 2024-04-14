import Details from "../pages/details";
import Faq from "../pages/faq";
import HomePage from "../pages/hompage";
import Photo from "../pages/photo";
import Story from "../pages/story";
import Appreciation from "./appreciation";
import Layout from "./layout";

export const routes_group = [
  {
    element: Layout,
    path: "/home",
  },
  {
    element: Story,
    path: "/our-love-note",
  },
  {
    element: Details,
    path: "/how-we-met",
  },
  {
    element: Photo,
    path: "/pictures",
  },
  {
    element: Appreciation,
    path: "/appreciation",
  },
];
