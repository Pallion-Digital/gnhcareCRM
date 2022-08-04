import { Module } from "@nestjs/common";
import { ChildProfileModuleBase } from "./base/childProfile.module.base";
import { ChildProfileService } from "./childProfile.service";
import { ChildProfileController } from "./childProfile.controller";
import { ChildProfileResolver } from "./childProfile.resolver";

@Module({
  imports: [ChildProfileModuleBase],
  controllers: [ChildProfileController],
  providers: [ChildProfileService, ChildProfileResolver],
  exports: [ChildProfileService],
})
export class ChildProfileModule {}
