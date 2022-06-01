import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { StudentsModule } from './modules/students/students.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';



@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      driver: ApolloDriver,
    }),

    TypeOrmModule.forRoot(),

    StudentsModule,

  ],
  providers: [AppService],
})
export class AppModule {}
