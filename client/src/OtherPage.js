import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const OtherPage = () => {
  return (
    <Fragment>
      Im some other page!
      <Link to="/">Go back home</Link>
    </Fragment>
  )
}

export default OtherPage
