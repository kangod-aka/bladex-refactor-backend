import { Column, Entity } from "typeorm";

@Entity("blade_notice", { schema: "blade" })
export class BladeNotice {
  @Column("bigint", { primary: true, name: "id", comment: "主键" })
  id: string;

  @Column("varchar", {
    name: "tenant_id",
    nullable: true,
    comment: "租户ID",
    length: 12,
    default: () => "'000000'",
  })
  tenantId: string | null;

  @Column("varchar", {
    name: "title",
    nullable: true,
    comment: "标题",
    length: 255,
  })
  title: string | null;

  @Column("int", { name: "category", nullable: true, comment: "类型" })
  category: number | null;

  @Column("datetime", {
    name: "release_time",
    nullable: true,
    comment: "发布时间",
  })
  releaseTime: Date | null;

  @Column("varchar", {
    name: "content",
    nullable: true,
    comment: "内容",
    length: 255,
  })
  content: string | null;

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

  @Column("int", { name: "status", nullable: true, comment: "状态" })
  status: number | null;

  @Column("int", { name: "is_deleted", nullable: true, comment: "是否已删除" })
  isDeleted: number | null;
}
