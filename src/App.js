import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Dashboard from './component/Dashboard';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
