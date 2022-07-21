# SOLID

1. Single Responsability Principle
2. Open/Closed Principle
3. Liskov Substitution Principle
4. Interface Segregation Principle
5. Dependency Inversion Principle

6. Cada classe/função tem uma responsabilidade
7. As classes da aplicação devem ser abertas para extensão e fechadas para modificação
8. Substituir um classe pai por um herança e não quebrar o código, a herança ter todas as funcionalidades da classe pai.

Dependency Inversion Principle.
Inverter a dependência de um classe

passar as dependencias de forma inversa
exemplo:
uma classe de criacaço de feedback depende de algo externo
o contexto externo solicita o que vai ser utilizado.

recebe do mundo externo um dependência pronta e só usa.
exemplo do nodemailer.

Arquivos que vão ser responsáveis para fazer comunicação com
o banco de dados, colocamos dentro de um folder REPOSITORIES
dica: criar um repositório para cada entidade.

Ficando assim: Folder REPOSITORIES
dentro dele um arquivo e esse arquivo
é a interface (dentro dessa interface
informo quais métodos/acoes vão existir dentro dele)
