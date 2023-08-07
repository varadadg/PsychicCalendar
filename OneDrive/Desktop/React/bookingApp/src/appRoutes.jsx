import Home from "./Home/Home";
import ReadingRequests from "./AdminPanel/ReadingRequests";
import MyCalendar from "./AdminPanel/MyCalendar";
import BookReading from "./UserPanel/BookReading";

const appRoutes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/readingRequests",
    component: <ReadingRequests />,
  },
  {
    path: "/myCalendar",
    component: <MyCalendar />,
  },
  {
    path: "/bookReading",
    component: <BookReading />,
  },
];
export default appRoutes;
