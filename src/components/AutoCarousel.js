import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)
const MyComponent = () => (
  <AutoPlaySwipeableViews style={{ marginTop: 15 }}>
    <div >
      <img width={'100%'} src='https://picsum.photos/900/400?random=1' alt='img1'/>
    </div>
    <div>
      <img width={'100%'} src='https://picsum.photos/900/400?random=2' alt='img1'/>
    </div>
    <div>
      <img width={'100%'} src='https://picsum.photos/900/400?random=3' alt='img1'/>
    </div>
  </AutoPlaySwipeableViews>
)
export default MyComponent