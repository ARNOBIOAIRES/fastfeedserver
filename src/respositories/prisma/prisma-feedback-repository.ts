import { prisma } from "../../prisma";
import { FeedbacksRepository } from "../feedbacks-repository"
import { FeedbackCreateData } from './../feedbacks-repository';


export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
        
      }
    })
    
  }
}



/*
Caso queira trocar a implementaçao por outro ORM sem ser o prisma
é so criar outra classe e a aplicação continua funcionamento 
normalmente. Essa classe aqui implementa para o PRISMA, note

Observe que implements recebe o método FeedbacksRepository
e os dados recebem a tipagem de acordo com o "CONTRATO" FeedbackCreateData
*/