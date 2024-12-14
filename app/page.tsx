import Link from "next/link"

export default function Home() {
  return (
    <div className="text-lg w-screen h-screen flex items-center justify-center">

      To-Do Application
      <br />


      <Link href="/signin"> Sign in to do App</Link>
      <br />

      <Link href="/signup"> Sign Up to do App</Link>
    </div>

  )
}