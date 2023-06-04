import { Column, Entity } from "typeorm";

@Entity("blade_code", { schema: "blade" })
export class BladeCode {
  @Column("bigint", { primary: true, name: "id", comment: "主键" })
  id: string;

  @Column("bigint", {
    name: "datasource_id",
    nullable: true,
    comment: "数据源主键",
  })
  datasourceId: string | null;

  @Column("varchar", {
    name: "service_name",
    nullable: true,
    comment: "服务名称",
    length: 64,
  })
  serviceName: string | null;

  @Column("varchar", {
    name: "code_name",
    nullable: true,
    comment: "模块名称",
    length: 64,
  })
  codeName: string | null;

  @Column("varchar", {
    name: "table_name",
    nullable: true,
    comment: "表名",
    length: 64,
  })
  tableName: string | null;

  @Column("varchar", {
    name: "table_prefix",
    nullable: true,
    comment: "表前缀",
    length: 64,
  })
  tablePrefix: string | null;

  @Column("varchar", {
    name: "pk_name",
    nullable: true,
    comment: "主键名",
    length: 32,
  })
  pkName: string | null;

  @Column("varchar", {
    name: "package_name",
    nullable: true,
    comment: "后端包名",
    length: 500,
  })
  packageName: string | null;

  @Column("int", { name: "base_mode", nullable: true, comment: "基础业务模式" })
  baseMode: number | null;

  @Column("int", { name: "wrap_mode", nullable: true, comment: "包装器模式" })
  wrapMode: number | null;

  @Column("varchar", {
    name: "api_path",
    nullable: true,
    comment: "后端路径",
    length: 2000,
  })
  apiPath: string | null;

  @Column("varchar", {
    name: "web_path",
    nullable: true,
    comment: "前端路径",
    length: 2000,
  })
  webPath: string | null;

  @Column("int", {
    name: "is_deleted",
    nullable: true,
    comment: "是否已删除",
    default: () => "'0'",
  })
  isDeleted: number | null;
}
