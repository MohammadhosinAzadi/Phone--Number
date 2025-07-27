import { db } from "../../../DBSetup/SQLite/setupSQLite";

export const editCategorySQLite = (
  selectedCategory: string,
  newCategoryName: string
) => {
  return new Promise<void>((resolve, reject) => {
    db.run(
      `UPDATE categories SET name = ? WHERE name = ?`,
      [newCategoryName, selectedCategory],
      (err: any) => {
        if (err) reject(err);
        else resolve();
      }
    );
  });
};
