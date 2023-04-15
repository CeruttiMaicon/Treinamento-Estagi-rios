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
            text: 'Módulo 1',
            link: '/treinamentos/modulo-1',
          },
          {
            text: 'Módulo 2',
            link: '/treinamentos/modulo-2',
          },
          {
            text: 'Módulo 3',
            link: '/treinamentos/modulo-3',
          },
          {
            text: 'Módulo 4',
            link: '/treinamentos/modulo-4',
          },
          {
            text: 'Módulo 5',
            link: '/treinamentos/modulo-5',
          },
          {
            text: 'Módulo 6',
            link: '/treinamentos/modulo-6',
          },
          {
            text: 'Módulo 7',
            link: '/treinamentos/modulo-7',
          },
          {
            text: 'Módulo 8',
            link: '/treinamentos/modulo-8',
          },
          {
            text: 'Módulo 9',
            link: '/treinamentos/modulo-9',
          },
          {
            text: 'Módulo 10',
            link: '/treinamentos/modulo-10',
          },
          {
            text: 'Módulo 11',
            link: '/treinamentos/modulo-11',
          },
          {
            text: 'Módulo 12',
            link: '/treinamentos/modulo-12',
          },
        ],
      },
    ],
  }),
}