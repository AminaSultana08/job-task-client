
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import {

  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Modal from "react-modal";
const queryClient = new QueryClient();
Modal.setAppElement(document.getElementById("root"));
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      
        <RouterProvider router={router}></RouterProvider>
      
    </QueryClientProvider>
  </AuthProvider>
);
