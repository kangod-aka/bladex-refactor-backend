import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { ContentPosts } from "./ContentPosts";

@Entity("content_comments", { schema: "blade" })
export class ContentComments {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("longtext", { name: "body", comment: "评论内容" })
  body: string;

  @Column("datetime", {
    name: "createdAt",
    comment: "创建时间",
    default: () => "'CURRENT_TIMESTAMP(6)'",
  })
  createdAt: Date;

  @Column("varchar", { name: "mpath", nullable: true, length: 255 })
  mpath: string | null;

  @ManyToOne(
    () => ContentPosts,
    (contentPosts) => contentPosts.contentComments,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "postId", referencedColumnName: "id" }])
  post: ContentPosts;

  @ManyToOne(
    () => ContentComments,
    (contentComments) => contentComments.contentComments,
    { onDelete: "CASCADE", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "parentId", referencedColumnName: "id" }])
  parent: ContentComments;

  @OneToMany(() => ContentComments, (contentComments) => contentComments.parent)
  contentComments: ContentComments[];
}
