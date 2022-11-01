import "./App.css";
import Navigation from "./Navigation";

function App() {
  const studentsData = [
    {
      id: 1,
      name: "Sagar",
      age: 23,
      proffesion: "Software Engineer",
      education: "BE",
      skills: "React JS Angular JS",
    },
    {
      id: 2,
      name: "Hitesh",
      age: 33,
      proffesion: "SOftware Engineer",
      education: "BE",
      skills: "JS",
    },
    {
      id: 3,
      name: "Bhoomika",
      age: 21,
      proffesion: "SOftware Engineer",
      education: "MCA",
      skills: "AI,JS",
    },
    {
      id: 4,
      name: "Asha A",
      age: 50,
      proffesion: "Diploma Engineer",
      education: "diploma",
      skills: "React JS",
    },
    {
      id: 5,
      name: "RaviShankar",
      age: 23,
      proffesion: "Audit Engineer",
      education: "MCoM",
      skills: "Tally 2022",
    },
  ];
  return <Navigation name="Sagar R Shivappa" candidates={studentsData} />;
}

export default App;
