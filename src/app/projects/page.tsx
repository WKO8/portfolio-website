"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import "./styles.css";
import Link from "next/link";
import { useEffect } from "react";

export default function ExperiencePage() {
  const router = useRouter();

  useEffect(() => {
    // Scroll to the bottom of the page on load
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-8 pb-0 overflow-hidden font-body">
      <div
        className="prev-scroll flex items-center flex-col justify-center gap-2 mb-10 text-mid-grey"
        onClick={() => router.push("/experience")}
      >
        <div className="button-prev w-14 h-14 rounded-full bg-dark-grey flex items-center justify-center">
          <div className="triangle-prev w-0 h-0 border-l-[0.8rem] border-l-transparent border-b-[1rem] border-b-black border-r-[0.8rem] border-r-transparent"></div>
        </div>
        <span>Experience</span>
      </div>
      <div className="main-info max-w-lg">
        <div className="projects flex flex-col w-full mt-2">
          <div className="projects-header flex flex-row gap-5 mb-4">
            <h3 className="half-underline text-light-grey text-xl">
              Recent Projects
            </h3>
            <div className="github-icon flex items-center justify-center mb-2 cursor-pointer">
              <Link
                href={"https://github.com/WKO8?tab=repositories"}
                target="_blank"
              >
                <Image
                  src="images/github.svg"
                  alt="Github icon"
                  width="20"
                  height="20"
                />
              </Link>
            </div>
          </div>
          <div className="projects-cards w-full">
            <div className="project-card-1 ml-2">
              <Link
                className="flex flex-row w-full gap-3"
                href={"https://github.com/WKO8/discord-bot-wknockout"}
                target="_blank"
              >
                <div className="project-image w-1/5 align-middle text-center justify-center mt-2">
                  <Image
                    src="/images/discord-bot.webp"
                    alt="WKnockOut screenshot"
                    width="60"
                    height="60"
                    className="rounded-3xl"
                  />
                </div>
                <div className="project-info w-4/5">
                  <h4 className="text-lg font-bold mb-2">WKnockOut</h4>
                  <p className="text-gray-400 text-sm text-start">
                    This project is a Discord bot designed to manage in-game
                    resources with various slash commands.
                  </p>
                </div>
              </Link>
            </div>
            <div className="project-card-2 ml-2">
              <Link
                className="flex flex-row mt-5 w-full gap-3"
                href={"https://github.com/WKO8/twitch-death-counter-bot"}
                target="_blank"
              >
                <div className="project-image w-1/5 align-middle text-center justify-center mt-2">
                  <Image
                    src="/images/twitch-death-counter.webp"
                    alt="Twitch Death Counter screenshot"
                    width="60"
                    height="60"
                    className="rounded-3xl"
                  />
                </div>
                <div className="project-info w-4/5">
                  <h4 className="text-lg font-bold mb-2">
                    Twitch Death Counter
                  </h4>
                  <p className="text-gray-400 text-sm text-start">
                    The Twitch Death Counter Bot tracks in-game deaths in
                    real-time using Twitch chat commands.
                  </p>
                </div>
              </Link>
            </div>
            <div className="project-card-3 ml-2">
              <Link
                className="flex flex-row mt-5 w-full gap-3"
                href={"https://github.com/WKO8/recibosnow"}
                target="_blank"
              >
                <div className="project-image w-1/5 align-middle text-center justify-center mt-2">
                  <Image
                    src="/images/recibos-now.webp"
                    alt="RecibosNow screenshot"
                    width="60"
                    height="60"
                    className="rounded-3xl"
                  />
                </div>
                <div className="project-info w-4/5">
                  <h4 className="text-lg font-bold mb-2">RecibosNow</h4>
                  <p className="text-gray-400 text-sm text-start">
                    A receipt generator created with the aim of facilitating
                    online job receipts.
                  </p>
                </div>
              </Link>
            </div>
            <div className="more-projects mt-10">
              <Link
                href={"https://github.com/WKO8?tab=repositories"}
                target="_blank"
              >
                <div className="flex items-center justify-center text-center space-x-2">
                  <span className="text-light-grey text-sm">more projects</span>
                  <div className="flex items-center justify-center rounded-full bg-mid-grey h-4 w-10">
                    <span>...</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="social-icons flex flex-col w-full my-10">
          <h3 className="half-underline text-light-grey text-xl">
            Social Media
          </h3>
          <div className="social-media-icons flex flex-row gap-3 items-center justify-around mt-5">
            <Link href={"https://github.com/WKO8"} target="_blank">
              <Image
                src="images/github.svg"
                alt="Github icon"
                width="30"
                height="30"
              />
            </Link>
            <Link
              href={
                "https://mail.google.com/mail/?view=cm&to=wko.programmer@gmail.com&su=SUBJECT&body=BODY&bcc=BBC"
              }
              target="_blank"
            >
              <Image
                src="images/email-icon.svg"
                alt="Email icon"
                width="35"
                height="35"
              />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/matheus-moreira-sorrentino-a5899b1b0/"
              }
              target="_blank"
            >
              <Image
                src="images/linkedin.svg"
                alt="Instagram icon"
                width="30"
                height="30"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
