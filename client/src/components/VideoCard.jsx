import youtubeSvg from "../assets/youtube.svg";

const youtubeRef = "https://www.youtube.com/watch?v=";

function VideoCard(video) {
  return (
    <div className="videoCard">
      <a
        className="videoContainer"
        href={youtubeRef + video.video.ref}
        target="_blank"
      >
        <img src={video.video.thumb} alt="" />
        <div className="videoIcon">
          <img src={youtubeSvg} alt="Youtube Play Button" />
        </div>
      </a>
      <div className="videoInfo">
        <h3>{video.video.title}</h3>
        <p>{video.video.desc}</p>
      </div>
    </div>
  );
}

export default VideoCard;
