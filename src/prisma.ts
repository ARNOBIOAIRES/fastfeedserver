import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: ['query']
})

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