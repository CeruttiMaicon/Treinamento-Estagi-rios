---
sidebar: auto
title: Módulo 2
---

# Módulo 2: Versionamento de código GIT e Fluxo de Desenvolvimento

Neste módulo, os estagiários aprenderão sobre o sistema de controle de versão Git e o fluxo de desenvolvimento utilizando o versionamento semântico.

## Aulas

### Aula Curso em Vídeo

[Curso de Git e GitHub](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)

# Desafios

## Desafio 1: Instalação e configuração do Git

**Objetivo**: Instalar o Git no seu computador e configurar seu nome de usuário e e-mail.

### Tópicos a serem estudados:

1. Instalação do Git: Aprenda a instalar o Git no seu sistema operacional (Linux, macOS ou Windows).
2. Configuração básica do Git: Aprenda a configurar seu nome de usuário e e-mail para que seus commits sejam atribuídos corretamente.

### Atividades propostas:

1. Instale o Git no seu computador seguindo as instruções de instalação para o seu sistema operacional.
   - Linux: Use o gerenciador de pacotes da sua distribuição (por exemplo, `apt-get`, `yum` ou `pacman`).
   - macOS: Use o Homebrew (`brew install git`) ou baixe o instalador do site oficial do Git.
   - Windows: Baixe o instalador do site oficial do Git e siga as instruções de instalação.
2. Configure seu nome de usuário e e-mail no Git com os seguintes comandos:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```
3. Verifique se a configuração foi aplicada corretamente executando:

```bash
git config --list
```

Seu nome de usuário e e-mail devem ser exibidos na lista de configurações.

Este desafio ajudará o estagiário a instalar e configurar o Git, preparando-o para trabalhar com projetos de código-fonte controlados por versionamento.

## Desafio 2: Inicializar um repositório Git

**Objetivo**: Criar um novo diretório e inicializar um repositório Git nele.

### Tópicos a serem estudados:

1. Criar um novo diretório: Aprenda a criar um diretório para o seu projeto.
2. Inicializar um repositório Git: Aprenda a transformar um diretório comum em um repositório Git.

### Atividades propostas:

1. Crie um novo diretório para o seu projeto. Você pode usar o comando `mkdir` para criar um diretório. Por exemplo:

```bash
mkdir meu-projeto
```

2. Navegue até o diretório que você acabou de criar usando o comando `cd`. Por exemplo:

```bash
cd meu-projeto
```

3. Inicialize um repositório Git no diretório atual usando o comando `git init`. O comando deve retornar uma mensagem informando que o repositório foi inicializado. Por exemplo:

```bash
git init
```

Saída esperada: `Initialized empty Git repository in /caminho/para/seu/diretório/meu-projeto/.git/`

Ao concluir este desafio, o estagiário terá criado um novo diretório e inicializado um repositório Git nele, estando pronto para começar a rastrear as alterações no projeto.


## Desafio 3: Adicionar e confirmar alterações

**Objetivo**: Adicionar alguns arquivos ao seu repositório e fazer commit das alterações.

### Tópicos a serem estudados:

1. Criar arquivos: Aprenda a criar arquivos para o seu projeto.
2. `git add`: Aprenda a adicionar arquivos ao índice do Git.
3. `git commit`: Aprenda a confirmar alterações e criar um novo commit.

### Atividades propostas:

1. Crie um novo arquivo no diretório do seu projeto. Você pode usar o comando `touch` para criar um arquivo vazio ou utilizar seu editor de texto favorito. Por exemplo:

```bash
touch arquivo.txt
```

2. Adicione conteúdo ao arquivo criado utilizando seu editor de texto preferido.
3. Verifique o status do seu repositório Git com o comando `git status`. O arquivo criado deve aparecer como "não rastreado" (untracked).
4. Adicione o arquivo ao índice do Git utilizando o comando `git add`. Por exemplo:

```bash
git add arquivo.txt
```

5. Verifique novamente o status do seu repositório Git com o comando `git status`. O arquivo agora deve aparecer como "pronto para commit" (staged).
6. Faça commit das alterações utilizando o comando `git commit`, incluindo uma mensagem de commit descritiva. Por exemplo:

```bash
git commit -m "Adiciona arquivo.txt ao repositório"
```

Ao concluir este desafio, o estagiário terá adicionado um arquivo ao repositório e confirmado as alterações, criando um novo commit.

## Desafio 4: Criar e mesclar branches

**Objetivo**: Criar uma nova branch, fazer alterações nela e, em seguida, fazer o merge das alterações na branch principal.

### Tópicos a serem estudados:

1. Branches: Entenda o conceito de branches no Git e como eles são utilizados.
2. `git branch`: Aprenda a criar e listar branches.
3. `git checkout`: Aprenda a alternar entre branches.
4. `git merge`: Aprenda a mesclar branches.

### Atividades propostas:

1. Liste todas as branches do seu repositório com o comando `git branch`. A branch principal (main ou master) deve ser a única existente no momento.
2. Crie uma nova branch chamada "nova-funcionalidade" utilizando o comando `git branch`. Por exemplo:

```bash
git branch nova-funcionalidade
```

3. Alterne para a nova branch criada utilizando o comando `git checkout`. Por exemplo:

```bash
git checkout nova-funcionalidade
```

4. Crie um novo arquivo ou modifique um arquivo existente na branch "nova-funcionalidade".
5. Adicione e faça commit das alterações na branch "nova-funcionalidade".
6. Alterne de volta para a branch principal (main ou master) com o comando `git checkout`. Por exemplo:

```bash
git checkout main
```
ou
```bash
git checkout master
```

7. Faça o merge da branch "nova-funcionalidade" na branch principal utilizando o comando `git merge`. Por exemplo:

```bash
git merge nova-funcionalidade
```

Ao concluir este desafio, o estagiário terá criado uma nova branch, feito alterações nela e mesclado as alterações na branch principal.


## Desafio 5: Resolver conflitos de merge

**Objetivo**: Intencionalmente criar um conflito de merge e resolvê-lo.

### Tópicos a serem estudados:

1. Conflitos de merge: Entenda o que são conflitos de merge e quando eles ocorrem.
2. Resolvendo conflitos: Aprenda a resolver conflitos de merge manualmente.

### Atividades propostas:

1. Na branch principal (main ou master), crie ou modifique um arquivo existente.
2. Adicione e faça commit das alterações na branch principal.
3. Crie uma nova branch chamada "conflito-merge" utilizando o comando `git branch`. Por exemplo:

```bash
git branch conflito-merge
```

4. Alterne para a nova branch criada utilizando o comando `git checkout`. Por exemplo:

```bash
git checkout conflito-merge
```

5. Modifique o mesmo arquivo que você modificou na branch principal e altere as mesmas linhas de código.
6. Adicione e faça commit das alterações na branch "conflito-merge".
7. Alterne de volta para a branch principal (main ou master) com o comando `git checkout`. Por exemplo:

```bash
git checkout main
```

8. Faça o merge da branch "conflito-merge" na branch principal utilizando o comando `git merge`. Por exemplo:

```bash
git merge conflito-merge
```

9. Observe que o Git informa um conflito de merge. Abra o arquivo com conflito no seu editor de texto e resolva o conflito manualmente, escolhendo quais alterações devem ser mantidas.
10. Adicione e faça commit das alterações no arquivo resolvido.

Ao concluir este desafio, o estagiário terá criado intencionalmente um conflito de merge e resolvido-o manualmente.

## Desafio 6: Git remoto

**Objetivo**: Adicionar um repositório remoto ao seu projeto e fazer push das alterações para ele.

### Tópicos a serem estudados:

1. Repositórios remotos: Entenda o que são repositórios remotos e como eles funcionam no Git.
2. Adicionando um repositório remoto: Aprenda a adicionar um repositório remoto ao seu projeto Git local.
3. Push das alterações: Aprenda a fazer push das alterações do seu repositório local para o repositório remoto.

### Atividades propostas:

1. Crie uma conta em um serviço de hospedagem de repositórios Git, como GitHub, GitLab ou Bitbucket, caso ainda não possua uma.
2. Crie um novo repositório vazio no serviço escolhido. Não inicialize o repositório com nenhum arquivo (README, .gitignore ou licença).
3. No seu repositório local, adicione o repositório remoto que você acabou de criar utilizando o comando `git remote add`. Por exemplo:

```bash
git remote add origin URL_DO_REPOSITORIO
```

Substitua `URL_DO_REPOSITORIO` pela URL do repositório que você criou no serviço de hospedagem.
4. Verifique se o repositório remoto foi adicionado corretamente utilizando o comando `git remote -v`. Você deve ver o nome "origin" e as URLs para fetch e push do seu repositório remoto.
5. Faça push das alterações do seu repositório local para o repositório remoto utilizando o comando `git push`. Por exemplo:

```bash
git push -u origin main
```

A opção `-u` cria uma relação de rastreamento entre as branches locais e remotas, facilitando futuros pushes e pulls.

Ao concluir este desafio, o estagiário terá adicionado um repositório remoto ao seu projeto Git local e realizado push das alterações para ele.

## Desafio 7: Git pull e fetch

**Objetivo**: Fazer pull e fetch das alterações do repositório remoto para o local.

### Tópicos a serem estudados:

1. Git pull: Entenda o que é o comando `git pull` e como ele é usado para obter e mesclar alterações do repositório remoto.
2. Git fetch: Aprenda o que é o comando `git fetch` e como ele é usado para obter atualizações do repositório remoto sem mesclar automaticamente.

### Atividades propostas:

1. Faça algumas alterações no repositório remoto, como adicionar ou modificar arquivos. Você pode fazer isso diretamente no serviço de hospedagem de repositórios, como GitHub, GitLab ou Bitbucket.
2. No seu repositório local, utilize o comando `git pull` para obter e mesclar automaticamente as alterações do repositório remoto. Por exemplo:

```bash
git pull origin main
```

Verifique se as alterações feitas no repositório remoto foram aplicadas corretamente no repositório local.
3. Faça outras alterações no repositório remoto.
4. No seu repositório local, utilize o comando `git fetch` para obter as atualizações do repositório remoto sem mesclar automaticamente. Por exemplo:

```bash
git fetch origin
```

Verifique que as alterações não foram aplicadas automaticamente no repositório local.
5. Para mesclar manualmente as alterações, use o comando `git merge`. Por exemplo:

```bash
git merge origin/main
```

Verifique se as alterações feitas no repositório remoto foram aplicadas corretamente no repositório local.

Ao concluir este desafio, o estagiário terá utilizado os comandos `git pull` e `git fetch` para obter e mesclar alterações do repositório remoto no local.

## Desafio 8: Colaboração com outros desenvolvedores

**Objetivo**: Simular a colaboração com outros desenvolvedores, realizando pull requests e revisões de código.

### Tópicos a serem estudados:

1. Forks: Aprenda a criar um fork de um repositório para colaborar com projetos de outros desenvolvedores.
2. Pull requests: Entenda como criar pull requests para propor mudanças em um projeto e como colaborar com outros desenvolvedores no processo de revisão e aprovação de código.
3. Revisões de código: Aprenda a realizar revisões de código e a sugerir mudanças antes de aceitar um pull request.

### Atividades propostas:

1. Encontre um projeto público no GitHub, GitLab ou Bitbucket e faça um fork deste repositório para a sua conta pessoal.
2. No seu repositório forked, crie uma nova branch e faça algumas alterações no código. Faça commit e push das suas alterações para o repositório remoto.
3. Crie um pull request para propor suas alterações no projeto original. Preencha as informações necessárias, como título e descrição das mudanças.
4. Peça a um colega ou líder técnico para revisar o seu pull request. Eles devem fazer comentários e sugerir melhorias, se necessário.
5. Faça as mudanças sugeridas e atualize o pull request. Certifique-se de que as alterações atendem às expectativas do revisor.
6. Quando o revisor aprovar suas mudanças, faça o merge do pull request no projeto original (se você tiver permissão) ou peça ao mantenedor do projeto para fazê-lo.

Ao concluir este desafio, o estagiário terá experimentado a colaboração com outros desenvolvedores por meio de pull requests e revisões de código, um processo comum no desenvolvimento de software.
