import { router } from "./routes/Routes";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import { RouterProvider } from "react-router-dom";
const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider
        maxSnack={1}
        autoHideDuration={5000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <RouterProvider router={router}></RouterProvider>
      </SnackbarProvider>
    </QueryClientProvider>
  );
};

export default App;
