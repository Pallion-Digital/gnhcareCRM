import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ChildProfileResolverBase } from "./base/childProfile.resolver.base";
import { ChildProfile } from "./base/ChildProfile";
import { ChildProfileService } from "./childProfile.service";

@graphql.Resolver(() => ChildProfile)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ChildProfileResolver extends ChildProfileResolverBase {
  constructor(
    protected readonly service: ChildProfileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
