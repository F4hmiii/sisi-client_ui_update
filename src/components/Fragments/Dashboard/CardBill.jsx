import { useEffect, useState, useContext } from "react";
import Card from "../../Elements/Card";
import axios from "axios";
import { NotifContext } from "../../../context/notifContext";
import { AuthContext } from "../../../context/authContext";
import { useNavigate } from "react-router-dom";
import Loader from "../../Elements/Loader";

const CardBill = () => {
    const [bills, setBills] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { setMsg, setOpen, setIsLoading: setGlobalLoading } = useContext(NotifContext);
    const { setIsLoggedIn, setName } = useContext(AuthContext);
    const navigate = useNavigate();

    const getData = async () => {
        try {
            setIsLoading(true);
            const refreshToken = localStorage.getItem("refreshToken");

            const response = await axios.get(
                "https://jwt-auth-eight-neon.vercel.app/bills",
                {
                    headers: {
                        Authorization: `Bearer ${refreshToken}`,
                    },
                }
            );

            console.log(response);

            if (response.data.status === 200 && response.data.data) {
                setBills(response.data.data);
            }
            
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            if (error.response) {
                if (error.response.status === 401) {
                    setOpen(true);
                    setMsg({
                        severity: "error",
                        desc: "Session Has Expired. Please Login.",
                    });

                    setIsLoggedIn(false);
                    setName("");

                    localStorage.removeItem("refreshToken");
                    navigate("/login");
                } else {
                    setOpen(true);
                    setMsg({
                        severity: "error",
                        desc: "Failed to fetch data.",
                    });
                    console.log(error.response);
                }
            }
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const billCard = bills.map((bill) => (
        <div key={bill.id} className="lg:flex justify-between pt-3 pb-3">
            <div className="flex">
                <div className="bg-special-bg me-3 px-4 rounded-lg flex place-content-center flex-col">
                    <span className="text-xs">{bill.month}</span>
                    <span className="text-2xl font-bold">{bill.date}</span>
                </div>
                <div className="">
                    <img className="h-6" src={`/images/${bill.logo}`} />
                    <span className="font-bold text-[color:var(--text-color)]">{bill.name}</span>
                    <br />
                    <span className="text-xs text-[color:var(--text-secondary)]">Last Charge - {new Date(bill.lastCharge).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                </div>
            </div>
            <div className="flex place-content-center flex-col">
                <span className="p-2 border rounded-lg font-bold text-center">
                    ${bill.amount}
                </span>
            </div>
        </div>
    ));

    return (
        <Card
            title="Upcoming Bill"
            desc={
                <div className="h-full flex flex-col justify-around">
                    {isLoading ? <Loader /> : billCard}
                </div>
            }
        />
    );
};

export default CardBill;