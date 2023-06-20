import gsap from "gsap";
import { useEffect } from "react";
import React from "react";
import "./App.css";

const App = () => {
    const didAnimate = React.useRef(false);

    useEffect(() => {
        if (didAnimate.current) {
            return;
        }

        didAnimate.current = true;
        gsap.from(".clip-top, .clip-bottom", {
            duration: 2,
            delay: 1,
            height: "50vh",
            ease: "power4.inOut",
        });

        gsap.to(".marquee", {
            duration: 3.5,
            delay: 0.75,
            top: "50%",
            ease: "power4.inOut",
        });

        gsap.from(".clip-top .marquee, .clip-bottom .marquee", {
            duration: 5,
            delay: 1,
            left: "100%",
            ease: "power3.inOut",
        });

        gsap.from(".clip-center .marquee", {
            duration: 5,
            delay: 1,
            left: "-50%",
            ease: "power3.inOut",
        });

        gsap.to(".clip-top", {
            duration: 2,
            delay: 6,
            clipPath: "inset(0 0 100% 0)",
            ease: "power4.inOut",
        });

        gsap.to(".clip-bottom", {
            duration: 2,
            delay: 6,
            clipPath: "inset(100% 0 0 0)",
            ease: "power4.inOut",
        });

        gsap.to(
            ".clip-top .marquee, .clip-bottom .marquee, .clip-center .marquee span",
            {
                duration: 1,
                delay: 6,
                opacity: 0,
                ease: "power2.inOut",
            }
        );
    }, []);

    return (
        <>
            <div className="loader">
                <div className="loader-clip clip-top">
                    <div className="marquee">
                        <div className="marquee-container">
                            <span>Pong</span>
                            <span>Pong</span>
                            Ping Pong
                            <span>Pong</span>
                            <span>Pong</span>
                        </div>
                    </div>
                </div>
                <div className="loader-clip clip-bottom">
                    <div className="marquee">
                        <div className="marquee-container">
                            <span>Pong</span>
                            <span>Pong</span>
                            Ping Pong
                            <span>Pong</span>
                            <span>Pong</span>
                        </div>
                    </div>
                </div>
                <div className="clip-center">
                    <div className="marquee">
                        <div className="marquee-container">
                            <span>Pong</span>
                            <span>Pong</span>
                            Ping Pong
                            <span>Pong</span>
                            <span>Pong</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="nav">
                    <div className="logo">Transcendence</div>
                    <div className="nav-items">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                <div className="footer">
                    <p>Play Game</p>
                    <p>
                        The Mighty Ping Pong <br />
                        Made in 1337
                    </p>
                    <p>Apollo 2023</p>
                </div>
            </div>
        </>
    );
};

export default App;
