import dotenv from "dotenv";

dotenv.config();

import fs from "fs";
import csv from "csv-parser";

async function uploadData() {

  const { db } = await import("../lib/firebase-admin");

  const results: any[] = [];

  fs.createReadStream("./src/Data/Mandi_Price.csv")
    .pipe(csv())

    .on("data", (data: any) => {

      results.push(data);

    })

    .on("end", async () => {

      try {

        for (const item of results) {

          await db.collection("mandi_prices").add({

            commodityGroup: item["Commodity Group"],

            commodity: item["Commodity"],

            msp: item["MSP (Rs./Quintal) 2026-27"],

            priceToday: item["Price on 16 May, 2026"],

            priceYesterday: item["Price on 15 May, 2026"],

            priceBeforeYesterday: item["Price on 14 May, 2026"],

            arrivalToday: item["Arrival on 16 May, 2026"],

            arrivalYesterday: item["Arrival on 15 May, 2026"],

            arrivalBeforeYesterday: item["Arrival on 14 May, 2026"],

            createdAt: new Date(),

          });

        }

        console.log("✅ Mandi data uploaded successfully");

      } catch (error) {

        console.error("❌ Upload failed:", error);

      }

    });

}

uploadData();