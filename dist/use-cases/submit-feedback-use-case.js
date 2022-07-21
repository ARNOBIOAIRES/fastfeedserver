"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitFeedbackUseCase = void 0;
class SubmitFeedbackUseCase {
    constructor(FeedbacksRepository, mailAdapter) {
        this.FeedbacksRepository = FeedbacksRepository;
        this.mailAdapter = mailAdapter;
    }
    async execute(request) {
        const { type, comment, screenshot } = request;
        if (!type) {
            throw new Error('Type is required.');
        }
        if (!comment) {
            throw new Error('Comment is required.');
        }
        if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
            throw new Error('Invalid screenchot format');
        }
        await this.FeedbacksRepository.create({
            type,
            comment,
            screenshot,
        });
        await this.mailAdapter.sendMail({
            subject: 'novo feedback',
            body: [
                `<div>`,
                `<p>Tipo de feedback: ${type}</p>`,
                `<p>Comentário ${comment}</p>`,
                screenshot ? `<img src="${screenshot}" />` : '',
                `</div>`
            ].join('\n')
        });
    }
}
exports.SubmitFeedbackUseCase = SubmitFeedbackUseCase;
/*
Esse arquivo lida com a camada da aplicação e
executa os CONTRATOS, e os contratos
implementam os serviços externos (banco de dados, envio de email etc)
assim aplicamos o conceito do desaclopamento e o  principio  da inversão de dependência

 
"O prisma e o nodemailer são  inversamente injetados na aplicação
executando de acordo com o descritivo do Contrato"



*/ 
