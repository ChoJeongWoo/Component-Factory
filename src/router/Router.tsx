import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = React.lazy(() => import("@/App"));
const Input  = React.lazy(() => import("@/shared/components/Input"))
const Select = React.lazy(() => import("@/pages/Select"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/select",
    element: <Select />,
  },
  {
    path: "/Input",
    element: <Input type={"numeric"} maxlength={"5"} placeholder={"내용을 입력하세요"} />,
  },
]);

const Routes = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Routes;
