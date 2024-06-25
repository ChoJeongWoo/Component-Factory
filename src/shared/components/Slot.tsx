import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Slot: React.FC<Props> = ({ children }) => {
  return <div className="slot-component">{children}</div>;
};

export default Slot;
