import { useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleFooter = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://buttons.github.io/buttons.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          backgroundMode: {
            enable: true,
            zIndex: -100,
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: [
                "#3998D0",
                "#2EB6AF",
                "#A9BD33",
                "#FEC73B",
                "#F89930",
                "#F45623",
                "#D62E32",
                "#EB586E",
                "#9952CF",
              ],
            },
            destroy: {
              mode: "split",
              split: {
                count: 1,
                factor: {
                  value: 9,
                  random: {
                    enable: true,
                    minimumValue: 4,
                  },
                },
                rate: {
                  value: 10,
                  random: {
                    enable: true,
                    minimumValue: 5,
                  },
                },
                particles: {
                  collisions: {
                    enable: false,
                  },
                  destroy: {
                    mode: "none",
                  },
                  life: {
                    count: 1,
                    duration: {
                      value: 1,
                    },
                  },
                },
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                sides: 5,
              },
              image: {
                src: "https://cdn.matteobruni.it/images/particles/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 1,
              random: false,
              animation: {
                enable: false,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
              },
            },
            size: {
              value: 15,
              random: {
                enable: true,
                minimumValue: 10,
              },
              animation: {
                enable: false,
                speed: 40,
                minimumValue: 0.1,
                sync: false,
              },
            },
            collisions: {
              enable: true,
              mode: "destroy",
            },
            move: {
              enable: true,
              speed: 7,
              direction: "none",
              random: false,
              straight: false,
              outMode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: {
                enable: false,
                mode: "repulse",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10,
                },
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                lineLinked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 0.8,
              },
              repulse: {
                distance: 200,
              },
              push: {
                particlesNb: 1,
              },
              remove: {
                particlesNb: 2,
              },
            },
          },
          detectRetina: true,
        }}
      />

      {/* <div className="fixed bottom-10 right-10 bg-white rounded-lg border border-black z-20 px-3 pb-1.5">
        <a
          href="https://github.com/matteobruni/tsparticles"
          className="flex items-center hover:text-black text-black no-underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.matteobruni.it/images/particles/GitHub-Mark-120px-plus.png"
            alt="GitHub"
            className="h-[30px]"
          />
          <span className="text-xl font-bold ml-2 align-bottom">
            Made with tsParticles
          </span>
        </a>
        <div className="mt-2">
          <a
            className="github-button"
            href="https://github.com/matteobruni/tsparticles"
            data-icon="octicon-star"
            data-show-count="true"
            aria-label="Star matteobruni/tsparticles on GitHub"
          >
            Star
          </a>
          <a
            className="github-button ml-2"
            href="https://github.com/matteobruni/tsparticles/fork"
            data-icon="octicon-repo-forked"
            data-show-count="true"
            aria-label="Fork matteobruni/tsparticles on GitHub"
          >
            Fork
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default ParticleFooter;
