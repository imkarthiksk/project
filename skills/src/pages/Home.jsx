import Navbar from "../components/Navbar"

function Home() {

  return (

    <div>

      <Navbar />

      <div className="p-6">

        <h1 className="text-2xl mb-4">Available Mentors</h1>

        <div className="grid grid-cols-3 gap-4">

          <div className="border p-4 rounded">

            <h2 className="font-bold">Arun</h2>

            <p>Teach: React</p>

            <p>Learn: Python</p>

            <button className="bg-green-500 text-white mt-2 p-2">
              Connect
            </button>

          </div>

        </div>

      </div>

    </div>

  )
}

export default Home