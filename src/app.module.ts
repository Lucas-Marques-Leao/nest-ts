import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { StudentsModule } from './modules/students/students.module';
import { DisciplinesModule } from './modules/disciplines/disciplines.module';
import { LessonsModule } from './modules/lessons/lessons.module';
import { ContentsModule } from './modules/contents/contents.module';
import { TestsModule } from './modules/tests/tests.module';
import { ProductsModule } from './modules/products/products.module';
import 'dotenv/config';
import 'reflect-metadata';

const cfg: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  synchronize: false,
  logging: true,
  entities: [
    "**/modules/**/entities/*.js"
  ],
  migrations: [
    "src/database/migrations/**/*.js"
  ],
  cli: {
    migrationsDir: "src/database/migrations/",
    entitiesDir: "**/modules/**/entities"
  }
}


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      driver: ApolloDriver,
    }),

    TypeOrmModule.forRoot(cfg),

    StudentsModule,

    DisciplinesModule,

    LessonsModule,

    ContentsModule,

    TestsModule,

    ProductsModule,

  ],
  
  providers: [AppService],

})
export class AppModule {}
