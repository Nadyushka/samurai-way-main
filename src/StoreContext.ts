import React from "react";
import {pagesTypes} from "./redux/state";

const StoreContext = React.createContext({} as pagesTypes)

export default StoreContext