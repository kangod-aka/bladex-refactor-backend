import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { ContentPosts } from "./ContentPosts";

@Entity("content_categories", { schema: "blade" })
export class ContentCategories {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "name", comment: "分类名称", length: 255 })
  name: string;

  @Column("int", {
    name: "customOrder",
    comment: "分类排序",
    default: () => "'0'",
  })
  customOrder: number;

  @Column("varchar", { name: "mpath", nullable: true, length: 255 })
  mpath: string | null;

  @ManyToOne(
    () => ContentCategories,
    (contentCategories) => contentCategories.contentCategories,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "parentId", referencedColumnName: "id" }])
  parent: ContentCategories;

  @OneToMany(
    () => ContentCategories,
    (contentCategories) => contentCategories.parent
  )
  contentCategories: ContentCategories[];

  @ManyToMany(
    () => ContentPosts,
    (contentPosts) => contentPosts.contentCategories
  )
  @JoinTable({
    name: "content_posts_categories_content_categories",
    joinColumns: [{ name: "contentCategoriesId", referencedColumnName: "id" }],
    inverseJoinColumns: [
      { name: "contentPostsId", referencedColumnName: "id" },
    ],
    schema: "blade",
  })
  contentPosts: ContentPosts[];
}
