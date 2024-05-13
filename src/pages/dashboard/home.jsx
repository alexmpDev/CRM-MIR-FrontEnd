import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import {
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";

export function Home() {
  return (
    <div className="mt-12">
      <header className="text-center">
        <h1 className="text-3xl font-bold mb-4">Bienvenido a CRM-MIR</h1>
        <img src="/img/jmir.jpeg" alt="Imagen de la app" className="mx-auto rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1.8/3" />
        <p className="mt-4 text-lg text-gray-700">
          El proyecto consiste en substituir les antigues targetes de cartó per un sistema de QR personalitzat per a cada alumne. Aquest QR serà utilitzat per l'equip docent per a gestionar i monitoritzar diverses activitats escolars. A més de la gestió del lavabo, el sistema inclourà funcionalitats com una versió actualitzada del carnet d'estudiants per a una gestió més eficaç de la informació, així com un sistema de registre i préstec de llibres de la biblioteca. També incorporarà una funcionalitat de gestió d'esdeveniments, ampliant la utilitat del sistema més enllà de les necessitats immedi
        </p>
      </header>
    </div>
  );
}

export default Home;
