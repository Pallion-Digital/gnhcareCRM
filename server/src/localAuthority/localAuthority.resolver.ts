import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { LocalAuthorityResolverBase } from "./base/localAuthority.resolver.base";
import { LocalAuthority } from "./base/LocalAuthority";
import { LocalAuthorityService } from "./localAuthority.service";

@graphql.Resolver(() => LocalAuthority)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class LocalAuthorityResolver extends LocalAuthorityResolverBase {
  constructor(
    protected readonly service: LocalAuthorityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
