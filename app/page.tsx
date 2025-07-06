import { CompanionCard } from "@/components/CompanionCard";
import { CompanionsList } from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import React from "react";

const companionCards = [
  {
    id: "1",
    name: "Math Buddy",
    topic: "Algebra Basics",
    subject: "Mathematics",
    duration: 30,
    color: "#FF6B6B",
    bookmarked: true,
  },
  {
    id: "2",
    name: "Science Pal",
    topic: "Photosynthesis",
    subject: "Biology",
    duration: 45,
    color: "#4ECDC4",
    bookmarked: false,
  },
  {
    id: "3",
    name: "History Guide",
    topic: "World War II",
    subject: "History",
    duration: 60,
    color: "#FFD6A5",
    bookmarked: true,
  },
];

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        {companionCards.map((companion) => (
          <CompanionCard
            key={companion.id}
            id={companion.id}
            name={companion.name}
            topic={companion.topic}
            subject={companion.subject}
            duration={companion.duration}
            color={companion.color}
            bookmarked={companion.bookmarked}
          />
        ))}
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
