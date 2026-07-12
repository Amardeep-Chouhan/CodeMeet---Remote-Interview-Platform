import './App.css'
import { Show, SignInButton, SignOutButton, SignUpButton, UserButton } from '@clerk/react'

function App() {
  return (
    <>
    <h1>Welcome to the CodeMeet</h1>
      <header>
        <Show when="signed-out">
          <SignInButton><button>Login</button></SignInButton>
          <SignUpButton />
        </Show>
        <Show when="signed-in">
          <SignOutButton />
          <UserButton />
        </Show>
      </header>
    </>
  )
}

export default App