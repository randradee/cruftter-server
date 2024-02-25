import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class ThingsService {

  constructor(private readonly prisma: PrismaService){}

  async create(createThingDto: Prisma.ThingCreateInput) {
    return await this.prisma.thing.create({ data: createThingDto })
  }

  async findAll() {
    return await this.prisma.thing.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.thing.findUnique({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateThingDto: Prisma.ThingUpdateInput) {
    return await this.prisma.thing.update({
      where: {
        id: id
      },
      data: updateThingDto
    });
  }

  async remove(id: number) {
    return await this.prisma.thing.delete({
      where: {
        id: id
      }
    });
  }
}
