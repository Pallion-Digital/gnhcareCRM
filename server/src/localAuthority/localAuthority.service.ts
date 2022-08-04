import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { LocalAuthorityServiceBase } from "./base/localAuthority.service.base";

@Injectable()
export class LocalAuthorityService extends LocalAuthorityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
