import { createBrowserRouter } from "react-router-dom";

//Rutas de Navegacion
import Home from "../Pages/Home";

export const router = createBrowserRouter([

    {
        path:"/",
        element:<Home />
    }
])