import './App.css';
import Error404 from './components/Errores/Error404';
import PaginaBuscador from './Paginas/PaginaBuscador';


import {
  createBrowserRouter,
  RouterProvider,

} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaBuscador/>,
    errorElement: <Error404 />,
  },
  {
    path: "/noticias",
    element: <PaginaBuscador/>,
  },
  
]);

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
