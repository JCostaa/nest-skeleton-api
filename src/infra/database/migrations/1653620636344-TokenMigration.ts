import {MigrationInterface, QueryRunner} from "typeorm";

export class TokenMigration1653620636344 implements MigrationInterface {
    name = 'TokenMigration1653620636344'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tokens\` (\`id\` int NOT NULL AUTO_INCREMENT, \`hash\` varchar(255) NOT NULL, \`user_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`tokens\` ADD CONSTRAINT \`FK_8769073e38c365f315426554ca5\` FOREIGN KEY (\`user_id\`) REFERENCES \`tokens\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tokens\` DROP FOREIGN KEY \`FK_8769073e38c365f315426554ca5\``);
        await queryRunner.query(`DROP TABLE \`tokens\``);
    }

}
