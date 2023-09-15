import EducationItem from "./components/Education/EducationItem";
import ExperienceItem from "./components/Experience/ExperienceItem";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <section className="sheet">
      <Header />
      <EducationItem />
      <ExperienceItem />
    </section>
  );
};

export default App;
