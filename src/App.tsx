import { Route, Routes } from "react-router-dom";
import Login from "./features/auth/Screens/Login";
import ProtectedRoute from "./Layout/ProtectedRoute";
import Layout from "./Layout/Layout";
import UserDashboard from "./features/user/screens/UserDashboard";
import { ToastContainer } from "react-toastify";
import AttendaceScreen from "./SharedScreens/AttendaceScreen/AttendaceScreen";
import EmpMngListScreen from "./SharedScreens/EmpMngListScreen/EmpMngListScreen";
import EmpDetailsScreen from "./SharedScreens/EmpDetailsScreen/EmpDetailsScreen";
import UserVerificationScreen from "./SharedScreens/UserVerificationScreen/UserVerificationScreen";
import PaymentIssuseScreen from "./SharedScreens/PaymentIssuseScreen/PaymentIssuseScreen";
import NotificationScreen from "./SharedScreens/NotificationScreen/NotificationScreen";
import SupportDashboardScreen from "./features/Support/screens/SupportDashboardScreen";
import SupportTicketManagementScreen from "./features/Support/screens/SupportTicketManagementScreen";
import SupLiveChatScreen from "./features/Support/screens/SupLiveChatScreen";
import SupportRefundRequest from "./features/Support/screens/SupportRefundRequest";
import MonitoringTeamScreen from "./features/Monitoring/screens/MonitoringTeamScreen";
import RealTimeLiveTracking from "./features/Monitoring/screens/RealTimeLiveTracking";
import SuperAdminDashboard from "./features/superadmin/screens/SuperAdminDashboard";
import NotAuthorizedScreen from "./SharedScreens/NotAuthorizedScreen/NotAuthorizedScreen";
import ServicesVerificationScreen from "./SharedScreens/ServicesVerification/screens/ServicesVerificationScreen";

const App = () => {
  return (
    <div className="flex flex-col w-full h-[100vh] overflow-hidden">
      <ToastContainer
        position="top-right"
        autoClose={5000} // 5 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute allowedRoles={["manager"]} />}>
          <Route element={<Layout />}>
            <Route path="/manager-dashboard" element={<UserDashboard />} />
            <Route path="/Attendace" element={<AttendaceScreen />} />
            <Route path="/EmpMngList" element={<EmpMngListScreen />} />
            <Route path="/EmpDetails" element={<EmpDetailsScreen />} />
            <Route
              path="/user-verification"
              element={<UserVerificationScreen />}
            />
            <Route
              path="/service-verification"
              element={<ServicesVerificationScreen />}
            />
            <Route path="/PaymentIssuse" element={<PaymentIssuseScreen />} />
            <Route path="/Notification" element={<NotificationScreen />} />
          </Route>
        </Route>
        <Route element={<ProtectedRoute allowedRoles={["superadmin"]} />}>
          <Route element={<Layout />}>
            <Route path="/" element={<SuperAdminDashboard />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["support"]} />}>
          <Route element={<Layout />}>
            <Route
              path="/support-dashboard"
              element={<SupportDashboardScreen />}
            />
            <Route
              path="/support-ticket-managemenet"
              element={<SupportTicketManagementScreen />}
            />
            <Route path="/support-live-chat" element={<SupLiveChatScreen />} />
            <Route
              path="/support-refund-request"
              element={<SupportRefundRequest />}
            />
          </Route>
        </Route>
        <Route element={<ProtectedRoute allowedRoles={["monitoring"]} />}>
          <Route element={<Layout />}>
            <Route
              path="/monitoring-team-dashboard"
              element={<MonitoringTeamScreen />}
            />
            <Route
              path="/monitoring-real-time-ride-tracking"
              element={<RealTimeLiveTracking />}
            />
          </Route>
        </Route>
        {/* <Route path="/not-authorized" element={<NotAuthorizedScreen />} /> */}
      </Routes>
    </div>
  );
};

export default App;
