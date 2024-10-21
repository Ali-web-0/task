import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import useWebSocket from '../hooks/useWebSocket';
import WebSocketConnection from '../components/WebSocketConnection';
import MessageList from '../components/MessageList';

const Home: React.FC = () => {
  const { messages, sendMessage, connectionStatus } = useWebSocket(
    'ws://localhost:3000'
  );

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Real-Time WebSocket Chat
      </Typography>
      <Box>
        <WebSocketConnection sendMessage={sendMessage} />
        <MessageList messages={messages} />
      </Box>
      <Typography align="center" color="error">
        Connection Status: {connectionStatus}
      </Typography>
    </Container>
  );
};

export default Home;
