import React from 'react'
import { useState } from 'react'

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("profile")
    return (
        <div className='flex justify-center items-center bg-gray-100 h-screen'>
            <div className='w-96 bg-white p-6 shadow rounded'>
                <h1 className='text-xl font-bold text-center mb-4'>Tabs</h1>
                <div className='flex justify-between mb-4'>
                    <button
                        onClick={() => setActiveTab("home")}
                        className={`px-3 py-1 rounded ${activeTab === "home"
                                ? "bg-blue-500 text-white"
                                : "bg-red-500 text-white"
                            }`}
                    >
                        Home
                    </button>
                    <button 
                        onClick={() => setActiveTab("profile")}
                        className={`px-3 py-1 rounded ${activeTab === "profile"
                            ? "bg-blue-500 text-white"
                            : "bg-red-500 text-white"
                        }`}
                    >
                        Profile
                    </button>
                    <button 
                        onClick={() => setActiveTab("settings")}
                        className={`px-3 py-2 rounded ${activeTab === "settings"
                            ? "bg-blue-500 text-white"
                            : "bg-red-500 text-white"
                        }`}
                    >
                        Settings
                    </button>
                </div>

                <div className='p-4 border rounded-2xl text-center font-semibold'>
                        {activeTab === "home" && <p> Welcome to Home page</p>}
                        {activeTab === "profile" && <p>This is the profile page</p>}
                        {activeTab === "settings" && <p>Here are settings</p>}
                </div>
            </div>
        </div>
    )
}

export default Tabs