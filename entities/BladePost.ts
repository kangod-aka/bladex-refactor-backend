import { Column, Entity } from "typeorm";

@Entity("blade_post", { schema: "blade" })
export class BladePost {
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

  @Column("int", { name: "category", nullable: true, comment: "岗位类型" })
  category: number | null;

  @Column("varchar", {
    name: "post_code",
    nullable: true,
    comment: "岗位编号",
    length: 12,
  })
  postCode: string | null;

  @Column("varchar", {
    name: "post_name",
    nullable: true,
    comment: "岗位名称",
    length: 64,
  })
  postName: string | null;

  @Column("int", { name: "sort", nullable: true, comment: "岗位排序" })
  sort: number | null;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "岗位描述",
    length: 255,
  })
  remark: string | null;

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
