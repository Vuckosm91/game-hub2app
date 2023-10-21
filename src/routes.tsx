import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "./pages/GameDetailPage";
import HomePAge from "./pages/HomePAge";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePAge /> },
      { path: "/games/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
