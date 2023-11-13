import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import Home from "./Home";
import { RootLayout } from "./RootLayout";
import Home from "../Pages/Home";
import WriteupChecklist from "../Pages/WriteupChecklist";
import AccessibilityHome from "../Pages/Accessibility";

export function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <>
          <Route index element={<Home />} />
          <Route path="/write-up-checklist" element={<WriteupChecklist />} />
          <Route path="/accessibility" element={<AccessibilityHome />} />
          {/* <Route path="/success" element={<Success />} /> */}
          {/* {rooms.map((room) => {
            return <Route path={room.path} element={<room.component />} />;
          })} */}
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
