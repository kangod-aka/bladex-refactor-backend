import { Column, Entity } from "typeorm";

@Entity("blade_user_oauth", { schema: "blade" })
export class BladeUserOauth {
  @Column("bigint", { primary: true, name: "id", comment: "主键" })
  id: string;

  @Column("varchar", {
    name: "tenant_id",
    nullable: true,
    comment: "租户ID",
    length: 12,
  })
  tenantId: string | null;

  @Column("varchar", {
    name: "uuid",
    nullable: true,
    comment: "第三方系统用户ID",
    length: 64,
  })
  uuid: string | null;

  @Column("bigint", { name: "user_id", nullable: true, comment: "用户ID" })
  userId: string | null;

  @Column("varchar", {
    name: "username",
    nullable: true,
    comment: "账号",
    length: 32,
  })
  username: string | null;

  @Column("varchar", {
    name: "nickname",
    nullable: true,
    comment: "用户名",
    length: 64,
  })
  nickname: string | null;

  @Column("varchar", {
    name: "avatar",
    nullable: true,
    comment: "头像",
    length: 1000,
  })
  avatar: string | null;

  @Column("varchar", {
    name: "blog",
    nullable: true,
    comment: "应用主页",
    length: 50,
  })
  blog: string | null;

  @Column("varchar", {
    name: "company",
    nullable: true,
    comment: "公司名",
    length: 255,
  })
  company: string | null;

  @Column("varchar", {
    name: "location",
    nullable: true,
    comment: "地址",
    length: 255,
  })
  location: string | null;

  @Column("varchar", {
    name: "email",
    nullable: true,
    comment: "邮件",
    length: 255,
  })
  email: string | null;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "备注",
    length: 255,
  })
  remark: string | null;

  @Column("varchar", {
    name: "gender",
    nullable: true,
    comment: "性别",
    length: 16,
  })
  gender: string | null;

  @Column("varchar", {
    name: "source",
    nullable: true,
    comment: "来源",
    length: 16,
  })
  source: string | null;
}
