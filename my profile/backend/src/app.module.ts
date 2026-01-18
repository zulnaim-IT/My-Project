import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/myprofile', {
      // Use environment variable in production: process.env.MONGODB_URI
    }),
    ContactModule,
  ],
})
export class AppModule {}
