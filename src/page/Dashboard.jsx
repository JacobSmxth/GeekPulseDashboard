import MCU from "../components/MCU";
import Sidebar from "../components/Sidebar";
import News from "../components/News";

const Dashboard = () => {
    
    return (
            <div className="max-w-screen flex bg-gray-800 min-h-screen ">
                    <Sidebar />
                <div className="flex flex-col items-center gap-10">
                    <div className="relative flex flex-col sm:flex-col sm:items-center md:flex-col lg:flex-row w-full">
                        <span className="flex items-center justify-start">
                            <MCU />
                        </span>
                        <News />
                    </div>
                    <div className="text-7xl">
                        Free games section
                    </div>
                </div>

            </div>
    )
}

export default Dashboard;