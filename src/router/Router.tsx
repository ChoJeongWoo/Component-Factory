import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = React.lazy(() => import("@/App"));
const Form = React.lazy(() => import("@/shared/pages/form/Form"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/forms",
    element: <Form />,
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
