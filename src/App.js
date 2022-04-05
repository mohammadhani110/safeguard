import './App.css';
import { theme } from './utils/theme';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import Router from './router'

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="App" >
          <Router />         
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
