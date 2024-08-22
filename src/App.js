import { router } from './routes/Routes';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          </RouterProvider>
    </QueryClientProvider>
  );
};

export default App;
