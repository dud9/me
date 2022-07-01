---
title: Projects - Duende
display: Projects
subtitle: List of projects that I am proud of
description: List of projects that I am proud of
projects:
  Upcoming:
    - name: 'Petite'
      link: 'https://github.com/dud7ii/petite'
      desc: 'Vite template with Naive Ui.'
      icon: 'i-mdi-nuxt'

  Latest:
    - name: 'Parfait'
      link: 'https://github.com/dud7ii/parfait'
      desc: 'Vite template with Arco Design.'
      icon: 'i-mdi-anchor'
    - name: 'Vite-template'
      link: 'https://github.com/dud7ii/vite-template'
      desc: 'The starter of vite app.'
      icon: 'i-carbon-campsite'
    - name: 'SoftTagBar'
      link: 'https://github.com/dud7ii/soft-tagbar'
      desc: 'Component for The Tags View.'
      icon: 'i-mdi-tag-multiple-outline'

---

<ListProjects :projects="frontmatter.projects" />
