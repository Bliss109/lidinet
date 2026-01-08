import { Body, Controller, Get, Post } from '@nestjs/common';
import { StoryService } from './story.service';
import { CreateStoryDto } from './dto/create-story.dto';

@Controller('stories')
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Get()
  findAll() {
    return this.storyService.findAll();
  }

  @Post()
  create(@Body() dto: CreateStoryDto) {
    return this.storyService.create(dto);
  }
}
