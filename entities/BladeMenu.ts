import { Column, Entity } from "typeorm";

@Entity("blade_menu", { schema: "blade" })
export class BladeMenu {
  @Column("bigint", { primary: true, name: "id", comment: "主键" })
  id: string;

  @Column("bigint", {
    name: "parent_id",
    nullable: true,
    comment: "父级菜单",
    default: () => "'0'",
  })
  parentId: string | null;

  @Column("varchar", {
    name: "code",
    nullable: true,
    comment: "菜单编号",
    length: 255,
  })
  code: string | null;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "菜单名称",
    length: 255,
  })
  name: string | null;

  @Column("varchar", {
    name: "alias",
    nullable: true,
    comment: "菜单别名",
    length: 255,
  })
  alias: string | null;

  @Column("varchar", {
    name: "path",
    nullable: true,
    comment: "请求地址",
    length: 255,
  })
  path: string | null;

  @Column("varchar", {
    name: "source",
    nullable: true,
    comment: "菜单资源",
    length: 255,
  })
  source: string | null;

  @Column("int", { name: "sort", nullable: true, comment: "排序" })
  sort: number | null;

  @Column("int", { name: "category", nullable: true, comment: "菜单类型" })
  category: number | null;

  @Column("int", {
    name: "action",
    nullable: true,
    comment: "操作按钮类型",
    default: () => "'0'",
  })
  action: number | null;

  @Column("int", {
    name: "is_open",
    nullable: true,
    comment: "是否打开新页面",
    default: () => "'1'",
  })
  isOpen: number | null;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "备注",
    length: 255,
  })
  remark: string | null;

  @Column("int", {
    name: "is_deleted",
    nullable: true,
    comment: "是否已删除",
    default: () => "'0'",
  })
  isDeleted: number | null;
}
