import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
//layouts

import MainLayout from "./layout/MainLayout";

import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import RootLayout from "./layout/RootLayout";
import ResetPassword from "./pages/ResetPassword";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import VisitorsPage from "./pages/VisitorsPage";
import VehiclesPage from "./pages/VehiclesPage";
import AllAttendancePage from "./pages/AllAttendancePage";
import VehiclesAnalyser from "./pages/VehiclesAnalyser";
import VisitorsAnalyser from "./pages/VisitorAnalyser";
import Users from "./pages/Users";
import LeaveManagementPage from "./pages/LeaveManagementPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="login" element={<Login />} />
      <Route path="reset" element={<ResetPassword />} />

      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="/users" element={<Users />} />

        <Route path="/all-attendance" element={<AllAttendancePage />} />

        <Route path="/all-leave" element={<LeaveManagementPage />} />

        <Route path="/visitors" element={<VisitorsPage />} />
        <Route path="/visitors-analyser" element={<VisitorsAnalyser />} />

        <Route path="/vehicles" element={<VehiclesPage />} />
        <Route path="/vehicles-analyser" element={<VehiclesAnalyser />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// import "./App.css";
// import Navbar from "./components/Navbar";
// import Dashboard from "./pages/Dashboard";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Dashboard />
//     </div>
//   );
// }

// export default App;
