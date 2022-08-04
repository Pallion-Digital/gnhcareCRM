import { Module } from "@nestjs/common";
import { LocalAuthorityModuleBase } from "./base/localAuthority.module.base";
import { LocalAuthorityService } from "./localAuthority.service";
import { LocalAuthorityController } from "./localAuthority.controller";
import { LocalAuthorityResolver } from "./localAuthority.resolver";

@Module({
  imports: [LocalAuthorityModuleBase],
  controllers: [LocalAuthorityController],
  providers: [LocalAuthorityService, LocalAuthorityResolver],
  exports: [LocalAuthorityService],
})
export class LocalAuthorityModule {}
