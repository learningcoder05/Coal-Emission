import React from 'react';

const Alert = ({ children, className = '' }) => (
  <div className={`bg-blue-800 border border-blue-700 rounded-lg p-4 ${className}`} role="alert">
    {children}
  </div>
);

const AlertDescription = ({ children, className = '' }) => (
  <div className={`text-sm text-white ${className}`}>
    {children}
  </div>
);

export { Alert, AlertDescription };