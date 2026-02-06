import { useState } from "react";

const Nav = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="p-6 max-w-md mx-auto">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setActiveTab("home")}
          className={`px-4 py-2 rounded ${
            activeTab === "home"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Home
        </button>

        <button
          onClick={() => setActiveTab("profile")}
          className={`px-4 py-2 rounded ${
            activeTab === "profile"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Profile
        </button>

        <button
          onClick={() => setActiveTab("settings")}
          className={`px-4 py-2 rounded ${
            activeTab === "settings"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Settings
        </button>
      </div>

      <div className="p-4 border rounded">
        {activeTab === "home" && <p>Welcome to Home page</p>}
        {activeTab === "profile" && <p>This is your Profile</p>}
        {activeTab === "settings" && <p>Here are Settings</p>}
      </div>
    </div>
  );
};

export default Nav;