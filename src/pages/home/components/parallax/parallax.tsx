// src/components/main.tsx
import React from 'react';
import { useEffect, useState } from 'react';
import {Col, Row,} from 'react-bootstrap';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import './parallax.scss';



export const Parallax = () => {
  const image1 = "https://static.wixstatic.com/media/e49d9d_afa49dd49a924af5962574840e9f5f48~mv2.jpg";
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <>
    <div className="home-parallax">
      <section className="home-parallax-section">
        <img
          src={image1}
          alt="test"
          className="home-parallax_img"
          style={{
            transform: `translateY(${offset * 0.7}px)`,
            filter: `brightness(60%)`
          }}
          />
        <div  className="home-parallax-text-sections">
            <div className="home-parallax-text">
                <img
                  style={{
                    width:'15em',
                    height:'8em',
                    }}
                    alt="StoreledNOIR-2-pagepng_edited.png" data-type="image"
                    src="https://static.wixstatic.com/media/e49d9d_2f69a5b64a9f454b8503fc6a75c44a8b~mv2.png"/>
              </div>
            <div>
              <label className="home-font2">Luminous valance specialist</label>
            </div>
        </div>
      </section>
    </div>
    </>
 );
};
