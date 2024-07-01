import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackLayout,
} from "@codesandbox/sandpack-react";

interface File {
  code: string;
  readOnly?: boolean;
  active?: boolean;
}

interface Files {
  [key: string]: File;
}

interface Props {
  files: Files;
}

const Sandpack: React.FC<Props> = ({ files }) => {
  return (
    <div className="mb-6">
      <SandpackProvider template="vite-react" theme="dark" files={files}>
        <SandpackLayout>
          <SandpackCodeEditor className="sandpack-container" />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
};

export default Sandpack;
