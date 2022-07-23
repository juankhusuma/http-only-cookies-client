import React from "react"
import axios from "axios"

function App() {
  React.useEffect(() => {
    axios.post("http://localhost:5000").then(res => setData(JSON.stringify(res.headers)))
  }, [])

  const [data, setData] = React.useState<string>("")

  return (
    <div className="App">
      {data}
    </div>
  )
}

export default App
