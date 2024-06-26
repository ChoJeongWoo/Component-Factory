import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = React.lazy(() => import("@/App"));
const Form = React.lazy(() => import("@/shared/pages/form/Form"));
const Input  = React.lazy(() => import("@/shared/components/Input"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/forms",
    element: <Form />,
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
