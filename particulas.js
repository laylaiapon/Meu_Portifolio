if (typeof tsParticles !== "undefined") {
    tsParticles.load("tsparticles", {
        fpsLimit: 60,
        particles: {
            number: {
                value: 65, // Menos partículas para não poluir com as linhas
                density: { enable: true, value_area: 800 }
            },
            color: { value: "#a855f7" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            line_linked: {
                enable: true,
                distance: 140, // Distância para criar a teia
                color: "#a855f7", // Linhas roxas conectando as partículas
                opacity: 0.35,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out"
            }
        },
        interactivity: { detect_on: "canvas", events: { onhover: { enable: false } } },
        retina_detect: true
    });
}

