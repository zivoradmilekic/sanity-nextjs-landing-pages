export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d7ff349f38490ebeb134f30',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-q2nuswaw',
                  apiId: 'b3ead26d-27eb-41cf-bcad-9efa903927ce'
                },
                {
                  buildHookId: '5d7ff34960bc4d0188562d22',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-zn1wwmb8',
                  apiId: 'e655ff12-92a8-449d-8ff0-0bc3ba1c5ba1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zivoradmilekic/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-zn1wwmb8.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
