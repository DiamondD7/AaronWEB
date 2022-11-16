import React from 'react';
import Home from './component/Home';
import About from './component/About/About';
import MyProjects from './component/Projects/MyProjects';
import ContactUs from './component/ContactUs';

const App = () => {
    let component;
    switch(window.location.pathname){
        case '/':
            component = <Home/>
            break;
        case '/About':
            component = <About/>
            break;
        case '/MyProjects':
            component = <MyProjects/>
            break;
        case '/contactus':
            component = <ContactUs/>;
            break;
        default:
            console.log("erorr in the switch")
            break;
    }

    
    return(
        <div>
            {component}
        </div>
    )
}

export default App;