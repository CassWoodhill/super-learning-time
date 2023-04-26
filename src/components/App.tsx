import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import rooms from "./rooms";
import { RootLayout } from "./RootLayout";
import { Success } from "./Success";

export function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <>
          <Route index element={<Home />} />
          <Route path="/success" element={<Success />} />
          {rooms.map((room) => {
            return <Route path={room.path} element={<room.component />} />;
          })}
        </>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
