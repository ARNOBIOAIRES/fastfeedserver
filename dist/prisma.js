"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
exports.prisma = new client_1.PrismaClient({
    log: ['query']
});
/*
Esse arquivo cria uma nova instância do PrismCliente que
é o objeto que faz a conexão com o banco de dados
no exemplo ese objeto está importando
uma propriedade log que vai registrar todas
as alterações no banco de dados.

observe que a constante "prisma" está sendo importada
ela vai ser chamada e utilizada dentro do arquivo server.
para incluir dados do bd.

*/ 
