import { RiExternalLinkLine } from "react-icons/ri";

export const Troubleshoot = () => {
  return (
    <div>
      <a
        href="https://developer.nvidia.com/holoscan-for-media/"
        target="_blank"
        rel="noreferrer"
      >
        <button className="bg-primary text-white p-2 flex items-center rounded text-sm font-medium font-roboto">
          Holoscan for Media
          <RiExternalLinkLine className="ml-2 text-lg" />
        </button>
      </a>
    </div>
  );
};
