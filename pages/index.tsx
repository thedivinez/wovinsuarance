import { useState } from "react";
import type { NextPage } from "next";
import { AiFillHome } from "react-icons/ai";
import Dashboard from "../components/dashboard/Dashboard";
import NavBar from "../components/dashboard/components/NavBar";
import SideBar from "../components/dashboard/components/SideBar";

const Home: NextPage = () => {
  const [selected, setSelected] = useState({
    name: "Dashboard",
    icon: AiFillHome,
    content: Dashboard,
  });
  return (
    <main className="flex min-h-screen w-screen flex-col">
      <section className="flex w-full h-full">
        <SideBar selected={selected} setSelected={setSelected} />
        <section className="flex flex-col space-y-5 w-full h-full">
          <NavBar />
          <selected.content />
        </section>
      </section>
    </main>
  );
};

export default Home;
