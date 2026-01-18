import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Vercel-Admin-my-profile:o9IS5r8HzoImmX1Z@my-profile.ci2ja4b.mongodb.net/?retryWrites=true&w=majority', {
      // Use environment variable in production: process.env.MONGODB_URI
    }),
    ContactModule,
  ],
})
export class AppModule {}
