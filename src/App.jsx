import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/layouts/pages/Login";
import Home from "./components/layouts/pages/Home";
import Register from "./components/layouts/pages/Register";
// import StateCompo from "../../context/StateCompo";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);

function App() {
  return (
    <section className="proyect">
      {/* <StateCompo> */}
        <RouterProvider router={router} />
      {/* </StateCompo> */}
    </section>
  );
}

export default App;
