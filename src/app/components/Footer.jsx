import Image from "next/image";

const Footer = () => {
  return (
    <footer className="">
      <section>
        <div>
          <Image
            src="/assets/Logo.png"
            width={230}
            height={50}
            alt="Logo"
          />
          <p className="uppercase">
            Have a good time
          </p>
          <div>
            <h3>Location</h3>
            <p>
              Kompagnistræde 278 1265 Købehavn K
            </p>
            <h3>Opening hours</h3>
            <p>
              WED - THU 10:30 PM TO 3 AM SAT -
              SUN: 11 PM TO 5 AM
            </p>
          </div>
        </div>
        <div>
          <h3>News</h3>
          <Image
            src="/assets/content-img/recent_post1.jpg"
            width={50}
            height={50}
            alt="DJ wearing cap playing music"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laboriosam,
            aspernatur quis!
          </p>
          <p>April 17, 2026</p>
        </div>
        <div>
          <Image
            src="/assets/content-img/recent_post2.jpg"
            width={50}
            height={50}
            alt="DJ wearing cap playing music"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laboriosam,
            aspernatur quis!
          </p>
          <p>April 17, 2026</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
