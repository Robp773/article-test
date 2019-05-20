import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from 'components/Router'
// very similar to Post.js component
export default function Post() {
  // get the post data
  const { post } = useRouteData()
  return (
    <div>
      <Link to="/test/">{'<'} Back</Link>
      <br />
      {/* print out what we want to display */}
      <h3>{post.data.title}</h3>
      <div>{post.content}</div>
    </div>
  )
}