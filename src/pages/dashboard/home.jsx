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
          The project involves replacing the old cardboard cards with a personalized QR system for each student. This QR will be used by the teaching staff to manage and monitor various school activities. In addition to restroom management, the system will include features such as an updated version of the student ID card for more efficient information management, as well as a system for registering and borrowing library books. It will also incorporate an event management functionality, extending the system's utility beyond immediate needs.        
        </p>
      </header>
    </div>
  );
}

export default Home;
