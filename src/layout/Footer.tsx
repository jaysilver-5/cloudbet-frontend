import ImgLogo from "../assets/logo.svg";

import IconTwitter from "../assets/imgs/main/sc-twitter.svg";
import IconGithub from "../assets/imgs/main/sc-github.svg";
import IconBitcoin from "../assets/imgs/main/sc-bitcoin.svg";
import IconDiscord from "../assets/imgs/main/sc-discord.svg";

import IconArrow from "../assets/icons/arrow.svg";

import ImgLogo1 from "../assets/imgs/main/logo-pfl.svg";
import ImgLogo2 from "../assets/imgs/main/logo-karate.svg";
import ImgLogo3 from "../assets/imgs/main/logo-bellator.svg";

const supports = [
  { title: "Responsible Gambling", href: "https://www.begambleaware.org/", },
  { title: "Account, Pay-outs and Bonuses", href: "/beta/en/content/help/terms#accounts-pay-outs-and-bonuses", },
  { title: "Self exclusion", href: "/beta/en/content/help/self-exclusion", },
  { title: "Sports Rules", href: "/beta/en/content/help/rules", },
  { title: "Crypto Transaction Fees", href: "https://www.cloudbet.com/en/crypto-transaction-fees", },
  { title: "Bug Bounty Program", href: "/beta/en/content/security/bug-bounty-program", },
  { title: "License", href: "/beta/en/content/about-us/license", },
  { title: "Blog", href: "https://www.cloudbet.com/en/blog", },
];

const legals = [
  { title: "AML Policy", href: "/beta/en/content/help/terms#amlkyc-policy", },
  { title: "Terms of Service", href: "/beta/en/content/help/terms", },
  { title: "Fairness &amp; RNG Testing Methods", href: "/beta/en/content/help/fairness-rng-testing-methods", },
  { title: "KYC Policies", href: "/beta/en/content/security/privacy-policy", },
  { title: "Privacy &amp; Management of Personal Data", href: "/beta/en/content/security/privacy-policy", },
];

export default function Footer() {
  return (
    <footer className="mt-0">
      <div className="border-t-2 border-b-2 border-surface-2 px-5 sm:px-8 xl:px-0 py-3">
        <div className="xl:mx-24">
          <div className="flex items-center">
            <img src={ImgLogo} alt="logo" className="w-40 mr-1 xs:w-48 lg:mr-4" />

            <div className="ml-auto flex items-center gap-4">
              <a target="_blank" href="https://twitter.com/cloudbet" title="Twitter" className="opacity-60 hover:opacity-100">
                <img src={IconTwitter} alt="logo" className="w-7 h-7" />
              </a>
              <a target="_blank" href="https://github.com/cloudbet" title="Twitter" className="opacity-60 hover:opacity-100">
                <img src={IconGithub} alt="logo" className="w-7 h-7" />
              </a>
              <a target="_blank" href="https://bitcointalk.org/index.php?topic=333552.0" title="Twitter" className="opacity-60 hover:opacity-100">
                <img src={IconBitcoin} alt="logo" className="w-7 h-7" />
              </a>
              <a target="_blank" href="https://discord.gg/mpFcHWW" title="Twitter" className="opacity-60 hover:opacity-100">
                <img src={IconDiscord} alt="logo" className="w-7 h-7" />
              </a>

              <a href="https://cert.gcb.cw/certificate?id=ZXlKcGRpSTZJalkxUlhWNGNHcERjRlIyWm5ReFVuUmFlblZ0TVZFOVBTSXNJblpoYkhWbElqb2lZV2hEZEVoeFEwdG9iWFE0WWt0UVUyaHFPWFZ5TXpNdlJqbHRORzVYVlZaUk1UVjBSbWRSTUZwTVFUMGlMQ0p0WVdNaU9pSmhPR0ZsTkRCallXTm1OakJrT1dOaE9EVTJNemhsTjJVME1HTmtaVGM0WkRFMU1EYzFNMlJqWmpRek9HVTBNelE1Tm1Vek5HTm1Zams0TmpNMVlUSmtJaXdpZEdGbklqb2lJbjA9" target="_blank" title="Curacao License" className="transition duration-150 grayscale flex-shrink-0 hover:grayscale-0">
                <img loading="lazy" src="https://seal.cgcb.info/8b089e55-4795-425a-6bf6-fdb75eba6900" alt="Curacao License " className="w-auto h-7" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-28 lg:mb-0 border-b-2 border-outline-1">
        <div className="xl:mx-24">
          <div id="footer-heading" className="sr-only">Cloudbet Important Links</div>
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1 sm:col-span-2 lg:col-span-1 py-4 px-5 sm:px-8 xl:px-5 xl:pl-0 border-b-2 lg:border-b-0 border-outline-1">
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2 md:gap-4">
                <a href="https://www.cloudbet.com/en/support/" className="p-4 bg-surface-1 relative w-full block rounded-2xl text-left text-on-surface-3 group transition-all duration-300 ease-out hover:bg-surface-2">
                  <div className="flex items-center">
                    <div className="text-xl font-bold mr-1.5 text-on-surface-1">Help Center</div>
                    <img src={IconArrow} alt="arrow" className="text-on-tertiary-1 absolute top-2 right-2 w-5 h-5 -rotate-45 transition-all duration-200 ease-out group-hover:rotate-0" />
                  </div>
                  <p className="text-sm">Find answers easily</p>
                </a>

                <div className="p-4 bg-surface-1 relative w-full block rounded-2xl text-left text-on-surface-3 group transition-all duration-300 ease-out hover:bg-surface-2 cursor-pointer">
                  <div className="flex items-center">
                    <div className="text-xl font-bold mr-1.5 text-on-surface-1">Live Chat</div>
                    <img src={IconArrow} alt="arrow" className="text-on-tertiary-1 absolute top-2 right-2 w-5 h-5 -rotate-45 transition-all duration-200 ease-out group-hover:rotate-0" />
                  </div>
                  <p className="text-sm">Get Support 24/7</p>
                </div>

                <div className="p-4 bg-surface-1 relative w-full block rounded-2xl text-left text-on-surface-3 group transition-all duration-300 ease-out hover:bg-surface-2 cursor-pointer">
                  <div className="flex items-center">
                    <div className="text-xl font-bold mr-1.5 text-on-surface-1">Leave Feedback</div>
                    <img src={IconArrow} alt="arrow" className="text-on-tertiary-1 absolute top-2 right-2 w-5 h-5 -rotate-45 transition-all duration-200 ease-out group-hover:rotate-0" />
                  </div>
                  <p className="text-sm">Your opinion matters</p>
                </div>
              </div>
            </div>

            <div className="col-span-1 flex px-5 py-5 sm:px-8 xl:px-5 text-on-surface-3 lg:border-l-2 border-outline-1">
              <div className="flex flex-col">
                <div className="font-bold text-xl text-on-surface-1 -mb-1">Support</div>
                <ul role="list" className="mt-3">
                  {supports.map((item, index) => (
                    <li key={index}>
                      <a className="text-sm hover:text-on-surface-1 py-1 block" href={item.href}>
                        <span className="leading-tight block">{item.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-span-1 flex px-5 py-5 sm:px-8 xl:px-5 text-on-surface-3 border-t-2 sm:border-t-0 lg:border-b-0 sm:border-l-2 border-outline-1">
              <div className="flex flex-col">
                <div className="font-bold text-xl text-on-surface-1 -mb-1">Legal</div>
                <ul role="list" className="mt-3">
                  {legals.map((item, index) => (
                    <li key={index}>
                      <a className="text-sm hover:text-on-surface-1 py-1 block" href={item.href}>
                        <span className="leading-tight block">{item.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mb-28 xl:mb-0 h-28 mx-[10rem] items-center justify-center hidden lg:flex">
        <div className="mx-5 items-center lg:w-full min-h-10 lg:min-h-20 grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-2">
          <div className="text-on-surface-3 col-span-1 lg:col-span-2 xl:col-span-1">
            <span className="font-inter text-xl leading-[120%] hidden xl:block">Proud sponsors and official global sportsbook of</span>
            <span className="font-inter text-xs leading-[140%] hidden md:block xl:hidden">Proud sponsors and official global sportsbook of</span>
            <span className="font-inter text-xs leading-[140%] block md:hidden">Proud sponsors of</span>
          </div>
          <div className="col-span-2 lg:col-span-3 xl:col-span-1 flex items-center">
            <a className="w-1/3 flex items-center justify-center opacity-60 hover:opacity-100" href="/beta/en/sports/mma/international-t589b-pfl">
              <img src={ImgLogo1} alt="logo" className="h-9 w-auto" />
            </a>
            <a className="w-1/3 flex items-center justify-center opacity-60 hover:opacity-100" href="/beta/en/sports/mma/international-ta428-karate-combat">
              <img src={ImgLogo2} alt="logo" className="h-9 w-auto" />
            </a>
            <a className="w-1/3 flex items-center justify-center opacity-60 hover:opacity-100" href="/beta/en/sports/mma/international-ta7e-bellator">
              <img src={ImgLogo3} alt="logo" className="h-9 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
