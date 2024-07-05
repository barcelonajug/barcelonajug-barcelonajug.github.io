module.exports = {
    ci: {
        collect: {
            startServerCommand: "npm start",
            numberOfRuns: 3,
            url: ["http://localhost:4321/"],
        },
        upload: {
            target: "temporary-public-storage",
        },
        assert: {
            preset: 'lighthouse:recommended',
            assertions: {
                "categories:performance":
                    ["warn", {minScore: 0.8}],
                "categories.pwa": "off",
            },
        },
        settings: {
            onlyCategories: ["performance"],
            chromeFlags:
                "--headless --no-sandbox --disk-cache-size=0",
            "throttling-method": "devtools",
            throttling: {
                requestLatencyMs: 70,
                downloadThroughputKbps: 12000,
                cpuSlowdownMultiplier: 1,
            }
        }
    },
};