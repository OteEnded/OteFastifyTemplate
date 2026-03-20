import { log } from "../../lib/utility.js";

export default async function seedDev1(db) {
    try {
        // Example seed for template projects.
        // Add your own model inserts here after you create project-specific models.
        await log("seed_dev_1 executed (no-op template seed)", import.meta.url);
    } catch (error) {
        await log(`Error in seed_dev_1: ${error.message}`, import.meta.url);
        throw error;
    }
}
