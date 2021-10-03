import React from 'react'
import { Route as RouteReact, Redirect } from 'react-router-dom';
import useLoginContext from '../contexts/login.context'
import { formatRoute } from '../util/format'

export const Route = ({isPrivate, component, ...rest}) => {
  const { user } = useLoginContext()
  const commerce = rest.computedMatch.params.commerceName

  if (isPrivate && (!user || formatRoute(user) !== commerce)) {
    return (<Redirect to={`/${commerce}`} />)
  }

  return (
    <RouteReact {...rest} component={component}/>
  )
}