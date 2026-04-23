import AppRoutes from "./routes/AppRoutes";

import { AuthProvider } from "./context/AuthContext";
import { SocketProvider } from "./context/SocketContext";
import { ChatProvider } from "./context/ChatContext";
import { NotificationProvider } from "./context/NotificationContext";

function App() {
  return (
    <AuthProvider>
      <SocketProvider>
        <ChatProvider>
          <NotificationProvider>
            <AppRoutes />
          </NotificationProvider>
        </ChatProvider>
      </SocketProvider>
    </AuthProvider>
  );
}

export default App;
