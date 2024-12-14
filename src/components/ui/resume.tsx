import React from "react";

const Resume: React.FC = () => {
  return (
    <div className="px-4 py-5 md:px-10 lg:px-28">
      {/*Header section with name and contact options */}
      <div className="flex flex-col w-full items-center">
        <h1 className="text-4xl font-bold text-corduroy">
          Phillip Konstantinov
        </h1>
        <div className="flex flex-row space-x-2">
          <a
            href="https://www.linkedin.com/in/phillipkonstantinov"
          >
            LinkedIn
          </a>
          <span>|</span>
          <a href="mailto:phillipk0113@gmail.com">phillipk0113@gmail.com</a>
          <span>|</span>
          <a href="tel:+16024020398">(602) 402-0398</a>
        </div>
      </div>

      {/*Education Section */}
      <div>
        <div className="w-full border-b-2 border-corduroy mb-1 text-corduroy">
          <h2 className="text-lg font-bold">Education</h2>
        </div>
        <div className="flex flex-row justify-between">
          <strong>B.S. Computer Science (Honors) and Finance (Honors)</strong>
          <strong>December 2023</strong>
        </div>
        <div className="flex flex-row justify-between">
          <p className="pb-1">
            Barrett, the Honors College at Arizona State University
          </p>
          <strong>Cumulative GPA: 4.00/4.00</strong>
        </div>
        <ul className="list-disc ml-10">
          <li>
            {" "}
            Awards and Honors: New American Obama Scholar | Excellence in CS
            Scholarship | ON Semiconductor Business Scholarship | Dean's List
            (All Semesters) | Outstanding Graduating Senior Finalist (Top 4
            Graduate in Class) | Dean's Medal for Finance (Top Finance Graduate
            in Class){" "}
          </li>
        </ul>
      </div>

      {/*Skills section */}
      <div>
        <div className="w-full border-b-2 border-corduroy mb-1">
          <h2 className="text-lg font-bold text-corduroy">Skills</h2>
        </div>
        <p>
          <strong>Technical:</strong> C++, HTML, Java, Matplotlib, MS Excel, MS
          PowerPoint, MS Visio, MS Word, Node.js, Next.js, Pandas, PyTorch,
          Python, R, React, SQL, think-cell, typescript
        </p>
        <p>
          <strong>Languages:</strong> English (Native), Bulgarian (Native),
          Latin (Advanced), Ancient Greek (Basic)
        </p>
        <p>
          <strong>Interests:</strong> Travelling, Reading, Formula 1, Soccer,
          Basketball, Football, Weightlifting
        </p>
        <p>
          <strong>Professional Websites:</strong>{" "}
          <a
            href="https://www.meridianexecutivelimo.com"
            className="hover:text-amber-900"
          >
            meridianexecutivelimo.com
          </a>
        </p>
      </div>

      {/*Professional Experiences Section */}
      <div className="flex flex-col gap-y-1">
        <div className="border-b-2 border-corduroy">
          <h2 className="text-lg font-bold text-corduroy">
            Professional Experience
          </h2>
        </div>

        {/*This is the Front-End Developer Position */}
        <div>
          <div className="flex flex-row w-full justify-between">
            <h3 className="font-bold">Front-End Developer</h3>
            <strong>January 2024 - Present</strong>
          </div>
          <div className="flex flex-row w-full justify-between">
            <h4 className="">Meridian Execuitve Limousines, LLC</h4>
            <p>Phoenix, AZ</p>
          </div>
          <ul className="list-disc ml-10">
            <li>
              Built and deployed a responsive car service website leveraging
              React, Bootstrap, and CSS, ensuring fast load speeds and seamless
              user experience across devices.
            </li>
            <li>
              Implemented reCAPTCHA for secure form submissions, integrated
              EmailJS API for automated email handling, and embedded Google Ads
              tracking resulting in 100% higher self-booking customers.
            </li>
          </ul>
        </div>

        {/*This is the Summer Associate Position */}
        <div>
          <div className="flex flex-row w-full justify-between">
            <h3 className="font-bold">Summer Associate (Internship)</h3>
            <strong>June 2023 - August 2023</strong>
          </div>
          <div className="flex flex-row w-full justify-between">
            <h4 className="">EY-Parthenon, Software Strategy Group</h4>
            <p>Los Angeles, CA</p>
          </div>
          <ul className="list-disc ml-10">
            <li>
              Tracked KPIs across 4 countries for shared service center
              workstream of a multi-billion-dollar global corporate spin-off and
              prepared presentations for leadership to track project status.
            </li>
            <li>
              Collaborated with senior managers in pursuing several
              multi-million dollar engagements through secondary research,
              framework development, slide design, and strategy ideation.
            </li>
          </ul>
        </div>

        {/*This is the Technology Consulting Position */}
        <div>
          <div className="flex flex-row w-full justify-between">
            <h3 className="font-bold">Technology Consulting Intern</h3>
            <strong>June 2022 - August 2022</strong>
          </div>
          <div className="flex flex-row w-full justify-between">
            <h4 className="">Protiviti</h4>
            <p>Phoenix, AZ</p>
          </div>
          <ul className="list-disc ml-10">
            <li>
              Cooperated with 5-person engagement team on identifying and
              documenting gaps in publicly traded company's Internal Governance
              General Controls for 24 in-scope applications and tools.
            </li>
            <li>
              Conducted interviews with clients to identify scope, document
              control processes, and deliver solutions to control gaps via Excel
              analysis and comprehensive new control documentation using Word.
            </li>
          </ul>
        </div>

        {/*This is the Internal Audit Position */}
        <div>
          <div className="flex flex-row w-full justify-between">
            <h3 className="font-bold">Internal Audit Intern</h3>
            <strong>July 2021 - December 2021</strong>
          </div>
          <div className="flex flex-row w-full justify-between">
            <h4 className="">Salt River Project</h4>
            <p>Tempe, AZ</p>
          </div>
          <ul className="list-disc ml-10">
            <li>
              Spearheaded delayed 2021 Expense Audit upon joining and trained
              staff in audit procedures saving team 1 month by achieving project
              deadline.
            </li>
            <li>
              Facilitated new communication and reporting structure among
              managers, eliminating 50% of redundancies; standardized and
              recorded auditing process.
            </li>
          </ul>
        </div>

        {/*This is the Acquisitions Position */}
        <div>
          <div className="flex flex-row w-full justify-between">
            <h3 className="font-bold">Acquisitions Intern</h3>
            <strong>June 2021 - August 2021</strong>
          </div>
          <div className="flex flex-row w-full justify-between">
            <h4 className="">STORE Capital</h4>
            <p>Scottsdale, AZ</p>
          </div>
          <ul className="list-disc ml-10">
            <li>
              Analyzed marketing campaign data from Salesforce in Excel to
              create a presentation for top management showcasing statistical
              factors common among most and least successful campaigns.
            </li>
            <li>
              Generated 250+ actionable leads resulting in being contacted by
              Vice President of Acquisitions to work on company-wide lead
              generation project.
            </li>
          </ul>
        </div>
      </div>

      {/*Projects Section */}
      <div>
        <div className="border-b-2 border-corduroy">
          <h2 className="text-lg font-bold text-corduroy">Projects</h2>
        </div>

        {/*Machine Learning Project*/}
        <div>
          <div className="flex flex-row w-full justify-between">
            <h3 className="font-bold">
              Machine Learning Algorithm for Cancer Detection
            </h3>
            <strong>Summer 2024</strong>
          </div>
          <div className="flex flex-row w-full justify-between">
            <h4 className="">University of Cyprus</h4>
            <p>Nicosia, Cyprus</p>
          </div>
          <ul className="list-disc ml-10">
            <li>
              Partnered with researchers from Texas A&M University and the
              University of Cyprus to develop a machine learning algorithm
              utilizing a DC-Unet to identify cancerous/malignant tissue in
              patient DICOM images leading to a 40% increase in accuracy.
            </li>
            <li>
              Co-authored paper accepted to the Society of Photo-Optical
              Instrumentation Engineers (SPIE) Conference for novel non-invasive
              colon cancer detection deploying ML.
            </li>
          </ul>
        </div>

        {/*Honors Thesis Project*/}
        <div>
          <div className="flex flex-row w-full justify-between">
            <h3 className="font-bold">
              Honors Thesis on Investment-based Crowdfunding
            </h3>
            <strong>January 2023 - December 2023</strong>
          </div>
          <div className="flex flex-row w-full justify-between">
            <h4 className="">Arizona State University</h4>
            <p>Tempe, AZ</p>
          </div>
          <ul className="list-disc ml-10">
            <li>
              Extracted, transformed, and validated regulatory sentiment, GDP,
              and equity crowdfunding investment data from diverse sources to
              perform multivariate OLS regression analysis using pandas/numpy
              and data visualization using matplotlib.
            </li>
            <li>
              Compiled research from 36 sources to establish crowdfunding
              regulatory environments across 7 countries and provide concise
              summaries for non-technical readers.
            </li>
          </ul>
        </div>

        {/*Full-Stack Web Dev Project*/}
        <div>
          <div className="flex flex-row w-full justify-between">
            <h3 className="font-bold">
              Full-Stack Web App Development (Bumima)
            </h3>
            <strong>August 2022 - May 2023</strong>
          </div>
          <div className="flex flex-row w-full justify-between">
            <h4 className="">Arizona State University</h4>
            <p>Tempe, AZ</p>
          </div>
          <ul className="list-disc ml-10">
            <li>
              Led development of 10 webpages as part of a full-stack team for a
              startup, using Bubble.io for both front-end and back-end
              functionality, and integrated AWS for hosting.
            </li>
            <li>
              Designed and implemented database schema to manage customer
              orders, products, and account data, while utilizing customer
              interviews to refine user stories and improve site functionality
              through agile development sprints.
            </li>
          </ul>
        </div>
      </div>

      {/*Collegiate Involvement Section */}
      <div>
        <div className="border-b-2 border-corduroy">
          <h2 className="text-lg font-bold text-corduroy">
            Collegiate Involvement
          </h2>
        </div>

        {/*New Venture Group*/}
        <div>
          <div className="flex flex-row w-full justify-between">
            <h3 className="font-bold">Engagement Manager</h3>
            <strong>January 2021 - December 2023</strong>
          </div>
          <div className="flex flex-row w-full justify-between">
            <h4 className="">New Venture Group</h4>
            <p>Tempe, AZ</p>
          </div>
          <ul className="list-disc ml-10">
            <li>
              Performed market sizing and segmentation of the Los Angeles higher
              education market to identify underserved communities.
            </li>
            <li>
              Led a team of 5 consultants completing pricing analysis for
              institutions of higher education and developing new innovative
              forms of pricing for higher education.
            </li>
          </ul>
        </div>

        {/*Financial Management Association*/}
        <div>
          <div className="flex flex-row w-full justify-between">
            <h3 className="font-bold">President</h3>
            <strong>August 2019 - May 2023</strong>
          </div>
          <div className="flex flex-row w-full justify-between">
            <h4 className="">Financial Management Association (FMA)</h4>
            <p>Tempe, AZ</p>
          </div>
          <ul className="list-disc ml-10">
            <li>
              Redesigned board positions to provide goal clarity and delegated 4
              large community service and professional development events for
              600+ students among 8 board members resulting in managing career
              fairs for the Finance department.
            </li>
            <li>
              Organized bi-weekly meetings with Fortune 500 companies and
              developed a sponsorship package raising ~$15k for an annual trip
              to New York City.
            </li>
          </ul>
        </div>
      </div>

      {/*Download the Resume */}
      <div className="mt-2">
        <div className="border-y-2 border-corduroy text-center">
          <a 
            href="/Phillip_Konstantinov_CV.pdf"
            download
            className="text-lg font-bold text-corduroy"
            >
            Download Resume PDF
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Resume;
