import { RoutType } from "app/types/RoutType";
import {MainPage} from "pages/MainPage";
import {AboutUs} from "pages/Aboutus"
function RoutStore () : RoutType[]  {
    
   const store : RoutType[] = [{path : '/', element : <MainPage/> }, {path : '/about' , element : <AboutUs/>}]

    return store
}

export default RoutStore;

