import{_ as e,p as a,q as o,a1 as i}from"./framework-5866ffd3.js";const s={},r=i('<h1 id="laravel-parte-2-crud-de-cadastro-de-clientes-com-multiplos-enderecos" tabindex="-1"><a class="header-anchor" href="#laravel-parte-2-crud-de-cadastro-de-clientes-com-multiplos-enderecos" aria-hidden="true">#</a> Laravel - Parte 2 (CRUD de Cadastro de Clientes com múltiplos endereços)</h1><p>Neste módulo, os estagiários continuarão trabalhando no projeto CRUD iniciado no módulo anterior, adicionando mais funcionalidades e aprimorando suas habilidades no Laravel.</p><h1 id="desafios" tabindex="-1"><a class="header-anchor" href="#desafios" aria-hidden="true">#</a> Desafios</h1><h2 id="desafio-1-projeto-pratico-parte-2" tabindex="-1"><a class="header-anchor" href="#desafio-1-projeto-pratico-parte-2" aria-hidden="true">#</a> Desafio 1: Projeto prático - Parte 2</h2><p><strong>Objetivo</strong>: Continue o desenvolvimento do projeto CRUD no Laravel. Adicione a funcionalidade de editar e excluir clientes, implemente a paginação e melhore a segurança do aplicativo.</p><h3 id="topicos-a-serem-abordados" tabindex="-1"><a class="header-anchor" href="#topicos-a-serem-abordados" aria-hidden="true">#</a> Tópicos a serem abordados:</h3><ol><li>Validação de dados</li><li>Edição e exclusão de registros</li><li>Paginação</li><li>Segurança e proteção CSRF</li><li>Middleware e autenticação</li></ol><h3 id="atividades-propostas" tabindex="-1"><a class="header-anchor" href="#atividades-propostas" aria-hidden="true">#</a> Atividades propostas:</h3><ol><li><p>Aplique a validação de dados nos formulários de adição e edição de clientes. Utilize as funcionalidades de validação do Laravel para garantir que os dados inseridos estejam de acordo com as regras definidas.</p></li><li><p>Adicione a funcionalidade de editar e excluir clientes no projeto CRUD. Implemente os métodos necessários nos controladores e atualize as views para incluir os formulários e botões de edição e exclusão.</p></li><li><p>Implemente a paginação na lista de clientes. Utilize a funcionalidade de paginação do Laravel para dividir a lista de clientes em várias páginas, melhorando a experiência do usuário.</p></li><li><p>Melhore a segurança do aplicativo adicionando proteção CSRF aos formulários. Utilize os tokens CSRF do Laravel para proteger os formulários contra ataques de falsificação de solicitação entre sites.</p></li><li><p>Implemente a autenticação no projeto CRUD. Utilize o sistema de autenticação do Laravel para criar um sistema de login e proteger as rotas do aplicativo com middleware.</p></li></ol><p>Ao concluir esta parte do desafio, você terá desenvolvido um projeto CRUD completo no Laravel, implementando a funcionalidade de listar, adicionar, editar e excluir clientes, além de paginação e autenticação. Isso irá ajudá-lo a aprimorar suas habilidades de desenvolvimento com o Laravel e a criar aplicativos web mais complexos.</p><h2 id="desafio-2-edicao-e-exclusao-de-registros" tabindex="-1"><a class="header-anchor" href="#desafio-2-edicao-e-exclusao-de-registros" aria-hidden="true">#</a> Desafio 2: Edição e exclusão de registros</h2><p><strong>Objetivo</strong>: Continue o desenvolvimento do projeto CRUD no Laravel. Adicione a funcionalidade de editar e excluir clientes, implemente a paginação e melhore a segurança do aplicativo.</p><h3 id="topicos-a-serem-abordados-1" tabindex="-1"><a class="header-anchor" href="#topicos-a-serem-abordados-1" aria-hidden="true">#</a> Tópicos a serem abordados:</h3><ol><li>Validação de dados</li><li>Edição e exclusão de registros</li><li>Paginação</li><li>Segurança e proteção CSRF</li><li>Middleware e autenticação</li></ol><h3 id="atividades-propostas-1" tabindex="-1"><a class="header-anchor" href="#atividades-propostas-1" aria-hidden="true">#</a> Atividades propostas:</h3><ol><li><p>Aplique a validação de dados nos formulários de adição e edição de clientes. Utilize as funcionalidades de validação do Laravel para garantir que os dados inseridos estejam de acordo com as regras definidas.</p></li><li><p>Adicione a funcionalidade de editar e excluir clientes no projeto CRUD. Implemente os métodos necessários nos controladores e atualize as views para incluir os formulários e botões de edição e exclusão. Siga os passos abaixo para isso:</p><p>a. Crie rotas para as ações de editar e excluir registros de clientes.</p><p>b. Adicione os métodos necessários aos controladores para lidar com as requisições de edição e exclusão.</p><p>c. Atualize as views para exibir os formulários de edição e os botões de exclusão nos registros de clientes.</p><p>d. Implemente as funcionalidades de edição e exclusão de clientes, garantindo que os dados sejam atualizados ou removidos corretamente do banco de dados.</p></li><li><p>Implemente a paginação na lista de clientes. Utilize a funcionalidade de paginação do Laravel para dividir a lista de clientes em várias páginas, melhorando a experiência do usuário.</p></li><li><p>Melhore a segurança do aplicativo adicionando proteção CSRF aos formulários. Utilize os tokens CSRF do Laravel para proteger os formulários contra ataques de falsificação de solicitação entre sites.</p></li><li><p>Implemente a autenticação no projeto CRUD. Utilize o sistema de autenticação do Laravel para criar um sistema de login e proteger as rotas do aplicativo com middleware.</p></li></ol><p>Ao concluir esta parte do desafio, você terá desenvolvido um projeto CRUD completo no Laravel, implementando a funcionalidade de listar, adicionar, editar e excluir clientes, além de paginação e autenticação. Isso irá ajudá-lo a aprimorar suas habilidades de desenvolvimento com o Laravel e a criar aplicativos web mais complexos.</p><h2 id="desafio-3-relacionamentos-entre-tabelas" tabindex="-1"><a class="header-anchor" href="#desafio-3-relacionamentos-entre-tabelas" aria-hidden="true">#</a> Desafio 3: Relacionamentos entre tabelas</h2><p><strong>Objetivo</strong>: Aprenda como o Laravel lida com relacionamentos entre tabelas no banco de dados e implemente um recurso que permita associar múltiplos endereços a cada cliente no projeto CRUD.</p><h3 id="topicos-a-serem-abordados-2" tabindex="-1"><a class="header-anchor" href="#topicos-a-serem-abordados-2" aria-hidden="true">#</a> Tópicos a serem abordados:</h3><ol><li>Tipos de relacionamentos no Laravel (um para um, um para muitos, muitos para muitos)</li><li>Definindo relacionamentos com o Eloquent ORM</li><li>Acessando dados relacionados</li><li>Implementação de múltiplos endereços para clientes</li></ol><h3 id="atividades-propostas-2" tabindex="-1"><a class="header-anchor" href="#atividades-propostas-2" aria-hidden="true">#</a> Atividades propostas:</h3><ol><li><p>Estude os tipos de relacionamentos que o Laravel oferece e como eles são representados no Eloquent ORM. Entenda as diferenças entre os relacionamentos e quando cada um deve ser utilizado.</p></li><li><p>Crie uma nova tabela chamada &quot;endereços&quot; para armazenar os endereços dos clientes. Inclua colunas como rua, número, complemento, bairro, cidade, estado e CEP. Lembre-se de adicionar uma chave estrangeira que referencie a tabela de clientes.</p></li><li><p>Utilize o Eloquent ORM para definir o relacionamento entre as tabelas de clientes e endereços. Neste caso, um cliente pode ter vários endereços, portanto, é um relacionamento &quot;um para muitos&quot;. Defina os métodos necessários nas classes de modelo para representar esse relacionamento.</p></li><li><p>Implemente a funcionalidade de adicionar múltiplos endereços a cada cliente. Atualize os formulários de adição e edição de clientes para incluir campos de endereço. Ajuste os controladores e as views para lidar com os dados relacionados.</p></li><li><p>Ajuste a lista de clientes para exibir os endereços associados a cada cliente. Utilize o relacionamento definido no Eloquent ORM para acessar os dados dos endereços relacionados aos clientes.</p></li><li><p>Implemente a edição e exclusão de endereços. Adicione as rotas, controladores e views necessárias para permitir que os usuários editem e excluam endereços associados a clientes.</p></li></ol><p>Ao concluir este desafio, você terá implementado um recurso de múltiplos endereços no projeto CRUD, permitindo associar vários endereços a cada cliente. Isso ajudará a aprimorar suas habilidades de trabalhar com relacionamentos entre tabelas no Laravel e a desenvolver aplicativos web mais complexos.</p><h2 id="desafio-4-autenticacao-e-autorizacao" tabindex="-1"><a class="header-anchor" href="#desafio-4-autenticacao-e-autorizacao" aria-hidden="true">#</a> Desafio 4: Autenticação e autorização</h2><p><strong>Objetivo</strong>: Aprenda a utilizar o sistema de autenticação e autorização do Laravel para proteger áreas sensíveis do seu projeto CRUD, garantindo que apenas usuários autorizados possam acessá-las.</p><h3 id="topicos-a-serem-abordados-3" tabindex="-1"><a class="header-anchor" href="#topicos-a-serem-abordados-3" aria-hidden="true">#</a> Tópicos a serem abordados:</h3><ol><li>Introdução à autenticação e autorização no Laravel</li><li>Utilizando o sistema de autenticação pré-construído</li><li>Criando e configurando o middleware de autorização</li><li>Protegendo rotas e controladores</li></ol><h3 id="atividades-propostas-3" tabindex="-1"><a class="header-anchor" href="#atividades-propostas-3" aria-hidden="true">#</a> Atividades propostas:</h3><ol><li><p>Estude os conceitos básicos de autenticação e autorização no Laravel e entenda a diferença entre os dois.</p></li><li><p>Utilize o sistema de autenticação pré-construído do Laravel (Laravel Jetstream ou Breeze) para adicionar suporte a login, registro e recuperação de senha ao seu projeto CRUD. Configure o sistema de acordo com as necessidades do seu projeto.</p></li><li><p>Crie e configure um middleware de autorização para proteger áreas sensíveis do seu projeto CRUD. Esse middleware deve verificar se o usuário atual tem permissão para executar a ação solicitada (por exemplo, adicionar, editar ou excluir clientes).</p></li><li><p>Proteja as rotas e controladores do seu projeto CRUD usando o middleware de autorização. Aplique o middleware a todas as rotas e controladores que lidam com a adição, edição e exclusão de clientes e endereços.</p></li><li><p>Teste o sistema de autenticação e autorização, garantindo que apenas usuários autorizados possam acessar e realizar ações em áreas protegidas do projeto CRUD.</p></li></ol><p>Ao concluir este desafio, você terá implementado um sistema de autenticação e autorização eficiente no seu projeto CRUD, garantindo que apenas usuários autorizados possam acessar e executar ações em áreas protegidas. Isso aprimorará a segurança do seu aplicativo web e ajudará a desenvolver habilidades essenciais para projetos futuros.</p><h2 id="desafio-5-projeto-pratico-parte-2" tabindex="-1"><a class="header-anchor" href="#desafio-5-projeto-pratico-parte-2" aria-hidden="true">#</a> Desafio 5: Projeto prático - Parte 2</h2><p><strong>Objetivo</strong>: Finalize o desenvolvimento do projeto CRUD no Laravel, implementando a validação de dados, edição e exclusão de registros, relacionamentos entre tabelas e autenticação e autorização.</p><h3 id="topicos-a-serem-abordados-4" tabindex="-1"><a class="header-anchor" href="#topicos-a-serem-abordados-4" aria-hidden="true">#</a> Tópicos a serem abordados:</h3><ol><li>Validação de dados</li><li>Edição e exclusão de registros</li><li>Relacionamentos entre tabelas</li><li>Autenticação e autorização</li></ol><h3 id="atividades-propostas-4" tabindex="-1"><a class="header-anchor" href="#atividades-propostas-4" aria-hidden="true">#</a> Atividades propostas:</h3><ol><li><p>Implemente a validação de dados em todas as áreas do projeto CRUD que lidam com a entrada de informações do usuário. Garanta que apenas dados corretos e consistentes possam ser inseridos no banco de dados.</p></li><li><p>Adicione funcionalidades para editar e excluir registros de clientes no projeto CRUD, incluindo as rotas, controladores e views apropriados. Certifique-se de que essas operações estejam funcionando corretamente.</p></li><li><p>Implemente o recurso de múltiplos endereços para os clientes, utilizando relacionamentos entre tabelas no banco de dados. Adicione as funcionalidades necessárias para adicionar, editar e excluir endereços dos clientes.</p></li><li><p>Utilize o sistema de autenticação e autorização do Laravel para proteger áreas sensíveis do seu projeto CRUD, garantindo que apenas usuários autorizados possam acessá-las e executar ações.</p></li><li><p>Teste todas as funcionalidades do projeto CRUD, incluindo a validação de dados, edição e exclusão de registros, relacionamentos entre tabelas e autenticação e autorização. Certifique-se de que tudo esteja funcionando corretamente e que o projeto esteja completo.</p></li></ol><p>Ao concluir este desafio, você terá finalizado o desenvolvimento do projeto CRUD no Laravel, aplicando todas as habilidades adquiridas nos desafios anteriores. Este projeto servirá como uma base sólida para futuros projetos em Laravel e ajudará a aprimorar seu conhecimento e habilidades como desenvolvedor web.</p>',38),d=[r];function t(n,l){return a(),o("div",null,d)}const p=e(s,[["render",t],["__file","index.html.vue"]]);export{p as default};
