import { AppRoutes } from './Routes';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
