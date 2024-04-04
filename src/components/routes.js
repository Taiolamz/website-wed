import Details from "../pages/details";
import Faq from "../pages/faq";
import HomePage from "../pages/hompage";
import Story from "../pages/story";
import Layout from "./layout";

export const routes_group = [
  {
    element: Layout,
    path: "/home",
  },
  {
    element: Story,
    path: "/our-story",
  },
  {
    element: Details,
    path: "/details",
  },
  {
    element: Faq,
    path: "/faq",
  },
];
