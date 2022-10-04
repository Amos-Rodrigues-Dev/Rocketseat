import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(req: Request, res: Response) {
  CreateCourseService.execute({
    name: 'NodeJS',
    educator: 'Amós',
    duration: 10,
  });

  CreateCourseService.execute({
    name: 'JS',
    educator: 'Amós',
  });

  return res.send();
}
