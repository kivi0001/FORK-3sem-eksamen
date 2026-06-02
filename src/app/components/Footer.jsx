import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bottom-0 bg-background">
      <img
        className="footer-img brightness-25 min-w-screen min-h-fit"
        src="/assets/bg/footerbg.webp"
        alt="footer background"
        fetchPriority="high"
        loading="eager"
      />
      <section className="footer-wrapper z-1s">
        <div className="clubinfo-wrapper">
          <Image
            src="/assets/icon/Logo_main.svg"
            width={180}
            height={50}
            alt="Logo"
            className="logo"
          />
          <div className="club-info">
            <h3 className="uppercase text-footerheadlines mb-2 text-(length:--font-home-track-h3)">
              Location
            </h3>
            <p className="text-(length:--font-footer-p) tracking-(--letter-spacing-p)">
              Kompagnistræde 278
            </p>
            <p className="text-(length:--font-footer-p) tracking-(--letter-spacing-p)">
              1265 Købehavn K
            </p>
          </div>
          <div className="club-info">
            <h3 className="uppercase text-footerheadlines mb-2 text-(length:--font-home-track-h3)">
              Opening hours
            </h3>
            <p className="text-(length:--font-footer-p) tracking-(--letter-spacing-p)">
              WED - THU 10:30 PM TO 3 AM
            </p>
            <p className="text-(length:--font-footer-p) tracking-(--letter-spacing-p)">
              SAT - SUN: 11 PM TO 5 AM
            </p>
          </div>
        </div>
        <div className="news-wrapper">
          <h3 className="uppercase text-footerheadlines text-(length:--font-home-track-h3)">
            News
          </h3>
          <div className="news">
            <Image
              src="/assets/content-img/recent_post1.webp"
              width={50}
              height={50}
              alt="DJ wearing cap playing music"
            />
            <div className="info-wrapper">
              <p className="text-(length:--font-footer-p) tracking-(--letter-spacing-p)">
                Lorem Ipsum is simply dummy text
                of the printing and typesetting.
              </p>
              <p className="text-dates text-(length:--font-footer-p) tracking-(--letter-spacing-p) mt-1.5">
                April 17, 2026
              </p>
            </div>
          </div>
          <div className="news">
            <Image
              src="/assets/content-img/recent_post2.webp"
              width={50}
              height={50}
              alt="DJ wearing cap playing music"
            />
            <div className="info-wrapper">
              <p className="text-(length:--font-footer-p) tracking-(--letter-spacing-p)">
                Lorem Ipsum is simply dummy text
                of the printing and typesetting.
              </p>
              <p className="text-dates text-(length:--font-footer-p) tracking-(--letter-spacing-p) mt-1.5">
                April 17, 2026
              </p>
            </div>
          </div>
        </div>
        <div className="socialspost-wrapper">
          <h3 className="uppercase text-footerheadlines text-(length:--font-home-track-h3)">
            Recent Posts
          </h3>
          <div className="socials-wrapper">
            <FaXTwitter color="oklch(65.346% 0.24194 9.256)" />
            <div className="socialsinfo-wrapper">
              <p className="text-(length:--font-footer-p) tracking-(--letter-spacing-p)">
                It is a long established fact that
                a reader will be distracted by the
                readable...
              </p>
              <p className="text-dates text-(length:--font-footer-p) tracking-(--letter-spacing-p) mt-1.5">
                5 hours ago
              </p>
            </div>
          </div>
          <div className="socials-wrapper">
            <FaXTwitter color="oklch(65.346% 0.24194 9.256)" />
            <div className="socialsinfo-wrapper">
              <p className="text-(length:--font-footer-p) tracking-(--letter-spacing-p)">
                It is a long established fact that
                a reader will be distracted by the
                readable...
              </p>
              <p className="text-dates text-(length:--font-footer-p) tracking-(--letter-spacing-p) mt-1.5">
                5 hours ago
              </p>
            </div>
          </div>
        </div>
        <div className="bottom-wrapper">
          <div className="bottom-info">
            <div className="bottom-connect">
              <p className="text-(length:--font-footer-p) tracking-(--letter-spacing-p)">
                Stay Connected With Us
              </p>
              <div className="bottom-icons">
                <FaFacebookF
                  size={25}
                  className="border p-0.5"
                />
                <FaXTwitter
                  size={25}
                  className="border p-0.5"
                />
                <FaInstagram
                  size={25}
                  className="border p-0.5"
                />
              </div>
            </div>
            <p className="bottom-statement text-(length:--font-xs-footer-p) tracking-(--letter-spacing-p) text-footer">
              Night Club - All Rights Reserved
            </p>
            <p className="bottom-copyright text-(length:--font-xs-footer-p) tracking-(--letter-spacing-p) text-footer">
              Copyright © NightClub
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
