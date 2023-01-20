-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Report" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "perpetrator" TEXT NOT NULL,
    "infraction" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);
INSERT INTO "new_Report" ("action", "id", "infraction", "perpetrator", "userId") SELECT "action", "id", "infraction", "perpetrator", "userId" FROM "Report";
DROP TABLE "Report";
ALTER TABLE "new_Report" RENAME TO "Report";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
