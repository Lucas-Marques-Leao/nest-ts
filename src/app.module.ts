import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { StudentsModule } from './modules/students/students.module';
import 'dotenv/config';
import 'reflect-metadata';

const cfg: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  synchronize: true,
  logging: true,
  entities: [
    "**/modules/**/entities/*.js"
  ],
  migrations: [
    "src/database/migrations/**/*.ts"
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

  

  ],
  providers: [AppService],
})
export class AppModule {}
