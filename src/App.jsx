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
import EventsEdit from "./pages/dashboard/events/eventsEdit";
import EventsCreate from "./pages/dashboard/events/eventsCreate";
import EventsShow from "./pages/dashboard/events/eventsShow";
import TicketValidation from "./pages/dashboard/events/ticketValidation";
import { useDispatch, useSelector } from "react-redux";
import { setAuthToken, setDashboard, setName, setRole } from "./slices/auth/authSlice";
import BookShow from "./pages/dashboard/books/bookShow";

function App() {
  const dispatch = useDispatch();
  dispatch(setName(localStorage.getItem('user')))
  dispatch(setAuthToken(localStorage.getItem('authToken')))
  dispatch(setDashboard(localStorage.getItem('menu')))
  dispatch(setRole(localStorage.getItem('role')))

  const { role } = useSelector(state => state.auth)

  switch (role) {
    case 1:
      return (
        <Routes>
          <Route path="/tickets/validate/:ticketId" element={<TicketValidation/>} />
          <Route path="/books" element={<BooksCreate />} />
          <Route path="/books/show/:id" element={<BookShow />} />
          <Route path="/books/:id" element={<BooksEdit />} />
          <Route path="/reservations" element={<ReservationsCreate />} />
          <Route path="/reservations/show/:id" element={<ReservationsShow />} />
          <Route path="/crear-pases-de-bano" element={<WcCreate />} />
          <Route path="/moderar-pases-de-bano" element={<WcList />} />
          <Route path="/students" element={<StudentsCreate />} />
          <Route path="/students/phone/edit/:id" element={<PhoneEdit />} />
          <Route path="/students/observations/create/:id" element={<ObservationCreate />} />
          <Route path="/students/observations/edit/:id" element={<ObservationEdit />} />
          <Route path="/students/phone/create/:id" element={<PhoneCreate />} />
          <Route path="/students/phone/:id" element={<Phones />} />
          <Route path="/students/observations/:id" element={<Observations />} />
          <Route path="/students/:id" element={<StudentsEdit />} />
          <Route path="/events" element={<EventsCreate />} />
          <Route path="/events/show/:id" element={<EventsShow />} />
          <Route path="/events/:id" element={<EventsEdit />} />
          <Route path="/students/show/:id" element={<StudentsShow />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
        </Routes>
      );
    case 2:
    case 4:
      return (
        <Routes>
          <Route path="/tickets/validate/:ticketId" element={<TicketValidation/>} />
          <Route path="/crear-pases-de-bano" element={<WcCreate />} />
          <Route path="/moderar-pases-de-bano" element={<WcList />} />
          <Route path="/students" element={<StudentsCreate />} />
          <Route path="/students/phone/edit/:id" element={<PhoneEdit />} />
          <Route path="/students/observations/create/:id" element={<ObservationCreate />} />
          <Route path="/students/observations/edit/:id" element={<ObservationEdit />} />
          <Route path="/students/phone/create/:id" element={<PhoneCreate />} />
          <Route path="/students/phone/:id" element={<Phones />} />
          <Route path="/students/observations/:id" element={<Observations />} />
          <Route path="/students/:id" element={<StudentsEdit />} />
          <Route path="/events" element={<EventsCreate />} />
          <Route path="/events/show/:id" element={<EventsShow />} />
          <Route path="/events/:id" element={<EventsEdit />} />
          <Route path="/students/show/:id" element={<StudentsShow />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
        </Routes>
      );
    case 3:
      return (
        <Routes>
          <Route path="/books" element={<BooksCreate />} />
          <Route path="/books/show/:id" element={<BookShow />} />
          <Route path="/books/:id" element={<BooksEdit />} />
          <Route path="/reservations" element={<ReservationsCreate />} />
          <Route path="/reservations/show/:id" element={<ReservationsShow />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
        </Routes>
      );
    case 5:
      return (
        <Routes>
          <Route path="/tickets/validate/:ticketId" element={<TicketValidation/>} />
          <Route path="/students/show/:id" element={<StudentsShow />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
        </Routes>
      )
    default:
      return (
        <Routes>         
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
        </Routes>
      )
  }
 

}

export default App;
