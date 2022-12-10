import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';
const socket = io.connect("http://localhost:5000")

//import axios from 'axios'

function App() {
  
  const [room, setRoom] = useState("");
  const [move, setMove] = useState("");
  const [moveReceived, setMoveReceived] = useState("");

  // const [backendData, setBackendData] = useState([])

  // const loadData = async () => {
  //   const response = await axios.get("/game");
  //   setBackendData(response.data);
  // }

  useEffect(() => {
    socket.on("receive-move", (data) => {
      setMoveReceived(data.move);
    })
  }, [socket])

  const sendMove = () => {
    socket.emit("send-move", {move, room}, (acknowledgement) => {
      alert(acknowledgement.status);
    });
  };

  const joinRoom = () => {
    if(room !== ""){
      socket.emit("join-room", {room}, (acknowledgement) => {
        alert(acknowledgement.status);
      });
    }
  }

  const leaveRoom = () => {
    if(room !== ""){
      socket.emit("leave-room", {room}, (acknowledgement) => {
        alert(acknowledgement.status);
      });
    }
  }

  return (
    <div>
      <input placeholder='Room id' onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button onClick={joinRoom}>Join Room</button>
      <button onClick={leaveRoom}>Leave Room</button>
      <input placeholder='Move' onChange={(event) => {
          setMove(event.target.value);
        }}
      />
      <button onClick={sendMove}>Send Move</button>
      <h1>{moveReceived}</h1>
    </div>
  )
}

export default App