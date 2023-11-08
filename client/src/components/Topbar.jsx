import { useNavigate } from "react-router-dom";

const Topbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Details", link: "/details" },
  ];
  const navigate = useNavigate();

  const handlechange = () => {
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <nav className="sticky top-0 w-full container shadow-sm bg-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-lg border-gray-200">
      <div className="relative max-w-screen-2xl flex items-center justify-between px-5 py-1 mx-auto">
        <div className="flex items-center justify-center gap-2">
          <img className="w-16" src="../../logo.png" alt="cnci logo" />
          <div className="">
            <ul className="flex items-center font-medium tracking-tight lg:space-x-5 text-md">
              {Links.map((link, index) => (
                <li
                  className="text-black transition duration-200 hover:text-gray-400 lg:block"
                  key={index}
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-right">
          <h1 className="font-bold text-lg">
            CHITTARANJAN NATIONAL CANCER INSTITUTE
          </h1>
          <p>
            An Autonomous Body under Ministry of Health & Family Welfare Govt.
            of India
          </p>
          <p>Newtown, Action Area 1, Kolkata 700160</p>
          <p>Email: cncinstkol@gmail.com, Website: www.cnci.org.in</p>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
