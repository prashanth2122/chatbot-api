import Router from "express";
import { Configuration, OpenAIApi } from "openai";
import * as dotenv from 'dotenv';
dotenv.config()
const configuration = new Configuration({
    organization: "org-aop5UzQ8DTJNRqBCb7jZv5fM",
    apiKey: process.env.OPENAI_API_KEY,
});

const router = Router();
module.exports = router;

router.get("/codeReady", async (req: any, res) => {
    try {
        let dt = new Date().getTime();
        const openai = new OpenAIApi(configuration);
        const response = await openai.listEngines();
        res.sendStatus(response.status);
    } catch (e: any) {
        res.json({ success: false, error: true, message: e.message });
    }
});