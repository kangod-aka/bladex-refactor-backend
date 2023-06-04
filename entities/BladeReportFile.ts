import { Column, Entity } from "typeorm";

@Entity("blade_report_file", { schema: "blade" })
export class BladeReportFile {
  @Column("bigint", { primary: true, name: "id", comment: "主键" })
  id: string;

  @Column("varchar", { name: "name", comment: "文件名", length: 100 })
  name: string;

  @Column("mediumblob", {
    name: "content",
    nullable: true,
    comment: "文件内容",
  })
  content: Buffer | null;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    comment: "创建时间",
  })
  createTime: Date | null;

  @Column("datetime", {
    name: "update_time",
    nullable: true,
    comment: "更新时间",
  })
  updateTime: Date | null;

  @Column("int", {
    name: "is_deleted",
    nullable: true,
    comment: "是否已删除",
    default: () => "'0'",
  })
  isDeleted: number | null;
}
