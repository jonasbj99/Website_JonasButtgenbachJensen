import Axios from "axios";
import Comment from "../components/Comment.jsx";
import { useState, useEffect } from "react";

const PORT = 5001;
const location = "http://localhost:" + PORT;

function Guest() {
  const [listOfComments, setListOfComments] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const nameInput = document.getElementById("nameInput");
  const textInput = document.getElementById("textInput");

  useEffect(() => {
    Axios.get(location + "/getComments").then((res) => {
      setListOfComments(res.data);
    });
  }, []);

  const createComment = () => {
    if (name.length && text.length) {
      Axios.post(location + "/createComment", { name, text }).then((res) => {
        setListOfComments([...listOfComments, { name, text }]);
        nameInput.value = "";
        textInput.value = "";
        setName("");
        setText("");
        alert("Thanks for your comment :)");
      });
    } else {
      alert("You need to fill both fields.");
    }
  };

  return (
    <main className="guestMain">
      <div className="createComment glass">
        <input
          className="commentInput nameInput"
          id="nameInput"
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          className="commentInput widerInput"
          id="textInput"
          type="text"
          placeholder="Comment..."
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <button className="commentInput" onClick={createComment}>
          Post
        </button>
      </div>
      <div className="commentSection glass">
        {listOfComments.toReversed().map((comment) => {
          return <Comment key={comment._id} {...comment} />;
        })}
      </div>
    </main>
  );
}

export default Guest;
