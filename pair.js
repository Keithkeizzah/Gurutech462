const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Brasho_Kish,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function LEGACY_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Brasho_Kish = Brasho_Kish({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Ubuntu)", "Chrome (Linux)", "Chrome (MacOs)"]
             });
             if(!Pair_Code_By_Brasho_Kish.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Brasho_Kish.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Brasho_Kish.ev.on('creds.update', saveCreds)
            Pair_Code_By_Brasho_Kish.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Brasho_Kish.sendMessage(Pair_Code_By_Brasho_Kish.user.id, { text: '' + b64data });

               let LEGACY_MD_TEXT = `
*𝐒𝐞𝐬𝐬𝐢𝐨𝐧 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐞𝐝*
*𝐄𝐧𝐣𝐨𝐲😺*
*By _𝐖𝐇𝐈𝐓𝐄-𝐏𝐀𝐍𝐓𝐇𝐄𝐑-𝐕6_*
______________________________
╔════◇
║『 𝐖𝐇𝐈𝐓𝐄 𝐏𝐀𝐍𝐓𝐇𝐄𝐑 𝐂𝐎𝐍𝐍𝐄𝐂𝐓𝐄𝐃 』
║ You've Completed the First Step
║ to Deploy a Whatsapp Bot.
╚══════════════╝
╔═════◇
║ 『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❍ 𝐘𝐨𝐮𝐭𝐮𝐛𝐞: https://youtube.com/@1stguru454?si=vYwPQ-bZtHgXsDfs
║❍ 𝐎𝐰𝐧𝐞𝐫: _t.me/Guru_1st
║❍ 𝐑𝐞𝐩𝐨: _https://github.com/keithkeizzah/HUNCHO-MD_
║❍ 𝐓𝐞𝐥𝐆𝐫𝐨𝐮𝐩: _https://t.me/botgurumd
║❍ 𝐓𝐄𝐋𝐂𝐡𝐚𝐧𝐧𝐞𝐥: _https://t.me/botgurumd
║❍ 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦: _https://www.instagram.com/offialguru_6
║ ☬ ☬ ☬ ☬
╚══════════════╝ 
 𒂀 𝐖𝐇𝐈𝐓𝐄 𝐏𝐀𝐍𝐓𝐇𝐄𝐑 𝐕6
______________________________

Don't Forget To Give Star⭐ To My Repo`

 await Pair_Code_By_Brasho_Kish.sendMessage(Pair_Code_By_Brasho_Kish.user.id,{text:LEGACY_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Brasho_Kish.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    LEGACY_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Currently Unavailable"});
         }
        }
    }
    return await LEGACY_MD_PAIR_CODE()
});
module.exports = router
