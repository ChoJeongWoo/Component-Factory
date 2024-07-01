import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Layout = React.lazy(() => import("@/shared/layout/Layout"));
const DetailLayout = React.lazy(() => import("@/shared/layout/DetailLayout"));

const App = React.lazy(() => import("@/App"));
const Select = React.lazy(() => import("@/pages/Select"));

const Input = React.lazy(() => import("@/shared/components/Input"));
const RadioGroup = React.lazy(() => import("@/shared/components/RadioGroup"));
const File = React.lazy(() => import("@/shared/components/File"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
  {
    path: "/",
    element: <DetailLayout />,
    children: [
      {
        path: "select",
        element: <Select />,
      },
      {
        path: "/input",
        element: (
          <div>
            <h>등록 시</h>
            <Input
              id={"first"}
              type={"numeric"}
              maxlength={"5"}
              placeholder={"내용을 입력하세요"}
            />
            <h>
              <br />
              수정 시
            </h>
            <Input
              id={"second"}
              type={"text"}
              maxlength={"5"}
              placeholder={"내용을 입력하세요"}
              modelValue={"test"}
            />
          </div>
        ),
      },
      {
        path: "/radioGroup",
        element: (
          <div>
            <h>등록, 수정 시</h>
            <RadioGroup
              id={"first"}
              modelValue={0}
              options={[
                { label: "NONE", value: -1 },
                { label: "PDF", value: 0 },
                { label: "MEDIA", value: 1 },
                { label: "IMAGE", value: 3 },
              ]}
            />
            <h>
              <br />
              비활성화 시
            </h>
            <RadioGroup
              id={"second"}
              modelValue={0}
              options={[
                { label: "NONE", value: -1 },
                { label: "PDF", value: 0 },
                { label: "MEDIA", value: 1 },
                { label: "IMAGE", value: 3 },
              ]}
              disabled={true}
            />
          </div>
        ),
      },
      {
        // 등록 시, 수정 시, 비활성화 시
        path: "/file",
        element: (
          <div>
            <h>등록 시</h>
            <File includeExts={["jpg", "jpeg", "png"]} maxSize={"10MB"} />
            <h>
              <br />
              수정 시
            </h>
            <File
              modelValue={"1_2p3948_183.png"}
              includeExts={["jpg", "jpeg", "png"]}
              maxSize={"10MB"}
              resolutionCheck={{
                requiredValue: "test",
                requiredMessage: "~를 선택해주세요",
                type: "fit",
                width: 1920,
                height: 900,
              }}
            />
            <h>
              <br />
              비활성화 시
            </h>
            <File
              modelValue={"1_2p3948_183.png"}
              includeExts={["jpg", "jpeg", "png"]}
              maxSize={"10MB"}
              resolutionCheck={{
                requiredValue: "test",
                requiredMessage: "~를 선택해주세요",
                type: "fit",
                width: 1920,
                height: 900,
              }}
              disabled={true}
            />
          </div>
        ),
      },
    ],
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
