import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {

    constructor(private categoriesRepository: ICategoriesRepository){}

    execute( { name, description }: IRequest ){

        const categoryAlredyExists = this.categoriesRepository.findByName(name);

        if(categoryAlredyExists) {
            throw new Error("Category already exists!")
        }

        this.categoriesRepository.create({ name, description })
    }


}

export { CreateCategoryUseCase }