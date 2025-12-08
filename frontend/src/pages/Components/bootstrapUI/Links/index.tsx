import React from 'react'
import { Container } from 'react-bootstrap'
import ColorsUtilities from './ColorsUtilities'
import OpacityHover from './OpacityHover'
import ColorOpacityOffset from './ColorOpacityOffset'
import IconLink from './IconLink'

const Links = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <ColorsUtilities />
                <OpacityHover />
                <ColorOpacityOffset />
                <IconLink />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default Links