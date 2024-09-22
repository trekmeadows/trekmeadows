import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const KashmirTabs = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'bestTime', label: 'Best time to visit' },
    { id: 'places', label: 'Places to visit' },
    { id: 'howToReach', label: 'How to reach' },
    { id: 'tourPackages', label: 'Tour Packages' },
    { id: 'photosVideos', label: 'Gallery' },
    { id: 'faq', label: 'FAQs' },
    { id: 'blog', label: 'Blog' },
  ];

  // Group tabs into sets of three for mobile view
  const mobileGroups = tabs.reduce((resultArray, item, index) => { 
    const groupIndex = Math.floor(index / 3);
    if(!resultArray[groupIndex]) {
      resultArray[groupIndex] = [];
    }
    resultArray[groupIndex].push(item);
    return resultArray;
  }, []);

  return (
    <div className="kashmir-tabs-container">
      <Nav
        variant="pills"
        activeKey={activeTab}
        onSelect={(selectedKey) => setActiveTab(selectedKey)}
        className="kashmir-tabs"
      >
        {/* Desktop view */}
        {tabs.map((tab) => (
          <Nav.Item key={tab.id} className="desktop-tab">
            <Nav.Link eventKey={tab.id}>{tab.label}</Nav.Link>
          </Nav.Item>
        ))}

        {/* Mobile view */}
        {mobileGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mobile-group">
            {group.map((tab) => (
              <Nav.Item key={tab.id}>
                <Nav.Link eventKey={tab.id}>{tab.label}</Nav.Link>
              </Nav.Item>
            ))}
          </div>
        ))}
      </Nav>
      
      <style jsx>{`
        .kashmir-tabs-container {
          display: flex;
          justify-content: center;
          width: 100%;
        }
        .kashmir-tabs {
          display: inline-flex;
          flex-wrap: wrap;
          gap: 5px;
          background-color: #f8f9fa;
          padding: 10px;
          border-radius: 50px;
        }
        .nav-link {
          border-radius: 50px;
          padding: 8px 16px;
          color: #6c757d;
          border: none;
          text-align: center;
          white-space: nowrap;
        }
        .nav-link.active {
          background-color: #007bff;
          color: white;
        }
        .mobile-group {
          display: none;
        }
        @media (max-width: 768px) {
          .kashmir-tabs-container {
            justify-content: flex-start;
          }
          .kashmir-tabs {
            display: flex;
            width: 100%;
          }
          .desktop-tab {
            display: none;
          }
          .mobile-group {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-bottom: 10px;
          }
          .kashmir-tabs {
            flex-direction: column;
            align-items: stretch;
            border-radius: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default KashmirTabs;