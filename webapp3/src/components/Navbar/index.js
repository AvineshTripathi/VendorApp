import React from 'react';
import Navbar from 'reactjs-navbar';
import Loader from 'react-loader-spinner';
import {
    faUsers,
    faBookOpen,
    faGlobe,
    faChartPie,
    faCogs,
    faAdjust,
    faAnchor,
    faDizzy,
    faBell,
    faGhost,
    faFan,
    faCarSide,
    faJedi,
    faLaughBeam,
    faKey,
    faCheese,
    faWater
} from '@fortawesome/free-solid-svg-icons';
import 'reactjs-navbar/dist/index.css';

const NavBar = () => {
    return (
        <Navbar 
        loader={<Loader type="Puff" color="#D85B5B" height={25} width={25} />}
       // isLoading={this.state.isLoading}
        helpCallback={() => {
          alert("I need help... and coffee...");
        }}
        menuItems={[
          {
            title: "Administration",
            icon: faUsers,
            isAuth: true,
            onClick: () => {
              // What you want to do...
              alert("Its coffee time...");
            },
          },
          {
            title: "Transactions",
            icon: faBookOpen,
          /*  isAuth: () => {
              // Claim authorization logic...
              return false;
            },*/
            isAuth: true,
          },
          {
            title: "Networks",
            icon: faGlobe,
            isAuth: true,
          },
          {
            title: "Settings",
            icon: faCogs,
            isAuth: true,
            subItems: [
              {
                title: "Subitem 1",
                icon: faAnchor,
                isAuth: true,
                onClick: () => {
                  // What you want to do...
                  alert("I need another cup of coffee...");
                },
              },
              {
                title: "Subitem 2",
                icon: faDizzy,
                isAuth: true,
                subItems: [
                  { title: "Subitem 2-1", icon: faAdjust, isAuth: true },
                  {
                    title: "Subitem 2-2",
                    icon: faBell,
                    isAuth: true,
                    subItems: [
                      {
                        title: "Subitem 2-2-1",
                        icon: faGhost,
                        isAuth: true,
                        subItems: [
                          {
                            title: "Subitem 2-2-2-1",
                            icon: faFan,
                            isAuth: true,
                          },
                          {
                            title: "Subitem 2-2-2-2",
                            icon: faCarSide,
                            isAuth: true,
                          },
                          {
                            title: "Subitem 2-2-2-3",
                            icon: faJedi,
                            isAuth: true,
                          },
                          {
                            title: "Subitem 2-2-2-4",
                            icon: faLaughBeam,
                            isAuth: true,
                          },
                        ],
                      },
                      {
                        title: "Subitem 2-2-2",
                        icon: faKey,
                        isAuth: true,
                      },
                    ],
                  },
                  {
                    title: "Make request",
                    icon: faCheese,
                    isAuth: true,
                    onClick: () => {
                      // What you want to do...
                      this.setState({ isLoading: true }, () =>
                        setTimeout(() => {
                          this.setState({ isLoading: false });
                        }, 3000)
                      );
                    },
                  },
                ],
              },
              {
                title: "Subitem 3",
                icon: faWater,
                isAuth: () => {
                  // Claim authorization logic...
                  return false;
                },
              },
            ]
          },
          {
            title: "Reports",
            icon: faChartPie,
            isAuth: true,
          },
        ]}/>       
    );
};

export default NavBar;