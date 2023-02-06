import React from "react"

export default function About() {
  return (
    <div className="h-full">
      <div className="h-full p-4 flex flex-col gap-4">
        <p>Here we have some more nice looking shit</p>
        <ul className="steps">
          <li className="step step-primary">Register</li>
          <li className="step step-primary">Choose plan</li>
          <li className="step">Purchase</li>
          <li className="step">Receive Product</li>
        </ul>
        <div>
          <kbd className="kbd">ctrl</kbd>+<kbd className="kbd">shift</kbd>+<kbd className="kbd">del</kbd>
        </div>
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Page Views</div>
            <div className="stat-value">89,400</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
        <div className="mockup-code">
          <pre data-prefix="$">
            <code>pnpm dev</code>
          </pre>
          <pre data-prefix="" className="text-warning">
            <code>VITE v4.0.4 ready in 355 ms</code>
          </pre>
          <pre data-prefix=">" className="text-success">
            <code>➜ Local: http://localhost:5173/</code>
          </pre>
        </div>
        <input type="checkbox" className="toggle" />
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Documents</a>
            </li>
            <li>Add Document</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
