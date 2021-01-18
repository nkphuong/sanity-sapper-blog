export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '600561f2e6f31a046a286cf7',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-irx8bk75',
                  apiId: '727626a5-16d1-4e82-8fbb-3a17b5963301'
                },
                {
                  buildHookId: '600561f271e7dffef0c97c5e',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-voknov9k',
                  apiId: '9d9f103a-4aeb-41d1-8424-ed146ae45c65'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nkphuong/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-voknov9k.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
