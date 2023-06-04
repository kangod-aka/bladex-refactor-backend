import { Column, Entity } from "typeorm";

@Entity("blade_param", { schema: "blade" })
export class BladeParam {
  @Column("bigint", { primary: true, name: "id", comment: "主键" })
  id: string;

  @Column("varchar", {
    name: "param_name",
    nullable: true,
    comment: "参数名",
    length: 255,
  })
  paramName: string | null;

  @Column("varchar", {
    name: "param_key",
    nullable: true,
    comment: "参数键",
    length: 255,
  })
  paramKey: string | null;

  @Column("varchar", {
    name: "param_value",
    nullable: true,
    comment: "参数值",
    length: 255,
  })
  paramValue: string | null;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "备注",
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

  @Column("int", {
    name: "is_deleted",
    nullable: true,
    comment: "是否已删除",
    default: () => "'0'",
  })
  isDeleted: number | null;
}
