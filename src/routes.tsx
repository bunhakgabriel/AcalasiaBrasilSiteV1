import App from "./App";
import MensagemEnviada from "./pages/contato/componentes/MensagemEnviada";
import Contato from "./pages/contato/Contato";
import Equipe from "./pages/equipe/Equipe";
import HomeScreen from "./pages/home/HomeScreen";
import Portifolio from "./pages/portifolio/Portifolio";
import QuemSomosScreen from "./pages/quem-somos/QuemSomosScreen";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <h1>ERRO 404! Página não encontrada.</h1>,
    children: [
      {
        path: '/',
        element: <HomeScreen />
      },
      {
        path: '/quem_somos',
        element: <QuemSomosScreen />
      },
      {
        path: '/equipe',
        element: <Equipe />
      },
      {
        path: '/portifolio',
        element: <Portifolio />
      },
      {
        path: '/contato',
        element: <Contato />,
      },
    ]
  },
  {
    path: '/mensagem-enviada',
    element: <MensagemEnviada />,
  },
];

export default routes;