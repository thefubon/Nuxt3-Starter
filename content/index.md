---
title: 'Fubon | Nuxt 3 Starter'
description: 'What a lovely page.'
image:
  src: '/meta.jpg'
  alt: 'An image showcasing My Page.'
  width: 400
  height: 300
head:
  meta:
    - name: 'keywords'
      content: 'nuxt, vue, content'
    - name: 'robots'
      content: 'index, follow'
    - name: 'author'
      content: 'NuxtLabs'
    - name: 'copyright'
      content: '© 2022 NuxtLabs'
---

<!-- ./content/index.md -->
# Hello Content v2
This page corresponds to the `/` route of your website. You can delete it or create another file in the `content/` directory. 
Try to navigate to \[/what\](/what). These 2 pages are rendered by the `pages/[...slug].vue` component.

Look at the \[Content documentation\](https://content-v2.nuxtjs.org/) to learn more.

::div{.bg-yellow-400 .rounded-lg .py-10 .px-20 .inline-block}
:img{src=https://fubon.ru/maintenance.png width=200 height=200 alt=Hello .relative .-ml-10}
::

::grid
  :::item
    ::hero
    Starter Kit :tada:
   
    #description
    Donwload in **GitHub** &ensp; [Download :icon{name="ri:github-fill" size="24"}](https://github.com/thefubon/nuxt3-starter){target=_blank .py-2 .px-4 .rounded-md .bg-indigo-600 .text-white .no-underline}
    ::

    - Node.js v18.13.0
    - npm v8.19.3
    - yarn v1.22.19

    ## Roadmap
    
    ::div{.not-prose}
    - [x] &ensp;[Nuxt 3](https://nuxt.com){:target="_blank"}
    - [x] &ensp;[Content 2](https://content.nuxtjs.org){:target="_blank"}
    - [x] &ensp;[Nuxt Image](https://v1.image.nuxtjs.org){:target="_blank"}
    - [x] &ensp;[Tailwind CSS](https://tailwindcss.com){:target="_blank"}
    - [x] &ensp;[Tailwind CSS / Typography](https://tailwindcss.com/docs/typography-plugin){:target="_blank"}
    - [x] &ensp;[Nuxt Icon](https://nuxt.com/modules/icon){:target="_blank"}
    - [x] &ensp;[Sitemap](https://content.nuxtjs.org/guide/recipes/sitemap){:target="_blank"}
    - [x] &ensp;[Color Mode](https://color-mode.nuxtjs.org){:target="_blank"}
    - [x] &ensp;[Preline](https://preline.co){:target="_blank"}
    - [ ] &ensp;[i18n](https://v8.i18n.nuxtjs.org){:target="_blank"}
    - [ ] &ensp;[Cloudinary](https://v1.image.nuxtjs.org/providers/cloudinary){:target="_blank"}
    ::
  :::

  :::item{.flex .justify-end}
  ![Alt](/meta.jpg "Подсказка"){.rounded-lg width=400}
  :::
::

::alert{type="warning"}
The **alert** component.
::

:banner{}-world

Hello [World]{.bg-blue-500}!

Attributes works on:
- ![](/meta.png){.inline.w-5.h-5.bg-primary-500} image,
- [link](#attributes){.bg-primary-400}, `code`{.text-red-500},
- _italic_{.bg-primary-500} and **bold**{.bg-primary-500} texts.

::icon-card
---
icon: Icon
description: Harness the full power of Nuxt and the Nuxt ecosystem.
title: Nuxt Architecture.
---
::

```md
---
title: 'Fubon | Nuxt 3 Starter'
description: 'What a lovely page.'
image:
  src: '/meta.jpg'
  alt: 'An image showcasing My Page.'
  width: 400
  height: 300
head:
  meta:
    - name: 'keywords'
      content: 'nuxt, vue, content'
    - name: 'robots'
      content: 'index, follow'
    - name: 'author'
      content: 'NuxtLabs'
    - name: 'copyright'
      content: '© 2022 NuxtLabs'
---

<!-- ./content/index.md -->
# Hello Content v2
This page corresponds to the `/` route of your website. You can delete it or create another file in the `content/` directory. 
Try to navigate to \[/what\](/what). These 2 pages are rendered by the `pages/[...slug].vue` component.

Look at the \[Content documentation\](https://content-v2.nuxtjs.org/) to learn more.

::div{.bg-yellow-400 .rounded-lg .py-10 .px-20 .inline-block}
:img{src=https://fubon.ru/maintenance.png width=200 height=200 alt=Hello .relative .-ml-10}
::

::grid
  :::item
    ::hero
    Starter Kit :tada:
   
    #description
    Donwload in **GitHub** &ensp; [Download :icon{name="ri:github-fill" size="24"}](https://github.com/thefubon/nuxt3-starter){target=_blank .py-2 .px-4 .rounded-md .bg-indigo-600 .text-white .no-underline}
    ::

    - Node.js v18.13.0
    - npm v8.19.3
    - yarn v1.22.19

    ## Roadmap
    
    ::div{.not-prose}
    - [x] &ensp;[Nuxt 3](https://nuxt.com){:target="_blank"}
    - [x] &ensp;[Content 2](https://content.nuxtjs.org){:target="_blank"}
    - [x] &ensp;[Nuxt Image](https://v1.image.nuxtjs.org){:target="_blank"}
    - [x] &ensp;[Tailwind CSS](https://tailwindcss.com){:target="_blank"}
    - [x] &ensp;[Tailwind CSS / Typography](https://tailwindcss.com/docs/typography-plugin){:target="_blank"}
    - [x] &ensp;[Nuxt Icon](https://nuxt.com/modules/icon){:target="_blank"}
    - [x] &ensp;[Sitemap](https://content.nuxtjs.org/guide/recipes/sitemap){:target="_blank"}
    - [x] &ensp;[Color Mode](https://color-mode.nuxtjs.org){:target="_blank"}
    - [x] &ensp;[Preline](https://preline.co){:target="_blank"}
    - [ ] &ensp;[i18n](https://v8.i18n.nuxtjs.org){:target="_blank"}
    - [ ] &ensp;[Cloudinary](https://v1.image.nuxtjs.org/providers/cloudinary){:target="_blank"}
    ::
  :::

  :::item{.flex .justify-end}
  ![Alt](/meta.jpg "Подсказка"){.rounded-lg width=400}
  :::
::

::alert{type="warning"}
The **alert** component.
::

:banner{}-world

Hello [World]{.bg-blue-500}!

Attributes works on:
- ![](/meta.png){.inline.w-5.h-5.bg-primary-500} image,
- [link](#attributes){.bg-primary-400}, `code`{.text-red-500},
- _italic_{.bg-primary-500} and **bold**{.bg-primary-500} texts.

::icon-card
---
icon: Icon
description: Harness the full power of Nuxt and the Nuxt ecosystem.
title: Nuxt Architecture.
---
::
```