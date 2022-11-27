import { DoorDashClient } from "@doordash/sdk";
import "dotenv/config"

const client = new DoorDashClient({
    developer_id: process.env.DEVELOPER_ID,
    key_id: process.env.KEY_ID,
    signing_secret: process.env.SIGNING_SECRET,
});

const response = client 
    .getDelivery("7293d871-d52b-4491-b180-b8c91810ac8b")
    .then((response) => {
        console.log(response.data);
    })
    .catch((err) => {
        console.log(err);
    });

console.log("🚀 ~ file: get.js ~ line 18 ~ response", response)