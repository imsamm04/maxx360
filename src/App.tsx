import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./index.css"; // Ensure Tailwind CSS is imported

function App() {
  return <RouterProvider router={router} />;
}

export default App;
