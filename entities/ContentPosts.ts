import { Column, Entity, ManyToMany, OneToMany } from "typeorm";
import { ContentComments } from "./ContentComments";
import { ContentCategories } from "./ContentCategories";

@Entity("content_posts", { schema: "blade" })
export class ContentPosts {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "title", comment: "文章标题", length: 255 })
  title: string;

  @Column("longtext", { name: "body", comment: "文章内容" })
  body: string;

  @Column("varchar", {
    name: "summary",
    nullable: true,
    comment: "文章描述",
    length: 255,
  })
  summary: string | null;

  @Column("text", { name: "keywords", nullable: true, comment: "关键字" })
  keywords: string | null;

  @Column("enum", {
    name: "type",
    comment: "文章类型",
    enum: ["html", "markdown"],
    default: () => "'markdown'",
  })
  type: "html" | "markdown";

  @Column("varchar", {
    name: "publishedAt",
    nullable: true,
    comment: "发布时间",
    length: 255,
  })
  publishedAt: string | null;

  @Column("int", {
    name: "customOrder",
    comment: "自定义文章排序",
    default: () => "'0'",
  })
  customOrder: number;

  @Column("datetime", {
    name: "createdAt",
    comment: "创建时间",
    default: () => "'CURRENT_TIMESTAMP(6)'",
  })
  createdAt: Date;

  @Column("datetime", {
    name: "updatedAt",
    comment: "更新时间",
    default: () => "'CURRENT_TIMESTAMP(6)'",
  })
  updatedAt: Date;

  @OneToMany(() => ContentComments, (contentComments) => contentComments.post)
  contentComments: ContentComments[];

  @ManyToMany(
    () => ContentCategories,
    (contentCategories) => contentCategories.contentPosts
  )
  contentCategories: ContentCategories[];
}
