import { NavLink } from "react-router-dom";
import { Icon } from "../Elements/Icon";
import Logo from "../Elements/Logo";
import { Link } from "react-router-dom";
import { ExitToApp } from "@mui/icons-material";
import { MoreVert } from "@mui/icons-material";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import { NotifContext } from "../../context/notifContext";

const Navbar = () => {
  const themes = [
    { name: "theme-green", bgcolor: "bg-[#299D91]", color: "#299D91" },
    { name: "theme-blue", bgcolor: "bg-[#1E90FF]", color: "#1E90FF" },
    { name: "theme-purple", bgcolor: "bg-[#6A5ACD]", color: "#6A5ACD" },
    { name: "theme-pink", bgcolor: "bg-[#DB7093]", color: "#DB7093" },
    { name: "theme-brown", bgcolor: "bg-[#8B4513]", color: "#8B4513" },
  ];

  const { theme, setTheme } = useContext(ThemeContext);
  const { name } = useContext(AuthContext);
  const { setIsLoggedIn } = useContext(AuthContext);
  const {setMsg, setOpen, setIsLoading} = useContext(NotifContext);
  //const navigate = useNavigate();

  const menus = [
    {
      id: "overview",
      link: "/",
      icon: <Icon.Overview />,
      label: "Overview",
    },
    {
      id: "balance",
      link: "/balance",
      icon: <Icon.Balance />,
      label: "Balance",
    },
    {
      id: "goals",
      link: "/goals",
      icon: <Icon.Goals />,
      label: "Goals",
    },
    {
      id: "transaction",
      link: "/transaction",
      icon: <Icon.Transaction />,
      label: "Transaction",
    },
    {
      id: "bill",
      link: "/bill",
      icon: <Icon.Bill />,
      label: "Bill",
    },
    {
      id: "expenses",
      link: "/expenses",
      icon: <Icon.Expenses />,
      label: "Expenses",
    },
  ];
  const refreshToken = localStorage.getItem("refreshToken");

  const Logout = async () => {
    setIsLoading(true);
    try {
      await axios.get("https://jwt-auth-eight-neon.vercel.app/logout", {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      });

      setOpen(true);
      setMsg({ severity: "success", message: "Logout success" });

      setIsLoggedIn(false);
      setName("");
      localStorage.removeItem("refreshToken");

      navigate("/login");
    } catch (error) {
      setIsLoading(false);
      setOpen(true);
      setMsg({ severity: "error", message: error.response.data.msg });
    }
  };

  return (
    <div className={`bg-defaultBlack dark:bg-gray-900`}>
      <nav className="sticky top-0 text-special-bg2 sm:w-72 w-28 min-h-screen px-7 py-12 flex flex-col justify-between">
        <div>
          <div className="flex justify-center mb-10">
            <Logo variant="text-white text-2xl" />
          </div>

          {menus.map((menu) => (
            <NavLink
              key={menu.id}
              to={menu.link}
              className={({ isActive }) =>
                isActive
                  ? "flex bg-primary text-white font-bold px-4 py-3 rounded-md zoom-in"
                  : "flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md zoom-in dark:text-gray-300"
              }
            >
              <div className="mx-auto sm:mx-0">{menu.icon}</div>
              <div className="ms-3 hidden sm:block">{menu.label}</div>
            </NavLink>
          ))}
        </div>
        <div className="md:flex md:gap-2">
          <span className="text-white">Themes</span>
          {themes.map((t) => (
            <div
              key={t.name}
              className={`${t.bgcolor} md:w-6 h-6 rounded-md cursor-pointer mb-2 zoom-in opacity-90 hover:opacity-100`}
              onClick={() => setTheme(t)}
            ></div>
          ))}
        </div>
        <div className="sticky bottom-12">
          <NavLink
          onClick={Logout}
          className="flex bg-special-bg3 px-4 py-3 rounded-sm hover:text-white zoom-in"
          >
            <div className="mx-auto sm:mx-0 sm:block">Logout</div>
          </NavLink>
          <div className="border-b my-10 border-b-special-bg"></div>
          <div className="flex justify-between">
            <div className="mx-auto text-white sm:mx-0">
              <img className="w-10" src="images/profile.png" />
            </div>
            <div className="hidden text-white sm:block">
              {name}
              <br />
              <b>View Profile</b>
            </div>
            <div className="hidden text-white sm:block">
              <MoreVert />{" "}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
