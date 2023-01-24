import Board from "../components/game/board"

const index = () => {
  return (
    <div>
        <Board />
      <div className="font-semibold flex justify-center items-center space-x-1">
        <p>developer : </p>
        <a className="underline text-blue-600" href="">
          Mohith Kumar
        </a>
      </div>
    </div>
  )
}

export default index
