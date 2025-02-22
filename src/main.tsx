import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import store from "./rtk/store.ts";
import { Provider } from "react-redux";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <Analytics framework="react" />
        <App />
    </Provider>
);