import React from 'react'

function LoginForm() {
  return (
    <div className='center-div'>
      <form>
        <label htmlFor='username'>Username</label>
        <input type="text" id="username" name="username" />

        <label htmlFor='email'>Email</label>
        <input type="text" id="email" name="email" />

        <label htmlFor='channel'>Channel</label>
        <input type="text" id="channel" name="channel" />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default LoginForm