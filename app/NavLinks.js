import React from "react";

const NavLinks = () => {
  const pages = [
    { id: 0, url: "/", text: "home" },
    { id: 1, url: "/destination", text: "destination" },
    { id: 2, url: "/crew", text: "crew" },
    { id: 3, url: "/technology", text: "technology" },
  ];
  return (
    <>
      {pages.map((page) => {
        const { id, url, text } = page;
        return (
          <div
            key={id}
            className="hidden md:inline ml-5  md:text-base lg:text-xl"
          >
            <Link
              href={url}
              className="uppercase md:hover:border-b-4 md:hover:pb-8"
            >
              <span className="hidden mr-2 lg:inline">0{id}</span>
              {text}
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default NavLinks;
