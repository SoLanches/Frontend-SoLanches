import React from 'react'
import { Route as RouteReact, Redirect, useParams } from 'react-router-dom';
import useLoginContext from '../contexts/login.context'
import { formatRoute } from '../util/format'

export const Route = ({isPrivate, component, ...rest}) => {
  console.log(isPrivate)
  console.log(rest)

  const { user } = useLoginContext()
  console.log(user)
  const commerce = rest.computedMatch.params.commerceName

  if (isPrivate && (!user || formatRoute(user) !== commerce)) {
    return (<Redirect to={`/${commerce}`} />)
  }

  return (
    <RouteReact {...rest} component={component}/>
  )
}