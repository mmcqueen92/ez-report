/*
  Warnings:

  - You are about to drop the column `userId` on the `Report` table. All the data in the column will be lost.
  - Added the required column `user` to the `Report` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Report" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "perpetrator" TEXT NOT NULL,
    "infraction" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "user" TEXT NOT NULL
);
INSERT INTO "new_Report" ("action", "id", "infraction", "perpetrator") SELECT "action", "id", "infraction", "perpetrator" FROM "Report";
DROP TABLE "Report";
ALTER TABLE "new_Report" RENAME TO "Report";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
