import { RouterProvider } from 'react-router-dom';
import router from './router';
import { AlertProvider } from './providers/AlertProvider';
import { AuthProvider } from './providers/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <AlertProvider>
        <RouterProvider router={router} />
      </AlertProvider>
    </AuthProvider>
  )
}

export default App
