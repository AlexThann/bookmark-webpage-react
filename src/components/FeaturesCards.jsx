import { useState } from "react";
import tab1image from "../assets/images/illustration-features-tab-1.svg";
import tab2image from "../assets/images/illustration-features-tab-2.svg";
import tab3image from "../assets/images/illustration-features-tab-3.svg";
import TabLink from "./TabLink";
import TabContent from "./TabContent";

export default function FeaturesCards() {
  const info = [
    {
      id: 1,
      tabName: "Simple Bookmarking",
      image: tab1image,
      header: "Bookmark in one click",
      paragraph:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    },
    {
      id: 2,
      tabName: "Speedy Searching",
      image: tab2image,
      header: "Intelligent search",
      paragraph:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks",
    },
    {
      id: 3,
      tabName: "Easy Sharing",
      image: tab3image,
      header: "Share your bookmarks",
      paragraph:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button",
    },
  ];

  const tabs = [...info];
  {
    /* info doesnt change, thats why its const. But the showed tab changes thats why we use a useState */
  }
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <section>
      <div className="px-[5%]">
        <ul className="mb-12 md:flex md:justify-center  md:gap-12 md:text-center md:border-b-1 md:border-gray-200">
          {tabs.map((tab) => {
            return (
              <TabLink
                key={tab.id}
                tab={tab}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              />
            );
          })}
        </ul>
      </div>
      <TabContent selectedTab={selectedTab} />
    </section>
  );
}
