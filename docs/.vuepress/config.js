import { defaultTheme } from 'vuepress'

export default {
  lang: 'pt-BR',
  title: 'Treinamento de Estagiários',
  description: 'Guia para treinamento de estagiários',
  theme: defaultTheme({
    darkMode: true,
    searching: true,
    // set config here
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Treinamentos',
        link: '/treinamentos',
        children: [
          {
            text: 'Conhecendo Linux',
            link: '/treinamentos/modulo-1',
          },
          {
            text: 'Versionamento GIT',
            link: '/treinamentos/modulo-2',
          },
          {
            text: 'HTML',
            link: '/treinamentos/modulo-3',
          },
          {
            text: 'CSS',
            link: '/treinamentos/modulo-4',
          },
          {
            text: 'Algoritmos',
            link: '/treinamentos/modulo-5',
          },
          {
            text: 'JavaScript',
            link: '/treinamentos/modulo-6',
          },
          {
            text: 'PHP',
            link: '/treinamentos/modulo-7',
          },
          {
            text: 'Programação Orientada a Objetos',
            link: '/treinamentos/modulo-8',
          },
          {
            text: 'Docker básico',
            link: '/treinamentos/modulo-9',
          },
          {
            text: 'MySQL',
            link: '/treinamentos/modulo-10',
          },
          {
            text: 'Laravel - Parte 1',
            link: '/treinamentos/modulo-11',
          },
          {
            text: 'Laravel - Parte 2',
            link: '/treinamentos/modulo-12',
          },
        ],
      },
      {
        text: 'Processos',
        link: '/processos',
        children: [
          {
            text: 'KANBAN',
            link: '/processos/kanban',
          },
          {
            text: 'Metodologia SCRUM',
            link: '/processos/scrum',
          }
        ],
      },
    ],
  }),
}