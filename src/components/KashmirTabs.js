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

  return (
    <Nav 
      variant="pills" 
      activeKey={activeTab}
      onSelect={(selectedKey) => setActiveTab(selectedKey)}
      className="kashmir-tabs"
    >
      {tabs.map((tab) => (
        <Nav.Item key={tab.id}>
          <Nav.Link eventKey={tab.id}>{tab.label}</Nav.Link>
        </Nav.Item>
      ))}
      <style jsx>{`
        .kashmir-tabs {
          border-radius: 50px;
          background-color: #f8f9fa;
          padding: 10px;
          display: inline-flex;
          flex-wrap: wrap;
          gap: 5px;
        }
        .kashmir-tabs .nav-link {
          border-radius: 50px;
          padding: 8px 16px;
          color: #6c757d;
          border: none;
        }
        .kashmir-tabs .nav-link.active {
          background-color: #007bff;
          color: white;
        }
        @media (max-width: 768px) {
          .kashmir-tabs {
            flex-direction: column;
            align-items: stretch;
          }
          .kashmir-tabs .nav-link {
            text-align: center;
          }
        }
      `}</style>
    </Nav>
  );
};

export default KashmirTabs;