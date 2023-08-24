import { BrowserRouter} from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import ItemsLayout from "./pages/items/Layout"
import ListItem from "./pages/items/ListItems";
import CreateItem from "./pages/items/CreateItem";
import ShowItem from "./pages/items/ShowItem";
import UpdateItem from "./pages/items/UpdateItem";


const router = BrowserRouter([
  {
    path: '/stock-items/',
    element: <RootLayout/>,
    children: [
      {index: true,
      element: <Home/>
      },
      {
        path: 'items',
        element: <ItemsLayout/>,
        children: [
          {index: true, element: <ListItem/>},
          {path:"new", element: <CreateItem/>},
          {path: ":id", element: <ShowItem/>},
          {path: ":id/update", element: <UpdateItem/>}
        ]
      }
    ]
  }
])
export default router