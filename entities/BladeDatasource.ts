import { Column, Entity } from "typeorm";

@Entity("blade_datasource", { schema: "blade" })
export class BladeDatasource {
  @Column("bigint", { primary: true, name: "id", comment: "主键" })
  id: string;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "名称",
    length: 100,
  })
  name: string | null;

  @Column("varchar", {
    name: "driver_class",
    nullable: true,
    comment: "驱动类",
    length: 100,
  })
  driverClass: string | null;

  @Column("varchar", {
    name: "url",
    nullable: true,
    comment: "连接地址",
    length: 500,
  })
  url: string | null;

  @Column("varchar", {
    name: "username",
    nullable: true,
    comment: "用户名",
    length: 50,
  })
  username: string | null;

  @Column("varchar", {
    name: "password",
    nullable: true,
    comment: "密码",
    length: 50,
  })
  password: string | null;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "备注",
    length: 255,
  })
  remark: string | null;

  @Column("bigint", { name: "create_user", nullable: true, comment: "创建人" })
  createUser: string | null;

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
