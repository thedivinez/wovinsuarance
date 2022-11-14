import { useState } from "react";
import type { NextPage } from "next";
import { BsPeopleFill } from "react-icons/bs";
import Dashboard from "../components/dashboard/Dashboard";
import NavBar from "../components/dashboard/components/NavBar";
import SideBar from "../components/dashboard/components/SideBar";

const Home: NextPage = () => {
  const [selected, setSelected] = useState({
    name: "Members",
    content: Dashboard,
    icon: BsPeopleFill
  });
  return (
    <main className="flex h-screen w-screen flex-col">
      <NavBar />
      <div className="flex w-full h-full">
        <SideBar selected={selected} setSelected={setSelected} />
        <section className="w-full h-full container mx-auto">
          <selected.content />
        </section>
      </div>
    </main>
  );
};

export default Home;
