import navbar from "./components/navbar.js";
import hero from "./components/hero.js";

const parent = () =>{
    const parent = React.createElement("header", null, [navbar(), hero()]);
    return parent;
}

export default parent;