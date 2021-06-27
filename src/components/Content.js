import React from "react";
import Heading from "./Heading";
import "./css/Content.css";
import TeamMember from "./TeamMember";

const Content = () => {
  return (
    <div>
      <section className="who-we-are">
        <Heading text="Who we are?" />
        <article>
          <p>
            Code for Cape Town (Code4CT) is a programme that introduces young
            girls to basic web building skills and exposes them to opportunities
            in the Information and Communication Technologies (ICT) sector.
          </p>

          <p>
            Participants are trained in web development, design principles, as
            well as courses in professional development. Code4CT aims to inspire
            a generation of young girls who are well-prepared with a toolkit of
            technical and soft skills in order to achieve high impact in the
            workplace.
          </p>

          <p>
            These are skills that everyone should have. Even if you have no
            intention of becoming a professional coder, you will benefit from
            knowing how to think in this way in this increasingly computerized
            economy. A growing number of permanent job positions that use
            information technology to deliver a product or a service are
            becoming available in the local economy. It is estimated that nearly
            75000 such jobs will come online in South Africa within the next
            five years.
          </p>

          <button>Read More</button>
        </article>
      </section>

      {/* image grid section */}
      <section className="image-grid">
        <img src="images/image1.jpg" />
        <img src="images/image1.jpg" />
        <img src="images/image1.jpg" />
        <img src="images/image1.jpg" />
      </section>

      {/* skills section */}
      <section className="skills">
        <section className="skills-coding">
          <img src="images/computerImage.png" alt="" />
          <h3 className="skills-heading">Coding</h3>

          <p className="skills-content">
            {" "}
            Learn how to build your own websites using HTML, CSS, JavaScript &
            JQuery. Go on to explore exciting modules from game development to
            user experience design.
          </p>
        </section>

        <section className="skills-communication">
          <img src="images/volumeImage.png" alt="" />
          <h3 className="skills-heading">Communication</h3>

          <p className="skills-content">
            Learn how to pitch ideas, represent yourself online, communicate
            professionally and work with online collaboration tools..
          </p>
        </section>

        <section className="skills-problem-solving">
          <img src="images/toolsImage.png" alt="" />
          <h3 className="skills-heading">Problem Solving</h3>

          <p className="skills-content">
            Learn how to pitch ideas, represent yourself online, communicate
            professionally and work with online collaboration tools..
          </p>
        </section>

        <section className="skills-career-guidance">
          <img src="images/certificateImage.png" alt="" />
          <h3 className="skills-heading">Career Guidance</h3>

          <p className="skills-content">
            Learn how to pitch ideas, represent yourself online, communicate
            professionally and work with online collaboration tools..
          </p>
        </section>
      </section>

      {/* portfolio section */}
      <section className="portfolio">
        <Heading text="Our Awesome Portfolio" />

        <p className="intro-text">
          Over the past 3 years, Code for Cape Town has reached over 600 young
          women with coding and social innovation. Not only have they been
          exposed to coding but they have also done careers and life skills
          courses, design thinking workshops and social innovation projects to
          address local challenges.
        </p>

        <section className="second-grid">
          <img src="images/image1.jpg" alt="" />
          <img src="images/image1.jpg" alt="" />
          <img src="images/image1.jpg" alt="" />
          <img src="images/image1.jpg" alt="" />
          <img src="images/image1.jpg" alt="" />
        </section>
      </section>

      {/* Meet the team */}
      <section className="meet-the-team">
        <Heading text="Meet our team" />

        <p>
          Code4CT is a diverse company made up of strong-minded individuals. Our
          core team consists of:
        </p>
        <TeamMember
          image="images/Emma.jpg"
          name="Emma Dicks"
          position="Founder and Director"
          summary="Emma is passionate about providing high quality education that enables young people to bring innovative ideas to life and play an active role in South Africa's economy."
        />

        <TeamMember
          image="images/Andrea.jpg"
          name="Andrea Petersen"
          position="Operations Lead"
          summary="Andrea thrives on seeing key players in the Code4CT ecosystem discover how they can make the greatest impact.When she is not co-ordinating the Code4CT family she can be found enjoying the diverse cuisine and great outdoors that Cape Town has to offer."
        />

        <TeamMember
          image="images/Tegan.jpg"
          name="Tegan Crous"
          position="Program Lead"
          summary="Tegan heads up the high school program. She is spurred on by a heart for people and seeing them pursue their potential in a safe, fun and nurturing environment."
        />

        <TeamMember
          image="images/Tracey.jpg"
          name="Tracy-Anne Sikenjana"
          position="Leadership Program Coordinator"
          summary="Tracy joined in 2015 and matriculated from Rustenburg Girls' High in 2016. She interned with Code4CT to give back to an organisation that had a large impact on her personal growth and development."
        />
      </section>
    </div>
  );
};

export default Content;
