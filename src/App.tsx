import "./App.scss";
import { Header } from "./components/Header/Header";
import { JobCardsContainer } from "./components/JobCardContainer/JobCardContainer";

export const App = () => {
  return (
    <>
      <Header />
      <section>
        <JobCardsContainer />
      </section>
    </>
  );
};
