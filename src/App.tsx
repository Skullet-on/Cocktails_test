import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Drinks } from "./pages/Drinks";
import { cocktailSelector, cocktailStateType } from "./reducers/Cocktails";
import "./App.scss";

function App() {
    const { cocktailCodes }: cocktailStateType = useSelector(cocktailSelector);

    return (
        <div className="App__container">
            <Sidebar/>
            <Routes>
                {cocktailCodes.map((code: string) => (
                    <Route
                        key={code}
                        path={`/Cocktails_test/${code}`}
                        element={<Drinks cocktailCode={code}/>}
                    />
                ))}
                <Route path="/Cocktails_test/" element={<Navigate to={`/Cocktails_test/${cocktailCodes[0]}`}/>}/>
                <Route path="/" element={<Navigate to={`/Cocktails_test/${cocktailCodes[0]}`}/>}/>
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
