import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThingsModule } from './things/things.module';
import { PrismaService } from './common/prisma/prisma.service';

@Module({
  imports: [ThingsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
