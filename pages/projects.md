---
title: Projects - Anthony Fu
display: Projects
subtitle: List of projects that I am proud of
description: List of projects that I am proud of
projects:
  Upcoming:
    - name: 'SoftTagBar'
      link: 'https://twitter.com/antfu7/status/1504639906232307712'
      desc: 'Component for The Tags View.'
      icon: 'i-mdi-clock-fast'
    - name: 'Petite'
      link: 'https://twitter.com/antfu7/status/1505236765447458817'
      desc: 'Vite template with Naive Ui.'
      icon: 'i-carbon-keyboard'

  Latest:
    - name: 'Parfait'
      link: 'https://github.com/antfu/vue-starport'
      desc: 'Vite template with Arco Design.'
      icon: 'i-carbon-plane-sea'
    - name: 'Vite-template'
      link: 'https://github.com/antfu/vscode-smart-clicks'
      desc: 'The starter of vite app.'
      icon: 'i-heroicons-solid-cursor-click'

---

<ListProjects :projects="frontmatter.projects"/>

<BackWidget />
