import { DoorDashClient } from "@doordash/sdk";
import {v4 as uuidv4} from "uuid";

const client = new DoorDashClient({
    developer_id: "",
    key_id: "",
    signing_secret: "",
});