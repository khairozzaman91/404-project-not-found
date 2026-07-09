import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../pages/Login/LoginPage";
import TasksPage from "../pages/Tasks/TasksPage";
import AnnotationPage from "../pages/Annotation/AnnotationPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/annotate" element={<AnnotationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;