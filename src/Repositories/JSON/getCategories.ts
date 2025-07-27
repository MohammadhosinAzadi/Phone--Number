import { dataCategory } from "../../DBSetup/JSON/setupJSON";

export async function getCategories(): Promise<string[]> {
    return dataCategory;
}