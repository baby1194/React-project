import { useState } from "react";
import Cursor from "@/components/Cursor";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";

function Home() {
  const [cursorVariant, setCursorVariant] = useState("default");

  return (
    <div className="flex flex-col gap-3 justify-start items-center">
      <p className="text-xl">
        this page under{" "}
        <span
          className="font-bold text-primary"
          onMouseEnter={() => setCursorVariant("text")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          development
        </span>
      </p>
      <p className="text-neutral-500 text-xs">
        I&apos;ll start on it when add the first componenet (project)
      </p>
      {projects.map((item) => (
        <Link
          className="py-4 px-6 border-border border-b-[1px] w-full flex"
          key={item.id}
          to={item.path}
          onMouseEnter={() => setCursorVariant("link")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          {item.name}
        </Link>
      ))}

      <Cursor cursorVariant={cursorVariant} />
    </div>
  );
}

export default Home;
