import React from "react";
import { useDebounceCallback, useEventListener } from "usehooks-ts";
import { useState } from "react";
import { scrollTo } from "../../utils/animateScroll";
import { useTranslation } from "react-i18next";

import "./landing.css";

import ImgLogo from "../../assets/logo.svg";
import ImgLogo2 from "../../assets/logo2.svg";

import IconEN from "../../assets/icons/locale/en.svg";
import IconFR from "../../assets/icons/locale/fr.svg";
import IconDE from "../../assets/icons/locale/de.svg";
import IconIT from "../../assets/icons/locale/it.svg";

import IconDown from "../../assets/icons/down.svg";
import IconTop from "../../assets/icons/top.svg";
import IconHamburger from "../../assets/icons/hamburger.svg";
import IconClose from "../../assets/icons/close.svg";

import ImgRatings from "../../assets/icons/ratings.svg";
import ImgTrustpilot from "../../assets/icons/trustpilot.svg";

import IconVisa from "../../assets/icons/payment/visa.svg";
import IconApplePay from "../../assets/icons/payment/apple-pay.svg";
import IconMasterCard from "../../assets/icons/payment/mastercard.svg";
import IconGooglePay from "../../assets/icons/payment/google-pay.svg";

import IconBsc from "../../assets/icons/coin/bsc.svg";
import IconBtc from "../../assets/icons/coin/btc.svg";
import IconEther from "../../assets/icons/coin/ether.svg";
import IconPolygon from "../../assets/icons/coin/polygon.svg";
import IconSol from "../../assets/icons/coin/sol.svg";
import IconUsdc from "../../assets/icons/coin/usdc.svg";
import IconUsdt from "../../assets/icons/coin/usdt.svg";

import IconTwitter from "../../assets/icons/social/twitter.svg";
import IconInstagram from "../../assets/icons/social/instagram.svg";
import IconTelegram from "../../assets/icons/social/telegram.svg";
import IconYoutube from "../../assets/icons/social/youtube.svg";
import IconBitcoin from "../../assets/icons/social/bitcoin.svg";
import IconTwitterGray from "../../assets/icons/social/twitter-gray.svg";
import IconInstagramGray from "../../assets/icons/social/instagram-gray.svg";
import IconTelegramGray from "../../assets/icons/social/telegram-gray.svg";
import IconYoutubeGray from "../../assets/icons/social/youtube-gray.svg";
import IconBitcoinGray from "../../assets/icons/social/bitcoin-gray.svg";

import ImgJoinDeco from "../../assets/imgs/landing/join-decoration.svg";
import ImgBg1 from "../../assets/imgs/landing/bg1.svg";
import ImgBg2 from "../../assets/imgs/landing/bg2.svg";
import ImgBg3 from "../../assets/imgs/landing/bg3.svg";
import ImgBg4 from "../../assets/imgs/landing/bg4.svg";
import ImgBg5 from "../../assets/imgs/landing/bg5.svg";
import ImgBg6 from "../../assets/imgs/landing/bg6.svg";
import ImgBg7 from "../../assets/imgs/landing/bg7.svg";
import ImgBg8 from "../../assets/imgs/landing/bg8.svg";
import ImgBg9 from "../../assets/imgs/landing/bg9.svg";
import ImgBg10 from "../../assets/imgs/landing/bg10.svg";
import ImgBg11 from "../../assets/imgs/landing/bg11.svg";

import Img1 from "../../assets/imgs/landing/img1.png";
import Img2 from "../../assets/imgs/landing/img2.jpg";
import Img3 from "../../assets/imgs/landing/img3.png";
import Img4 from "../../assets/imgs/landing/img4.png";
import Img5 from "../../assets/imgs/landing/img5.png";
import Img6 from "../../assets/imgs/landing/img6.png";

import ImgCash from "../../assets/imgs/landing/cashback.svg";
import ImgHighst from "../../assets/imgs/landing/highstlimit.svg";
import ImgExclusive from "../../assets/imgs/landing/exclusive.svg";

import ImgFighter1 from "../../assets/imgs/landing/fighter-1.png";
import ImgFighter2 from "../../assets/imgs/landing/fighter-2.png";
import ImgFighter3 from "../../assets/imgs/landing/fighter-3.png";
import ImgFighter4 from "../../assets/imgs/landing/fighter-4.png";
import ImgFighter5 from "../../assets/imgs/landing/fighter-5.png";
import ImgFighter6 from "../../assets/imgs/landing/fighter-6.png";

import IconPromo from "../../assets/imgs/landing/icon-promo.svg";
import IconRewards from "../../assets/imgs/landing/icon-rewards.svg";
import IconSpinomenal from "../../assets/imgs/landing/icon-spinomenal.svg";
import IconEvolution from "../../assets/imgs/landing/icon-evolution.svg";
import IconPlayngo from "../../assets/imgs/landing/icon-playngo.svg";
import IconMicrogaming from "../../assets/imgs/landing/icon-microgaming.svg";
import IconPremier from "../../assets/imgs/landing/icon-premier.png";
import IconNfl from "../../assets/imgs/landing/icon-nfl.png";
import IconNba from "../../assets/imgs/landing/icon-nba.svg";
import IconChampion from "../../assets/imgs/landing/icon-champions.svg";
import IconEasport from "../../assets/imgs/landing/icon-easport.svg";
import IconLol from "../../assets/imgs/landing/icon-lol.svg";
import IconDota from "../../assets/imgs/landing/icon-dota.png";
import IconValorant from "../../assets/imgs/landing/icon-valorant.svg";
import IconCs2 from "../../assets/imgs/landing/icon-cs2.svg";
import IconPfl from "../../assets/imgs/landing/icon-pfl.svg";
import IconKarate from "../../assets/imgs/landing/icon-karate.svg";
import LogoPflKarate from "../../assets/imgs/landing/logo-pfl-karate.png";


const payments = [
  IconVisa, IconApplePay, IconMasterCard, IconGooglePay,
];

const coins = [
  IconBsc, IconBtc, IconEther, IconPolygon, IconSol, IconUsdc, IconUsdt,
];

const socials = [
  { name: 'Twitter', link: 'https://x.com/cloudbet', icon: IconTwitter, grayIcon: IconTwitterGray },
  { name: 'instagram', link: 'https://www.instagram.com/cloudbetofficial', icon: IconInstagram, grayIcon: IconInstagramGray },
  { name: 'telegram', link: 'https://t.me/OfficialCloudbet', icon: IconTelegram, grayIcon: IconTelegramGray },
  { name: 'youtube', link: 'https://www.youtube.com/@Cloudbet-Casino-and-Sportsbook', icon: IconYoutube, grayIcon: IconYoutubeGray },
  { name: 'bitcoin', link: 'https://bitcointalk.org/index.php?topic=333552.0', icon: IconBitcoin, grayIcon: IconBitcoinGray },
]

export default function Landing() {
  const t = useTranslation();

  const [showHeaderBg, setShowHeaderBg] = useState(false);

  const onScroll = () => {
    setShowHeaderBg(window.scrollY > 100);
  }
  const debounced = useDebounceCallback(onScroll, 100);
  useEventListener('scroll', debounced);

  const scrollToSection = (id: any) => {
    scrollTo({ id });
  }

  return (
    <div className="page_wrap font-Inter landing-wrapper">
      <div className="page_load"></div>

      <div className="section_navbar" style={{ willChange: 'background', backgroundColor: `rgba(20, 20, 20, ${showHeaderBg ? 1 : 0})` }}>
        <div className="navbar_contain u-container">
          <div className="styleguide_layout u-hflex-between-center u-gap-4">
            <a aria-label="Back to homepage" href="#" className="navbar_home_link w-inline-block">
              <div className="navbar_logo show-mobile w-embed">
                <img src={ImgLogo2} alt="logo" className="object-contain" />
              </div>
              <div className="navbar_logo hide-mobile w-embed">
                <img src={ImgLogo} alt="logo" className="object-contain" />
              </div>
              <div className="u-display-none">Homepage</div>
            </a>
            <div className="u-hflex-right-center u-gap-4">
              <div className="navbar_links_wrapper u-gap-4">
                <div className="language-selector">
                  <div className="wg-element-wrapper">
                    <div data-delay="0" data-hover="true" className="wg-dropdown-1 w-dropdown">

                      <div className="wg-dd-1-togle w-dropdown-toggle" style={{ display: "flex", alignItems: "center" }} id="w-dropdown-toggle-0"
                        aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="false" role="button" lang="en">
                        <a className="wg-selector-text-wrapper w-inline-block">
                          <div className="icon_4x4 right-space w-embed flex">
                            <img src={IconEN} alt="flag" />
                          </div>
                          <div className="dropdown_text">English</div>
                        </a>
                        <div className="wg-selector-icon w-embed flex">
                          <img src={IconDown} alt="flag" />
                        </div>
                      </div>

                      <section className="wg-dd-1-list w-dropdown-list" id="w-dropdown-list-0" aria-labelledby="w-dropdown-toggle-0">
                        <a id="language-select-en" href="#"
                          className="wg-selector-text-wrapper w-inline-block" style={{ display: "none" }}>
                          <div className="icon_4x4 right-space w-embed">
                            <img src={IconEN} alt="flag" />
                          </div>
                          <div className="dropdown_text">English</div>
                        </a>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn_group u-hflex-right-center u-gap-4">
                <a href="/auth" className="btn_link w-inline-block">
                  <div data-button-size="medium" data-button-style="nav-secondary" className="btn_main_wrap">
                    <div className="btn_main_list u-gap-2 u-hflex-center-center">
                      <div className="btn_main_text">Sign in</div>
                    </div>
                  </div>
                </a>
                <a href="/auth?signup=true" className="btn_link w-inline-block" >
                  <div data-button-size="medium" data-button-style="nav" className="btn_main_wrap">
                    <div className="btn_main_list u-gap-2 u-hflex-center-center">
                      <div className="btn_main_text">Join</div>
                    </div>
                  </div>
                </a>
              </div>
              <a data-lenis-toggle="" data-background-color="surface-2"
                data-w-id="c5c59530-6ca4-b6a9-e381-dcb175e2fe71" href="#"
                className="icon-btn is-menu w-inline-block">
                <div data-background-color="background" className="icon-wrap">
                  <div data-background-color="surface-2" className="icon_hover" style={{ opacity: 0 }}></div>
                  <div className="u-position-relative is-open w-embed">
                    <img src={IconHamburger} alt="menu" />
                  </div>
                  <div className="u-position-relative is-close w-embed">
                    <img src={IconClose} alt="menu" />
                  </div>
                </div>
                <div className="u-hide">Menu</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <main className="page_main u-overflow-hidden">
        <div id="top" className="section_hero">
          <section className="hero_section u-height-screen u-overflow-hidden u-vflex-center-between u-gap-8">
            <div className="background_contain u-vflex-center-top" style={{ opacity: 1, zIndex: 0 }}>
              <div data-color="purple" className="background_item w-embed u-height-70">
                <img src={ImgBg1} alt="bg" />
              </div>
            </div>
            <div>
              <div className="gradient_wrap section_gradient u-absolute-bottom"></div>
            </div>
            <div className="hero_contain u-container u-vflex-center-center u-gap-20">
              <div className="g_content_header u-gap-4 u-vflex-center-center">
                <div className="g_content_wrap u-gap-12 u-vflex-center-center is-center-aligned">
                  <div className="g_content_header u-gap-4 u-vflex-center-center is-center-aligned">
                    <div className={`u-max-width-100 u-text-h1 font-Midnight`} style={{ maxWidth: "18ch" }}>
                      <div data-heading-color="orange" className="heading-title w-richtext">
                        <h1 className={`font-Midnight`}>#1<strong> </strong>crypto<strong> Casino &amp; Sportsbook</strong></h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-vflex-center-top u-gap-12">
                <div className="hero_btn_wrap u-vflex-center-bottom">
                  <div className="btn_top_cutout w-embed">
                    <img src={ImgJoinDeco} alt="bg" />
                  </div>
                  <a href="/auth" className="btn_link w-inline-block">
                    <div data-button-size="large" data-button-style="primary" className="btn_main_wrap">
                      <div className="btn_main_list u-gap-2 u-hflex-center-center">
                        <div className="btn_main_text">Join now</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <a href="" target="_blank" className="trustpilot_wrap u-gap-4 u-hflex-wrap w-inline-block u-hflex-center-center">
                <div className="u-hflex-left-center u-gap-4 u-wrap-mobile">
                  <div className="u-color-on-surface-3 u-text-align-center">Trusted since 2013</div>
                  <div className="w-embed">
                    <img src={ImgRatings} alt="ratings" />
                  </div>
                </div>
                <div className="u-hflex-left-center u-gap-4 u-wrap-mobile">
                  <div className="u-text-align-center">4.5 out of 5</div>
                  <div className="w-embed">
                    <img src={ImgTrustpilot} alt="trustpilot" />
                  </div>
                </div>
              </a>
            </div>
            <a aria-label="scroll down the page" className="indicator_wrap w-inline-block" onClick={() => scrollToSection('first-section')}>
              <div data-background-color="surface-2" data-w-id="6a4e3ebb-312d-305c-11af-154b957aa846" className="icon-btn">
                <div data-background-color="background" className="icon-wrap">
                  <div data-background-color="surface-2" className="icon_hover" style={{ opacity: 0 }}></div>
                  <img src={IconDown} alt="down" />
                </div>
              </div>
              <div className="u-display-none">Scroll down</div>
            </a>
          </section>
        </div>
        <div id="first-section" className="section_top">
          <section className="section u-overflow-hidden">
            <div className="background_contain">
              <div className="background_contain u-hflex-center-center" style={{ opacity: 1 }}>
                <div data-color="purple" className="background_item w-embed u-height-100">
                  <img src={ImgBg11} alt="bg" className="w-full h-full" />
                </div>
              </div>
              <div>
                <div className="gradient_wrap section_gradient u-absolute-bottom"></div>
                <div className="gradient_wrap section_gradient u-absolute-top"></div>
              </div>
            </div>
            <div className="u-container u-vflex-center-top u-gap-20">
              <div className="big-card_grid u-grid-column-3">
                <div className="layout_card_wrap u-vflex-center-top width-80">
                  <div className="layout_card_icon icon_32x32 icon_56x56">
                    <div className="g_visual_wrap u-cover-absolute">
                      <img src={ImgCash} alt="" className="g_visual_img u-cover-absolute u-contain" />
                    </div>
                  </div>
                  <div data-theme="dark" className="layout_card_card u-vflex-center-top u-height-100">
                    <div className="u-cover-absolute z-index--1">
                      <div data-radius="rounded-3xl" data-background-color="background-50"
                        className="g_card_wrap u-cover-absolute"></div>
                    </div>
                    <div className="layout_card_icon_wrap icon_56x56"></div>
                    <div className="layout_card_inner u-vflex-stretch-between u-gap-6">
                      <div className="g_content_wrap u-gap-12 u-vflex-center-center is-center-aligned">
                        <div className="g_content_header u-gap-4 u-vflex-center-center is-center-aligned">
                          <div className="u-max-width-100 u-text-h6" style={{ maxWidth: "18ch" }}>
                            <div data-heading-color="orange" className={`heading-title w-richtext font-Midnight`}>
                              <p><strong>Cash back</strong></p>
                            </div>
                          </div>
                          <div className="u-text-main" style={{ maxWidth: "42ch" }}>
                            <div className="w-richtext">
                              <p>on every bet</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="layout_card_wrap u-vflex-center-top width-80">
                  <div className="layout_card_icon icon_32x32 icon_56x56">
                    <div className="g_visual_wrap u-cover-absolute">
                      <img src={ImgHighst} alt="" className="g_visual_img u-cover-absolute u-contain" />
                    </div>
                  </div>
                  <div data-theme="dark" className="layout_card_card u-vflex-center-top u-height-100">
                    <div className="u-cover-absolute z-index--1">
                      <div data-radius="rounded-3xl" data-background-color="background-50"
                        className="g_card_wrap u-cover-absolute u-padding-1"></div>
                    </div>
                    <div className="layout_card_icon_wrap icon_56x56"></div>
                    <div className="layout_card_inner u-vflex-stretch-between u-gap-6">
                      <div className="g_content_wrap u-gap-12 u-vflex-center-center is-center-aligned">
                        <div className="g_content_header u-gap-4 u-vflex-center-center is-center-aligned">
                          <div className="u-max-width-100 u-text-h6" style={{ maxWidth: "18ch" }}>
                            <div data-heading-color="orange" className={`heading-title w-richtext font-Midnight`}>
                              <p><strong>Highest limits</strong></p>
                            </div>
                          </div>
                          <div className="u-text-main" style={{ maxWidth: "42ch" }}>
                            <div className="w-richtext">
                              <p>on major sports</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="layout_card_wrap u-vflex-center-top width-80">
                  <div className="layout_card_icon icon_32x32 icon_56x56">
                    <div className="g_visual_wrap u-cover-absolute">
                      <img src={ImgExclusive} alt="" className="g_visual_img u-cover-absolute u-contain" />
                    </div>
                  </div>
                  <div data-theme="dark" className="layout_card_card u-vflex-center-top u-height-100">
                    <div className="u-cover-absolute z-index--1">
                      <div data-radius="rounded-3xl" data-background-color="background-50"
                        className="g_card_wrap u-cover-absolute u-padding-1"></div>
                    </div>
                    <div className="layout_card_icon_wrap icon_56x56"></div>
                    <div className="layout_card_inner u-vflex-stretch-between u-gap-6">
                      <div className="g_content_wrap u-gap-12 u-vflex-center-center is-center-aligned">
                        <div className="g_content_header u-gap-4 u-vflex-center-center is-center-aligned">
                          <div className="u-max-width-100 u-text-h6" style={{ maxWidth: "18ch" }}>
                            <div data-heading-color="orange" className={`heading-title w-richtext font-Midnight`}>
                              <p><strong>Exclusive</strong></p>
                            </div>
                          </div>
                          <div className="u-text-main" style={{ maxWidth: "42ch" }}>
                            <div className="w-richtext">
                              <p>VIP experiences</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-vflex-center-top u-gap-8">
                <div className="payment_wrap u-hflex-wrap u-gap-6 u-hflex-center-center">
                  {payments.map((item, index) => (
                    <div key={index} className="payment_item w-embed">
                      <img src={item} alt="payment" />
                    </div>
                  ))}
                </div>
                <div className="u-hflex-center-center u-gap-6 u-hflex-wrap">
                  {coins.map((item, index) => (
                    <div key={index} className="icon_10x10 w-embed">
                      <img src={item} alt="coin" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="section z-index-2">
          <div className="u-container">
            <div className="section_card u-padding-20 no-padding-bottom">
              <div className="u-cover-absolute z-index--1">
                <div data-radius="rounded-3xl" data-background-color="purple"
                  className="g_card_wrap u-cover-absolute u-padding-1">
                  <div data-background-color="background" data-radius="rounded-3xl-0-5"
                    className="g_card_inner_contain"></div>
                </div>
                <div data-radius="rounded-3xl" className="gradient_wrap u-cover-absolute"></div>
              </div>
              <div className="layout_split_contain">
                <div className="layout_split_layout u-grid-custom">
                  <div className="layout_split_content">
                    <div className="g_content_wrap u-gap-12 u-vflex-center-center is-left-aligned">
                      <div className="g_content_header u-gap-4 u-vflex-center-center is-left-aligned">
                        <div className={`u-max-width-100 u-text-h2 font-Midnight`} style={{ maxWidth: "12ch" }}>
                          <div data-heading-color="orange" className="heading-title w-richtext">
                            <h2 className={`font-Midnight`}>HOME OF THE <strong>HIGH ROLLERS</strong></h2>
                          </div>
                        </div>
                        <div className="u-text-main" style={{ maxWidth: "42ch" }}>
                          <div className="w-richtext">
                            <p>Cloudbet’s dedicated VIP team offers exclusive cash rewards and opens doors to some of the planet's most sought-after experiences.</p>
                          </div>
                        </div>
                      </div>
                      <div className="g_content_btn_wrap u-gap-4 u-hflex-center-center is-left-aligned">
                        <a href="/auth" className="btn_link w-inline-block">
                          <div data-button-size="medium" data-button-style="primary"
                            className="btn_main_wrap">
                            <div className="btn_main_list u-gap-2 u-hflex-center-center">
                              <div className="btn_main_text">Join now</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div id="w-node-b7db7013-b7e9-2886-da23-23f7a1930f1d-a1930f0b" className="layout_split_visual_wrap is-relative-mobile">
                    <div className="layout_split_visual_inner u-visual-ui-wrap is-widescreen-mobile u-max-width-none">
                      <img src={Img1} alt="Cloudbet VIP Getting VIP experience" className="layout_split_absolute_image u-width-70" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="layout_split_wrap u-overflow-hidden">
          <div className="background_contain u-vflex-center-center" style={{ opacity: 0.5, zIndex: 0 }}>
            <div data-color="purple" className="background_item w-embed u-height-screen">
              <img src={ImgBg5} alt="bg" className="w-full h-full object-fill" />
            </div>
          </div>
          <div className="background_contain" style={{ zIndex: 0 }}>
            <div>
              <div className="gradient_wrap section_gradient u-absolute-bottom"></div>
              <div className="gradient_wrap section_gradient u-absolute-top"></div>
            </div>
          </div>
          <div data-padding-bottom="28" data-padding-top="28" className="layout_split_contain u-container u-vflex-stretch-center">
            <div className="layout_split_layout u-grid-custom">
              <div className="layout_split_content u-vflex-stretch-center">
                <div className="g_content_padding is-reversed">
                  <div className="g_content_wrap u-gap-12 u-vflex-center-center is-left-aligned">
                    <div className="g_content_header u-gap-4 u-vflex-center-center is-left-aligned">
                      <div className={`u-max-width-100 u-text-h2 font-Midnight`} style={{ maxWidth: "18ch" }}>
                        <div data-heading-color="orange" className="heading-title w-richtext">
                          <h2 className={`font-Midnight`}>CASH BACK WITH <strong>CLOUDBET REWARDS</strong></h2>
                        </div>
                      </div>
                      <div className="u-text-main u-color-on-surface-2" style={{ maxWidth: "42ch" }}>
                        <div className="w-richtext">
                          <p>The most generous loyalty program anywhere. Up to 60% rakeback. Daily,
                            weekly, and monthly cash rewards. Level ups worth up to $2.5M. And
                            more...</p>
                        </div>
                      </div>
                    </div>
                    <div className="g_content_btn_wrap u-gap-4 u-hflex-center-center is-left-aligned">
                      <a href="/auth" className="btn_link w-inline-block">
                        <div data-button-size="medium" data-button-style="primary" className="btn_main_wrap">
                          <div className="btn_main_list u-gap-2 u-hflex-center-center">
                            <div className="btn_main_text">Create your account</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div id="w-node-ee34cc20-09f2-0382-9240-b9acbb66e863-bb66e856" className="layout_split_visual_wrap u-position-relative is-ui-card is-reversed">
                <div className="layout_split_visual_inner u-visual-ui-wrap u-max-width-none">
                  <div data-color="purple" className="layout_split_brandmark w-embed">
                    <img src={ImgBg10} alt="bg" />
                  </div>
                  <div className="layout_split_ui_wrap">
                    <div className="u-cover-absolute">
                      <div data-radius="rounded-3xl" data-background-color="purple" className="g_card_wrap u-cover-absolute u-padding-1"></div>
                      <div data-radius="rounded-3xl" className="gradient_wrap u-cover-absolute"></div>
                    </div>
                    <img src={Img2} alt="" className="layout_split_ui" data-radius="rounded-3xl-0-5" style={{ zIndex: 0 }} />
                    <div data-background-color="background" data-radius="rounded-4xl" className="layout_split_uielement_wrap u-gap-4 u-padding-3">
                      <div data-background-color="background" data-radius="" className="icon-wrapper">
                        <div data-radius="rounded-full" data-background-color="background" className="icon-inner u-padding-1">
                          <img src={IconPromo} alt="icon" className="icon_100x100" />
                        </div>
                      </div>
                      <div className="u-vflex-left-top u-gap-3 z-index-2">
                        <div className={`u-text-small u-text-midnight u-padding-2 u-padding-top font-Midnight`}>rakeback</div>
                        <p className="u-text-small">Up to 25%</p>
                      </div>
                    </div>
                    <div data-background-color="background" data-radius="rounded-4xl"
                      className="layout_split_uielement_wrap u-gap-4 u-padding-3 is-right">
                      <div data-background-color="background" data-radius="" className="icon-wrapper">
                        <div data-radius="" data-background-color="background" className="icon-inner u-padding-1">
                          <img src={IconRewards} alt="icon" className="icon_100x100" />
                        </div>
                      </div>
                      <div className="u-vflex-left-top u-gap-3 z-index-2">
                        <div className={`u-text-small u-text-midnight u-padding-2 u-padding-top font-Midnight`}>Cash reward</div>
                        <p className="u-text-small">Daily, weekly, &amp; monthly</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="u-position-relative">
          <div className="background_contain u-hflex-center-center" style={{ opacity: 0.3, zIndex: 0 }}>
            <div data-color="purple" className="background_item w-embed u-height-100">
              <img src={ImgBg5} alt="bg" className="w-full h-full" />
            </div>
          </div>
          <div>
            <div className="gradient_wrap section_gradient u-absolute-bottom"></div>
            <div className="gradient_wrap section_gradient u-absolute-top"></div>
            <div className="gradient_wrap section_gradient u-absolute-left"></div>
            <div className="gradient_wrap section_gradient u-absolute-right"></div>
          </div>
          <section className="layout_split_wrap">
            <div data-padding-bottom="32" data-padding-top="32" className="layout_split_contain u-container u-vflex-stretch-center">
              <div className="layout_split_layout u-grid-custom u-gap-28">
                <div className="layout_split_content">
                  <div className="layout_content_wrap">
                    <div className="g_content_padding">
                      <div className="g_content_wrap u-gap-12 u-vflex-center-center is-left-aligned">
                        <div className="g_content_header u-gap-4 u-vflex-center-center is-left-aligned">
                          <div className={`heading-title u-text-h2 font-Midnight`} style={{ maxWidth: "15ch" }} data-heading-color="orange">
                            <h2 className={`custom-element u-color-inherit  font-Midnight`}>
                              <div>the og of <a href="casino" className="heading-link"><strong>crypto casino betting</strong></a></div>
                            </h2>
                          </div>
                          <div className="u-text-main" style={{ maxWidth: "45ch" }}>
                            <div className="w-richtext">
                              <p>Betting with Bitcoin since 2013. Betting on crypto since day one. Paying out winners all along the way.</p>
                            </div>
                          </div>
                        </div>
                        <div className="g_content_btn_wrap u-gap-4 u-hflex-center-center is-left-aligned">
                          <a href="/auth" className="btn_link w-inline-block">
                            <div data-button-size="medium" data-button-style="primary" className="btn_main_wrap">
                              <div className="btn_main_list u-gap-2 u-hflex-center-center">
                                <div className="btn_main_text">Join now</div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="u-hflex-left-center u-gap-6 u-wrap-tablet">
                          <div className="icon_16x16 u-padding-3">
                            <div className="u-cover-absolute z-index--1">
                              <div data-radius="rounded-full" data-background-color="surface-3" className="g_card_wrap u-cover-absolute u-padding-0-5">
                                <div data-background-color="background" data-radius="rounded-full" className="g_card_inner_contain"></div>
                              </div>
                            </div>
                            <div className="icon_100x100">
                              <div className="g_visual_wrap u-cover-absolute">
                                <img src={IconSpinomenal} alt="icon" className="g_visual_img u-cover-absolute u-contain" />
                              </div>
                            </div>
                          </div>
                          <div className="icon_16x16 u-padding-3">
                            <div className="u-cover-absolute z-index--1">
                              <div data-radius="rounded-full" data-background-color="surface-3" className="g_card_wrap u-cover-absolute u-padding-0-5">
                                <div data-background-color="background" data-radius="rounded-full" className="g_card_inner_contain"></div>
                              </div>
                            </div>
                            <div className="icon_100x100">
                              <div className="g_visual_wrap u-cover-absolute">
                                <img src={IconEvolution} alt="icon" className="g_visual_img u-cover-absolute u-contain" />
                              </div>
                            </div>
                          </div>
                          <div className="icon_16x16 u-padding-3">
                            <div className="u-cover-absolute z-index--1">
                              <div data-radius="rounded-full" data-background-color="surface-3" className="g_card_wrap u-cover-absolute u-padding-0-5">
                                <div data-background-color="background" data-radius="rounded-full" className="g_card_inner_contain"></div>
                              </div>
                            </div>
                            <div className="icon_100x100">
                              <div className="g_visual_wrap u-cover-absolute">
                                <img src={IconPlayngo} alt="icon" className="g_visual_img u-cover-absolute u-contain" />
                              </div>
                            </div>
                          </div>
                          <div className="icon_16x16 u-padding-3">
                            <div className="u-cover-absolute z-index--1">
                              <div data-radius="rounded-full" data-background-color="surface-3" className="g_card_wrap u-cover-absolute u-padding-0-5">
                                <div data-background-color="background" data-radius="rounded-full" className="g_card_inner_contain"></div>
                              </div>
                            </div>
                            <div className="icon_100x100">
                              <div className="g_visual_wrap u-cover-absolute">
                                <img src={IconMicrogaming} alt="icon" className="g_visual_img u-cover-absolute u-contain" />
                              </div>
                            </div>
                          </div>
                          <div className="icon_16x16 u-padding-3 width-auto">
                            <div className="u-cover-absolute z-index--1">
                              <div data-radius="rounded-full" data-background-color="surface-3" className="g_card_wrap u-cover-absolute u-padding-0-5">
                                <div data-background-color="background" data-radius="rounded-full" className="g_card_inner_contain"></div>
                              </div>
                            </div>
                            <div className="u-weight-bold">100+ Providers</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="w-node-b36bbcba-2ebd-f014-04e6-4dea0990cb57-5fe594a8" className="layout_split_visual_wrap u-position-relative is-croupier">
                  <div className="layout_split_visual_inner u-max-width-none">
                    <img src={Img3} alt="" className="layout_split_visual is-pimp u-max-width-none" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="layout_split_wrap">
            <div data-padding-bottom="32" data-padding-top="32"
              className="layout_split_contain u-container u-vflex-stretch-center">
              <div className="layout_split_layout u-grid-custom u-gap-32">
                <div className="layout_split_content u-vflex-stretch-center">
                  <div className="g_content_padding is-reversed">
                    <div className="g_content_wrap u-gap-12 u-vflex-center-center is-left-aligned">
                      <div className="g_content_header u-gap-4 u-vflex-center-center is-left-aligned">
                        <div className={`heading-title u-text-h2 font-Midnight`} style={{ maxWidth: "16ch" }} data-heading-color="orange">
                          <h2 className={`custom-element u-color-inherit font-Midnight`}>
                            <div>the high limit<a href="sports" className="heading-link"><strong> crypto sportsbook</strong></a></div>
                          </h2>
                        </div>
                        <div className="u-text-main" style={{ maxWidth: "45ch" }}>
                          <div className="w-richtext">
                            <p>Bet as much as you want on top sports, and use live cash out to
                              maximize winnings everywhere from MMA to the EPL and beyond.</p>
                          </div>
                        </div>
                      </div>
                      <div className="g_content_btn_wrap u-gap-4 u-hflex-center-center is-left-aligned">
                        <a href="/auth" className="btn_link w-inline-block">
                          <div data-button-size="medium" data-button-style="primary" className="btn_main_wrap">
                            <div className="btn_main_list u-gap-2 u-hflex-center-center">
                              <div className="btn_main_text">Join now</div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="u-hflex-left-center u-gap-6 u-wrap-tablet">
                        <div className="icon_16x16 u-padding-3">
                          <div className="u-cover-absolute z-index--1">
                            <div data-radius="rounded-full" data-background-color="surface-3" className="g_card_wrap u-cover-absolute u-padding-0-5">
                              <div data-background-color="background" data-radius="rounded-full" className="g_card_inner_contain"></div>
                            </div>
                          </div>
                          <div className="icon_100x100">
                            <div className="g_visual_wrap u-cover-absolute">
                              <img src={IconPremier} alt="icon" className="g_visual_img u-cover-absolute u-contain" />
                            </div>
                          </div>
                        </div>
                        <div className="icon_16x16 u-padding-3">
                          <div className="u-cover-absolute z-index--1">
                            <div data-radius="rounded-full" data-background-color="surface-3" className="g_card_wrap u-cover-absolute u-padding-0-5">
                              <div data-background-color="background" data-radius="rounded-full" className="g_card_inner_contain"></div>
                            </div>
                          </div>
                          <div className="icon_100x100">
                            <div className="g_visual_wrap u-cover-absolute">
                              <img src={IconNfl} alt="icon" className="g_visual_img u-cover-absolute u-contain" />
                            </div>
                          </div>
                        </div>
                        <div className="icon_16x16 u-padding-3">
                          <div className="u-cover-absolute z-index--1">
                            <div data-radius="rounded-full" data-background-color="surface-3" className="g_card_wrap u-cover-absolute u-padding-0-5">
                              <div data-background-color="background" data-radius="rounded-full" className="g_card_inner_contain"></div>
                            </div>
                          </div>
                          <div className="icon_100x100">
                            <div className="g_visual_wrap u-cover-absolute">
                              <img src={IconNba} alt="icon" className="g_visual_img u-cover-absolute u-contain" />
                            </div>
                          </div>
                        </div>
                        <div className="icon_16x16 u-padding-3">
                          <div className="u-cover-absolute z-index--1">
                            <div data-radius="rounded-full" data-background-color="surface-3" className="g_card_wrap u-cover-absolute u-padding-0-5">
                              <div data-background-color="background" data-radius="rounded-full" className="g_card_inner_contain"></div>
                            </div>
                          </div>
                          <div className="icon_100x100">
                            <div className="g_visual_wrap u-cover-absolute">
                              <img src={IconChampion} alt="icon" className="g_visual_img u-cover-absolute u-contain" />
                            </div>
                          </div>
                        </div>
                        <div className="icon_16x16 u-padding-3 width-auto">
                          <div className="u-cover-absolute z-index--1">
                            <div data-radius="rounded-full" data-background-color="surface-3" className="g_card_wrap u-cover-absolute u-padding-0-5">
                              <div data-background-color="background" data-radius="rounded-full" className="g_card_inner_contain"></div>
                            </div>
                          </div>
                          <div className="u-weight-bold">200+ more</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="w-node-_4ef79c73-4716-9fa7-518b-2279d1f4f7af-5fe594a8" className="layout_split_visual_wrap u-position-relative is-reversed is-football is-reversed">
                  <div className="layout_split_visual_inner u-max-width-none">
                    <img src={Img4} alt="" className="layout_split_visual is-football u-max-width-none" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="layout_split_wrap u-position-relative">
          <div data-padding-bottom="32" data-padding-top="32" className="layout_split_contain u-container u-vflex-stretch-center">
            <div className="layout_split_layout u-grid-custom u-gap-28">
              <div className="layout_split_content u-vflex-stretch-center">
                <div className="layout_content_wrap">
                  <div className="g_content_padding">
                    <div className="g_content_wrap u-gap-12 u-vflex-center-center is-left-aligned">
                      <div className="g_content_header u-gap-4 u-vflex-center-center is-left-aligned">
                        <div className={`heading-title u-text-h2 font-Midnight`} style={{ maxWidth: "15ch" }} data-heading-color="orange">
                          <h2 className={`custom-element u-color-inherit font-Midnight`}>
                            <div>Best crypto<a href="esports" className="heading-link"><strong> esports betting</strong></a></div>
                          </h2>
                        </div>
                        <div className="u-text-main" style={{ maxWidth: "45ch" }}>
                          <div className="w-richtext">
                            <p>Follow pro league teams on CS:GO, Dota 2, League of Legends, Rainbow
                              Six, and more. Live streams from every league qualifier and final at
                              your fingertips.</p>
                          </div>
                        </div>
                      </div>
                      <div className="g_content_btn_wrap u-gap-4 u-hflex-center-center is-left-aligned">
                        <a href="/auth" className="btn_link w-inline-block">
                          <div data-button-size="medium" data-button-style="primary" className="btn_main_wrap">
                            <div className="btn_main_list u-gap-2 u-hflex-center-center">
                              <div className="btn_main_text">Join now</div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="u-hflex-left-center u-gap-6 u-wrap-tablet">
                        <div className="icon_16x16 u-padding-3">
                          <div className="u-cover-absolute z-index--1">
                            <div data-radius="rounded-full" data-background-color="surface-3" className="g_card_wrap u-cover-absolute u-padding-0-5">
                              <div data-background-color="background" data-radius="rounded-full" className="g_card_inner_contain"></div>
                            </div>
                          </div>
                          <div className="icon_100x100">
                            <div className="g_visual_wrap u-cover-absolute">
                              <img src={IconEasport} alt="icon" className="g_visual_img u-cover-absolute u-contain" />
                            </div>
                          </div>
                        </div>
                        <div className="icon_16x16 u-padding-3">
                          <div className="u-cover-absolute z-index--1">
                            <div data-radius="rounded-full" data-background-color="surface-3" className="g_card_wrap u-cover-absolute u-padding-0-5">
                              <div data-background-color="background" data-radius="rounded-full" className="g_card_inner_contain"></div>
                            </div>
                          </div>
                          <div className="icon_100x100">
                            <div className="g_visual_wrap u-cover-absolute">
                              <img src={IconLol} alt="icon" className="g_visual_img u-cover-absolute u-contain" />
                            </div>
                          </div>
                        </div>
                        <div className="icon_16x16 u-padding-3">
                          <div className="u-cover-absolute z-index--1">
                            <div data-radius="rounded-full" data-background-color="surface-3" className="g_card_wrap u-cover-absolute u-padding-0-5">
                              <div data-background-color="background" data-radius="rounded-full" className="g_card_inner_contain"></div>
                            </div>
                          </div>
                          <div className="icon_100x100">
                            <div className="g_visual_wrap u-cover-absolute">
                              <img src={IconDota} alt="icon" className="g_visual_img u-cover-absolute u-contain" />
                            </div>
                          </div>
                        </div>
                        <div className="icon_16x16 u-padding-3">
                          <div className="u-cover-absolute z-index--1">
                            <div data-radius="rounded-full" data-background-color="surface-3" className="g_card_wrap u-cover-absolute u-padding-0-5">
                              <div data-background-color="background" data-radius="rounded-full" className="g_card_inner_contain"></div>
                            </div>
                          </div>
                          <div className="icon_100x100">
                            <div className="g_visual_wrap u-cover-absolute">
                              <img src={IconValorant} alt="icon" className="g_visual_img u-cover-absolute u-contain" />
                            </div>
                          </div>
                        </div>
                        <div className="icon_16x16 u-padding-3">
                          <div className="u-cover-absolute z-index--1">
                            <div data-radius="rounded-full" data-background-color="surface-3" className="g_card_wrap u-cover-absolute u-padding-0-5">
                              <div data-background-color="background" data-radius="rounded-full" className="g_card_inner_contain"></div>
                            </div>
                          </div>
                          <div className="icon_100x100">
                            <div className="g_visual_wrap u-cover-absolute">
                              <img src={IconCs2} alt="icon" className="g_visual_img u-cover-absolute u-contain" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="w-node-c39da415-acfc-39b4-ceb5-9ef755d6524e-5fe594a8" className="layout_split_visual_wrap u-position-relative">
                <div className="esport_background w-embed">
                  <img src={ImgBg4} alt="bg" className="w-full h-full object-fill" />
                </div>
                <div className="layout_split_visual_inner u-max-width-none">
                  <img src={Img5} alt="" className="layout_split_visual is-esport u-max-width-none" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="gradient_wrap section_gradient u-absolute-bottom"></div>
          </div>
        </section>
        <div className="all_fighters_graphics_holder">
          <div className="background_contain u-vflex-center-center" style={{ opacity: 0.5, zIndex: 0 }}>
            <div data-color="purple" className="background_item w-embed u-height-100">
              <img src={ImgBg1} alt="bg" />
            </div>
          </div>
          <div className="all_fighters_character_holder _1">
            <img src={ImgFighter1} className="graphics_base_image" alt="fighter" />
          </div>
          <div className="all_fighters_character_holder _2">
            <img src={ImgFighter2} className="graphics_base_image" alt="fighter" />
          </div>
          <div className="all_fighters_character_holder _3">
            <img src={ImgFighter3} className="graphics_base_image" alt="fighter" />
          </div>
          <div className="all_fighters_character_holder _4">
            <img src={ImgFighter4} className="graphics_base_image" alt="fighter" />
          </div>
          <div className="all_fighters_character_holder _5">
            <img src={ImgFighter5} className="graphics_base_image" alt="fighter" />
          </div>
          <div className="all_fighters_character_holder _6">
            <img src={ImgFighter6} className="graphics_base_image" alt="fighter" />
          </div>
          <div className="arc_fade bottom fighters_fade all_fighters_fade"></div>
          <div className="arc_backdrop"></div>
          <div className="arc_holder fighters_bottom all_fighters_bottom">
            <div className="arc_bottom action_arc w-embed">
              <img src={ImgBg6} alt="bg" />
            </div>
          </div>
        </div>
        <section>
          <div data-padding-bottom="" data-padding-top="" className="u-container no-padding-top">
            <div className="u-vflex-center-top u-gap-8">
              <div className="g_content_wrap u-vflex-center-center u-text-align-center u-gap-4 is-center-aligned">
                <div className="g_content_header u-gap-4 u-vflex-center-center is-center-aligned">
                  <div data-subheader-color="orange" style={{ maxWidth: "100ch" }} className="g_subheader_wrap">
                    <div className="u-text-h6">The Official Sportsbook of</div>
                  </div>
                  <div className={`u-max-width-100 u-text-h2 font-Midnight`} style={{ maxWidth: "25ch" }}>
                    <div data-heading-color="blue" className="heading-title w-richtext">
                      <p>Karate Combat and the PFL</p>
                    </div>
                  </div>
                  <div className="u-text-main u-color-on-surface-2" style={{ maxWidth: "80ch" }}>
                    <div className="w-richtext">
                      <p>Cloudbet is the exclusive home of live streams and live odds for the biggest
                        names in combat sports. Watch every fight free and place your bets at the same
                        time, all on Cloudbet.</p>
                      <p>‍</p>
                    </div>
                  </div>
                </div>
                <div className="g_content_btn_wrap u-gap-4 u-hflex-center-center is-center-aligned">
                  <img src={LogoPflKarate} alt="icon" className="fighting_partners" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section u-overflow-hidden">
          <div className="u-container">
            <div max-width="" className="u-max-width u-grid-column-2 u-gap-20 gap-8-tablet">
              <div className="u-position-relative u-padding-16 u-vflex-center-center">
                <div data-radius="rounded-3xl" data-background-color="purple" className="g_card_wrap u-cover-absolute u-padding-1">
                  <div data-background-color="background" data-radius="rounded-3xl-0-5" className="g_card_inner_contain">
                    <div data-radius="rounded-3xl-0-5" className="section_card_background u-cover-absolute">
                      <div className="background_contain">
                        <div data-color="purple" className="background_item w-embed">
                          <img src={ImgBg7} alt="bg" />
                        </div>
                      </div>
                      <div>
                        <div className="gradient_wrap section_gradient u-absolute-bottom"></div>
                        <div className="gradient_wrap section_gradient u-absolute-left"></div>
                        <div className="gradient_wrap section_gradient u-absolute-right"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gradient_wrap u-cover-absolute"></div>
                <div className="g_content_wrap u-gap-12 u-vflex-center-center is-center-aligned">
                  <div className="g_content_header u-gap-4 u-vflex-center-center is-center-aligned" style={{ zIndex: 1 }}>
                    <div data-subheader-color="purple" style={{ maxWidth: "100ch" }} className="g_subheader_wrap">
                      <div className="u-text-h6">trusted since 2013</div>
                    </div>
                    <div className={`u-max-width-100 u-text-h3 font-Midnight`} style={{ maxWidth: "18ch" }}>
                      <div data-heading-color="blue" className="heading-title w-richtext">
                        <h2 className={`font-Midnight`}>Bet Safe with Cloudbet</h2>
                      </div>
                    </div>
                    <div className="u-text-main" style={{ maxWidth: "42ch" }}>
                      <div className="w-richtext">
                        <p>Take advantage of 2FA account security, crypto privacy, and a dedicated, 24/7
                          customer service team. Online gaming has never been more secure.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-position-relative u-padding-16">
                <div data-radius="rounded-3xl" data-background-color="purple" className="g_card_wrap u-cover-absolute u-padding-1">
                  <div data-background-color="background" data-radius="rounded-3xl-0-5" className="g_card_inner_contain">
                    <div data-radius="rounded-3xl-0-5" className="section_card_background u-cover-absolute">
                      <div className="background_contain">
                        <div data-color="purple" className="background_item w-embed">
                          <img src={ImgBg8} alt="bg" />
                        </div>
                      </div>
                      <div>
                        <div className="gradient_wrap section_gradient u-absolute-bottom"></div>
                      </div>
                    </div>
                    <div className="gradient_wrap u-cover-absolute"></div>
                  </div>
                </div>
                <div className="gradient_wrap u-cover-absolute"></div>
                <div className="u-vflex-center-top u-gap-4">
                  <div className="payment_wrap u-hflex-wrap u-gap-6 u-hflex-center-center">
                    {payments.map((item, index) => (
                      <div key={index} className="payment_item w-embed">
                        <img src={item} alt="payment" />
                      </div>
                    ))}
                  </div>
                  <div className="g_content_wrap u-gap-12 u-vflex-center-center is-center-aligned">
                    <div className="g_content_header u-gap-4 u-vflex-center-center is-center-aligned" style={{ zIndex: 1 }}>
                      <div className={`u-max-width-100 u-text-h3 font-Midnight`} style={{ maxWidth: "18ch" }}>
                        <div data-heading-color="blue" className="heading-title w-richtext">
                          <h2 className={`font-Midnight`}>Don't own Crypto?</h2>
                        </div>
                      </div>
                      <div className="u-text-main" style={{ maxWidth: "42ch" }}>
                        <div className="w-richtext">
                          <p>Buying in is quick and easy with Visa, Mastercard, ApplePay, or
                            GooglePay. Deposit and start betting in minutes.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section u-overflow-hidden">
          <div className="u-container u-vflex-center-top no-padding-vertical">
            <div className="card_grid u-max-width u-grid-column-3">
              <div id="w-node-_54f29bb9-a29a-3233-c8b4-65a43dd0b9ee-3dd0b9eb" className="layout_card_wrap u-vflex-center-center width-80">
                <div className="u-cover-absolute z-index--1">
                  <div data-radius="rounded-3xl" data-background-color="purple" className="g_card_wrap u-cover-absolute u-padding-1">
                    <div data-background-color="background" data-radius="rounded-3xl-0-5" className="g_card_inner_contain"></div>
                  </div>
                </div>
                <div className="u-padding-8 u-vflex-stretch-center u-gap-4 u-text-align-center">
                  <div className="u-text-h4">$2M+</div>
                  <div>Top tier cash rewards<br />‍</div>
                </div>
              </div>
              <div id="w-node-_54f29bb9-a29a-3233-c8b4-65a43dd0b9f6-3dd0b9eb" className="layout_card_wrap u-vflex-center-center width-80">
                <div className="u-cover-absolute z-index--1">
                  <div data-radius="rounded-3xl" data-background-color="purple" className="g_card_wrap u-cover-absolute u-padding-1">
                    <div data-background-color="background" data-radius="rounded-3xl-0-5" className="g_card_inner_contain"></div>
                  </div>
                </div>
                <div className="u-padding-8 u-vflex-stretch-center u-gap-4 u-text-align-center">
                  <div className="u-text-h4">120+</div>
                  <div>Provably Fair and RNG-tested games</div>
                </div>
              </div>
              <div id="w-node-_54f29bb9-a29a-3233-c8b4-65a43dd0b9fe-3dd0b9eb" className="layout_card_wrap u-vflex-center-center width-80">
                <div className="u-cover-absolute z-index--1">
                  <div data-radius="rounded-3xl" data-background-color="purple" className="g_card_wrap u-cover-absolute u-padding-1">
                    <div data-background-color="background" data-radius="rounded-3xl-0-5" className="g_card_inner_contain"></div>
                  </div>
                </div>
                <div className="u-padding-8 u-vflex-stretch-center u-gap-4 u-text-align-center">
                  <div className="u-text-h4">9.8 / 10</div>
                  <div>Highly rated by top review websites</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section z-index-2">
          <div className="u-container">
            <div className="section_card u-padding-20 no-padding-bottom">
              <div className="u-cover-absolute z-index--1">
                <div data-radius="rounded-3xl" data-background-color="purple" className="g_card_wrap u-cover-absolute u-padding-1">
                  <div data-background-color="background" data-radius="rounded-3xl-0-5" className="g_card_inner_contain">
                    <div data-radius="rounded-3xl-0-5" className="section_card_background u-cover-absolute">
                      <div className="background_contain u-hflex-center-center" style={{ opacity: 1 }}>
                        <div data-color="purple" className="background_item w-embed u-height-100">
                          <img src={ImgBg3} alt="bg" />
                        </div>
                      </div>
                      <div>
                        <div className="gradient_wrap section_gradient u-absolute-bottom"></div>
                        <div className="gradient_wrap section_gradient u-absolute-left"></div>
                        <div className="gradient_wrap section_gradient u-absolute-right"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-radius="rounded-3xl" className="gradient_wrap u-cover-absolute"></div>
              </div>
              <div className="layout_split_contain">
                <div className="layout_split_layout u-grid-custom">
                  <div className="layout_split_content">
                    <div className="g_content_wrap u-gap-12 u-vflex-center-center is-left-aligned">
                      <div className="g_content_header u-gap-4 u-vflex-center-center is-left-aligned">
                        <div className={`u-max-width-100 u-text-h2 font-Midnight`} style={{ maxWidth: "18ch" }}>
                          <div data-heading-color="orange" className="heading-title w-richtext">
                            <h2 className={`font-Midnight`}><strong>Big winners </strong>welcome</h2>
                          </div>
                        </div>
                        <div className="u-text-main" style={{ maxWidth: "42ch" }}>
                          <div className="w-richtext">
                            <p>With millions in cash rewards, exclusive high limit tables, and the
                              best odds on sports anywhere online, Cloudbet is where top gamblers
                              place their bets.</p>
                          </div>
                        </div>
                      </div>
                      <div className="g_content_btn_wrap u-gap-4 u-hflex-center-center is-left-aligned">
                        <a href="/auth" className="btn_link w-inline-block">
                          <div data-button-size="medium" data-button-style="primary" className="btn_main_wrap">
                            <div className="btn_main_list u-gap-2 u-hflex-center-center">
                              <div className="btn_main_text">Place your bets</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div id="w-node-_663c439b-678d-1022-efef-352675a70553-75a70545" className="layout_split_visual_wrap is-relative-tablet is-croupier is-reversed">
                    <div className="layout_split_visual_inner u-visual-ui-wrap is-widescreen-mobile u-max-width-none">
                      <img src={Img6} alt="" className="layout_split_visual is-croupier is-reversed u-max-width-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="z-index-1">
          <section className="prefooter_section">
            <div className="background_contain u-vflex-center-bottom">
              <div data-color="purple" className="background_item height-full u-vflex-center-bottom w-embed">
                <img src={ImgBg2} alt="bg" />
              </div>
            </div>
            <div>
              <div className="gradient_wrap section_gradient u-absolute-top"></div>
            </div>
            <div className="prefooter_contain u-container u-vflex-center-center">
              <div className="g_content_wrap u-gap-12 u-vflex-center-center is-center-aligned">
                <div className="g_content_header u-gap-4 u-vflex-center-center is-center-aligned">
                  <div className={`u-max-width-100 u-text-h1 font-Midnight`} style={{ maxWidth: "23ch" }}>
                    <div data-heading-color="orange" className="heading-title w-richtext">
                      <h2 className={`font-Midnight`}>Paying <strong>millions of winners</strong> since 2013. Now it’s your turn.</h2>
                    </div>
                  </div>
                </div>
                <div className="g_content_btn_wrap u-gap-4 u-hflex-center-center is-center-aligned">
                  <a href="/auth" className="btn_link w-inline-block">
                    <div data-button-size="medium" data-button-style="primary" className="btn_main_wrap">
                      <div className="btn_main_list u-gap-2 u-hflex-center-center">
                        <div className="btn_main_text">Join now</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="footer_section">
          <div className="footer_gradient_contain" style={{ zIndex: 0 }}>
            <div data-color="purple" className="footer_gradient w-embed">
              <img src={ImgBg9} alt="bg" className="w-full h-full" />
            </div>
          </div>
          <div className="footer_container u-container u-gap-12">
            <div className="footer_logo_container u-grid-column-4 u-hflex-left-top">
              <a aria-label="back to homepage" href="#" className="navbar_home_link is-footer w-inline-block">
                <div className="navbar_logo is-footer w-embed">
                  <img src={ImgLogo} alt="ratings" />
                </div>
                <div className="u-display-none">Homepage</div>
              </a>
              <div id="w-node-_37a1260e-cb49-ea97-dc5e-d7cee66d48a8-e66d48a1" className="footer_logos u-hflex-center-center u-gap-8">
                <a aria-label="trustpilot link" href="https://www.trustpilot.com/review/www.cloudbet.com" target="_blank" className="u-hflex-left-center u-gap-4 w-inline-block">
                  <div className="w-embed">
                    <img src={ImgTrustpilot} alt="ratings" />
                  </div>
                  <div className="w-embed">
                    <img src={ImgRatings} alt="ratings" />
                  </div>
                </a>
                <div className="payment_wrap u-hflex-wrap u-gap-6 u-hflex-left-center">
                  {payments.map((item, index) => (
                    <div key={index} className="payment_item w-embed">
                      <img src={item} alt="payment" />
                    </div>
                  ))}
                </div>
              </div>
              <div id="w-node-_37a1260e-cb49-ea97-dc5e-d7cee66d48ab-e66d48a1" className="footer_logo_wrapper u-hflex-right-top">
                <a aria-label="back to top of the page" data-color="light-purple" onClick={() => scrollToSection('top')} className="footer_top_btn u-hflex-left-center u-gap-3 w-inline-block w--current">
                  <div className="u-text-large u-weight-bold">Back to top</div>
                  <div data-background-color="inherit" data-w-id="6a4e3ebb-312d-305c-11af-154b957aa846" className="icon-btn">
                    <div data-background-color="surface-1" className="icon-wrap">
                      <div data-background-color="surface-2" className="icon_hover" style={{ opacity: 0 }}></div>
                      <img src={IconTop} alt="top" />
                    </div>
                  </div>
                </a></div>
            </div>
            <div className="footer_columns u-grid-column-4">
              <div id="w-node-_37a1260e-cb49-ea97-dc5e-d7cee66d48b1-e66d48a1" className="footer_card_wrap u-vflex-stretch-top u-gap-4">
                <a id="w-node-_37a1260e-cb49-ea97-dc5e-d7cee66d48b2-e66d48a1" href="help/terms" className="footer_card w-inline-block">
                  <div className="u-cover-absolute">
                    <div data-radius="rounded-xl" data-background-color="surface-3" className="g_card_wrap u-cover-absolute u-padding-1">
                      <div data-background-color="background" data-radius="rounded-xl-1" className="g_card_inner_contain"></div>
                    </div>
                  </div>
                  <div className="u-padding-5 z-index-1">
                    <div className="u-vflex-left-top u-gap-3">
                      <div className={`u-text-h6 font-Midnight`}>Terms of service</div>
                      <p className="u-text-main">Outline of legal terms and conditions</p>
                    </div>
                  </div>
                </a>
                <a id="w-node-_37a1260e-cb49-ea97-dc5e-d7cee66d48ba-e66d48a1" href="support/" className="footer_card w-inline-block">
                  <div className="u-cover-absolute">
                    <div data-radius="rounded-xl" data-background-color="surface-3" className="g_card_wrap u-cover-absolute u-padding-1">
                      <div data-background-color="background" data-radius="rounded-xl-1" className="g_card_inner_contain"></div>
                    </div>
                  </div>
                  <div className="u-padding-5 z-index-1">
                    <div className="u-vflex-left-top u-gap-3">
                      <div className={`u-text-h6 font-Midnight`}>Help Center</div>
                      <p className="u-text-main">Get answers for all sorts of questions</p>
                    </div>
                  </div>
                </a>
                <a id="w-node-_37a1260e-cb49-ea97-dc5e-d7cee66d48c2-e66d48a1" href="mailto:support@cloudbet.com" className="footer_card w-inline-block">
                  <div className="u-cover-absolute">
                    <div data-radius="rounded-xl" data-background-color="surface-3" className="g_card_wrap u-cover-absolute u-padding-1">
                      <div data-background-color="background" data-radius="rounded-xl-1" className="g_card_inner_contain"></div>
                    </div>
                  </div>
                  <div className="u-padding-5 z-index-1">
                    <div className="u-vflex-left-top u-gap-3">
                      <div className={`u-text-h6 font-Midnight`}>Get in touch</div>
                      <p className="u-text-main">Get Support 24/7</p>
                    </div>
                  </div>
                </a>
              </div>
              <div id="w-node-_37a1260e-cb49-ea97-dc5e-d7cee66d48d5-e66d48a1" className="footer_content u-vflex-left-between u-gap-6">
                <div id="w-node-_37a1260e-cb49-ea97-dc5e-d7cee66d48ca-e66d48a1" className="u-vflex-left-top u-gap-4">
                  <div className={`u-text-h6 font-Midnight`}>Support</div>
                  <a href="https://www.gambleaware.org" className="footer_link">Responsible Gambling</a>
                  <a href="help/self-exclusion" className="footer_link">Self Exclusion</a>
                  <a href="crypto-transaction-fees" className="footer_link">Crypto Transaction Fees</a>
                  <a href="blog/" className="footer_link">Blog</a>
                </div>
                <div className="u-hflex-left-center u-gap-4 hide-mobile">
                  {socials.map((item, index) => (
                    <a key={index} aria-label={`${item.name} link`} href={item.link} target="_blank" className="footer_link is-social-media w-inline-block">
                      <div className="icon_10x10 w-embed">
                        <img src={item.grayIcon} alt="socials" />
                      </div>
                      <div className="icon_10x10 u-position-absolute w-embed opacity-0 hover:opacity-100 transition-opacity delay-100">
                        <img src={item.icon} alt="socials" />
                      </div>
                      <div className="u-hide">{item.name} link</div>
                    </a>
                  ))}
                </div>
              </div>
              <div id="w-node-a5886dff-6f9f-c9a7-c062-8498f593e5ce-e66d48a1" className="u-vflex-left-top u-gap-4">
                <div className={`u-text-h6 font-Midnight`}>Start now</div>
                <a href="casino" className="footer_link">Casino</a>
                <a href="sports" className="footer_link">Sports</a>
                <a href="esports" className="footer_link">eSports</a>
                <a href="casino/live" className="footer_link">Live Casino</a>
                <a href="lp/vip-club" className="footer_link">VIP</a>
              </div>
              <div className="u-vflex-left-top u-gap-4">
                <div className={`u-text-h6 font-Midnight`}>Legal</div>
                <a href="security/privacy-policy" className="footer_link">Privacy Policies</a>
                <a href="help/terms?section=accounts-pay-outs-and-bonuses" className="footer_link">Account, Pay-outs &amp; Bonuses</a>
                <a href="help/fairness-rng-testing-methods" className="footer_link">Fairness &amp; RNG testing methods</a>
                <a href="help/terms?section=governing-law-and-dispute-resolution" className="footer_link">Dispute Resolution</a>
                <a href="help/terms?section=amlkyc-policy" className="footer_link">AML Policy</a>
              </div>
              <div className="u-hflex-left-center u-gap-4 show-mobile">
                {socials.map((item, index) => (
                  <a key={index} aria-label={`${item.name} link`} href={item.link} target="_blank" className="w-inline-block">
                    <div className="icon_10x10 w-embed">
                      <img src={item.grayIcon} alt="socials" />
                    </div>
                    <div className="u-hide">{item.name} link</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="footer_partners u-container u-gap-8">
            <div className="u-hflex-center-center u-gap-12">
              <div className="u-text-large u-color-on-surface-2">
                Proud sponsors and official global sportsbook of
              </div>
              <img src={IconPfl} alt="icon" className="partner_logo" />
              <img src={IconKarate} alt="icon" className="partner_logo" />
            </div>
          </div>
          <div className="footer_copyright u-container u-gap-8">
            <div id="license-footer" className="u-text-small u-color-on-surface-3 u-text-main u-gap-4 curacao">
              <div className="license-image" id="ceg-db9fb988-6b60-4400-b3af-8d1bbf42e0b2" data-ceg-seal-id="db9fb988-6b60-4400-b3af-8d1bbf42e0b2" data-ceg-image-size="50" data-ceg-image-type="basic-small">
                <a href="https://cert.gcb.cw/certificate?id=ZXlKcGRpSTZJalkxUlhWNGNHcERjRlIyWm5ReFVuUmFlblZ0TVZFOVBTSXNJblpoYkhWbElqb2lZV2hEZEVoeFEwdG9iWFE0WWt0UVUyaHFPWFZ5TXpNdlJqbHRORzVYVlZaUk1UVjBSbWRSTUZwTVFUMGlMQ0p0WVdNaU9pSmhPR0ZsTkRCallXTm1OakJrT1dOaE9EVTJNemhsTjJVME1HTmtaVGM0WkRFMU1EYzFNMlJqWmpRek9HVTBNelE1Tm1Vek5HTm1Zams0TmpNMVlUSmtJaXdpZEdGbklqb2lJbjA9"
                  target="_blank">
                  <img src="https://seal.cgcb.info/8b089e55-4795-425a-6bf6-fdb75eba6900" className="license-image w-[150px] h-[85px]" />
                </a>
              </div>
              <span
                className="mdc-typography--body2 copyrights-text">In order to register for this website, the user is
                required to accept the <a href="/en/help/terms" target="_blank">Terms of Service</a>. In the
                event the <a href="/en/help/terms" target="_blank">Terms of Service</a> are updated, existing
                users may choose to discontinue using the products and services before the update shall become
                effective, which is a minimum of two weeks after it has been announced.<br /><br />cloudbet.com is
                owned and operated by Halcyon Super Holdings BV (Abraham Mendez Chumaceiro Boulevard 03,
                Willemstad, Curaçao), registration number 148526. It is licensed and regulated by the Government
                of Curaçao under the gaming license 1668/JAZ. Some payment methods are handled by its wholly
                owned subsidiary, Solas Technologies Limited (25 Voukourestiou Street, 3045 Limassol,
                Cyprus).</span>
            </div>
            <div className="u-text-small u-weight-bold no-wrap u-text-align-center u-text-main">©Cloudbet 2024</div>
          </div>
        </section>
      </main>
    </div>
  );
}
