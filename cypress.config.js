const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
const { chalk } = require("chalk");


async function setupNodeEvents(on, config) {
    allureWriter(on, config);
    await preprocessor.addCucumberPreprocessorPlugin(on, config);
    on('task', { downloadFile });
    on(
        "file:preprocessor",
        createBundler({
            plugins: [createEsbuildPlugin.default(config)],
        })
    );

    on('task', {
        log(message) {
            console.log(message)
            return null
        }
    });
    return config;
}

module.exports = defineConfig({
    reporterOptions: {
        charts: true,
        reportPageTitle: "custom-title",
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
    },
    e2e: {
        setupNodeEvents,
        specPattern: "cypress/integration/features/**/*.feature",
        experimentalMemoryManagement: true,
        "numTestsKeptInMemory": 0,
        baseUrl: "https://google.com",
        video: false,
        pageLoadTimeout: 15000,
        "chromeWebSecurity": false,
        screenshotOnRunFailure: true,
        screenshotsFolder: "cypress/reports/screenshots"
    },
    env: {
        allure: true
    }
});

