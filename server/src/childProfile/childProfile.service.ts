import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ChildProfileServiceBase } from "./base/childProfile.service.base";

@Injectable()
export class ChildProfileService extends ChildProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
