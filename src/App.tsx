import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Login } from './components/Login/Login';
import { routes } from './Config/routes';
import { AuthProvider } from './context';

// interface Props {
//   children: JSX.Element | JSX.Element[];
// }

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
      {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
