import App from "./App";
import HomeScreen from "./pages/home/HomeScreen";

const routes = [
    {
    path: "/",
    element: <App />,
    errorElement: <h1>ERRO 404! Página não encontrada.</h1>,
    children: [
      {
        path: '/',
        element: <HomeScreen />
      }
    ]
  }
];

export default routes;