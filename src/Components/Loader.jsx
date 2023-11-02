import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { useSelector, useDispatch } from 'react-redux';
import { increaseProgressValue } from '../Features/progressSlice';

const Loader = () => {
  const dispatch = useDispatch();
  const {progressValue} = useSelector(state => state.loader);

  return (
    <div>
      <LoadingBar
        color='#f11946'
        progress={progressValue}
        onLoaderFinished={() => dispatch(increaseProgressValue(0))}
      />
    </div>
  )
}

export default Loader;