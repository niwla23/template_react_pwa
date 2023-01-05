import React from "react"
import UiButton from "../components/uiButton"

export default function Home() {
  return (
    <div className="h-full bg-pink-600 p-4">
      <h1>Home</h1>
      <UiButton
        onClick={() => {
          alert("hi")
        }}
      >
        <p>hi</p>
      </UiButton>
    </div>
  )
}
