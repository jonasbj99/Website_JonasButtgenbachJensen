function formatDate (date) {
  const thisDate = new Date(date);
  const year = thisDate.getFullYear();
  const month = thisDate.getMonth() + 1;
  const day = thisDate.getDate();

  const newDate = `${day}/${month} - ${year}`

  return newDate
}

function Comment(comment) {
  return (
    <div className="commentEl">
      <span className="commentDate">{formatDate(comment.date)}</span>
      <h3 className="commentName">{comment.name}</h3>
      <p className="commentText">{comment.text}</p>
    </div>
  );
}

export default Comment;
