import { defaultTheme } from '@vuepress/theme-default'

export default {
  theme: defaultTheme({
    lang: 'pt-BR',
    title: 'Treinamento de Estagiários',
    description: 'Guia para treinamento de estagiários',
    // set config here
    theme: defaultTheme({
      darkMode: true,
      searching: true,
      navbar: [
        {
          text: 'Treinamentos',
          children: [
            '/docs/treinamento/modulo-1/README.md', 
          ],
        },
      ],
    }),
  }),
}