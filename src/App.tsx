import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Drinks } from "./pages/Drinks/Drinks";
import { cocktailSelector, cocktailStateType } from "./reducers/Cocktails";
import "./App.scss";
import { NotFoundPage } from "./pages/404/404";

function App() {
    const { cocktailCodes }: cocktailStateType = useSelector(cocktailSelector);

    return (
        <div className="App__container">
            <Sidebar/>
            <div className="App__page">
                <Routes>
                    {cocktailCodes.map((code: string) => (
                        <Route
                            key={code}
                            path={`/${code}`}
                            element={<Drinks cocktailCode={code}/>}
                        />
                    ))}
                    <Route path="/" element={<Navigate to={`/${cocktailCodes[0]}`}/>}/>
                    <Route
                        path="*"
                        element={<NotFoundPage />}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
