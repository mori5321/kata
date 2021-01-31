import React, { useMemo } from "react";
import ReactDOM from "react-dom";
import { RoconRoot } from "rocon/react";

import { css, injectGlobal } from "emotion";
import { basicColorSet } from "./consts/colors";
import { Sidebar } from "./components/modules/Sidebar";
import { createMemoryHistory } from "history";
import { Routes } from "./router/route";

const topWrapperStyle = css`
  height: 100%;
  background-color: ${basicColorSet.backgroundPrimary};
  color: white;
`;

const sidebarLayoutStyle = css`
  position: fixed;
  left: 0;
  height: 100vh;
`;

const contentLayoutStyle = css`
  padding-left: 72px;
`;

const App: React.FC = () => {
  const history = useMemo(() => {
    return createMemoryHistory();
  }, []);
  injectGlobal(`
    body {
      background-color: ${basicColorSet.backgroundPrimary};
    }
  `);

  return (
    <div className={topWrapperStyle}>
      <RoconRoot history={history}>
        <div className={sidebarLayoutStyle}>
          <Sidebar />
        </div>
        <div className={contentLayoutStyle}>
          <Routes />
        </div>
      </RoconRoot>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
