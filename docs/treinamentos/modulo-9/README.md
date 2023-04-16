---
sidebar: auto
---

# Docker básico

Neste módulo, os estagiários aprenderão os conceitos básicos do Docker e como usá-lo para facilitar o desenvolvimento e a implantação de aplicações.

## Aulas

### Aula LinuxTips

[Descomplicando o Docker](https://www.youtube.com/playlist?list=PLf-O3X2-mxDn1VpyU2q3fuI6YYeIWp5rR)

### Vídeos Diolinux

[O mínimo que você precisa saber sobre Docker!](https://www.youtube.com/watch?v=ntbpIfS44Gw)

# Desafios

## Desafio 1: Introdução ao Docker

**Objetivo**: Aprenda os fundamentos do Docker, sua história e como ele funciona, incluindo a arquitetura de contêineres e imagens.

### Tópicos a serem abordados:

1. História do Docker
2. Conceito de contêineres
3. Arquitetura do Docker
4. Imagens e contêineres

### Atividades propostas:

1. Pesquise sobre a história do Docker e como ele se tornou uma ferramenta essencial no desenvolvimento e implantação de software.
2. Entenda o conceito de contêineres e como eles diferem das máquinas virtuais tradicionais.
3. Estude a arquitetura do Docker, incluindo o Docker Engine, o Docker Hub e os componentes-chave, como imagens e contêineres.
4. Aprenda como as imagens e os contêineres funcionam, incluindo a camada de sistema de arquivos e a relação entre imagens e contêineres.

Ao concluir este desafio, o estagiário terá uma compreensão básica do Docker, sua arquitetura e como ele funciona, incluindo o conceito de contêineres e imagens.

## Desafio 2: Instalação do Docker

**Objetivo**: Instalar o Docker no seu computador e verificar se ele está funcionando corretamente.

### Tópicos a serem abordados:

1. Requisitos do sistema
2. Instalação do Docker
3. Verificação da instalação

### Atividades propostas:

1. Verifique os requisitos do sistema para instalar o Docker no seu computador (Windows, macOS ou Linux).
2. Siga as instruções oficiais de instalação do Docker para seu sistema operacional:
   - [Instalar Docker no Windows](https://docs.docker.com/desktop/windows/install/)
   - [Instalar Docker no macOS](https://docs.docker.com/desktop/mac/install/)
   - [Instalar Docker no Linux](https://docs.docker.com/engine/install/)
3. Após a instalação, verifique se o Docker está funcionando corretamente executando o comando `docker --version` no terminal ou prompt de comando.
4. Teste a instalação executando um contêiner de teste com o comando `docker run hello-world`.

Ao concluir este desafio, o estagiário terá o Docker instalado e funcionando corretamente no seu computador.

## Desafio 3: Executando contêineres

**Objetivo**: Praticar a execução de contêineres com comandos básicos do Docker, como `docker run`, `docker ps`, `docker stop` e `docker rm`.

### Tópicos a serem abordados:

1. Execução de contêineres
2. Listagem de contêineres
3. Parando e removendo contêineres

### Atividades propostas:

1. Execute um contêiner do nginx com o comando: `docker run --name my-nginx -p 80:80 -d nginx`. Isso iniciará um contêiner com o servidor web nginx e mapeará a porta 80 do seu computador para a porta 80 do contêiner.
2. Verifique se o contêiner está em execução com o comando: `docker ps`. Isso listará todos os contêineres em execução no seu computador.
3. Acesse `http://localhost` no seu navegador. Você deve ver a página padrão do nginx.
4. Pare o contêiner do nginx com o comando: `docker stop my-nginx`.
5. Verifique se o contêiner foi parado com o comando: `docker ps -a`. Isso listará todos os contêineres no seu computador, incluindo os que estão parados.
6. Remova o contêiner do nginx com o comando: `docker rm my-nginx`.
7. Verifique se o contêiner foi removido com o comando: `docker ps -a`.

Ao concluir este desafio, o estagiário terá praticado a execução, listagem, parada e remoção de contêineres usando comandos básicos do Docker.

## Desafio 4: Trabalhando com imagens

**Objetivo**: Aprender a trabalhar com imagens Docker usando comandos como `docker images`, `docker pull`, `docker rmi` e `docker search`.

### Tópicos a serem abordados:

1. Listagem de imagens
2. Download de imagens
3. Remoção de imagens
4. Pesquisa de imagens

### Atividades propostas:

1. Liste todas as imagens disponíveis localmente com o comando: `docker images`. Isso mostrará informações sobre as imagens que você já baixou.
2. Baixe a imagem do Redis com o comando: `docker pull redis`. Isso fará o download da imagem oficial do Redis do Docker Hub.
3. Verifique se a imagem do Redis foi baixada com o comando: `docker images`.
4. Pesquise imagens relacionadas ao Node.js no Docker Hub com o comando: `docker search node`. Isso retornará uma lista de imagens disponíveis relacionadas ao Node.js.
5. Remova a imagem do Redis com o comando: `docker rmi redis`.
6. Verifique se a imagem foi removida com o comando: `docker images`.

Ao concluir este desafio, o estagiário terá praticado a listagem, download, pesquisa e remoção de imagens Docker usando comandos específicos.

## Desafio 5: Criando um Dockerfile para uma aplicação Laravel com Sail

**Objetivo**: Criar um Dockerfile para uma aplicação Laravel e executá-la usando o Laravel Sail.

### Tópicos a serem abordados:

1. Instalação do Laravel Sail
2. Configuração do Dockerfile
3. Construção de uma imagem personalizada
4. Execução da aplicação Laravel com Sail

### Atividades propostas:

::: warning ATENÇÃO
Antes de prosseguir, leia a documentação oficial do Laravel Sail para entender como ele funciona e como ele pode ser integrado a um projeto Laravel existente. Lá existem varias opções de setar os arquivos de configuração do Sail e os containers que serão utilizados dependendo das tecnologias que você irá utilizar no seu projeto.

[Documentação Laravel 10 - Sail](https://laravel.com/docs/10.x/sail#main-content)
:::

1. Instale o Laravel Sail no seu projeto Laravel existente ou crie um novo projeto Laravel com o Sail já integrado usando o comando:

```bash
curl -s "https://laravel.build/example-app" | bash
```

Substitua "example-app" pelo nome do seu projeto.

2. Na raiz do projeto, você encontrará o arquivo "docker-compose.yml" e a pasta "docker". Esses arquivos já contêm as configurações necessárias para executar a aplicação Laravel com o Sail.

3. O Sail já possui um Dockerfile na pasta "docker" chamado "Dockerfile.laravel". Abra-o e verifique seu conteúdo. Ele já contém as instruções necessárias para construir uma imagem com o ambiente PHP e todas as dependências necessárias para o Laravel.

4. Abra o terminal e navegue até a raiz do projeto Laravel.

5. Execute o comando `./vendor/bin/sail build` para construir a imagem Docker. Isso pode levar algum tempo na primeira execução.

6. Após a construção da imagem, inicie a aplicação Laravel com o Sail usando o comando `./vendor/bin/sail up`. O Sail iniciará todos os serviços necessários, incluindo o servidor web e o banco de dados.

7. Abra o navegador e visite `http://localhost` para visualizar a aplicação Laravel em execução.

Ao concluir este desafio, o estagiário terá configurado e executado uma aplicação Laravel usando o Laravel Sail e o Docker.

## Desafio 6: Utilização do Docker Composer

**Objetivo**: Aprender a utilizar o Docker Compose para gerenciar múltiplos contêineres de uma aplicação.

### Tópicos a serem abordados:

1. Introdução ao Docker Compose
2. Instalação do Docker Compose
3. Criação e configuração de um arquivo docker-compose.yml
4. Comandos básicos do Docker Compose
5. Uso do Docker Compose em um projeto prático

### Atividades propostas:

1. Pesquise sobre o Docker Compose e entenda sua utilidade para gerenciar aplicativos que consistem em múltiplos contêineres.

2. Instale o Docker Compose em seu computador, seguindo as instruções fornecidas na documentação oficial: https://docs.docker.com/compose/install/

3. Crie um arquivo `docker-compose.yml` para um projeto que inclua dois contêineres: um para um servidor web e outro para um banco de dados. Por exemplo, você pode usar a imagem `nginx` para o servidor web e a imagem `mysql` para o banco de dados. Configure o arquivo `docker-compose.yml` com as informações necessárias, como a versão do Docker Compose, serviços, imagens, portas e volumes.

   Exemplo de configuração básica:

```yaml
version: '3'
services:
    mariadb:
        command:
            - --table_definition_cache=2048
            - --innodb-buffer-pool-size=3G
        image: 'mariadb:10'
        ports:
            - '3306:3306'
        environment:
            MYSQL_ROOT_PASSWORD: 'password'
            MYSQL_ROOT_HOST: "%"
            MYSQL_DATABASE: 'meu_banco_de_dados'
            MYSQL_USER: 'root'
            MYSQL_PASSWORD: 'password'
            MYSQL_ALLOW_EMPTY_PASSWORD: 'yes'
        volumes:
            - 'sail-mariadb:/var/lib/mysql'
        networks:
            - sail
```

4. Aprenda e pratique os comandos básicos do Docker Compose:
- `docker-compose up`: Inicia e executa os contêineres descritos no arquivo `docker-compose.yml`.
- `docker-compose down`: Interrompe e remove os contêineres, redes e volumes definidos no arquivo `docker-compose.yml`.
- `docker-compose ps`: Lista os contêineres em execução e seu status.
- `docker-compose logs`: Exibe os logs dos contêineres.
- `docker-compose build`: Constrói as imagens, caso você esteja usando um Dockerfile personalizado.

5. Utilize o Docker Compose em um projeto prático. Por exemplo, crie uma aplicação web simples que se conecte a um banco de dados MySQL. Configure o projeto para ser executado com o Docker Compose e teste a funcionalidade da aplicação.

Ao concluir este desafio, o estagiário terá aprendido a utilizar o Docker Compose para gerenciar e executar aplicativos que envolvem múltiplos contêineres, tornando o processo de desenvolvimento e implantação mais eficiente e organizado.

## Desafio 7: Utilização do Portainer

**Objetivo**: Aprender a usar o Portainer, uma interface gráfica para gerenciar contêineres e imagens Docker.

### Tópicos a serem abordados:

1. Instalação do Portainer
2. Configuração e conexão com o Docker
3. Gerenciamento de contêineres e imagens
4. Explorar recursos e funcionalidades do Portainer

### Atividades propostas:

1. Instale o Portainer em seu computador executando o seguinte comando no terminal:

```bash
docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce
```

Esse comando baixa a imagem do Portainer e executa em um contêiner com as portas 8000 e 9000 expostas.

2. Após a instalação, abra o navegador e visite `http://localhost:9000` para acessar a interface do Portainer. Complete o processo de configuração criando um nome de usuário e senha.

3. Conecte o Portainer ao Docker, selecionando a opção "Docker local" e clicando em "Conectar". Agora, você verá um painel com informações sobre contêineres, imagens, volumes e redes.

4. Explore a interface do Portainer e pratique as seguintes atividades:
- Visualize a lista de contêineres e suas informações, como status, imagem e porta.
- Inicie, pare, reinicie ou remova contêineres.
- Crie um novo contêiner a partir de uma imagem.
- Visualize a lista de imagens e suas informações, como tamanho e tags.
- Baixe uma nova imagem a partir do registro do Docker.
- Remova imagens não utilizadas.
- Explore outros recursos, como gerenciamento de volumes e redes.

Ao concluir este desafio, o estagiário terá aprendido a gerenciar contêineres e imagens Docker usando o Portainer, uma interface gráfica intuitiva.

### Portainer opção 2 (mais fácil)

Adicione essas instruções para o seu docker-compose.yml

```yml
...
    portainer:
        image: portainer/portainer-ce:latest
        restart: unless-stopped
        security_opt:
        - no-new-privileges:true
        volumes:
        - /etc/localtime:/etc/localtime:ro
        - /var/run/docker.sock:/var/run/docker.sock:ro
        - ./portainer-data:/data
        ports:
        - 9000:9000
...
```
O servidor estará disponível em [http://localhost:9000](http://localhost:9000). Lembrando que no seu primeiro acesso ele pedirá para criar um usuário e senha.