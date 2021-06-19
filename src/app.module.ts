import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';
@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://admin:admin@cluster0.x5pmf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`),
    BlogModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
