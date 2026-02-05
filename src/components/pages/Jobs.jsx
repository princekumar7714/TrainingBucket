import JobNavbar from "./job-content/JobNavbar.jsx";
import JobHero from "./job-content/JobHero.jsx";

import WhyChooseUs from "./job-content/WhyChooseUs.jsx";
import JobFooter from "./job-content/JobFooter.jsx";
import Industries from "./job-content/Industries.jsx";

function Jobs() {
  return (
    <>
      <JobNavbar />
      <JobHero />
      <Industries />
      <WhyChooseUs />
      <JobFooter />
    </>
  );
}

export default Jobs;
