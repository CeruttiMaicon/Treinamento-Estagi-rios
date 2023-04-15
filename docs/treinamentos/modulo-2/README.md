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

TODO: Parei aqui com os detalhamentos dos desafios.
## Desafio 4: Criar e mesclar branches

Crie uma nova branch, faça alterações nela e, em seguida, faça o merge das alterações na branch principal.

## Desafio 5: Resolver conflitos de merge

Intencionalmente crie um conflito de merge e resolva-o.

## Desafio 6: Git remoto

Adicione um repositório remoto ao seu projeto e faça push das alterações para ele.

## Desafio 7: Git pull e fetch

Faça pull e fetch das alterações do repositório remoto para o local.

## Desafio 8: Colaboração com outros desenvolvedores

Simule a colaboração com outros desenvolvedores, realizando pull requests e revisões de código.

