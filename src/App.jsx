import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import { Sidebar } from "./components/Sidebar/Sidebar";
import { Drinks } from "./pages/Drinks";
import { cocktailSelector } from "./reducers/Cocktails";
import styles from "./App.module.scss";

function App() {
  const { cocktailCodes } = useSelector(cocktailSelector);

  return (
    <div className={styles.container}>
      <Sidebar />
      <Routes>
        {cocktailCodes.map((code) => {
          return (
            <Route
              key={code}
              path={`/${code}`}
              element={<Drinks cocktailCode={code} />}
            />
          );
        })}
        <Route path="/" element={<Navigate to={cocktailCodes[0]} />} />
        <Route
          path="*"
          element={
            <div>
              <h2>404 Page not found</h2>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
