import { ArrowDownward, ArrowUpward, EmojiTransportation, FoodBank, HouseSiding, MoreHoriz, ShoppingBag, TheaterComedy, Theaters } from "@mui/icons-material";
import { Icon } from "../components/Icons/Icons";

const expensesBreakdowns = [
    {
      id: 1,
      category: "Housing",
      amount: 250,
      percentage: 15,
      icon: <Icon.Housing />,
      arrow: <ArrowUpward />,
    },
    {
      id: 2,
      category: "Food",
      amount: 350,
      percentage: 8,
      icon: <Icon.FoodHouse />,
      arrow: <ArrowUpward />,
    },
    {
      id: 3,
      category: "Transportation",
      amount: 50,
      percentage: 12,
      icon: <Icon.Transport />,
      arrow: <ArrowUpward />,
    },
    {
      id: 4,
      category: "Entertainment",
      amount: 80,
      percentage: 15,
      icon: <Icon.Movie />,
      arrow: <ArrowUpward />,
    },
    {
      id: 5,
      category: "Shopping",
      amount: 420,
      percentage: 25,
      icon: <Icon.Shopping />,
      arrow: <ArrowDownward />,
    },
    {
      id: 6,
      category: "Others",
      amount: 650,
      percentage: 23,
      icon: <Icon.Other />,
      arrow: <ArrowDownward />,
    },
  ];
  
  const expensesStatistics = {
    dataKey: "date",
    series: [
      { dataKey: "amountThisWeek", label: "This Week", color: "#E8E8E8" },
      { dataKey: "amountLastWeek", label: "Last Week", color: "#299D91" },
    ],
    data: [
      {
        id: 1,
        date: "17 Sun", 
        amountThisWeek: 25000,
        amountLastWeek: 50000,
      },
      {
        id: 2,
        date: "18 Mon",
        amountThisWeek: 50000,
        amountLastWeek: 10000,
      },
      {
        id: 3,
        date: "19 Tue",
        amountThisWeek: 10000,
        amountLastWeek: 50000,
      },
      {
        id: 4,
        date: "20 Wed",
        amountThisWeek: 50000,
        amountLastWeek: 50000,
      },
      {
        id: 5,
        date: "21 Thu",
        amountThisWeek: 50000,
        amountLastWeek: 10000,
      },
      {
        id: 6,
        date: "22 Fri",
        amountThisWeek: 25000,
        amountLastWeek: 10000,
      },
      {
        id: 7,
        date: "23 Sat",
        amountThisWeek: 50000,
        amountLastWeek: 10000,
      },
    ]
  };
  
  export { expensesBreakdowns, expensesStatistics };