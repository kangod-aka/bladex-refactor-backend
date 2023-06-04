import { Column, Entity } from "typeorm";

@Entity("blade_tenant", { schema: "blade" })
export class BladeTenant {
  @Column("bigint", { primary: true, name: "id", comment: "主键" })
  id: string;

  @Column("varchar", { name: "tenant_id", comment: "租户ID", length: 12 })
  tenantId: string;

  @Column("varchar", { name: "tenant_name", comment: "租户名称", length: 50 })
  tenantName: string;

  @Column("varchar", {
    name: "domain",
    nullable: true,
    comment: "域名地址",
    length: 255,
  })
  domain: string | null;

  @Column("varchar", {
    name: "linkman",
    nullable: true,
    comment: "联系人",
    length: 20,
  })
  linkman: string | null;

  @Column("varchar", {
    name: "contact_number",
    nullable: true,
    comment: "联系电话",
    length: 20,
  })
  contactNumber: string | null;

  @Column("varchar", {
    name: "address",
    nullable: true,
    comment: "联系地址",
    length: 255,
  })
  address: string | null;

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

  @Column("int", {
    name: "is_deleted",
    nullable: true,
    comment: "是否已删除",
    default: () => "'0'",
  })
  isDeleted: number | null;
}
