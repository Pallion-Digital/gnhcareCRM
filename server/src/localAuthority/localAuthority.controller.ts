import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LocalAuthorityService } from "./localAuthority.service";
import { LocalAuthorityControllerBase } from "./base/localAuthority.controller.base";

@swagger.ApiTags("localAuthorities")
@common.Controller("localAuthorities")
export class LocalAuthorityController extends LocalAuthorityControllerBase {
  constructor(
    protected readonly service: LocalAuthorityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
