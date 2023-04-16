---
sidebar: auto
title: Laravel - Parte 2
---

# Laravel - Parte 2 (CRUD de Cadastro de Clientes com múltiplos endereços)

Neste módulo, os estagiários continuarão trabalhando no projeto CRUD iniciado no módulo anterior, adicionando mais funcionalidades e aprimorando suas habilidades no Laravel.

# Desafios
## Desafio 1: Projeto prático - Parte 2

**Objetivo**: Continue o desenvolvimento do projeto CRUD no Laravel. Adicione a funcionalidade de editar e excluir clientes, implemente a paginação e melhore a segurança do aplicativo.

### Tópicos a serem abordados:

1. Validação de dados
2. Edição e exclusão de registros
3. Paginação
4. Segurança e proteção CSRF
5. Middleware e autenticação

### Atividades propostas:

1. Aplique a validação de dados nos formulários de adição e edição de clientes. Utilize as funcionalidades de validação do Laravel para garantir que os dados inseridos estejam de acordo com as regras definidas.

2. Adicione a funcionalidade de editar e excluir clientes no projeto CRUD. Implemente os métodos necessários nos controladores e atualize as views para incluir os formulários e botões de edição e exclusão.

3. Implemente a paginação na lista de clientes. Utilize a funcionalidade de paginação do Laravel para dividir a lista de clientes em várias páginas, melhorando a experiência do usuário.

4. Melhore a segurança do aplicativo adicionando proteção CSRF aos formulários. Utilize os tokens CSRF do Laravel para proteger os formulários contra ataques de falsificação de solicitação entre sites.

5. Implemente a autenticação no projeto CRUD. Utilize o sistema de autenticação do Laravel para criar um sistema de login e proteger as rotas do aplicativo com middleware.

Ao concluir esta parte do desafio, você terá desenvolvido um projeto CRUD completo no Laravel, implementando a funcionalidade de listar, adicionar, editar e excluir clientes, além de paginação e autenticação. Isso irá ajudá-lo a aprimorar suas habilidades de desenvolvimento com o Laravel e a criar aplicativos web mais complexos.

## Desafio 2: Edição e exclusão de registros

**Objetivo**: Continue o desenvolvimento do projeto CRUD no Laravel. Adicione a funcionalidade de editar e excluir clientes, implemente a paginação e melhore a segurança do aplicativo.

### Tópicos a serem abordados:

1. Validação de dados
2. Edição e exclusão de registros
3. Paginação
4. Segurança e proteção CSRF
5. Middleware e autenticação

### Atividades propostas:

1. Aplique a validação de dados nos formulários de adição e edição de clientes. Utilize as funcionalidades de validação do Laravel para garantir que os dados inseridos estejam de acordo com as regras definidas.

2. Adicione a funcionalidade de editar e excluir clientes no projeto CRUD. Implemente os métodos necessários nos controladores e atualize as views para incluir os formulários e botões de edição e exclusão. Siga os passos abaixo para isso:

   a. Crie rotas para as ações de editar e excluir registros de clientes.
   
   b. Adicione os métodos necessários aos controladores para lidar com as requisições de edição e exclusão.
   
   c. Atualize as views para exibir os formulários de edição e os botões de exclusão nos registros de clientes.
   
   d. Implemente as funcionalidades de edição e exclusão de clientes, garantindo que os dados sejam atualizados ou removidos corretamente do banco de dados.
   
3. Implemente a paginação na lista de clientes. Utilize a funcionalidade de paginação do Laravel para dividir a lista de clientes em várias páginas, melhorando a experiência do usuário.

4. Melhore a segurança do aplicativo adicionando proteção CSRF aos formulários. Utilize os tokens CSRF do Laravel para proteger os formulários contra ataques de falsificação de solicitação entre sites.

5. Implemente a autenticação no projeto CRUD. Utilize o sistema de autenticação do Laravel para criar um sistema de login e proteger as rotas do aplicativo com middleware.

Ao concluir esta parte do desafio, você terá desenvolvido um projeto CRUD completo no Laravel, implementando a funcionalidade de listar, adicionar, editar e excluir clientes, além de paginação e autenticação. Isso irá ajudá-lo a aprimorar suas habilidades de desenvolvimento com o Laravel e a criar aplicativos web mais complexos.

## Desafio 3: Relacionamentos entre tabelas

**Objetivo**: Aprenda como o Laravel lida com relacionamentos entre tabelas no banco de dados e implemente um recurso que permita associar múltiplos endereços a cada cliente no projeto CRUD.

### Tópicos a serem abordados:

1. Tipos de relacionamentos no Laravel (um para um, um para muitos, muitos para muitos)
2. Definindo relacionamentos com o Eloquent ORM
3. Acessando dados relacionados
4. Implementação de múltiplos endereços para clientes

### Atividades propostas:

1. Estude os tipos de relacionamentos que o Laravel oferece e como eles são representados no Eloquent ORM. Entenda as diferenças entre os relacionamentos e quando cada um deve ser utilizado.

2. Crie uma nova tabela chamada "endereços" para armazenar os endereços dos clientes. Inclua colunas como rua, número, complemento, bairro, cidade, estado e CEP. Lembre-se de adicionar uma chave estrangeira que referencie a tabela de clientes.

3. Utilize o Eloquent ORM para definir o relacionamento entre as tabelas de clientes e endereços. Neste caso, um cliente pode ter vários endereços, portanto, é um relacionamento "um para muitos". Defina os métodos necessários nas classes de modelo para representar esse relacionamento.

4. Implemente a funcionalidade de adicionar múltiplos endereços a cada cliente. Atualize os formulários de adição e edição de clientes para incluir campos de endereço. Ajuste os controladores e as views para lidar com os dados relacionados.

5. Ajuste a lista de clientes para exibir os endereços associados a cada cliente. Utilize o relacionamento definido no Eloquent ORM para acessar os dados dos endereços relacionados aos clientes.

6. Implemente a edição e exclusão de endereços. Adicione as rotas, controladores e views necessárias para permitir que os usuários editem e excluam endereços associados a clientes.

Ao concluir este desafio, você terá implementado um recurso de múltiplos endereços no projeto CRUD, permitindo associar vários endereços a cada cliente. Isso ajudará a aprimorar suas habilidades de trabalhar com relacionamentos entre tabelas no Laravel e a desenvolver aplicativos web mais complexos.

## Desafio 4: Autenticação e autorização

**Objetivo**: Aprenda a utilizar o sistema de autenticação e autorização do Laravel para proteger áreas sensíveis do seu projeto CRUD, garantindo que apenas usuários autorizados possam acessá-las.

### Tópicos a serem abordados:

1. Introdução à autenticação e autorização no Laravel
2. Utilizando o sistema de autenticação pré-construído
3. Criando e configurando o middleware de autorização
4. Protegendo rotas e controladores

### Atividades propostas:

1. Estude os conceitos básicos de autenticação e autorização no Laravel e entenda a diferença entre os dois.

2. Utilize o sistema de autenticação pré-construído do Laravel (Laravel Jetstream ou Breeze) para adicionar suporte a login, registro e recuperação de senha ao seu projeto CRUD. Configure o sistema de acordo com as necessidades do seu projeto.

3. Crie e configure um middleware de autorização para proteger áreas sensíveis do seu projeto CRUD. Esse middleware deve verificar se o usuário atual tem permissão para executar a ação solicitada (por exemplo, adicionar, editar ou excluir clientes).

4. Proteja as rotas e controladores do seu projeto CRUD usando o middleware de autorização. Aplique o middleware a todas as rotas e controladores que lidam com a adição, edição e exclusão de clientes e endereços.

5. Teste o sistema de autenticação e autorização, garantindo que apenas usuários autorizados possam acessar e realizar ações em áreas protegidas do projeto CRUD.

Ao concluir este desafio, você terá implementado um sistema de autenticação e autorização eficiente no seu projeto CRUD, garantindo que apenas usuários autorizados possam acessar e executar ações em áreas protegidas. Isso aprimorará a segurança do seu aplicativo web e ajudará a desenvolver habilidades essenciais para projetos futuros.

## Desafio 5: Projeto prático - Parte 2

**Objetivo**: Finalize o desenvolvimento do projeto CRUD no Laravel, implementando a validação de dados, edição e exclusão de registros, relacionamentos entre tabelas e autenticação e autorização.

### Tópicos a serem abordados:

1. Validação de dados
2. Edição e exclusão de registros
3. Relacionamentos entre tabelas
4. Autenticação e autorização

### Atividades propostas:

1. Implemente a validação de dados em todas as áreas do projeto CRUD que lidam com a entrada de informações do usuário. Garanta que apenas dados corretos e consistentes possam ser inseridos no banco de dados.

2. Adicione funcionalidades para editar e excluir registros de clientes no projeto CRUD, incluindo as rotas, controladores e views apropriados. Certifique-se de que essas operações estejam funcionando corretamente.

3. Implemente o recurso de múltiplos endereços para os clientes, utilizando relacionamentos entre tabelas no banco de dados. Adicione as funcionalidades necessárias para adicionar, editar e excluir endereços dos clientes.

4. Utilize o sistema de autenticação e autorização do Laravel para proteger áreas sensíveis do seu projeto CRUD, garantindo que apenas usuários autorizados possam acessá-las e executar ações.

5. Teste todas as funcionalidades do projeto CRUD, incluindo a validação de dados, edição e exclusão de registros, relacionamentos entre tabelas e autenticação e autorização. Certifique-se de que tudo esteja funcionando corretamente e que o projeto esteja completo.

Ao concluir este desafio, você terá finalizado o desenvolvimento do projeto CRUD no Laravel, aplicando todas as habilidades adquiridas nos desafios anteriores. Este projeto servirá como uma base sólida para futuros projetos em Laravel e ajudará a aprimorar seu conhecimento e habilidades como desenvolvedor web.
