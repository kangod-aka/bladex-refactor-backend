import { Column, Entity } from "typeorm";

@Entity("blade_role_scope", { schema: "blade" })
export class BladeRoleScope {
  @Column("bigint", { primary: true, name: "id", comment: "主键" })
  id: string;

  @Column("bigint", { name: "scope_id", nullable: true, comment: "数据权限id" })
  scopeId: string | null;

  @Column("bigint", { name: "role_id", nullable: true, comment: "角色id" })
  roleId: string | null;
}
