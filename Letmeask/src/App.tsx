import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from "./pages/Home/Home";
import { NewRoom } from "./pages/Home/NewRoom";

import { AuthContextProvider } from './Contexts/AuthContext'
import { Room } from './pages/Room/Room';
import { AdminRoom } from './pages/Room/AdiminRoom';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/rooms/new" element={ <NewRoom /> } />
          <Route path="/rooms/:id" element={ <Room />}/>

          <Route path="/admin/rooms/:id" element={ <AdminRoom /> } />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
