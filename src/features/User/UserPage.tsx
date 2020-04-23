import React, { FC } from 'react';
import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom';

const User: FC<{}> = () => {
  const { userId } = useParams();
  const { path } = useRouteMatch();

  return (
    <div>
      <h1>UserPage | user id {userId}</h1>
      <Switch>
        <Route path={`${path}/photos`}>
          <div>Photos</div>
        </Route>
        <Route path={`${path}/posts`}>
          <div>Posts</div>
        </Route>
      </Switch>
    </div>
  );
};

export default User;
