import React, { useRef, useEffect } from 'react';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ScrollSyncLayout = () => {
  const sidebarRef = useRef(null);
  const mainContentRef = useRef(null);

  // Synchronize the scroll between the sidebar and main content
  useEffect(() => {
    const sidebar = sidebarRef.current;
    const mainContent = mainContentRef.current;

    // Scroll sync: Sidebar scrolls main content
    const handleSidebarScroll = () => {
      mainContent.scrollTop = sidebar.scrollTop;
    };

    // Scroll sync: Main content scrolls sidebar
    const handleMainContentScroll = () => {
      sidebar.scrollTop = mainContent.scrollTop;
    };

    // Add scroll event listeners
    sidebar.addEventListener('scroll', handleSidebarScroll);
    mainContent.addEventListener('scroll', handleMainContentScroll);

    // Clean up event listeners on unmount
    return () => {
      sidebar.removeEventListener('scroll', handleSidebarScroll);
      mainContent.removeEventListener('scroll', handleMainContentScroll);
    };
  }, []);

  return (
    <>
    <Header/>
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className="w-64 bg-gray-800 text-white overflow-y-auto h-full"
      >
        <div className="p-4">Sidebar Content</div>
        <div className="p-4">Item 1</div>
        <div className="p-4">Item 2</div>
        <div className="p-4">Item 3</div>
        <div className="p-4">Item 4</div>
        <div className="p-4">Item 5</div>
        <div className="p-4">Item 5</div>
        <div className="p-4">Item 5</div>
        <div className="p-4">Item 5</div>
        <div className="p-4">Item 5</div>
        <div className="p-4">Item 5</div>
        <div className="p-4">Item 5</div>
        <div className="p-4">Item 5</div>
        <div className="p-4">Item 5</div>
        <div className="p-4">Item 5</div>
        <div className="p-4">Item 5</div>
        <div className="p-4">Item 5</div>
        <div className="p-4">Item 5</div>
        <div className="p-4">Item 5</div>

        
        {/* More content */}
      </div>

      {/* Main content */}
      <div
        ref={mainContentRef}
        className="flex-1 bg-gray-100 overflow-y-auto h-full"
      >
        <div className="p-4">Main Content</div>
        <div className="p-4">Section 1</div>
        <div className="p-4">Section 2</div>
        <div className="p-4">Section 3</div>
        <div className="p-4">Section 4</div>
        <div className="p-4">Section 5</div>
        <div className="p-4">Main Content</div>
        <div className="p-4">Section 1</div>
        <div className="p-4">Section 2</div>
        <div className="p-4">Section 3</div>
        <div className="p-4">Section 4</div>
        <div className="p-4">Section 5</div> 
        <div className="p-4">Section 1</div>
        <div className="p-4">Section 2</div>
        <div className="p-4">Section 3</div>
        <div className="p-4">Section 4</div>
        <div className="p-4">Section 5</div>
        {/* More content */}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ScrollSyncLayout;
