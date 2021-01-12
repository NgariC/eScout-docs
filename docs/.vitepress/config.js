module.exports = {
    title: 'eScout Kenya',
    description: 'The Kenya Scouts Association eScout portal documentaion.',
    themeConfig:{
      repo: 'NgariC/eScout-docs',
      docsDir: 'docs',

      editLinks: true,
      editLinkText: 'Edit this page on GitHub',
      lastUpdated: 'Last Updated',

      algolia: {
        apiKey: 'your_api_key',
        indexName: 'index_name'
      },
      nav: [
        { text: 'Registration', link: '/registration/' },
        { text: 'Competitions', link: '/competitions/' },
        { text: 'Events', link: '/events/' },
        { text: 'Projects', link: '/projects/' },
        { text: 'Scouts Centers', link: '/scout_centers/' },
        { text: 'Contact Us', link: '/contact_us/' },
        { text: 'External', link: 'https://google.com' }
      ],
      sidebar: {
        '/': getMainSidebar(),
      }
    }
  }







  function getMainSidebar() {
    return [
      {
        text: 'Introduction',
        children: [
          { text: 'Registration', link: '/registration/' },
          { text: 'Competitions', link: '/competitions/' },
          { text: 'Events', link: '/events/' },
          { text: 'Projects', link: '/projects/' },
          { text: 'Scouts Centers', link: '/scout_centers/' },
          { text: 'Contact Us', link: '/contact_us/' },
          { text: 'External', link: 'https://google.com' }
        ]
      },
      {
        text: 'Advanced',
        children: [
          { text: 'User Types', link: '/data_access/user_types' },
          { text: 'Data Access', link: '/data_access/' },
        ]
      }
    ]
  }