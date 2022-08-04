import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ChildProfileService } from "./childProfile.service";
import { ChildProfileControllerBase } from "./base/childProfile.controller.base";

@swagger.ApiTags("childProfiles")
@common.Controller("childProfiles")
export class ChildProfileController extends ChildProfileControllerBase {
  constructor(
    protected readonly service: ChildProfileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
