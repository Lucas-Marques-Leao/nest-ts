import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CreateTestInput } from './dto/create-test.input';
import { TestDTO } from './dto/test.dto';
import { UpdateTestInput } from './dto/update-test.input';
import { Test } from './entities/test.entity';

@Module({
  imports: [NestjsQueryGraphQLModule.forFeature({
    imports: [NestjsQueryTypeOrmModule.forFeature([Test])],
    resolvers: [{
      DTOClass: TestDTO, 
      EntityClass: Test,
      CreateDTOClass: CreateTestInput,
      UpdateDTOClass: UpdateTestInput,
      enableTotalCount: true,
      pagingStrategy: PagingStrategies.OFFSET,
    }]
  })],
  providers: []
})
export class TestsModule {}
