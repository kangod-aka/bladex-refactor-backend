import { Column, Entity } from "typeorm";

@Entity("blade_log_api", { schema: "blade" })
export class BladeLogApi {
  @Column("bigint", { primary: true, name: "id", comment: "编号" })
  id: string;

  @Column("varchar", {
    name: "tenant_id",
    nullable: true,
    comment: "租户ID",
    length: 12,
    default: () => "'000000'",
  })
  tenantId: string | null;

  @Column("varchar", {
    name: "service_id",
    nullable: true,
    comment: "服务ID",
    length: 32,
  })
  serviceId: string | null;

  @Column("varchar", {
    name: "server_host",
    nullable: true,
    comment: "服务器名",
    length: 255,
  })
  serverHost: string | null;

  @Column("varchar", {
    name: "server_ip",
    nullable: true,
    comment: "服务器IP地址",
    length: 255,
  })
  serverIp: string | null;

  @Column("varchar", {
    name: "env",
    nullable: true,
    comment: "服务器环境",
    length: 255,
  })
  env: string | null;

  @Column("char", {
    name: "type",
    nullable: true,
    comment: "日志类型",
    length: 1,
    default: () => "'1'",
  })
  type: string | null;

  @Column("varchar", {
    name: "title",
    nullable: true,
    comment: "日志标题",
    length: 255,
  })
  title: string | null;

  @Column("varchar", {
    name: "method",
    nullable: true,
    comment: "操作方式",
    length: 10,
  })
  method: string | null;

  @Column("varchar", {
    name: "request_uri",
    nullable: true,
    comment: "请求URI",
    length: 255,
  })
  requestUri: string | null;

  @Column("varchar", {
    name: "user_agent",
    nullable: true,
    comment: "用户代理",
    length: 1000,
  })
  userAgent: string | null;

  @Column("varchar", {
    name: "remote_ip",
    nullable: true,
    comment: "操作IP地址",
    length: 255,
  })
  remoteIp: string | null;

  @Column("varchar", {
    name: "method_class",
    nullable: true,
    comment: "方法类",
    length: 255,
  })
  methodClass: string | null;

  @Column("varchar", {
    name: "method_name",
    nullable: true,
    comment: "方法名",
    length: 255,
  })
  methodName: string | null;

  @Column("text", { name: "params", nullable: true, comment: "操作提交的数据" })
  params: string | null;

  @Column("varchar", {
    name: "time",
    nullable: true,
    comment: "执行时间",
    length: 64,
  })
  time: string | null;

  @Column("varchar", {
    name: "create_by",
    nullable: true,
    comment: "创建者",
    length: 64,
  })
  createBy: string | null;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    comment: "创建时间",
    default: () => "CURRENT_TIMESTAMP",
  })
  createTime: Date | null;
}
