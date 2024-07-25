import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import GitHubButton from "react-github-btn";
import { FaLink } from "react-icons/fa";

const ProjectCard = ({
  project: { title, description, tags, link, link2, live },
}) => {
  return (
    <div className="block rounded-xl border p-4 border-gray-300 shadow-lg shadow-blue-200">
      <h1 className="text-xl text-center font-bold">
        {title}{" "}
        <a href={link} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt className="inline align-baseline mx-2" />
        </a>
        {link2 ? (
          <a href={link2} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt className="inline align-baseline" />
          </a>
        ) : (
          ""
        )}
        {live ? (
          <a href={live} target="_blank" rel="noopener noreferrer">
            <FaLink className="inline align-baseline" />
          </a>
        ) : (
          ""
        )}
      </h1>

      <hr className="my-4" />
      <p className="">{description}</p>
      <div className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
        {tags.map((tag,ind) => (
          <div key={ind} className="px-4 py-1 border-2 rounded-full">{tag}</div>
        ))}
      </div>
      <div class="w-full text-center">
        <GitHubButton
          href={link}
          data-color-scheme="no-preference: light; light: light; dark: light;"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star ntkme/github-buttons on GitHub"
        >
          Star
        </GitHubButton>
        {"  "}
        <GitHubButton
          href={link + "/fork"}
          data-color-scheme="no-preference: light; light: light; dark: light;"
          data-icon="octicon-repo-forked"
          data-size="large"
          data-show-count="true"
          aria-label="Fork ntkme/github-buttons on GitHub"
        >
          Fork
        </GitHubButton>
      </div>
    </div>
  );
};

export default ProjectCard;
