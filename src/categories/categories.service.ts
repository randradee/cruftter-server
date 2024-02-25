import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class CategoriesService {

  constructor(private readonly prisma: PrismaService){}

  async create(createCategoryDto: Prisma.CategoryCreateInput) {
    return await this.prisma.category.create({ data: createCategoryDto });
  }

  async findAll() {
    return await this.prisma.category.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.category.findUnique({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateCategoryDto: Prisma.CategoryUpdateInput) {
    return await this.prisma.category.update({
      where: {
        id: id
      },
      data: updateCategoryDto
    });
  }

  async remove(id: number) {
    return await this.prisma.category.delete({
      where: {
        id: id
      }
    });
  }
}
