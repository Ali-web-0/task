import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { WebsocketModule } from './modules/websocket/websocket.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb+srv://admin:ysEbv3wOsutF9zUl@cluster1.7xsfezu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1'),  // Connect to MongoDB
    WebsocketModule,
  ],
})
export class AppModule {}
