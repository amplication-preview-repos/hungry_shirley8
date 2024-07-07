/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Teacher as PrismaTeacher,
  Lesson as PrismaLesson,
} from "@prisma/client";

export class TeacherServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TeacherCountArgs, "select">): Promise<number> {
    return this.prisma.teacher.count(args);
  }

  async teachers(args: Prisma.TeacherFindManyArgs): Promise<PrismaTeacher[]> {
    return this.prisma.teacher.findMany(args);
  }
  async teacher(
    args: Prisma.TeacherFindUniqueArgs
  ): Promise<PrismaTeacher | null> {
    return this.prisma.teacher.findUnique(args);
  }
  async createTeacher(args: Prisma.TeacherCreateArgs): Promise<PrismaTeacher> {
    return this.prisma.teacher.create(args);
  }
  async updateTeacher(args: Prisma.TeacherUpdateArgs): Promise<PrismaTeacher> {
    return this.prisma.teacher.update(args);
  }
  async deleteTeacher(args: Prisma.TeacherDeleteArgs): Promise<PrismaTeacher> {
    return this.prisma.teacher.delete(args);
  }

  async findLessons(
    parentId: string,
    args: Prisma.LessonFindManyArgs
  ): Promise<PrismaLesson[]> {
    return this.prisma.teacher
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .lessons(args);
  }
}
