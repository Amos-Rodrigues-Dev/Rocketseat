import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';
import { CreateSpecificationController } from './CreateSpecificationController';

const specificationsRepository = null;
const createSpecificationUseCAse = new CreateSpecificationUseCase(
  specificationsRepository,
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCAse,
);

export { createSpecificationController };
