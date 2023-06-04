import { Column, Entity } from "typeorm";

@Entity("blade_client", { schema: "blade" })
export class BladeClient {
  @Column("bigint", { primary: true, name: "id", comment: "主键" })
  id: string;

  @Column("varchar", { name: "client_id", comment: "客户端id", length: 48 })
  clientId: string;

  @Column("varchar", {
    name: "client_secret",
    comment: "客户端密钥",
    length: 256,
  })
  clientSecret: string;

  @Column("varchar", {
    name: "resource_ids",
    nullable: true,
    comment: "资源集合",
    length: 256,
  })
  resourceIds: string | null;

  @Column("varchar", { name: "scope", comment: "授权范围", length: 256 })
  scope: string;

  @Column("varchar", {
    name: "authorized_grant_types",
    comment: "授权类型",
    length: 256,
  })
  authorizedGrantTypes: string;

  @Column("varchar", {
    name: "web_server_redirect_uri",
    nullable: true,
    comment: "回调地址",
    length: 256,
  })
  webServerRedirectUri: string | null;

  @Column("varchar", {
    name: "authorities",
    nullable: true,
    comment: "权限",
    length: 256,
  })
  authorities: string | null;

  @Column("int", { name: "access_token_validity", comment: "令牌过期秒数" })
  accessTokenValidity: number;

  @Column("int", {
    name: "refresh_token_validity",
    comment: "刷新令牌过期秒数",
  })
  refreshTokenValidity: number;

  @Column("varchar", {
    name: "additional_information",
    nullable: true,
    comment: "附加说明",
    length: 4096,
  })
  additionalInformation: string | null;

  @Column("varchar", {
    name: "autoapprove",
    nullable: true,
    comment: "自动授权",
    length: 256,
  })
  autoapprove: string | null;

  @Column("bigint", { name: "create_user", nullable: true, comment: "创建人" })
  createUser: string | null;

  @Column("bigint", {
    name: "create_dept",
    nullable: true,
    comment: "创建部门",
  })
  createDept: string | null;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    comment: "创建时间",
  })
  createTime: Date | null;

  @Column("bigint", { name: "update_user", nullable: true, comment: "修改人" })
  updateUser: string | null;

  @Column("datetime", {
    name: "update_time",
    nullable: true,
    comment: "修改时间",
  })
  updateTime: Date | null;

  @Column("int", { name: "status", comment: "状态" })
  status: number;

  @Column("int", { name: "is_deleted", comment: "是否已删除" })
  isDeleted: number;
}
