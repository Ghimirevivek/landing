import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import { LoginContext } from './Context/LoginContext';

const App = () => {
  const { logindata, setLoginData } = useContext(LoginContext);
  console.log('context', logindata);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
