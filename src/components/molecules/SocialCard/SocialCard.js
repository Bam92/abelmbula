import React from 'react'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import SocialIcon from '../../atoms/Buttons/Social'
import { useSiteMetadata } from '../../../hooks/use-site-metadata'

import "./SocialCard.style.css"

const SocialCard = () => {
  const { social } = useSiteMetadata()

  return (
    <div className='socialCard'>
      <a href={social.linkedin} target='_blank' >
        <SocialIcon icon={faLinkedin} />
      </a>
      <a href={social.twitter} target='_blank' >
        <SocialIcon icon={faTwitter} />
      </a>
      <a href={social.github} title="Retrouve-moi sur Github" target='_blank'>
        <SocialIcon icon={faGithub} />
      </a>
      <a href='mailto:bam6192@gmail.com'>
        <SocialIcon icon={faEnvelope} />
      </a>
    </div>
  )
}

export default SocialCard