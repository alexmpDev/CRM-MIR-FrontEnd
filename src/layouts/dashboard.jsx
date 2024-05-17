import { Routes, Route } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import {
  Sidenav,
  DashboardNavbar,
  Configurator,
  Footer,
} from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDashboard } from "@/slices/auth/thunks";
import { Home, Students } from "@/pages/dashboard";
import Books from "@/pages/dashboard/books/books";
import Reservations from "@/pages/dashboard/reservations/reservations";
import WcIndex from "@/pages/dashboard/wc/wcIndex";
import Events from "@/pages/dashboard/events/events";

export function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;
  const { authToken, dashboard } = useSelector(state => state.auth)
  if (dashboard) {
    routes[0].pages = JSON.parse(dashboard)
  }
  console.log(routes)

  function getRoute(name, path) {
    switch (name) {
      case "dashboard":
        return <Route exact path={path} element={<Home />} />
      case "students":
        return <Route exact path={path} element={<Students />} />
      case "Books":
        return <Route exact path={path} element={<Books />} />
      case "Reservations":
        return <Route exact path={path} element={<Reservations />} />
      case "Pase de Baño":
        return <Route exact path={path} element={<WcIndex />} />
      case "Events":
        return <Route exact path={path} element={<Events />} />
      default:
        return <Route exact path={path} element={<WcIndex />} />;
        break;
    }
  }
  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav
        routes={routes}
        brandImg={
          sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
        }
      />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
        <Configurator />
        <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton>
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ name, path }) => (
                getRoute(name, path)
              ))
          )}
        </Routes>
        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
