import { Column, Entity } from "typeorm";

@Entity("blade_region", { schema: "blade" })
export class BladeRegion {
  @Column("varchar", {
    primary: true,
    name: "code",
    comment: "区划编号",
    length: 12,
  })
  code: string;

  @Column("varchar", {
    name: "parent_code",
    nullable: true,
    comment: "父区划编号",
    length: 12,
  })
  parentCode: string | null;

  @Column("varchar", {
    name: "ancestors",
    nullable: true,
    comment: "祖区划编号",
    length: 255,
  })
  ancestors: string | null;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "区划名称",
    length: 32,
  })
  name: string | null;

  @Column("varchar", {
    name: "province_code",
    nullable: true,
    comment: "省级区划编号",
    length: 12,
  })
  provinceCode: string | null;

  @Column("varchar", {
    name: "province_name",
    nullable: true,
    comment: "省级名称",
    length: 32,
  })
  provinceName: string | null;

  @Column("varchar", {
    name: "city_code",
    nullable: true,
    comment: "市级区划编号",
    length: 12,
  })
  cityCode: string | null;

  @Column("varchar", {
    name: "city_name",
    nullable: true,
    comment: "市级名称",
    length: 32,
  })
  cityName: string | null;

  @Column("varchar", {
    name: "district_code",
    nullable: true,
    comment: "区级区划编号",
    length: 12,
  })
  districtCode: string | null;

  @Column("varchar", {
    name: "district_name",
    nullable: true,
    comment: "区级名称",
    length: 32,
  })
  districtName: string | null;

  @Column("varchar", {
    name: "town_code",
    nullable: true,
    comment: "镇级区划编号",
    length: 12,
  })
  townCode: string | null;

  @Column("varchar", {
    name: "town_name",
    nullable: true,
    comment: "镇级名称",
    length: 32,
  })
  townName: string | null;

  @Column("varchar", {
    name: "village_code",
    nullable: true,
    comment: "村级区划编号",
    length: 12,
  })
  villageCode: string | null;

  @Column("varchar", {
    name: "village_name",
    nullable: true,
    comment: "村级名称",
    length: 32,
  })
  villageName: string | null;

  @Column("int", { name: "level", nullable: true, comment: "层级" })
  level: number | null;

  @Column("int", { name: "sort", nullable: true, comment: "排序" })
  sort: number | null;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "备注",
    length: 255,
  })
  remark: string | null;
}
