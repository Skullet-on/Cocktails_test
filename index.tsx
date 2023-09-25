import React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import App from "./src/App";
import store from "./src/store/configureStore";
import "./styles.scss";

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(<BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
</BrowserRouter>);
