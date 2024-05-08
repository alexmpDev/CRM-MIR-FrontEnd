import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { StudentsEdit } from "./pages/dashboard/students/studentsEdit";
import StudentsCreate from "./pages/dashboard/students/studentsCreate";
import BooksEdit from "./pages/dashboard/books/booksEdit";
import BooksCreate from "./pages/dashboard/books/booksCreate";

function App() {
  return (
    <Routes>
      <Route path="/books" element={<BooksCreate />} />
      <Route path="/books/:id" element={<BooksEdit />} />
      <Route path="/students" element={<StudentsCreate />} />
      <Route path="/students/:id" element={<StudentsEdit />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}

export default App;
