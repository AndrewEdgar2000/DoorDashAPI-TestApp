import { DoorDashClient } from "@doordash/sdk";
import "dotenv/config"

const client = new DoorDashClient({
    developer_id: process.env.DEVELOPER_ID,
    key_id: process.env.KEY_ID,
    signing_secret: process.env.SIGNING_SECRET,
});

const response = client 
    .getDelivery("c0a5b5b0-5479-4063-aa7d-25c56b9eb60c")
    .then((response) => {
        console.log(response.data);
    })
    .catch((err) => {
        console.log(err);
    });

console.log("🚀 ~ file: get.js ~ line 18 ~ response", response)