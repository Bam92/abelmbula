import React from "react"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

import Container from "../../components/container"

const coursesList =
{
  "title": "CRUD PHP and MySQL course",
  "description": "dddd",
  "link": "url",
  "image": "../../images/cover-php-course.png",
}


export default () => {
  const img = "../../images/cover-php-course.png"
  // {
  // const img = "../../images/cover-php-course.png"
  // const courses = coursesList.map(course => {
  //   const img = course.image
  //   console.log(img);
  //   return (
  //   <>
  //     // const image = getImage(course.image)
  //     // return image

  // <StaticImage src={img} alt={course.title} />
  //     <p>{course.title} </p>
  //     </>


  //   )})

  return (

    <Container>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/courses">Courses</Link>

      <div>
        <StaticImage
          src={img}
          quality={90}
          alt={coursesList.title}
        />
        {coursesList.title}
      </div>
    </Container>
  )
  // }
}
