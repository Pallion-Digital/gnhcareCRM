/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ChildProfileService } from "../childProfile.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ChildProfileCreateInput } from "./ChildProfileCreateInput";
import { ChildProfileWhereInput } from "./ChildProfileWhereInput";
import { ChildProfileWhereUniqueInput } from "./ChildProfileWhereUniqueInput";
import { ChildProfileFindManyArgs } from "./ChildProfileFindManyArgs";
import { ChildProfileUpdateInput } from "./ChildProfileUpdateInput";
import { ChildProfile } from "./ChildProfile";
import { LocalAuthorityFindManyArgs } from "../../localAuthority/base/LocalAuthorityFindManyArgs";
import { LocalAuthority } from "../../localAuthority/base/LocalAuthority";
import { LocalAuthorityWhereUniqueInput } from "../../localAuthority/base/LocalAuthorityWhereUniqueInput";
import { UnitFindManyArgs } from "../../unit/base/UnitFindManyArgs";
import { Unit } from "../../unit/base/Unit";
import { UnitWhereUniqueInput } from "../../unit/base/UnitWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ChildProfileControllerBase {
  constructor(
    protected readonly service: ChildProfileService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "ChildProfile",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ChildProfile })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: ChildProfileCreateInput
  ): Promise<ChildProfile> {
    return await this.service.create({
      data: data,
      select: {
        allergies: true,
        clientName: true,
        createdAt: true,
        dateOfBirth: true,
        floatingSupport: true,
        gender: true,
        id: true,
        nameOfKeyWorker: true,
        semiIndependentLiving: true,
        startDate: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "ChildProfile",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [ChildProfile] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(ChildProfileFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<ChildProfile[]> {
    const args = plainToClass(ChildProfileFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        allergies: true,
        clientName: true,
        createdAt: true,
        dateOfBirth: true,
        floatingSupport: true,
        gender: true,
        id: true,
        nameOfKeyWorker: true,
        semiIndependentLiving: true,
        startDate: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "ChildProfile",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ChildProfile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ChildProfileWhereUniqueInput
  ): Promise<ChildProfile | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        allergies: true,
        clientName: true,
        createdAt: true,
        dateOfBirth: true,
        floatingSupport: true,
        gender: true,
        id: true,
        nameOfKeyWorker: true,
        semiIndependentLiving: true,
        startDate: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "ChildProfile",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ChildProfile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ChildProfileWhereUniqueInput,
    @common.Body() data: ChildProfileUpdateInput
  ): Promise<ChildProfile | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          allergies: true,
          clientName: true,
          createdAt: true,
          dateOfBirth: true,
          floatingSupport: true,
          gender: true,
          id: true,
          nameOfKeyWorker: true,
          semiIndependentLiving: true,
          startDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "ChildProfile",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ChildProfile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ChildProfileWhereUniqueInput
  ): Promise<ChildProfile | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          allergies: true,
          clientName: true,
          createdAt: true,
          dateOfBirth: true,
          floatingSupport: true,
          gender: true,
          id: true,
          nameOfKeyWorker: true,
          semiIndependentLiving: true,
          startDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "LocalAuthority",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/localAuthorities")
  @ApiNestedQuery(LocalAuthorityFindManyArgs)
  async findManyLocalAuthorities(
    @common.Req() request: Request,
    @common.Param() params: ChildProfileWhereUniqueInput
  ): Promise<LocalAuthority[]> {
    const query = plainToClass(LocalAuthorityFindManyArgs, request.query);
    const results = await this.service.findLocalAuthorities(params.id, {
      ...query,
      select: {
        address_1: true,
        address_2: true,

        childProfiles: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        email: true,
        id: true,
        name: true,
        phoneNumber: true,
        postCode: true,
        updatedAt: true,
        website: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "ChildProfile",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/localAuthorities")
  async connectLocalAuthorities(
    @common.Param() params: ChildProfileWhereUniqueInput,
    @common.Body() body: LocalAuthorityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      localAuthorities: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "ChildProfile",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/localAuthorities")
  async updateLocalAuthorities(
    @common.Param() params: ChildProfileWhereUniqueInput,
    @common.Body() body: LocalAuthorityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      localAuthorities: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "ChildProfile",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/localAuthorities")
  async disconnectLocalAuthorities(
    @common.Param() params: ChildProfileWhereUniqueInput,
    @common.Body() body: LocalAuthorityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      localAuthorities: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Unit",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/units")
  @ApiNestedQuery(UnitFindManyArgs)
  async findManyUnits(
    @common.Req() request: Request,
    @common.Param() params: ChildProfileWhereUniqueInput
  ): Promise<Unit[]> {
    const query = plainToClass(UnitFindManyArgs, request.query);
    const results = await this.service.findUnits(params.id, {
      ...query,
      select: {
        additionalUnitInfomation: true,

        childProfile: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,
        numberOfBedrooms: true,
        numberOfVacantRooms: true,
        postCode: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "ChildProfile",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/units")
  async connectUnits(
    @common.Param() params: ChildProfileWhereUniqueInput,
    @common.Body() body: UnitWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      units: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "ChildProfile",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/units")
  async updateUnits(
    @common.Param() params: ChildProfileWhereUniqueInput,
    @common.Body() body: UnitWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      units: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "ChildProfile",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/units")
  async disconnectUnits(
    @common.Param() params: ChildProfileWhereUniqueInput,
    @common.Body() body: UnitWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      units: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
