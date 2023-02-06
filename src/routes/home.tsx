import React from "react"
import Greeter from "../components/greeter"

export default function Home() {
  return (
    <div className="h-full p-4">
      <h1>Home</h1>
      <button
        className="btn"
        onClick={() => {
          alert("hi")
        }}
      >
        hi There
      </button>
      <input type="range" min="0" max="100" className="range" />
      <Greeter name="developer" />
    </div>
  )
}
