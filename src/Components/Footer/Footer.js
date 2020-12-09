import React from 'react'

export default function ({ children }) {
  return (
    <footer className="page-footer" data-testid="footer">
      { children }
    </footer>
  );
}