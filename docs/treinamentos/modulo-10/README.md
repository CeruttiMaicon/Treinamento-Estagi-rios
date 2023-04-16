---
sidebar: auto
---

# MySQL

Neste módulo, os estagiários aprenderão os fundamentos do MySQL e como trabalhar com bancos de dados e tabelas.

## Aulas

### Aula Curso em Vídeo

[Curso de Banco de Dados MySQL](https://www.youtube.com/playlist?list=PLHz_AreHm4dkBs-795Dsgvau_ekxg8g1r)

### Aula Otávio Miranda

[Curso de SQL com MySQL (Completo)](https://www.youtube.com/playlist?list=PLbIBj8vQhvm2WT-pjGS5x7zUzmh4VgvRk)

# Desafios

## Desafio 1: Introdução ao MySQL

**Objetivo**: Aprender os conceitos básicos do MySQL, seu histórico, características e arquitetura.

### Tópicos a serem abordados:

1. História do MySQL
2. Características do MySQL
3. Arquitetura do MySQL
4. Tipos de armazenamento
5. Instalação e configuração básica

### Atividades propostas:

1. Pesquise sobre a história do MySQL, como e quando ele foi criado, e quais são suas principais versões.

2. Entenda as características do MySQL, como:
   - Suporte a SQL (Structured Query Language)
   - Suporte a ACID (Atomicidade, Consistência, Isolamento e Durabilidade)
   - Suporte a múltiplos sistemas operacionais (Linux, Windows, macOS, etc.)
   - Suporte a múltiplos tipos de armazenamento
   - Suporte a várias linguagens de programação (PHP, Python, Java, etc.)
   - Suporte a mecanismos de armazenamento pluggable

3. Aprenda sobre a arquitetura do MySQL, incluindo:
   - Servidor MySQL
   - Mecanismos de armazenamento (InnoDB, MyISAM, etc.)
   - APIs de comunicação
   - Ferramentas e utilitários

4. Explore os diferentes tipos de armazenamento disponíveis no MySQL e suas características, como InnoDB, MyISAM, MEMORY, etc.

5. Instale o MySQL no seu computador seguindo as instruções fornecidas na documentação oficial: https://dev.mysql.com/doc/refman/8.0/en/installing.html

Ao concluir este desafio, o estagiário terá aprendido os fundamentos do MySQL, incluindo seu histórico, características e arquitetura, o que o ajudará a entender como o MySQL funciona e como utilizá-lo de maneira eficaz em projetos futuros.

## Desafio 2: Instalação e configuração do MySQL

**Objetivo**: Instalar o MySQL no seu computador e configurá-lo corretamente, incluindo a criação de um usuário e a definição de permissões.

### Tópicos a serem abordados:

1. Instalação do MySQL
2. Configuração inicial do MySQL
3. Criação de usuários e gerenciamento de permissões

### Atividades propostas:

1. Instale o MySQL no seu computador seguindo as instruções fornecidas na documentação oficial: https://dev.mysql.com/doc/refman/8.0/en/installing.html
   - Certifique-se de escolher a versão correta para o seu sistema operacional.
   - Siga as etapas de instalação e configuração conforme descrito na documentação.

2. Após a instalação, realize a configuração inicial do MySQL:
   - Inicie o servidor MySQL.
   - Conecte-se ao servidor MySQL usando a conta 'root'.
   - Configure a senha do usuário 'root' e anote-a para referência futura.
   - Execute o comando `SHOW DATABASES;` para verificar se o servidor MySQL está funcionando corretamente e exibindo os bancos de dados padrão.

3. Crie um novo usuário no MySQL e defina permissões apropriadas:
   - Crie um novo usuário com um nome de usuário e senha de sua escolha.
   - Atribua permissões apropriadas a esse usuário para que ele possa criar, modificar e excluir bancos de dados e tabelas.
   - Verifique se o novo usuário pode se conectar ao servidor MySQL e realizar operações nos bancos de dados e tabelas.

Ao concluir este desafio, o estagiário terá instalado e configurado com sucesso o MySQL em seu computador, incluindo a criação de um usuário e a definição de permissões. Isso proporcionará uma base sólida para aprender e praticar consultas e operações do MySQL em projetos futuros.

## Desafio 3: Comandos básicos do MySQL

**Objetivo**: Praticar comandos básicos do MySQL, como `CREATE`, `SELECT`, `INSERT`, `UPDATE` e `DELETE`, para criar e manipular dados em tabelas.

### Tópicos a serem abordados:

1. Criação de banco de dados e tabelas
2. Inserção de dados em tabelas
3. Consulta de dados em tabelas
4. Atualização de dados em tabelas
5. Exclusão de dados em tabelas

### Atividades propostas:

1. Crie um novo banco de dados chamado `my_database` e conecte-se a ele.

2. Dentro do banco de dados `my_database`, crie uma tabela chamada `users` com as seguintes colunas:
   - `id` (int, auto_increment, primary key)
   - `name` (varchar(255))
   - `email` (varchar(255))
   - `age` (int)

3. Insira alguns registros na tabela `users` com diferentes valores de `name`, `email` e `age`.

4. Use o comando `SELECT` para consultar todos os registros da tabela `users` e exibir suas informações.

5. Atualize um registro da tabela `users` alterando o valor da coluna `name`.

6. Exclua um registro da tabela `users`.

7. Consulte novamente a tabela `users` para verificar se as alterações feitas nos passos 5 e 6 foram aplicadas corretamente.

Ao concluir este desafio, o estagiário terá praticado comandos básicos do MySQL para criar e manipular dados em tabelas. Isso proporcionará uma compreensão básica de como o MySQL funciona e ajudará a desenvolver habilidades para trabalhar com bancos de dados em projetos futuros.

TODO - Parei aqui as descrições dos desafios
## Desafio 4: Consultas e filtros no MySQL

**Objetivo**: Aprenda a realizar consultas mais complexas e aplicar filtros, como `WHERE`, `ORDER BY` e `GROUP BY`, para recuperar dados específicos.

### Tópicos a serem abordados:

1. Consulta de dados com condições usando `WHERE`
2. Ordenação de resultados com `ORDER BY`
3. Agrupamento de resultados com `GROUP BY`
4. Utilização de funções agregadas, como `COUNT`, `SUM`, `AVG`, `MIN` e `MAX`

### Atividades propostas:

1. Crie uma tabela chamada `orders` no banco de dados `my_database` com as seguintes colunas:
   - `id` (int, auto_increment, primary key)
   - `user_id` (int, foreign key referenciando a tabela `users`)
   - `product` (varchar(255))
   - `price` (decimal(10, 2))
   - `quantity` (int)

2. Insira alguns registros na tabela `orders` com diferentes valores de `user_id`, `product`, `price` e `quantity`.

3. Use o comando `SELECT` com a cláusula `WHERE` para consultar todos os registros da tabela `orders` onde a coluna `price` é maior que um valor específico.

4. Ordene os registros recuperados no passo 3 por `price` em ordem decrescente usando a cláusula `ORDER BY`.

5. Use o comando `SELECT` com a cláusula `GROUP BY` para agrupar os registros da tabela `orders` por `user_id`.

6. Calcule o total de pedidos por usuário usando a função agregada `COUNT` e o total gasto por usuário usando a função agregada `SUM`.

7. Calcule o preço médio, mínimo e máximo dos produtos na tabela `orders` usando funções agregadas `AVG`, `MIN` e `MAX`.

Ao concluir este desafio, o estagiário terá praticado consultas mais complexas e aplicado filtros para recuperar dados específicos do MySQL. Isso ajudará a desenvolver habilidades mais avançadas para trabalhar com bancos de dados em projetos futuros.

## Desafio 5: Chaves e relacionamentos no MySQL

**Objetivo**: Entenda o conceito de chaves primárias e estrangeiras e como criar relacionamentos entre tabelas no MySQL.

### Tópicos a serem abordados:

1. Chaves primárias (PRIMARY KEY)
2. Chaves estrangeiras (FOREIGN KEY)
3. Criação de relacionamentos entre tabelas

### Atividades propostas:

1. Crie um banco de dados chamado `library`.

2. Crie uma tabela chamada `authors` no banco de dados `library` com as seguintes colunas:
   - `id` (int, auto_increment, primary key)
   - `name` (varchar(255))
   - `birthdate` (date)

3. Insira alguns registros na tabela `authors` com diferentes nomes e datas de nascimento.

4. Crie uma tabela chamada `books` no banco de dados `library` com as seguintes colunas:
   - `id` (int, auto_increment, primary key)
   - `title` (varchar(255))
   - `publication_date` (date)
   - `author_id` (int)

5. Adicione uma chave estrangeira à coluna `author_id` da tabela `books`, referenciando a coluna `id` da tabela `authors`.

6. Insira alguns registros na tabela `books` com diferentes títulos, datas de publicação e autores, relacionando-os com registros existentes na tabela `authors` através da coluna `author_id`.

7. Use o comando `SELECT` com a cláusula `JOIN` para recuperar informações de livros e seus respectivos autores.

Ao concluir este desafio, o estagiário terá compreendido o conceito de chaves primárias e estrangeiras e como criar relacionamentos entre tabelas no MySQL. Esses conhecimentos são fundamentais para projetar e gerenciar bancos de dados relacionais de maneira eficiente.

## Desafio 6: Normalização de dados

**Objetivo**: Aprenda sobre normalização de dados e aplique-a em um exemplo prático para melhorar a estrutura e a integridade dos dados em um banco de dados.

### Tópicos a serem abordados:

1. Conceito de normalização de dados
2. Primeira Forma Normal (1NF)
3. Segunda Forma Normal (2NF)
4. Terceira Forma Normal (3NF)

### Atividades propostas:

1. Crie um banco de dados chamado `company`.

2. Crie uma tabela chamada `employees` no banco de dados `company` com as seguintes colunas:
   - `id` (int, auto_increment, primary key)
   - `first_name` (varchar(255))
   - `last_name` (varchar(255))
   - `department` (varchar(255))
   - `position` (varchar(255))
   - `salary` (float)

3. Insira alguns registros na tabela `employees`, representando diferentes funcionários com diferentes informações.

4. Analise a estrutura da tabela `employees` e identifique possíveis problemas de normalização.

5. Aplique a Primeira Forma Normal (1NF) à tabela `employees`:
   - Crie uma tabela chamada `departments` com as seguintes colunas:
     - `id` (int, auto_increment, primary key)
     - `name` (varchar(255))
   - Remova a coluna `department` da tabela `employees` e substitua-a por uma coluna chamada `department_id` (int).
   - Adicione uma chave estrangeira à coluna `department_id` da tabela `employees`, referenciando a coluna `id` da tabela `departments`.

6. Aplique a Segunda Forma Normal (2NF) à tabela `employees`:
   - Crie uma tabela chamada `positions` com as seguintes colunas:
     - `id` (int, auto_increment, primary key)
     - `name` (varchar(255))
     - `department_id` (int)
   - Remova a coluna `position` da tabela `employees` e substitua-a por uma coluna chamada `position_id` (int).
   - Adicione uma chave estrangeira à coluna `position_id` da tabela `employees`, referenciando a coluna `id` da tabela `positions`.

7. Aplique a Terceira Forma Normal (3NF) à tabela `employees`:
   - Crie uma tabela chamada `salaries` com as seguintes colunas:
     - `id` (int, auto_increment, primary key)
     - `amount` (float)
     - `position_id` (int)
   - Remova a coluna `salary` da tabela `employees` e substitua-a por uma coluna chamada `salary_id` (int).
   - Adicione uma chave estrangeira à coluna `salary_id` da tabela `employees`, referenciando a coluna `id` da tabela `salaries`.

8. Verifique a estrutura do banco de dados após a aplicação das três formas normais e analise a integridade e organização dos dados.

Ao concluir este desafio, o estagiário terá aprendido sobre normalização de dados e como aplicá-la em um exemplo prático, melhorando a estrutura e a integridade dos dados em um banco de dados. Esses conhecimentos são fundamentais para projetar e
