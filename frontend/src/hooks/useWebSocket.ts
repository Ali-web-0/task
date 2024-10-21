import { useState, useEffect } from 'react';

const useWebSocket = (url: string) => {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [messages, setMessages] = useState<any[]>([]);
    const [connectionStatus, setConnectionStatus] = useState<'connecting' | 'open' | 'closed'>('connecting');

    useEffect(() => {
        const newSocket = new WebSocket(url);

        newSocket.onopen = () => {
            console.log('WebSocket connected');
            setConnectionStatus('open');
        };

        newSocket.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                console.log('Received message:', data);
                setMessages((prevMessages) => [...prevMessages, data]);
            } catch (err) {
                console.error('Error parsing WebSocket message', err);
            }
        };

        newSocket.onerror = (error) => {
            console.error('WebSocket error:', error);
            setConnectionStatus('closed'); // Update status if there's an error
        };

        newSocket.onclose = () => {
            console.log('WebSocket disconnected');
            setConnectionStatus('closed');
        };

        setSocket(newSocket);

        return () => {
            newSocket.close();
        };
    }, [url]);

    const sendMessage = (message: object) => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            console.log('Sending message:', message);
            socket.send(JSON.stringify(message));
        } else {
            console.error('WebSocket is not open, cannot send message');
        }
    };

    return { messages, sendMessage, connectionStatus };
};

export default useWebSocket;
