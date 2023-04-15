---
sidebar: auto
title: Módulo 1
---

# Módulo 1: Conhecendo Linux (comandos básicos)

Neste módulo, os estagiários aprenderão sobre o sistema operacional Linux e comandos básicos para navegação e gerenciamento de arquivos.

## Aulas

### Aula Curso em Vídeo

[Curso de Linux - Primeiros Passos](https://www.youtube.com/playlist?list=PLHz_AreHm4dlIXleu20uwPWFOSswqLYbV)

### Vídeos Diolinux

[Aprenda os comandos básicos do Linux - Terminal Ubuntu](https://www.youtube.com/watch?v=JEhVB4VHsTI&t)

[30 Comandos do Terminal Linux BÁSICOS que você PRECISA SABER para ser um HACKER](https://www.youtube.com/watch?v=QZ2nyxzZXPY)

# Desafios

## Desafio 1: Introdução ao Linux

**Objetivo**: Aprender os fundamentos do sistema operacional Linux, sua história e as distribuições mais populares.

### Tópicos a serem estudados:

1. História do Linux: Origem, criação e desenvolvimento do sistema operacional Linux.
2. Diferenças entre Linux e outros sistemas operacionais (Windows, macOS).
3. Distribuições Linux: Conheça as distribuições mais populares, como Ubuntu, Debian, Fedora, Arch, entre outras, e suas principais características.
4. Filosofia e comunidade Linux: Entenda a filosofia do software livre, a importância das contribuições da comunidade e o papel dos desenvolvedores no ecossistema Linux.

### Atividades propostas:

1. Pesquise e leia sobre a história do Linux e seu desenvolvimento ao longo do tempo.
2. Faça uma comparação entre o Linux e outros sistemas operacionais, destacando suas principais diferenças e vantagens.
3. Escolha três distribuições Linux populares e escreva um pequeno resumo sobre cada uma, destacando suas principais características, vantagens e desvantagens.
4. Explore a filosofia do software livre e a importância das contribuições da comunidade para o desenvolvimento e evolução do Linux. Discuta como a comunidade e os desenvolvedores interagem e contribuem para o ecossistema Linux.

Este desafio ajudará o estagiário a entender os fundamentos do sistema operacional Linux, sua história e principais distribuições, além de fornecer uma base sólida para o aprendizado de habilidades mais avançadas no uso do Linux.


## Desafio 2: Navegação no sistema de arquivos

**Objetivo**: Praticar a navegação no sistema de arquivos Linux usando comandos como `cd`, `ls`, `pwd` e `mkdir`.

### Tópicos a serem estudados:

1. Comando `cd`: Aprenda a mudar de diretório no terminal utilizando o comando `cd`.
2. Comando `ls`: Conheça o comando `ls` para listar arquivos e diretórios.
3. Comando `pwd`: Utilize o comando `pwd` para exibir o caminho do diretório atual.
4. Comando `mkdir`: Aprenda a criar novos diretórios com o comando `mkdir`.

### Atividades propostas:

1. Abra o terminal do seu sistema Linux e pratique a navegação entre os diretórios utilizando o comando `cd`. Tente navegar até diretórios diferentes, como sua pasta de usuário, a pasta de documentos e a raiz do sistema.
2. Utilize o comando `ls` para listar os arquivos e diretórios presentes no diretório atual. Explore as opções do comando `ls`, como `-l` (lista detalhada) e `-a` (mostra arquivos ocultos).
3. Verifique o caminho do diretório atual utilizando o comando `pwd`. Preste atenção em como o caminho muda conforme você navega pelos diretórios com o comando `cd`.
4. Crie novos diretórios utilizando o comando `mkdir`. Experimente criar diretórios dentro de outros diretórios e utilize o comando `ls` para confirmar a criação. Por exemplo, crie a seguinte hierarquia de diretórios:

```text
projeto/
├── assets/
│ ├── css/
│ ├── js/
│ └── images/
└── src/
├── components/
└── views/
```

Para criar essa hierarquia, quais seriam os comandos utilizados? Experimente criar essa estrutura de diretórios no seu sistema Linux.

## Desafio 3: Gerenciamento de arquivos e diretórios

**Objetivo**: Aprender a criar, copiar, mover e remover arquivos e diretórios com comandos como `touch`, `cp`, `mv` e `rm`.

### Tópicos a serem estudados:

1. Comando `touch`: Aprenda a criar arquivos vazios com o comando `touch`.
2. Comando `cp`: Conheça o comando `cp` para copiar arquivos e diretórios.
3. Comando `mv`: Utilize o comando `mv` para mover ou renomear arquivos e diretórios.
4. Comando `rm`: Aprenda a remover arquivos e diretórios com o comando `rm`.

### Atividades propostas:

1. Abra o terminal do seu sistema Linux e pratique a criação de arquivos vazios utilizando o comando `touch`. Por exemplo, crie um arquivo chamado `exemplo.txt` no diretório atual.
2. Utilize o comando `cp` para copiar arquivos e diretórios. Por exemplo, copie o arquivo `exemplo.txt` que você criou na atividade anterior para um novo arquivo chamado `copia_exemplo.txt`. Além disso, copie um diretório e seu conteúdo utilizando a opção `-r` do comando `cp`.
3. Aprenda a mover ou renomear arquivos e diretórios utilizando o comando `mv`. Por exemplo, mova o arquivo `copia_exemplo.txt` para um diretório chamado `arquivos` e renomeie o arquivo `exemplo.txt` para `novo_exemplo.txt`.
4. Pratique a remoção de arquivos e diretórios com o comando `rm`. Remova o arquivo `novo_exemplo.txt` utilizando o comando `rm`. Além disso, remova um diretório e seu conteúdo utilizando a opção `-r` do comando `rm`.

**Observação**: Tenha cuidado ao utilizar o comando `rm`, pois a remoção de arquivos e diretórios é permanente e não pode ser desfeita.

Este desafio ajudará o estagiário a se familiarizar com o gerenciamento de arquivos e diretórios no sistema Linux, utilizando comandos básicos para criar, copiar, mover e remover arquivos e diretórios.


## Desafio 4: Gerenciamento de permissões

**Objetivo**: Entender o sistema de permissões do Linux e aprender a alterar permissões e propriedade de arquivos e diretórios usando comandos como `chmod` e `chown`.

### Tópicos a serem estudados:

1. Permissões no Linux: Aprenda sobre o sistema de permissões no Linux, incluindo permissões de leitura, escrita e execução para o proprietário, grupo e outros usuários.
2. Comando `chmod`: Conheça o comando `chmod` para alterar as permissões de arquivos e diretórios.
3. Comando `chown`: Aprenda a utilizar o comando `chown` para alterar a propriedade de arquivos e diretórios.

### Atividades propostas:

1. Estude o sistema de permissões no Linux e aprenda a identificar as permissões de um arquivo ou diretório utilizando o comando `ls -l`.
2. Crie um arquivo chamado `teste.txt` com o comando `touch` e verifique suas permissões atuais usando `ls -l`.
3. Utilize o comando `chmod` para alterar as permissões do arquivo `teste.txt`. Por exemplo, remova a permissão de escrita para todos os usuários e adicione a permissão de execução para o proprietário.
4. Crie um diretório chamado `exemplo` e verifique suas permissões atuais com o comando `ls -l`.
5. Utilize o comando `chown` para alterar a propriedade do diretório `exemplo`. Por exemplo, altere o proprietário e o grupo para um usuário e grupo existentes no seu sistema.

Este desafio ajudará o estagiário a compreender o sistema de permissões no Linux e a utilizar comandos como `chmod` e `chown` para alterar permissões e propriedade de arquivos e diretórios.


## Desafio 5: Utilização de pipes e redirecionamento

**Objetivo**: Aprender a usar pipes (`|`) e redirecionamento (`>`, `>>`) para conectar e manipular a saída de comandos no Linux.

### Tópicos a serem estudados:

1. Pipes (`|`): Conheça o conceito de pipes e como usá-los para conectar a saída de um comando à entrada de outro.
2. Redirecionamento (`>`, `>>`): Aprenda sobre redirecionamento e como direcionar a saída de um comando para um arquivo ou anexar à um arquivo existente.

### Atividades propostas:

1. Estude o conceito de pipes e redirecionamento no Linux e aprenda a utilizar os operadores `|`, `>` e `>>`.
2. Utilize pipes para conectar a saída de um comando à entrada de outro. Por exemplo, utilize o comando `ls` para listar os arquivos em um diretório e o comando `grep` para filtrar os arquivos que contêm uma determinada palavra.
3. Crie um arquivo chamado `saida.txt` e utilize o redirecionamento `>` para direcionar a saída do comando `ls` para esse arquivo.
4. Execute novamente o comando `ls` com um argumento diferente (por exemplo, `ls -l`) e utilize o redirecionamento `>>` para anexar a saída ao arquivo `saida.txt` sem sobrescrever o conteúdo original.
5. Pratique a combinação de pipes e redirecionamento. Por exemplo, liste os arquivos de um diretório, filtre-os com o comando `grep` e redirecione o resultado para um arquivo chamado `filtrado.txt`.

Este desafio ajudará o estagiário a compreender e utilizar pipes e redirecionamento no Linux, permitindo que manipule a saída de comandos de forma eficiente.


## Desafio 6: Comandos de busca e manipulação de texto

**Objetivo**: Praticar comandos de busca e manipulação de texto como `grep`, `find`, `sort`, `cut` e `awk`.

### Tópicos a serem estudados:

1. `grep`: Entenda o funcionamento do comando `grep` para filtrar e buscar por padrões em arquivos de texto.
2. `find`: Aprenda a usar o comando `find` para localizar arquivos e diretórios no sistema de arquivos.
3. `sort`: Descubra como utilizar o comando `sort` para ordenar linhas de texto.
4. `cut`: Conheça o comando `cut` e como usá-lo para remover seções de texto.
5. `awk`: Aprenda sobre o comando `awk` e como aplicá-lo para manipular e processar arquivos de texto.

### Atividades propostas:

1. Utilize o comando `grep` para encontrar todas as ocorrências de uma palavra específica em um arquivo de texto.
2. Use o comando `find` para localizar todos os arquivos com extensão `.txt` em um diretório e seus subdiretórios.
3. Crie um arquivo de texto com várias linhas e utilize o comando `sort` para ordená-las alfabeticamente.
4. Com o mesmo arquivo de texto, utilize o comando `cut` para remover uma coluna específica de cada linha.
5. Aplique o comando `awk` para extrair informações específicas de um arquivo de texto, como a soma de uma coluna numérica.

Este desafio ajudará o estagiário a dominar os comandos de busca e manipulação de texto no Linux, permitindo que manipule e processe arquivos de texto de forma eficiente.

## Desafio 7: Gerenciamento de processos

**Objetivo**: Aprender a gerenciar processos no Linux usando comandos como `ps`, `top`, `kill`, `nice` e `renice`.

### Tópicos a serem estudados:

1. `ps`: Entenda o funcionamento do comando `ps` para exibir informações sobre os processos em execução.
2. `top`: Aprenda a usar o comando `top` para monitorar os processos em tempo real.
3. `kill`: Descubra como utilizar o comando `kill` para encerrar processos.
4. `nice`: Conheça o comando `nice` e como usá-lo para definir a prioridade de execução de um processo.
5. `renice`: Aprenda sobre o comando `renice` e como aplicá-lo para alterar a prioridade de um processo em execução.

### Atividades propostas:

1. Utilize o comando `ps` para listar todos os processos em execução no seu sistema.
2. Use o comando `top` para monitorar os processos em tempo real e identificar os que estão consumindo mais recursos.
3. Crie um processo em segundo plano e utilize o comando `kill` para encerrá-lo.
4. Inicie um processo com uma prioridade específica usando o comando `nice`.
5. Altere a prioridade de um processo em execução utilizando o comando `renice`.

Este desafio ajudará o estagiário a entender e gerenciar processos no Linux, permitindo que controle e otimize o uso dos recursos do sistema.

## Desafio 8: Criação de Alias e funções básicas com Shell Script

**Objetivo**: Aprenda a criar aliases e funções básicas com Shell Script para facilitar o cotidiano.

### Tópicos a serem estudados:

1. Alias: Entenda como criar aliases para comandos no Linux e como eles podem simplificar seu trabalho diário.
2. Funções básicas: Aprenda a criar funções básicas em Shell Script para automatizar tarefas e melhorar a eficiência.
3. Shell Script: Conheça a sintaxe básica do Shell Script e como criar scripts para realizar tarefas comuns.

### Atividades propostas:

1. Crie um alias para um comando que você utiliza frequentemente. Por exemplo, um alias para o comando `ls -la`.
2. Desenvolva uma função básica em Shell Script que receba dois números como argumentos e calcule a soma deles.
3. Crie um Shell Script simples que verifique a existência de um arquivo em um diretório específico e exiba uma mensagem personalizada.
4. Adicione seus aliases e funções básicas ao arquivo de configuração do seu shell (por exemplo, `.bashrc` ou `.zshrc`) para que sejam carregados automaticamente ao iniciar um novo terminal.
5. Peça ajuda a um líder técnico para aprimorar suas habilidades em Shell Script e entender boas práticas.

Este desafio ajudará o estagiário a se familiarizar com a criação de aliases e funções básicas em Shell Script, melhorando a eficiência no cotidiano e a capacidade de automatizar tarefas.
