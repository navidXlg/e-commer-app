import { Client, Account } from "appwrite";
const PROJECT_ID = "6589bb9aefca5f1ca6d2";


export const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID);



const account = new Account(client);
const user = await account.createJWT();    