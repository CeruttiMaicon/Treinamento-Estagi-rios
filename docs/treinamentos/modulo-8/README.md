---
sidebar: auto
title: Programação Orientada a Objetos
---

# Programação Orientada a Objetos (POO)

Neste módulo, os estagiários aprenderão os conceitos fundamentais da Programação Orientada a Objetos (POO) e como aplicá-los em PHP.

## Aulas

### Aula Curso em Vídeo - POO

[Curso de POO PHP (Programação Orientada a Objetos)](https://www.youtube.com/playlist?list=PLHz_AreHm4dmGuLII3tsvryMMD7VgcT7x)

### Aula Rodrigo Oliveira

[Curso de PHP Orientado a Objetos](https://www.youtube.com/playlist?list=PLwXQLZ3FdTVEau55kNj_zLgpXL4JZUg8I)

# Desafios

## Desafio 1: Introdução à POO

**Objetivo**: Entenda os conceitos básicos da Programação Orientada a Objetos, como classes, objetos, métodos e atributos.

### Tópicos a serem estudados:

1. Conceitos fundamentais de POO
2. Classes e objetos
3. Métodos e atributos
4. Instanciando objetos e acessando seus métodos e atributos

### Atividades propostas:

1. Estude os conceitos básicos de Programação Orientada a Objetos, incluindo a importância e os benefícios desta abordagem.
2. Aprenda a criar classes e objetos em sua linguagem de programação preferida (por exemplo, JavaScript, Python, Java ou PHP).
3. Entenda o que são métodos e atributos e como eles são usados em classes e objetos.
4. Desenvolva um projeto simples que envolva a criação de uma classe, a instanciação de objetos e a interação com seus métodos e atributos.

Ao concluir este desafio, o estagiário será capaz de aplicar os conceitos básicos de Programação Orientada a Objetos em seus projetos de desenvolvimento de software.

## Desafio 2: Classes e objetos em PHP

**Objetivo**: Aprenda a criar classes e objetos em PHP e a trabalhar com métodos e atributos.

### Tópicos a serem estudados:

1. Criando classes em PHP
2. Definindo atributos e métodos
3. Instanciando objetos
4. Acessando e modificando atributos
5. Chamando métodos

### Atividades propostas:

1. Estude como criar classes em PHP, incluindo a sintaxe e a estrutura básica.
2. Aprenda a definir atributos e métodos dentro de uma classe em PHP.
3. Pratique a instanciação de objetos a partir de uma classe em PHP.
4. Aprenda a acessar e modificar os atributos de um objeto em PHP.
5. Pratique a chamada de métodos de um objeto em PHP.

### Exemplo:

Crie uma classe chamada `Carro` com os seguintes atributos e métodos:

- Atributos:
  - marca (string)
  - modelo (string)
  - ano (integer)

- Métodos:
  - ligar(): Imprime "O carro está ligado."
  - desligar(): Imprime "O carro está desligado."

Instancie um objeto da classe `Carro`, atribua valores aos seus atributos e chame os métodos ligar() e desligar().

Ao concluir este desafio, o estagiário será capaz de criar e manipular classes e objetos em PHP, bem como trabalhar com métodos e atributos.

## Desafio 3: Herança e polimorfismo

**Objetivo**: Explore os conceitos de herança e polimorfismo em PHP, aprendendo a estender classes e a sobrescrever ou modificar métodos.

### Tópicos a serem estudados:

1. Herança em PHP
2. Polimorfismo em PHP
3. Estendendo classes
4. Sobrescrevendo e modificando métodos

### Atividades propostas:

1. Estude o conceito de herança em PHP e como estender uma classe.
2. Aprenda sobre polimorfismo em PHP e como sobrescrever ou modificar métodos em classes filhas.
3. Crie uma classe base e estenda-a com uma ou mais classes filhas.
4. Pratique a sobrescrita e a modificação de métodos nas classes filhas.

### Exemplo:

Crie uma classe chamada `Veiculo` com os seguintes atributos e métodos:

- Atributos:
  - marca (string)
  - modelo (string)
  - ano (integer)

- Métodos:
  - ligar(): Imprime "O veículo está ligado."
  - desligar(): Imprime "O veículo está desligado."

Em seguida, crie uma classe `Carro` que estenda a classe `Veiculo`. Adicione um novo atributo chamado `portas` (integer) e sobrescreva os métodos ligar() e desligar() para imprimir "O carro está ligado." e "O carro está desligado.", respectivamente.

Instancie um objeto da classe `Carro`, atribua valores aos seus atributos e chame os métodos ligar() e desligar().

Ao concluir este desafio, o estagiário será capaz de aplicar os conceitos de herança e polimorfismo em PHP, estender classes e sobrescrever ou modificar métodos.

## Desafio 4: Encapsulamento e modificadores de acesso

**Objetivo**: Aprenda sobre encapsulamento e a importância de controlar o acesso a atributos e métodos por meio de modificadores de acesso.

### Tópicos a serem estudados:

1. Encapsulamento
2. Modificadores de acesso: public, private e protected
3. Getters e setters
4. Boas práticas de encapsulamento

### Atividades propostas:

1. Estude o conceito de encapsulamento e a importância de controlar o acesso aos atributos e métodos de uma classe.
2. Aprenda sobre os modificadores de acesso public, private e protected em PHP.
3. Crie uma classe com atributos e métodos que utilizem diferentes modificadores de acesso.
4. Implemente getters e setters para controlar o acesso e a manipulação dos atributos da classe.

### Exemplo:

Crie uma classe chamada `ContaBancaria` com os seguintes atributos e métodos:

- Atributos:
  - titular (string) - acesso public
  - saldo (float) - acesso private

- Métodos:
  - depositar(float $valor): Adiciona o valor ao saldo - acesso public
  - sacar(float $valor): Subtrai o valor do saldo - acesso public
  - getSaldo(): Retorna o saldo - acesso public
  - setSaldo(float $saldo): Define o saldo - acesso private

Implemente os getters e setters para os atributos, garantindo que os valores atribuídos sejam válidos e o acesso seja controlado.

Instancie um objeto da classe `ContaBancaria`, atribua valores aos seus atributos e chame os métodos depositar(), sacar() e getSaldo().

Ao concluir este desafio, o estagiário será capaz de aplicar os conceitos de encapsulamento e modificadores de acesso em PHP e controlar o acesso a atributos e métodos de uma classe.

## Desafio 5: Interfaces e classes abstratas

**Objetivo**: Entenda as diferenças entre interfaces e classes abstratas e como usá-las para estruturar e organizar o código.

### Tópicos a serem estudados:

1. Interfaces
2. Classes abstratas
3. Diferenças entre interfaces e classes abstratas
4. Implementação de interfaces e herança de classes abstratas

### Atividades propostas:

1. Estude o conceito de interfaces e aprenda a criar e implementar interfaces em PHP.
2. Estude o conceito de classes abstratas e aprenda a criar e herdar classes abstratas em PHP.
3. Compare interfaces e classes abstratas, entendendo suas diferenças e casos de uso.
4. Crie uma interface e uma classe abstrata para representar entidades em um sistema de gerenciamento de produtos.

### Exemplo:

Crie uma interface chamada `ProdutoInterface` com os seguintes métodos:

- getPreco(): float
- getDescricao(): string

Crie uma classe abstrata chamada `ProdutoBase` que implementa a interface `ProdutoInterface` e inclui os atributos e métodos comuns aos produtos, como preço e descrição.

Crie duas classes concretas que herdam de `ProdutoBase`: `ProdutoFisico` e `ProdutoDigital`. Adicione atributos e métodos específicos para cada tipo de produto.

Instancie objetos das classes concretas e use os métodos da interface e da classe abstrata.

Ao concluir este desafio, o estagiário será capaz de entender a diferença entre interfaces e classes abstratas e aplicá-las para estruturar e organizar o código em PHP.

## Desafio 6: Projeto prático

**Objetivo**: Crie um projeto prático em PHP aplicando os conceitos de POO aprendidos neste módulo.

### Tópicos a serem aplicados:

1. Classes e objetos
2. Herança e polimorfismo
3. Encapsulamento e modificadores de acesso
4. Interfaces e classes abstratas

### Atividades propostas:

1. Escolha um tema para seu projeto, como um sistema de gerenciamento de produtos, de tarefas, de usuários, etc.
2. Crie as classes e objetos necessários para representar as entidades e funcionalidades do sistema.
3. Aplique os conceitos de herança e polimorfismo para criar uma estrutura de classes eficiente e reutilizável.
4. Utilize encapsulamento e modificadores de acesso para controlar o acesso a atributos e métodos.
5. Implemente interfaces e/ou estenda classes abstratas para organizar e estruturar o código.

### Exemplo:

Crie um sistema de gerenciamento de produtos que possua as seguintes funcionalidades:

- Adicionar produtos (físicos e digitais) ao catálogo.
- Remover produtos do catálogo.
- Listar produtos do catálogo.
- Calcular o valor total dos produtos do catálogo.

Utilize classes, herança, interfaces, classes abstratas e encapsulamento para criar uma estrutura de código organizada e eficiente.

Ao concluir este desafio, o estagiário será capaz de aplicar os conceitos de POO em PHP em um projeto prático, demonstrando habilidades em desenvolvimento de software e organização de código.

