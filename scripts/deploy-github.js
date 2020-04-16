const ghPages = require("gh-pages") 

ghPages.publish(
    'public',
    {
      branch: 'master',
      repo: 'https://github.com/Bam92/abelmbula.git',
    },
    () => {
      console.log('Deploy Completed!')
    }
  )

