import { FaDumbbell } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-t-(--secondary-background)">
      <div className="flex justify-between items-center container mx-auto py-4 max-lg:flex-col gap-y-2 max-lg:items-center">
        {/* left side footer logo */}
        <div className="flex gap-2 items-center">
          <FaDumbbell className="text-(--common-color) text-2xl" />
          <span className="text-2xl font-(family-name:--primary-font) text-(--primary-text-color)">
            FITLOG
          </span>
        </div>

        {/* right side copywrite text */}
        <div>
          <p className="text-[12px] sm:text-[14px] ">
            &copy; 2026 FitLog — Workout Library. Train
            hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
