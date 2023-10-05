import dashboard from './dashboard';
import pages from './pages';
import activity from "./activities";
import program from "./programmes";
import requestHelp from "./requestHelp";
import warning from "./warning";
import liveLessons from "./liveLessons";
import absences from "./absences";

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard, activity, program, warning, absences, requestHelp, liveLessons, pages]
};

export default menuItems;
