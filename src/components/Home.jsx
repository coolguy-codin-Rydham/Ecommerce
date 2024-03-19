import Part1 from "./Home/Part1"
import Part2 from "./Home/Part2"
import Part3 from "./Home/Part3"

const Home = () => {

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[1500px] w-full">
        <Part1/>
        <Part2/>
        <Part3/>
      </div>
    </div>
  )
}

export default Home
