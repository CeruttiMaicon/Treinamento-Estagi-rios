---
sidebar: auto
title: Laravel - Parte 1
---

# Laravel - Parte 1 (CRUD de Cadastro de Clientes com múltiplos endereços)

Neste módulo, os estagiários aprenderão os fundamentos do framework Laravel e começarão a trabalhar com um projeto CRUD.

## Aulas

### Aula Carlos Ferreira - Especializa TI

[Curso Gratuito de Laravel 10.x](https://www.youtube.com/playlist?list=PLVSNL1PHDWvQ1N6fqhQ5HQzFtN-xrkjNU)

## Documentação Oficial

[Documentação Oficial do Laravel](https://laravel.com/)

::: warning DICA 1

A documentação oficial do Laravel é um dos melhores recursos para aprender a usar o framework. Ela é bem completa e bem escrita, e é atualizada constantemente.

Sempre leia a documentação oficial antes de procurar por tutoriais na internet. Pois lá você encontrará a informação mais atualizada e a mais completa.

:::

::: warning DICA 2

Se vai iniciar um projeto com Laravel, leia a documentação oficial do framework antes de começar a codificar. Assim você terá uma visão geral do framework e poderá planejar melhor o projeto.

:::

# Desafios

## Desafio 1: Introdução ao Laravel

**Objetivo**: Entenda o que é o Laravel, seus recursos e arquitetura, e como ele se encaixa no ecossistema PHP.

### Tópicos a serem abordados:

1. História e evolução do Laravel
2. Principais características e recursos
3. Arquitetura do Laravel
4. Componentes do Laravel
5. Benefícios e vantagens de usar o Laravel

### Atividades propostas:

1. Pesquise sobre a história e evolução do Laravel, desde sua criação até a versão atual.

2. Identifique e explique as principais características e recursos do Laravel que o diferenciam de outros frameworks PHP.

3. Estude a arquitetura do Laravel, incluindo o padrão de projeto MVC (Model-View-Controller), o sistema de rotas, o Eloquent ORM, o Blade template engine, entre outros componentes.

4. Explore os componentes do Laravel, como Artisan, Tinker, Middleware, Service Container, e Event/Listener.

5. Avalie os benefícios e vantagens de usar o Laravel em projetos PHP, comparando com outras opções disponíveis no ecossistema PHP.

Ao concluir este desafio, o estagiário terá adquirido conhecimentos fundamentais sobre o Laravel, suas características e arquitetura, e como ele se posiciona no ecossistema PHP. Esses conhecimentos são importantes para quem deseja trabalhar com o Laravel em projetos PHP.

## Desafio 2: Instalação e configuração

**Objetivo**: Aprenda a instalar e configurar o Laravel, incluindo a criação de um novo projeto e a configuração do ambiente de desenvolvimento.

### Tópicos a serem abordados:

1. Requisitos do sistema
2. Instalação do Laravel
3. Criação de um novo projeto Laravel
4. Configuração do ambiente de desenvolvimento
5. Configuração do banco de dados

### Atividades propostas:

1. Verifique os requisitos do sistema para instalar o Laravel e certifique-se de que seu ambiente de desenvolvimento atenda a esses requisitos.

2. Instale o Laravel usando o instalador do Laravel ou o Composer. Estude as diferenças entre os dois métodos de instalação e escolha o que melhor se adapta às suas necessidades.

3. Crie um novo projeto Laravel usando o comando `laravel new` ou `composer create-project`, dependendo do método de instalação escolhido.

4. Configure o ambiente de desenvolvimento, incluindo a instalação e configuração do servidor web local (por exemplo, Laravel Valet, Laravel Homestead, XAMPP, WAMP, etc.) e a configuração do arquivo `.env`.

5. Configure o banco de dados para o seu projeto Laravel. Escolha um sistema de gerenciamento de banco de dados (MySQL, PostgreSQL, SQLite, etc.) e configure-o no arquivo `.env`. Verifique se o banco de dados está funcionando corretamente e se o Laravel pode se conectar a ele.

Ao concluir este desafio, o estagiário terá adquirido conhecimentos sobre a instalação e configuração do Laravel, bem como a criação e configuração de um novo projeto e do ambiente de desenvolvimento. Essas habilidades são fundamentais para começar a trabalhar com o Laravel em projetos PHP.

## Desafio 3: Rotas, controladores e views

**Objetivo**: Explore o sistema de rotas do Laravel, aprenda a criar controladores e trabalhe com views para gerar páginas dinâmicas.

### Tópicos a serem abordados:

1. Sistema de rotas do Laravel
2. Criação de controladores
3. Trabalhando com views
4. Passagem de dados entre controladores e views
5. Blade, o sistema de templates do Laravel

### Atividades propostas:

1. Familiarize-se com o sistema de rotas do Laravel. Crie rotas básicas para GET, POST, PUT e DELETE e aprenda a associá-las a métodos de controladores específicos.

2. Crie um controlador para gerenciar a lógica de negócios de uma parte específica do seu aplicativo. Use o comando `php artisan make:controller` para criar o controlador e adicione alguns métodos a ele.

3. Crie uma view para exibir os dados gerados pelo controlador. Utilize o Blade para criar o layout básico da página e adicione os dados dinâmicos.

4. Passe os dados do controlador para a view. Aprenda a usar a função `compact` ou o método `with` para passar os dados do controlador para a view.

5. Aprofunde-se no sistema de templates Blade. Aprenda a utilizar estruturas de controle, como loops e condicionais, e a incluir outros arquivos Blade para criar layouts reutilizáveis e componentes.

Ao concluir este desafio, o estagiário terá adquirido conhecimentos sobre o sistema de rotas, controladores e views do Laravel, e como eles interagem para criar páginas dinâmicas em um aplicativo Laravel. Essas habilidades são fundamentais para desenvolver aplicativos web com Laravel.

## Desafio 4: Migrations e Eloquent ORM

**Objetivo**: Aprenda a usar migrations para gerenciar o esquema do banco de dados e a utilizar o Eloquent ORM para interagir com os dados.

### Tópicos a serem abordados:

1. Migrations no Laravel
2. Criação e reversão de migrations
3. Eloquent ORM
4. Modelos Eloquent
5. Relacionamentos entre modelos

### Atividades propostas:

1. Crie uma migration para uma tabela em seu projeto Laravel. Utilize o comando `php artisan make:migration` para criar a migration e edite o arquivo gerado para definir o esquema da tabela.

2. Aplique a migration usando o comando `php artisan migrate`. Verifique se a tabela foi criada corretamente no banco de dados.

3. Reverta a migration usando o comando `php artisan migrate:rollback`. Verifique se a tabela foi removida do banco de dados.

4. Crie um modelo Eloquent para representar uma entidade do seu projeto. Utilize o comando `php artisan make:model` para criar o modelo e defina os atributos e métodos necessários.

5. Utilize o Eloquent ORM para interagir com os dados do banco de dados. Insira, atualize e recupere registros usando o modelo Eloquent criado.

6. Crie relacionamentos entre modelos Eloquent. Aprenda a definir relacionamentos como "um para um", "um para muitos", "muitos para muitos" e "polimórficos".

Ao concluir este desafio, o estagiário terá adquirido conhecimentos sobre migrations e Eloquent ORM no Laravel. Essas habilidades são essenciais para gerenciar o esquema do banco de dados e interagir com os dados em um aplicativo Laravel.

## Desafio 5: Projeto prático - Parte 1

**Objetivo**: Inicie o desenvolvimento de um projeto CRUD no Laravel. Crie o esquema do banco de dados, as rotas, controladores e views para listar e adicionar clientes.

### Tópicos a serem abordados:

1. Planejamento do projeto
2. Migrations e Eloquent ORM
3. Rotas e controladores
4. Views e templates Blade
5. Formulários e validação

### Atividades propostas:

1. Planeje um projeto CRUD simples no Laravel. Identifique as entidades, atributos e relacionamentos necessários. Neste exemplo, você trabalhará com a entidade Cliente.

2. Crie uma migration para a tabela `clientes` em seu projeto Laravel. Utilize o comando `php artisan make:migration` para criar a migration e defina o esquema da tabela.

3. Aplique a migration usando o comando `php artisan migrate`. Verifique se a tabela foi criada corretamente no banco de dados.

4. Crie um modelo Eloquent `Cliente` para representar a entidade Cliente. Utilize o comando `php artisan make:model` para criar o modelo e defina os atributos e métodos necessários.

5. Crie rotas e controladores para listar e adicionar clientes. Utilize o comando `php artisan make:controller` para criar um controlador e implemente os métodos necessários.

6. Crie views e templates Blade para exibir a lista de clientes e o formulário de adição de clientes. Utilize o sistema de templates do Blade para criar layouts reutilizáveis.

7. Implemente o formulário de adição de clientes e adicione validação de dados. Utilize as funcionalidades de validação do Laravel para garantir que os dados inseridos estejam de acordo com as regras definidas.

Ao concluir esta parte do desafio, você terá iniciado o desenvolvimento de um projeto CRUD no Laravel e implementado a funcionalidade de listar e adicionar clientes. Isso irá ajudá-lo a aprimorar suas habilidades de desenvolvimento com o Laravel e a criar aplicativos web mais complexos.
