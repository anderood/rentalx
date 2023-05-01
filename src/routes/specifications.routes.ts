import { Router } from "express";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";
import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";

const specificationRoutes = Router();

const speificationsRepository = new SpecificationsRepository();

specificationRoutes.post("/", (request, response) => {

    const { name, description } = request.body;

    const createSpecificationService = new CreateSpecificationService(speificationsRepository);

    createSpecificationService.execute( { name, description });

    return response.status(201).send();
})

export { specificationRoutes }