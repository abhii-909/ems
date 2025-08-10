import React from 'react'

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser= () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>

      <h1 className='text-2xl font-medium'>hello <br /> <span className='text-3xl font-semibold'>username 👋🏻</span></h1>

      <button onClick={logOutUser} className='bg-red-600 text-white font-medium px-5 py-2 rounded-md shadow-md hover:bg-red-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200'>Log Out</button>
      
    </div>
  )
}

export default Header
