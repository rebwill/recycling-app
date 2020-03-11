import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  aboutContainer: {
    width: "75%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "150px",
    backgroundColor: "#9af5d9",
    padding: "30px",
    paddingTop: "80px"
  }
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.aboutContainer}>
      <h2>About MIA Recycling</h2>
      <br />
      <p>
        As someone who is passionate about the environment, climate change, and
        reducing waste, after 2.5 years living in Miami, I still hadn't found
        reliable information about what can actually be recycled here.
        <br />
        <br />
        While accepted materials can still vary widely by recycling hauler, the
        largest one is the Miami Dade Solid Waste Department. They actually have
        an{" "}
        <a href="https://www.miamidade.gov/global/solidwaste/recycling-a-to-z.page">
          "A to Z" list
        </a>{" "}
        on their website of recyclable and non-recyclable materials, but it's
        buried deep and not very user-friendly.
        <br />
        <br />I decided to convert that data into an interactive app that allows
        you to check if a certain item is recyclable or not, starting by
        selecting the type of material.
        <br />
        <br />
        <strong>On the technical side:</strong> I built the app with MongoDB,
        Express, and Node.js on the back end, and React (Hooks and Router),
        Material UI, and React Bootstrap on the front end. It's hosted on
        Heroku.{" "}
        <strong>
          You can find the Github repo{" "}
          <a href="https://github.com/rebwill/recycling-app">here</a>
        </strong>
        .<br />
        <br />
      </p>
      <h2>The Problem with Recycling</h2>
      <br />
      <p>
        Despite my good intentions for a small, useful app, and the good
        intentions of folks who want to recycle properly, one fact remains:{" "}
        <strong>the recycling industry is kind of dead</strong>.<br />
        <br />
        Due to no fault of our own, many of us are brought up under the
        impression that once we put our recyclable goods in the proper bin, they
        are magically redeemed and rescued from the global trash problem.
        <br />
        <br />
        Unfortunately, the real story is that recyclable materials are a
        commodity like any other — only as valuable as their current price on
        the market, and subject to the whims of global supply and demand.
        <br />
        <br />
        So around 2018, when China, the world's leading purchaser of plastic
        recyclables, implemented stricter contamination standards and stopped
        purchasing entirely certain materials, it{" "}
        <a href="https://www.vox.com/the-goods/2019/4/2/18290956/recycling-crisis-china-plastic-operation-national-sword">
          threw the world's recycling industry into crisis
        </a>
        .<br />
        <br />
        So what happens when no one will buy our recyclables?
        <br />
        <br />
        The same thing that happens to the rest.{" "}
        <strong>It goes into a landfill or to the incinerator.</strong>
        <br />
        <br />
      </p>
      <h2>So What Can You Do?</h2>
      <br />
      <p>
        Out of the famous 3 R's, we know that "recycle" is no longer the best
        option. That leaves us with "reduce" and "reuse". Since we know that
        very little of our trash, even the technically recyclable stuff,
        actually escapes from the destiny of a landfill, our only choice is to
        create less of it.
        <br />
        <br />
        Here are a few things you can do to reduce waste in your life:
        <br />
        <br />
        <ul>
          <li>
            <strong>Carry in your purse/backpack/car a "kit"</strong> that will
            allow you to avoid having to grab a single-use plastic item:
          </li>
          <ul>
            <li>
              <strong>Reusable water bottle</strong> (bonus: stay better
              hydrated!)
            </li>
            <li>
              <strong>Reusable grocery bag</strong>
            </li>
            <li>
              <strong>Reusable utensil set</strong> (or, to go even more
              minimalist, a single metal spork that fulfills the functions of a
              fork, spoon, and knife). You can find both for reasonable prices
              at a local health store or online. Plus, they're a great
              conversation starter to educate your friends about waste
              reduction! Ask anyone who's heard me say "let me tell you about my
              spork".
            </li>
            <li>
              <strong>Reusable container</strong> for when you go to a
              restaurant and expect that you might have leftover food, in order
              to avoid taking a plastic or styrofoam box home.
            </li>
            <li>
              <strong>Reusable coffee mug</strong> (most coffee shops will fill
              your own cup if you request it! Bonus: stays hot longer than a
              regular coffee cup)
            </li>
          </ul>
          <li>
            <strong>
              Consider collecting your organic food scraps for compost.
            </strong>{" "}
            You don't have to do the actual composting at home! If you live in a
            small apartment in the city like me, you can just gather your
            organic scraps in containers in the fridge and drop them off
            periodically at a compost center near you. To answer your next
            question, no, they do not smell as long as you keep them in the
            fridge! Bonus: your regular trash will be way less smelly and easier
            to manage since you will be diverting most of your organic waste.
          </li>
          <li>
            <strong>Advocate for waste reduction at work.</strong> Does your
            office purchase an endless supply of plastic cups? Talk to your
            office manager and see if they would be open to purchasing reusable
            glasses or mugs instead. Is changing their current purchasing a
            non-starter? Try putting some signs in the kitchen to encourage
            coworkers to use their own mug for coffee or a reusable water bottle
            for water.
          </li>
          <li>
            <strong>
              Consider riding your bike or taking public transportation to work
              or around town.
            </strong>{" "}
            The feasibility of this depends a lot on where you live and work, of
            course, but it's worth thinking about whether it's truly necessary
            for you to take your own car absolutely everywhere.
          </li>
          <li>
            <strong>
              Participate in local neighborhood or beach cleanups and help
              spread the word about the problem.
            </strong>{" "}
            Check out organizations like{" "}
            <a href="https://www.volunteercleanup.org/">VolunteerCleanup.org</a>
            , or other local initiatives near you.
          </li>
        </ul>
      </p>
      <h2>Questions? Feedback?</h2>
      <p>
        <strong>Let's chat.</strong> Say hello on{" "}
        <a href="https://twitter.com/rebeccaAwillett">Twitter</a>,{" "}
        <a href="https://www.linkedin.com/in/willettrebecca/">LinkedIn</a>, or{" "}
        <a href="https://github.com/rebwill/">GitHub</a>!
      </p>
    </div>
  );
};

export default About;
