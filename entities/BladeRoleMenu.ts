import { Column, Entity } from "typeorm";

@Entity("blade_role_menu", { schema: "blade" })
export class BladeRoleMenu {
  @Column("bigint", { primary: true, name: "id", comment: "主键" })
  id: string;

  @Column("bigint", { name: "menu_id", nullable: true, comment: "菜单id" })
  menuId: string | null;

  @Column("bigint", { name: "role_id", nullable: true, comment: "角色id" })
  roleId: string | null;
}
