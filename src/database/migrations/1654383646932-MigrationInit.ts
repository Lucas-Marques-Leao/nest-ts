import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationInit1654383646932 implements MigrationInterface {
    name = 'MigrationInit1654383646932'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "test" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "ex" integer, "exx" character varying, "exxx" character varying, CONSTRAINT "UQ_188eabf9746c129e46e12121afb" UNIQUE ("ex"), CONSTRAINT "UQ_e4c5acd6c7e4a9f6f31db666f89" UNIQUE ("exx"), CONSTRAINT "PK_5417af0062cf987495b611b59c7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "test"`);
    }

}
