import React from 'react'

const Home = () => {
  const libraries = [
    {name: 'Axios', url: 'https://github.com/axios/axios'},
    {name: 'Materialize CSS', url: 'https://github.com/Dogfalo/materialize'},
    {name: 'React-Redux', url: 'https://github.com/reactjs/react-redux'},
    {name: 'React-Router', url: 'https://github.com/ReactTraining/react-router'},
    {name: 'Redux', url: 'https://github.com/reactjs/redux'}
  ]

  const libraryList = libraries.map(({ name, url }) => {
    return <li key={name}><a href={url}>{name}</a></li>
  })

  return (
    <div className="pl4">
      <h3>Welcome to my repository of projects.</h3>
      <p>The projects here are based on the Advanced projects outlined on <a href="https://www.freecodecamp.com">freecodecamp.com</a></p>
      <p>I chose to use React as the main framework. The following libraries are also in use:</p>
      <ul className="browser-default">
        {libraryList}
      </ul>
    </div>
  )
}

export default Home