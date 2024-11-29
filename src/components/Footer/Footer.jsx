import Button from "../common/Button";

const Footer = () => {
  const LinksData = [
    {
      title: "Popular Hires",
      links: ["Developers", "Marketers", "Designers", "Support Agents"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Blog"],
    },

    {
      title: "Trust Centre",
      links: ["Become an Ambassador", "Become a Partner", "Privacy Policy", "Cookie Statement"],
    },
    {
      title: "Contact",
      links: ["Suite No. 1445 17 Gould Road, Herston, QLD 4006, Australia", "Ph: +610755289947"],
    },
  ];
  return (
    <footer>
      <div className="bg-primary text-white py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 container">
          <div className="space-y-8">
            <img src="/logowhite.png" alt="" className="max-w-56" />
            <div className="flex items-center gap-5">
              <img src="/linkdin.png" alt="" />
              <img src="/fb.png" alt="" />
              <img src="/youtube.png" alt="" />
            </div>
            <div className="bg-[#E0F561] text-black p-5 rounded-lg max-w-sm text-center space-y-3">
              <img src="/discord.png" alt="" className="rounded-lg" />
              <h5 className="font-bold">Join our community:</h5>
              <p className="text-sm leading-tight">
                Join our community of talents from across the globe to get access to new job
                opportunities, ideas, and collaborate with like-minded individuals.
              </p>
              <Button text="Join Now" />
            </div>
          </div>
          <div className="space-y-16 tracking-tight">
            <p>
              Remote Office is an end-to-end remoteOps platform that helps you build and manage
              global remote teams. We provide you with access to top-vetted talents, handle
              compliance and HR issues, and offer strategic consultation and support to optimise
              your team’s performance and productivity. Whether you want to supercharge your
              existing team or build your dream team from scratch, we have the solution. Join us
              today and discover the benefits of working with a Remote Office.
            </p>
            <div className="grid grid-cols-3 gap-y-16">
              {LinksData.map((data, i, arr) => (
                <div key={i} className={`space-y-2 ${arr.length - 1 === i ? "col-span-3" : ""}`}>
                  <h5>{data.title}</h5>
                  <ul className="space-y-2">
                    {data.links.map((link, i) => (
                      <li
                        className="text-gray-400 hover:text-lightsecondary hover:underline cursor-pointer duration-300 w-full break-words"
                        key={i}
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-white bg-black py-4 text-center text-sm">
        ©{new Date().getFullYear()} Remote Office
      </p>
    </footer>
  );
};

export default Footer;
