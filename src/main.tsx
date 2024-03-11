import React from 'react'
import ReactDOM from 'react-dom/client'
import Avatar from './Avatar.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Avatar
      seen
      name="Guillaume Duhan"
      avatarUrl="https://substackcdn.com/image/fetch/w_80,h_80,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9762fc33-c14f-4ac2-9a69-34614838d7e5_545x545.png"
    />
  </React.StrictMode>,
)
