import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { StudentsEdit } from "./pages/dashboard/students/studentsEdit";
import StudentsCreate from "./pages/dashboard/students/studentsCreate";
import BooksEdit from "./pages/dashboard/books/booksEdit";
import BooksCreate from "./pages/dashboard/books/booksCreate";
import StudentsShow from "./pages/dashboard/students/studentsShow";
import Phones from "./pages/dashboard/contactPhone/phoneList";
import PhoneCreate from "./pages/dashboard/contactPhone/phoneCreate";
import PhoneEdit from "./pages/dashboard/contactPhone/phoneEdit";
import Observations from "./pages/dashboard/observationStudents/observations";
import ObservationEdit from "./pages/dashboard/observationStudents/observationsEdit";
import ObservationCreate from "./pages/dashboard/observationStudents/observationCreate";
import ReservationsCreate from "./pages/dashboard/reservations/reservationsCreate";
import ReservationsShow from "./pages/dashboard/reservations/reservationShow";
import WcCreate from "./pages/dashboard/wc/wcCreate";
import WcList from "./pages/dashboard/wc/wcList";

function App() {
  return (
    <Routes>
      <Route path="/crear-pases-de-bano" element={<WcCreate />} />
      <Route path="/moderar-pases-de-bano" element={<WcList />} />
      <Route path="/books" element={<BooksCreate />} />
      <Route path="/books/:id" element={<BooksEdit />} />
      <Route path="/reservations" element={<ReservationsCreate />} />
      <Route path="/reservations/show/:id" element={<ReservationsShow />} />
      <Route path="/students" element={<StudentsCreate />} />
      <Route path="/students/phone/edit/:id" element={<PhoneEdit />} />
      <Route path="/students/observations/create/:id" element={<ObservationCreate />} />
      <Route path="/students/observations/edit/:id" element={<ObservationEdit />} />
      <Route path="/students/phone/create/:id" element={<PhoneCreate />} />
      <Route path="/students/phone/:id" element={<Phones />} />
      <Route path="/students/observations/:id" element={<Observations />} />
      <Route path="/students/show/:id" element={<StudentsShow />} />
      <Route path="/students/:id" element={<StudentsEdit />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}

export default App;
