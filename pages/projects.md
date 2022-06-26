---
title: Projects - Faitsse
display: Projects
subtitle: List of projects that I am proud of
description: List of projects that I am proud of
projects:
  Upcoming:
    - name: 'SoftTagBar'
      link: 'https://github.com/faitsse/soft-tagbar'
      desc: 'Component for The Tags View.'
      icon: 'i-mdi-tag-multiple-outline'
    - name: 'Petite'
      link: 'https://github.com/faitsse/petite'
      desc: 'Vite template with Naive Ui.'
      icon: 'i-mdi-nativescript'

  Latest:
    - name: 'Parfait'
      link: 'https://github.com/faitsse/parfait'
      desc: 'Vite template with Arco Design.'
      icon: 'i-mdi-anchor'
    - name: 'Vite-template'
      link: 'https://github.com/faitsse/vite-template'
      desc: 'The starter of vite app.'
      icon: 'i-carbon-campsite'

---

<ListProjects :projects="frontmatter.projects"/>

<BackWidget />
