const ghPages = require("gh-pages")

ghPages.publish(
  "public",
  {
    repo: "https://github.com/Bam92/abelmbula.git",
    message: "Auto-generated commit",
  },
  (err) => {
    if (err) console.error(err)
    else console.log("Deploy Completed!")
  }
)
