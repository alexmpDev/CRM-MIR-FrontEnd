import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/solid";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-2">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
        <Typography variant="small" className="font-normal text-inherit">
          &copy; {year}, made by  {""}
          <a
            target="_blank"
            className="transition-colors hover:text-blue-500 font-bold"
          >
            {}
          </a>
         Alex Martínez y Adria Martínez
        </Typography>
        
      </div>
    </footer>
  );
}



Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
