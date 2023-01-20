/*
  Warnings:

  - You are about to drop the column `Action` on the `Report` table. All the data in the column will be lost.
  - You are about to drop the column `Infraction` on the `Report` table. All the data in the column will be lost.
  - You are about to drop the column `Perpetrator` on the `Report` table. All the data in the column will be lost.
  - Added the required column `action` to the `Report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `infraction` to the `Report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `perpetrator` to the `Report` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Report" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "perpetrator" TEXT NOT NULL,
    "infraction" TEXT NOT NULL,
    "action" TEXT NOT NULL
);
INSERT INTO "new_Report" ("id") SELECT "id" FROM "Report";
DROP TABLE "Report";
ALTER TABLE "new_Report" RENAME TO "Report";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
