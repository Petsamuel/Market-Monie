import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";

const DashboardLayout = () => {
  // Mock data/state for now
  const user = {
    firstname: "Samuel",
    lastname: "Peter"
  };
  
  // Possible values: 'NO_LOAN', 'ACTIVE_APPLICATION', 'DISBURSED', 'FULLY_REPAID'
  const loanStage = 'ACTIVE_APPLICATION'; 

  return (
    <div className="flex min-h-screen bg-gray-50/50">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden pl-64">
        <TopBar user={user} loanStage={loanStage} />
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <Outlet context={{ user, loanStage }} />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;