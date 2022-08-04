/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateLocalAuthorityArgs } from "./CreateLocalAuthorityArgs";
import { UpdateLocalAuthorityArgs } from "./UpdateLocalAuthorityArgs";
import { DeleteLocalAuthorityArgs } from "./DeleteLocalAuthorityArgs";
import { LocalAuthorityFindManyArgs } from "./LocalAuthorityFindManyArgs";
import { LocalAuthorityFindUniqueArgs } from "./LocalAuthorityFindUniqueArgs";
import { LocalAuthority } from "./LocalAuthority";
import { LocalAuthorityService } from "../localAuthority.service";

@graphql.Resolver(() => LocalAuthority)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class LocalAuthorityResolverBase {
  constructor(
    protected readonly service: LocalAuthorityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "LocalAuthority",
    action: "read",
    possession: "any",
  })
  async _localAuthoritiesMeta(
    @graphql.Args() args: LocalAuthorityFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [LocalAuthority])
  @nestAccessControl.UseRoles({
    resource: "LocalAuthority",
    action: "read",
    possession: "any",
  })
  async localAuthorities(
    @graphql.Args() args: LocalAuthorityFindManyArgs
  ): Promise<LocalAuthority[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => LocalAuthority, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "LocalAuthority",
    action: "read",
    possession: "own",
  })
  async localAuthority(
    @graphql.Args() args: LocalAuthorityFindUniqueArgs
  ): Promise<LocalAuthority | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => LocalAuthority)
  @nestAccessControl.UseRoles({
    resource: "LocalAuthority",
    action: "create",
    possession: "any",
  })
  async createLocalAuthority(
    @graphql.Args() args: CreateLocalAuthorityArgs
  ): Promise<LocalAuthority> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => LocalAuthority)
  @nestAccessControl.UseRoles({
    resource: "LocalAuthority",
    action: "update",
    possession: "any",
  })
  async updateLocalAuthority(
    @graphql.Args() args: UpdateLocalAuthorityArgs
  ): Promise<LocalAuthority | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => LocalAuthority)
  @nestAccessControl.UseRoles({
    resource: "LocalAuthority",
    action: "delete",
    possession: "any",
  })
  async deleteLocalAuthority(
    @graphql.Args() args: DeleteLocalAuthorityArgs
  ): Promise<LocalAuthority | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
