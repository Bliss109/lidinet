import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';
import { StoryModule } from './story/story.module';

@Module({
  imports: [UserModule, StoryModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
