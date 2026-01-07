import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class StoryService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.story.findMany({ include: { author: true } });
  }

  async create(data: { title: string; content: string; authorId: string }) {
    return this.prisma.story.create({ data });
  }
}

