import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    MessageBody,
    OnGatewayInit,
    OnGatewayConnection,
    OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { WebsocketService } from '../services/websocket.service';
import { CreateMessageDto } from '../dto/create-message.dto';

@WebSocketGateway({ cors: { origin: 'http://localhost:3001' } })
export class WebsocketGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server;

    constructor(private readonly websocketService: WebsocketService) { }

    afterInit(server: Server) {
        console.log('WebSocket Gateway Initialized....');
    }

    handleConnection(client: Socket) {
        console.log(client)
        console.log(`Client connected: ${client.id}`);
    }

    handleDisconnect(client: Socket) {
        console.log(`Client disconnected: ${client.id}`);
    }

    @SubscribeMessage('message')
    async handleMessage(@MessageBody() createMessageDto: CreateMessageDto): Promise<void> {
        const processedMessage = await this.websocketService.processData(createMessageDto);
        this.server.emit('processedData', processedMessage);
    }
}
