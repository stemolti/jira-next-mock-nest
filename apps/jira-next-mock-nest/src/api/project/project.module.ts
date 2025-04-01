import { Module } from '@nestjs/common';
import { ProjectService } from './project/project.service';
import { ProjectController } from './project/project.controller';

@Module({
  providers: [ProjectService],
  controllers: [ProjectController]
})
export class ProjectModule {}
