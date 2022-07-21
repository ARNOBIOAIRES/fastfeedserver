"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaFeedbacksRepository = void 0;
const prisma_1 = require("../../prisma");
class PrismaFeedbacksRepository {
    async create({ type, comment, screenshot }) {
        await prisma_1.prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot
            }
        });
    }
}
exports.PrismaFeedbacksRepository = PrismaFeedbacksRepository;
/*
Caso queira trocar a implementaçao por outro ORM sem ser o prisma
é so criar outra classe e a aplicação continua funcionamento
normalmente. Essa classe aqui implementa para o PRISMA, note

Observe que implements recebe o método FeedbacksRepository
e os dados recebem a tipagem de acordo com o "CONTRATO" FeedbackCreateData
*/ 
