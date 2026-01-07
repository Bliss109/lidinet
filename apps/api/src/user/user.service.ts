import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async findAllUsers() {
        return this.prisma.user.findMany();
    }
    async create(data: {name: string; email: string; role: string}) {
        return this.prisma.user.create({ data });
    }
}
