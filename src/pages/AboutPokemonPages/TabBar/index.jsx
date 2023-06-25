import React, { useState } from 'react';
import "./style.css";

const TabBar = ({ tabs }) => {

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tab-bar">
      <div className="tab-button">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? "button1 active button2" : "button1"}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-bar-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default TabBar;
