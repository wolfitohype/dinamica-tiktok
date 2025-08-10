'use client';

import { useEffect } from 'react';

export default function SecurityRestrictions() {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent Ctrl+U (view source)
      if (e.ctrlKey && e.key.toLowerCase() === 'u') {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      
      // Prevent Ctrl+Shift+I (developer tools)
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i') {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      
      // Prevent Ctrl+Shift+C (inspect element)
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'c') {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      
      // Prevent F12 (developer tools)
      if (e.key === 'F12') {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // Add event listeners - using both normal and capture phase
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keydown', handleKeyDown, true); // Capture phase

    // Cleanup function
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keydown', handleKeyDown, true);
    };
  }, []);

  // Additional deterrent using console messages
  useEffect(() => {
    const warningMessage = '%c⚠️ Warning: This page is protected';
    const warningStyle = 'color: red; font-size: 48px; font-weight: bold;';
    
    console.clear();
    console.log(warningMessage, warningStyle);
    
    // Periodically clear console and show warning
    const intervalId = setInterval(() => {
      console.clear();
      console.log(warningMessage, warningStyle);
    }, 3000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  // Detect DevTools opening without showing warning message
  useEffect(() => {
    const detectDevTools = () => {
      // Still detect DevTools but don't replace page content
      const widthThreshold = window.outerWidth - window.innerWidth > 160;
      const heightThreshold = window.outerHeight - window.innerHeight > 160;
      
      // No action taken when DevTools are detected
    };
    
    window.addEventListener('resize', detectDevTools);
    
    // Check periodically
    const intervalId = setInterval(detectDevTools, 1000);
    
    return () => {
      window.removeEventListener('resize', detectDevTools);
      clearInterval(intervalId);
    };
  }, []);

  return null; // This component doesn't render anything
}