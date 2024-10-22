import React from 'react';
import { List, ListItem, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { User } from '../types/WebSocketTypes';

interface Props {
  messages: User[];
}

const Triangle = styled('div')<{ isUserMessage: boolean }>(
  ({ isUserMessage }) => ({
    content: '""', // Required for pseudo-elements
    position: 'absolute',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: isUserMessage ? '10px 0 10px 10px' : '10px 10px 10px 0',
    borderColor: isUserMessage
      ? 'transparent transparent transparent #1976d2'
      : 'transparent #f1f0f0 transparent transparent',
    top: '50%',
    transform: 'translateY(-50%)',
    left: isUserMessage ? 'auto' : '-10px',
    right: isUserMessage ? '-10px' : 'auto',
  })
);

const MessageList: React.FC<Props> = ({ messages }) => {
  return (
    <List sx={{ mt: 4, maxHeight: '400px', overflow: 'auto', p: 0 }}>
      {messages.map((message, index) => {
        const isUserMessage = message.isUser; // Assuming you have a field to identify user messages
        return (
          <ListItem
            key={index}
            sx={{
              display: 'flex',
              justifyContent: isUserMessage ? 'flex-end' : 'flex-start',
              alignItems: 'flex-end',
              px: 2,
            }}
          >
            <Box
              sx={{
                backgroundColor: isUserMessage ? '#1976d2' : '#f1f0f0',
                color: isUserMessage ? 'white' : 'black',
                borderRadius: '15px',
                p: 2,
                maxWidth: '70%',
                boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
                textAlign: isUserMessage ? 'right' : 'left',
                wordBreak: 'break-word',
                position: 'relative',
              }}
            >
              <Typography variant="body1" sx={{ mb: 0.5 }}>
                {message.content}
              </Typography>
              <Triangle isUserMessage={isUserMessage} />
            </Box>
          </ListItem>
        );
      })}
    </List>
  );
};

export default MessageList;
