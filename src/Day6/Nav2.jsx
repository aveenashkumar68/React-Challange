import { useState } from "react";

const Nav2 = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = ["home", "profile", "settings"];

  return (
    <div className="p-6 max-w-md mx-auto">
      
      {/* Tabs Buttons */}
      <div className="flex gap-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded capitalize ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4 border rounded">
        {activeTab === "home" && <p>Welcome to Home page</p>}
        {activeTab === "profile" && <p>This is your Profile</p>}
        {activeTab === "settings" && <p>Here are Settings</p>}
      </div>

    </div>
  );
};

export default Nav2;