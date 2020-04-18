const ghPages = require("gh-pages") 

ghPages.publish(
    'public',
    {
      branch: 'master',
      repo: 'https://github.com/Bam92/abelmbula.git',
    },
    (err) => {
      if(err) console.error(err)
      else console.log('Deploy Completed!')
    }
  )

