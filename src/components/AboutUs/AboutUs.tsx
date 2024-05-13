import React from "react";
import css from "../AboutUs/AboutUs.module.css";
import AboutUsHeader from "./AboutUsHeader";
import FirstTab from "./tabs/FirstTab";
import SecondTab from "./tabs/SecondTab";
import ThirdTab from "./tabs/ThirdTab";
import ForthTab from "./tabs/ForthTab";
import FifthTab from "./tabs/FifthTab";
import Hero from "../Hero/Hero";

const AboutUs = () => {
  const tabs = [
    {
      text: "01 Our company",
      href: "/our-company",
      renderComponent: () => {
        return <FirstTab />;
      },
    },
    {
      text: "02 Our product",
      href: "/Our_product",
      renderComponent: () => {
        return <SecondTab />;
      },
    },
    {
      text: "03 Working with us",
      href: "/Working_with_us",
      renderComponent: () => {
        return <ThirdTab />;
      },
    },
    {
      text: "04 Project publication",
      href: "/Project_publication",
      renderComponent: () => {
        return <ForthTab />;
      },
    },
    {
      text: "05 Choose us",
      href: "/Choose_us",
      renderComponent: () => {
        return <FifthTab />;
      },
    },
  ];

  return (
    <>
      <Hero />
      {tabs.map((item, index) => {
        return (
          <>
            <AboutUsHeader tabs={tabs} key={index} activeIdx={index} />
            {item.renderComponent && item.renderComponent()}
          </>
        );
      })}
    </>
  );
};

export default AboutUs;
