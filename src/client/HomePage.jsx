import React, { Fragment } from 'react';
import { useNavigate } from 'react-router';

const HomePage = () => {
  let navigate = useNavigate();

  return (
    <Fragment>
      <div>Welcome to this Activity Tracker</div>
      <div>You can click below to go to activity tracking page</div>
      <button onClick={() => navigate('/activitytracker')}> Track the activity page</button>
    </Fragment>
  );
};

export default HomePage;
