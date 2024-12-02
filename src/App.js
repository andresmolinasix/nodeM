import Landing from "./components/Landing";
import {
  createBrowserRouter,
  RouterProvider, Navigate,
  Route
} from 'react-router-dom';



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />, //loggedIn={userLoggedIn}/>,
      //errorElement: <NoFoundPage />,
    },
    /* {
      path: "/nostros",
      element: <Login />, // onLogin={setUserEmail} setUserLoggedIn={setUserLoggedIn} />,
      isPrivate: false
    },
    {
      path: "/registro",
      element: <Registro />, // onLogin={setUserEmail} setUserLoggedIn={setUserLoggedIn} />,
      isPrivate: false
    }, */
  ]);

  return <RouterProvider router={router} />;
}

export default App;
