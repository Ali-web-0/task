import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

interface Props {
  messages: any[];
}

const MessageList: React.FC<Props> = ({ messages }) => {
  return (
    <List sx={{ mt: 4, maxHeight: '400px', overflow: 'auto' }}>
      {messages.map((message, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={<Typography variant="body1">{message.content}</Typography>}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default MessageList;
