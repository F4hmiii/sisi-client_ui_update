import Header from "../Fragments/Header";
import Navbar from "../Fragments/Navbar";
import { ThemeContext } from "../../context/themeContext";
import { useContext } from "react";
import { NotifContext } from "../../context/notifContext";
import SimpleBackdrop from "../Elements/Backdrop";
import CustomSnackbar from "../Elements/SnackBar";
import { DarkModeContext } from "../../context/darkModeContext";

const MainLayout = (props) => {
  const { children } = props;
  const { theme } = useContext(ThemeContext);
  const {msg, setMsg, open, setOpen, isLoading, setIsLoading} = useContext(NotifContext);
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`flex bg-[color:var(--bg-color)] w-screen min-h-screen max-w-full ${theme.name} dark:text-white`}>
      {isLoading && (
        <SimpleBackdrop isLoading={isLoading} setIsLoading={setIsLoading} />
      )}
      {msg && (
        <CustomSnackbar
        severity={msg.severity}
        message={msg.message}
        open={open}
        setOpen={setOpen}
        />
      )}
      {/* navbar start*/}
      <Navbar />
      {/* navbar end*/}
      <div className="w-screen">
        {/* header start*/}
        <Header />
        {/* header end*/}
        {/* content start*/}
        <main className="px-6 py-4">{children}</main>
        {/* content end*/}
      </div>
    </div>
  );
};

export default MainLayout;
