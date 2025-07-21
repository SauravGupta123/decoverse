import { dynamicLogo } from "../AllAssets";
import GitHubButton from "react-github-btn";
import { FaLinkedin, FaDiscord, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const copyrightDate = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="font-['Geist'] bg-cardsColor pb-10 mt-6">
      <div className="footer lg:max-w-7xl mx-auto p-10 text-base-content md:items-center flex flex-col md:flex-row justify-center items-start">
        <aside className="flex flex-col items-center justify-center mx-auto sm:mx-0 sm:ml-0 md:mr-8 text-center sm:text-start mb-4 sm:mb-0">
          <Link
            to="/home"
            className="flex flex-col items-center justify-center"
          >
            <img
              src={dynamicLogo}
              alt="logo"
              className="max-w-[7rem] max-h-[7rem] mb-2"
            />
            <h2 className="text-2xl my-3">Decoverse</h2>
          </Link>

          <p className="text-base-content text-md max-w-[230px] mb-5">
            Explore upcoming coding contests and dynamically create developer
            portfolios
          </p>

          <GitHubButton
            href="https://www.instagram.com/phenom.srv/"
            data-color-scheme="no-preference: dark_high_contrast; light: dark_high_contrast; dark: light;"
            data-size="large"
            data-show-count="true"
            aria-label="Star decoverse/decoverse on GitHub"
          >
            
          </GitHubButton>

          
        </aside>

        <div className="lg:flex-1 flex flex-col sm:flex-row sm:flex-wrap mx-auto justify-between gap-8 mb-4 sm:mb-0">
          <nav className="flex justify-center items-center sm:!items-start flex-col gap-3 w-full sm:!w-[45%] xl:!w-fit">
            <header className="text-white font-medium text-2xl mb-2">
              Competitions
            </header>
            <a
              href="/contests"
              className="link link-hover hover:no-underline hover:text-custom-blue hover:scale-110 transition-all text-lg"
            >
              Contests
            </a>
            <a
              href="/challenges"
              className="link hover:no-underline link-hover hover:text-custom-blue hover:scale-110 transition-all text-lg"
            >
              Challenges
            </a>
          </nav>
          {/* <nav className="hidden sm:!flex justify-center items-center sm:!items-start flex-col gap-3 w-full sm:!w-[45%] xl:!w-fit">
            <header className="text-white font-medium text-2xl mb-2">
              Opportunities
            </header>
            <a
              href="/hackathons"
              className="link link-hover hover:no-underline hover:text-custom-blue hover:scale-110 transition-all text-lg"
            >
              Hackathons
            </a>
            <a
              href="/internships"
              className="link link-hover hover:no-underline hover:text-custom-blue hover:scale-110 transition-all text-lg"
            >
              Internship
            </a>
            <a
              href="/jobs"
              className="link hover:no-underline link-hover hover:text-custom-blue hover:scale-110 transition-all text-lg"
            >
              Jobs
            </a>
          </nav> */}
          <nav className="flex justify-center items-center sm:!items-start flex-col gap-3 w-full sm:!w-[45%] xl:!w-fit">
            <header className="text-white font-medium text-2xl mb-2">
              Connect
            </header>
           
            <a
              href="/contact"
              className="link hover:no-underline link-hover hover:text-custom-blue hover:scale-110 transition-all text-lg"
            >
              Contact Us
            </a>
            <a
              href="/about"
              className="link hover:no-underline link-hover hover:text-custom-blue hover:scale-110 transition-all text-lg"
            >
              About Decoverse
            </a>
            

            


          </nav>
          <nav className="flex justify-center items-center sm:!items-start flex-col gap-3 w-full sm:!w-[45%] xl:!w-fit">
            <header className="text-white font-medium text-2xl mb-2">
              Social
            </header>
            <div className="flex gap-8 lg:gap-3">
              <a
                href="https://www.linkedin.com/company/decoverse"
                className="link hover:no-underline link-hover hover:text-custom-blue hover:scale-110 transition-all text-lg m-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={32}
                  className="fill-white hover:fill-custom-blue"
                />
                <span className="sr-only">linkedin link</span>
              </a>
              <a
                href="https://twitter.com/intent/follow?screen_name=decoverse&tw_p=followbutton"
                className="link hover:no-underline link-hover hover:text-custom-blue hover:scale-110 transition-all text-lg m-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter
                  size={26}
                  className="fill-white hover:fill-custom-blue"
                />
                <span className="sr-only">twitter link</span>
              </a>
              <a
                href="https://discord.com/invite/bsbBytBqBc"
                className="link hover:no-underline link-hover hover:text-custom-blue hover:scale-110 transition-all text-lg m-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord
                  size={33}
                  className="fill-white hover:fill-custom-blue"
                />
                <span className="sr-only">discord link</span>
              </a>
              <a
                href="https://www.instagram.com/phenom.srv/"
                className="link hover:no-underline link-hover text-white hover:text-custom-blue hover:scale-110 transition-all text-lg m-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  size={32}
                  className="stroke-white group-hover:stroke-custom-blue"
                />
                <span className="sr-only">instagram link</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
      <p className="text-center w-full text-sm">
            Designed & developed by Saurav Gupta
      </p>
    </footer>
  );
}
