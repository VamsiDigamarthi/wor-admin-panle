import { BellDot, LogOut, Settings } from "lucide-react";
import logo from "../assets/images/wor-logo.png";
import IconsLayout from "../SharedComponents/IconsLayout";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import { Roles } from "./ProtectedRoute";
import { Link, useNavigate } from "react-router-dom";
import { openCloseModalFunc } from "../Redux/modalFeatureSlice";
import LogoutModal from "./LogoutModal";

type HeaderItemTypes = {
  label: string;
  navigationTextByRole: { [key in Roles]?: string };
  roles: Roles[];
};

const Header = () => {
  const navigate = useNavigate();

  const { role } = useSelector((state: RootState) => state.authToken);

  // const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const { isDisplayModal } = useSelector(
    (state: RootState) => state.modalSlice
  );

  const headerItems: HeaderItemTypes[] = [
    {
      label: "Attendance",
      navigationTextByRole: {
        user: "/Attendace",
        admin: "/Attendace",
        manager: "/Attendace",
        superadmin: "/Attendace",
      },
      roles: ["user", "admin", "manager"],
    },
    {
      label: "Employee",
      navigationTextByRole: {
        admin: "/admin-employee",
        superadmin: "/superadmin-employee",
        manager: "/EmpMngList",
      },
      roles: ["admin", "superadmin", "manager"],
    },
    {
      label: "Users",
      navigationTextByRole: {
        superadmin: "/superadmin-users",
      },
      roles: ["superadmin"],
    },
    {
      label: "User Verification",
      navigationTextByRole: {
        admin: "/admin-user-verification",
        support: "/support-user-verification",
        manager: "/user-verification",
        superadmin: "/user-verification",
      },
      roles: ["admin", "support", "manager"],
    },
    {
      label: "Payment Verification",
      navigationTextByRole: {
        admin: "/admin-payment-verification",
      },
      roles: ["admin"],
    },
    {
      label: "Tickets",
      navigationTextByRole: {
        support: "/support-ticket-management",
        superadmin: "/superadmin-ticket-management",
      },
      roles: ["support", "superadmin"],
    },
    {
      label: "Live Chat",
      navigationTextByRole: {
        support: "/support-live-chat",
      },
      roles: ["support"],
    },
    {
      label: "Real-Time Ride Tracking",
      navigationTextByRole: {
        monitoring: "/monitoring-real-time-ride-tracking",
      },
      roles: ["monitoring"],
    },
    // {
    //   label: "Emergency Alert & SOS Handling",
    //   navigationTextByRole: {
    //     monitoring: "/monitoring-sos-handling",
    //   },
    //   roles: ["monitoring"],
    // },
    // {
    //   label: "Ride History & Logs",
    //   navigationTextByRole: {
    //     monitoring: "/monitoring-ride-history",
    //   },
    //   roles: ["monitoring"],
    // },
    // {
    //   label: "User & Ride Status",
    //   navigationTextByRole: {
    //     monitoring: "/monitoring-user-ride-status",
    //   },
    //   roles: ["monitoring"],
    // },
    // {
    //   label: "Reports",
    //   navigationTextByRole: {
    //     monitoring: "/monitoring-reports",
    //   },
    //   roles: ["monitoring"],
    // },
  ];

  const getUserRole = (): Roles => {
    return role || (localStorage.getItem("role") as Roles) || null;
  };

  const handleNavigateRoleBasedHomes = () => {
    const role = getUserRole();

    const roleBasedHomes: { [key in Roles]?: string } = {
      user: "/dashboard",
      admin: "/admin-dashboard",
      support: "/support-dashboard",
      manager: "/manager-dashboard",
      monitoring: "/monitoring-team-dashboard",
      superadmin: "/superadmin-dashboard",
    };
    const roleBasedHomePage = roleBasedHomes[role];
    if (roleBasedHomePage) {
      navigate(roleBasedHomePage);
    } else {
      navigate("/login");
    }
  };

  const handleLogoutModal = () => {
    dispatch(openCloseModalFunc());
  };

  return (
    <>
      <div className="w-full h-[105px] flex bg-white flex-col py-2">
        <div className="w-full flex justify-between items-center border-b px-6 pb-2 border-iconBg">
          <img
            onClick={handleNavigateRoleBasedHomes}
            className="w-[100px]"
            src={logo}
            alt="logo"
          />

          <div className="flex gap-4 items-center">
            {/* Render only the items available for the current role */}
            {headerItems?.map(
              (item, index) =>
                item.roles.includes(role) && (
                  <Link
                    to={item.navigationTextByRole[role] || "#"} // Check navigation text based on role
                    key={index}
                    className="heading-title"
                  >
                    {item.label}
                  </Link>
                )
            )}

            {/* Icon items */}
            <IconsLayout>
              <Settings size={22} color="#69bff5" />
            </IconsLayout>
            <IconsLayout>
              <BellDot size={22} color="#69bff5" />
            </IconsLayout>
            <IconsLayout>
              <BellDot size={22} color="#69bff5" />
            </IconsLayout>
            <IconsLayout onPress={handleLogoutModal}>
              <LogOut size={22} color="red" />
            </IconsLayout>
          </div>
        </div>

        {/* User Information */}
        <div className="w-full flex justify-between items-center py-2 px-6">
          <p className="text-sm font-[600]">User</p>
          <p className="text-sm font-[600]">User@gmail.com</p>
        </div>
      </div>
      {isDisplayModal && <LogoutModal />}
    </>
  );
};

export default Header;
