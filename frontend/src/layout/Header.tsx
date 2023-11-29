import { useLocation } from "react-router-dom";
import LogoHeader from "../assets/logo-header.svg";
import LogoHeaderInverted from "../assets/logo-header-inverted.svg";
import DropDown from "../components/common/DropDown";
import NVIcon from "../assets/nvidia.svg";
import ShutDownButton from "../components/ShutDownButton";
import {
  BsFillChatSquareTextFill,
  BsGithub,
  BsArrowRepeat,
  BsBraces,
  BsBoxArrowUpRight,
} from "react-icons/bs";
import { useGetApplicationStatus } from "../API/other";
import LinkWithSearchParams from "../components/LinkWithSearchParams";
import apiService from "../API/apiService";
import { useAppContext } from "../context/AppContext";
import { DarkModeContext } from "../context/ThemeContext";
import { useContext } from "react";
import DarkModeToggle from "../components/DarkModeToggle";

export default function Header() {
  const { clusterMode, setClusterMode } = useAppContext();
  const { data: statusData } = useGetApplicationStatus({
    onSuccess: (data) => {
      setClusterMode(data.ClusterMode);
    },
  });

  const location = useLocation();

  const { darkMode } = useContext(DarkModeContext);

  const openSupportChat = () => {
    window.open("https://forums.developer.nvidia.com/c/private/holoscan-for-media-early-access/", "_blank");
  };

  const openProjectPage = () => {
    window.open("https://developer.nvidia.com/holoscan-for-media/", "_blank");
  };

  const resetCache = async () => {
    try {
      await apiService.fetchWithDefaults("/api/cache", {
        method: "DELETE",
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const openAPI = () => {
    window.open("/#/docs", "_blank");
  };

  const getBtnStyle = (identifier: string) =>
    `text-md py-2.5 px-5 ${
      location.pathname.includes(`/${identifier}`)
        ? " text-primary rounded-sm bg-header-install"
        : ""
    }`;

  return (
    <div className="h-16 flex items-center justify-between bg-white dark:bg-black dark:text-white dark:border-b dark:border-gray-500 custom-shadow">
      <div className="h-16 flex items-center gap-6 min-w-fit ">
        <LinkWithSearchParams to={"/installed"} exclude={["tab"]}>
          <img
            src={darkMode?LogoHeaderInverted:LogoHeader}
            alt="helm dashboard logo"
            className="ml-3 w-48 min-w-[80px]"
          />
        </LinkWithSearchParams>
        <span className="ml-3 w-px h-3/5 bg-gray-200" />
        <div className="inline-block w-full">
          <ul className="w-full items-center flex md:flex-row md:justify-between md:mt-0 md:text-sm md:font-normal md:border-0 ">
            <li>
              <LinkWithSearchParams
                to={"/installed"}
                exclude={["tab"]}
                className={getBtnStyle("installed")}
              >
                Installed
              </LinkWithSearchParams>
            </li>
            <li>
              <LinkWithSearchParams
                to={"/repository"}
                exclude={["tab"]}
                end={false}
                className={getBtnStyle("repository")}
              >
                Repository
              </LinkWithSearchParams>
            </li>
            <li>
              <DropDown
                items={[
                  {
                    id: "1",
                    text: "Support chat",
                    icon: <BsFillChatSquareTextFill />,
                    onClick: openSupportChat,
                  },
                  {
                    id: "2",
                    text: "Project Page",
                    icon: <BsGithub />,
                    onClick: openProjectPage,
                  },
                  { id: "3", isSeparator: true },
                  {
                    id: "4",
                    text: "Reset Cache",
                    icon: <BsArrowRepeat />,
                    onClick: resetCache,
                  },
                  {
                    id: "5",
                    text: "REST API",
                    icon: <BsBraces />,
                    onClick: openAPI,
                  },
                  { id: "6", isSeparator: true },
                  {
                    id: "7",
                    text: `version ${statusData?.CurVer}`,
                    isDisabled: true,
                  },
                ]}
              />
            </li>
            <li>
              <DarkModeToggle />
            </li>
            {statusData?.LatestVer ? (
              <li className="min-w-[130px]">
                <a
                  href="https://github.com/rhastie/helm-dashboard/releases"
                  className="text-upgrade-color"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Upgrade to {statusData?.LatestVer}
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
      
      <div className="h-16 flex items-center text-sm ">
        <div className="flex p-1 gap-2 border bottom-gray-200 rounded min-w-max">
          <img src={darkMode?"https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoibnZpZGlhXC9hY2NvdW50c1wvYTBcLzQwMDEwODlcL3Byb2plY3RzXC8yMFwvYXNzZXRzXC9kM1wvMTYwMTlcL2Q5ZDdkODFiMTcwZWM2YzdkNjQyZTUzOThhZWFmMzE4LTE2MzUzNjc1MTgucG5nIn0:nvidia:taOsL2EXEw_k2Lv33hcBjPzkHy7m7tF2EEiFNcMo0Tc?width=2400":NVIcon} width={128} height={24} />
          <div className="flex flex-col justify-center">
            <a
              href="https://developer.nvidia.com/holoscan-for-media/"
              className="text-primary font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex font-bold items-center gap-2 min-w-[25%] ">
                Holoscan For Media
                <BsBoxArrowUpRight className="w-[14px] h-[14px]" />
              </div>
            </a>
          </div>
        </div>

        <span className="w-px h-3/5 bg-gray-200 ml-3" />
        {!clusterMode ? <ShutDownButton /> : null}
      </div>
    </div>
  );
}
