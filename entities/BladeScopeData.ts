import { Column, Entity } from "typeorm";

@Entity("blade_scope_data", { schema: "blade" })
export class BladeScopeData {
  @Column("bigint", { primary: true, name: "id", comment: "主键" })
  id: string;

  @Column("bigint", { name: "menu_id", nullable: true, comment: "菜单主键" })
  menuId: string | null;

  @Column("varchar", {
    name: "resource_code",
    nullable: true,
    comment: "资源编号",
    length: 255,
  })
  resourceCode: string | null;

  @Column("varchar", {
    name: "scope_name",
    nullable: true,
    comment: "数据权限名称",
    length: 255,
  })
  scopeName: string | null;

  @Column("varchar", {
    name: "scope_field",
    nullable: true,
    comment: "数据权限字段",
    length: 255,
  })
  scopeField: string | null;

  @Column("varchar", {
    name: "scope_class",
    nullable: true,
    comment: "数据权限类名",
    length: 500,
  })
  scopeClass: string | null;

  @Column("varchar", {
    name: "scope_column",
    nullable: true,
    comment: "数据权限字段",
    length: 255,
  })
  scopeColumn: string | null;

  @Column("int", {
    name: "scope_type",
    nullable: true,
    comment: "数据权限类型",
  })
  scopeType: number | null;

  @Column("varchar", {
    name: "scope_value",
    nullable: true,
    comment: "数据权限值域",
    length: 2000,
  })
  scopeValue: string | null;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "数据权限备注",
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
