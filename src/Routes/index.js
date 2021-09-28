import React from 'react'
import { Switch, Redirect } from 'react-router-dom';
import usePagesContext from '../contexts/pages.context'
import { Route } from './Route'

export const Routes = () => {
  const { pages } = usePagesContext();

  return (
    <Switch>
      {pages.map((page, index) => (
        <Route exact key={index} path={page.path} component={page.component} isPrivate={page.private}/>
      ))}
      <Route path='*'>
        <Redirect to='/inicio' />
      </Route>
    </Switch>
  )
}