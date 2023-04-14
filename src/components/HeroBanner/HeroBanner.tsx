import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import './HeroBanner.scss'

function HeroBanner() {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <div className="HeroBanner">
            <Particles
                id="HeroBanner__particles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#8CC0DE",
                        },
                    },

                    fullScreen: {
                        enable: false,
                    },
                    fpsLimit: 120,
                    interactivity: {
                        detectsOn: "window",
                        events: {
                            onHover: {
                                enable: true,
                                mode: "connect",
                                parallax: {
                                    enable: true,
                                    force: 30,
                                    smooth: 10
                                }
                            },
                            resize: {
                                delay: 0.5,
                                enable: true
                            },
                        },
                        modes: {
                            connect: {
                                distance: 75,
                                radius: 150,

                                links: {
                                    color: "#ffffff",
                                    opacity: 0.5,
                                    width: 1,
                                },
                            },
                        },
                    },
                    particles: {
                        bounce: {
                            horizontal: {
                                random: {
                                    enable: false,
                                    minimumValue: 0.1
                                },
                                value: 1
                            },
                            vertical: {
                                random: {
                                    enable: false,
                                    minimumValue: 0.1
                                },
                                value: 1
                            }
                        },
                        collisions: {
                            absorb: {
                                speed: 2
                            },
                            bounce: {
                                horizontal: {
                                    random: {
                                        enable: false,
                                        minimumValue: 0.1
                                    },
                                    value: 1
                                },
                                vertical: {
                                    random: {
                                        enable: false,
                                        minimumValue: 0.1
                                    },
                                    value: 1
                                }
                            },
                            enable: false,
                            mode: "bounce",
                            overlap: {
                                enable: true,
                                retries: 0
                            }
                        },
                        color: {
                            value: "#ffffff",
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: true,
                            speed: { min: 1, max: 5 },
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 400,
                            },
                            value: 80,
                        },
                        opacity: {
                            random: {
                                enable: false,
                                minimumValue: 0.25
                            },
                            value: { min: 0.25, max: 1 },
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div className="HeroBanner__contentWrapper">
                <div className="HeroBanner__content">
                    <h2>Too many movies on your list?</h2>
                    <p>
                        <span className="logoText">cinemory</span> remembers which movies you want to watch and reminds you when they get released.<br />
                        No need to manually keep track of everything, <span className="logoText">cinemory</span> will do it for you!<br />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HeroBanner