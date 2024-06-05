import Axios from "axios";
import ProjectSectionLeft from "../components/ProjectSectionLeft.jsx";
import ProjectSectionRight from "../components/ProjectSectionRight.jsx";
import { useState, useEffect } from "react";

import p1Img from "../assets/projects/p1Img.png";
import p2Img from "../assets/projects/p2Img.png";
import p3Img from "../assets/projects/p3Img.png";
import p4Img from "../assets/projects/p4Img.png";
import p5Img from "../assets/projects/p5Img.png";
import p6Img from "../assets/projects/p6Img.png";

const YouTubeAPI =
  "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=PL3cMsTMhN7xh9eHFAftw8IbwzhvtEvkUF&key=AIzaSyBfYdIiVIYaV-ofOSEq9hrAc7OtKPFUmuo";

function Projects() {
  const [vidP1, setVidP1] = useState({});
  const [vidP2, setVidP2] = useState({});
  const [vidP3, setVidP3] = useState({});
  const [vidP4, setVidP4] = useState({});
  const [vidP5, setVidP5] = useState({});
  const [vidP6, setVidP6] = useState({});

  useEffect(() => {
    Axios.get(YouTubeAPI).then((res) => {
      console.log(res);
      setVidP1({
        title: res.data.items[0].snippet.title,
        desc: res.data.items[0].snippet.description,
        thumb: res.data.items[0].snippet.thumbnails.maxres.url,
        ref: res.data.items[0].snippet.resourceId.videoId,
      });
      setVidP2({
        title: res.data.items[1].snippet.title,
        desc: res.data.items[1].snippet.description,
        thumb: res.data.items[1].snippet.thumbnails.maxres.url,
        ref: res.data.items[1].snippet.resourceId.videoId,
      });
      setVidP3({
        title: res.data.items[2].snippet.title,
        desc: res.data.items[2].snippet.description,
        thumb: res.data.items[2].snippet.thumbnails.maxres.url,
        ref: res.data.items[2].snippet.resourceId.videoId,
      });
      setVidP4({
        title: res.data.items[3].snippet.title,
        desc: res.data.items[3].snippet.description,
        thumb: res.data.items[3].snippet.thumbnails.high.url,
        ref: res.data.items[3].snippet.resourceId.videoId,
      });
      setVidP5({
        title: res.data.items[4].snippet.title,
        desc: res.data.items[4].snippet.description,
        thumb: res.data.items[4].snippet.thumbnails.maxres.url,
        ref: res.data.items[4].snippet.resourceId.videoId,
      });
      setVidP6({
        title: res.data.items[5].snippet.title,
        desc: res.data.items[5].snippet.description,
        thumb: res.data.items[5].snippet.thumbnails.maxres.url,
        ref: res.data.items[5].snippet.resourceId.videoId,
      });
    });
  }, []);

  const P6 = {
    title: "P6 - Bachelor Project",
    subtitle:
      "Studyplanner - Enhancing Usability of Study Planning for High School Students",
    desc: "Description should be writtin here",
    img: p6Img,
    video: vidP6,
  };

  const P5 = {
    title: "P5",
    subtitle: "Virtual Reality Exercise for Older Adults",
    desc: "Description should be writtin here",
    img: p5Img,
    video: vidP5,
  };

  const P4 = {
    title: "P4",
    subtitle: "Piano chord learning through serious games",
    desc: "Description should be writtin here",
    img: p4Img,
    video: vidP4,
  };

  const P3 = {
    title: "P3",
    subtitle: "Color Detection for People with Color Vision Deficiency",
    desc: "Description should be writtin here",
    img: p3Img,
    video: vidP3,
  };

  const P2 = {
    title: "P2",
    subtitle: "A Redesign of the Moodle Application",
    desc: "Description should be writtin here",
    img: p2Img,
    video: vidP2,
  };

  const P1 = {
    title: "P1",
    subtitle: "Climate Chage for Children",
    desc: "Description should be writtin here",
    img: p1Img,
    video: vidP1,
  };

  return (
    <main>
      <ProjectSectionLeft {...P6} />
      <ProjectSectionRight {...P5} />
      <ProjectSectionLeft {...P4} />
      <ProjectSectionRight {...P3} />
      <ProjectSectionLeft {...P2} />
      <ProjectSectionRight {...P1} />
    </main>
  );
}

export default Projects;
