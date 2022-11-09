import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MoviesController } from './movies/movies.controller';
import { MoviesModule } from './movies/movies.module';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
