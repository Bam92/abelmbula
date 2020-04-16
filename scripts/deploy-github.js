const ghPages = require("gh-pages") 

ghPages.publish(
    'public',
    {
      branch: 'develop',
      repo: 'https://github.com/Bam92/abelmbula.git',
    },
    () => {
      console.log('Deploy Completed!')
    }
  )

