---
# Leave the homepage title empty to use the site title
title: ''
summary: ''
date: 2026-04-28
type: landing

sections:
  # Biography block
  - block: resume-biography-3
    content:
      username: me
      text: >
        I am an Assistant Professor (Associate Professor starting Fall 2026) in the Marketing Area at the Jindal
        School of Management at the University of Texas at Dallas. 
        
        My research has been published in top journals in economics and marketing, with awards such as the American Marketing Association's AI SIG Award for Best AI in Marketing Paper Published in 2024.
      button:
        text: Download CV
        url: files/cv.pdf
      headings:
        about: 'About'
        education: 'Education'
        interests: 'Research Interests'
    design:
      background:
        gradient_mesh:
          enable: true
      name:
        size: sm
      avatar:
        size: large
        shape: circle

  # Publications collection
  - block: collection
    content:
      title: 'Publications'
      count: 0
      sort_by: publication_order
      order: asc
      filters:
        folders:
          - publications
    design:
      view: citation

  # Teaching collection
  - block: collection
    content:
      title: 'Teaching'
      filters:
        folders:
          - courses/meco-7312
    design:
      view: card
---
