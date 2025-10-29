import {defineConfig} from "playwright/test";

export default defineConfig({
    testDir: './features',
    timeout: 30000,
    retries: 1,
    use: {
        headless: true,
        viewport: {width: 1280, height: 720},
        screenshot: 'on-first-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
    }
})