 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
//═══════[Required Variables]════════\\
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ms.excelamadi@yahoo.com";
global.location = "Rivers,Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Xcelsama:Xcel@xcelsama.qpklf.mongodb.net/?retryWrites=true&w=majority&appName=Xcelsama";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Excelsama/BOT-X";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m";
global.website = process.env.GURL || " https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/jTJDVYj/Leonardo-Phoenix-A-vibrant-animestyle-illustration-of-a-young-2.jpg";
global.devs = "2347045035241","233268374753";
global.sudo = process.env.SUDO || "2347045035241","233268374753";
global.owner = process.env.OWNER_NUMBER || "2347045035241","233268374753";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVBwdFlSK3FNa0IrM3JXZThwSWd1NzJtaGtQS0J5ajBUTDJ1N2d2L1kzdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNjIvUzUvVDBUbHZNQ0t2OGtKS0xlYnFKVmZxb09VN1YvakFXeHQ4b3hHND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhUHRKSTUvK05FR0Flakw4dzN3dkpuQ3p0dEZEUGlIZ0Nrek56alBlbm5rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1T2tjUGRmWHk0YkJVd3cyNVJqUDJaa3o3MEVkUUV5UU0zVGF6MEtYTEdZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldEa04yV0dIL1M5dmNkVlV5bmZUdHdXVmIrRkMyZmpmaFpnNCtwVXpnMzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InN1aXgrcU80NHBYUTAyUDhhc3RuOXVFclhMR1pTSzNROHdHazE4QVJNV0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0pGWGlkcFVuWWM1Q1lVcUNjQmFWdWJMb2hjVDBQK3d4WjlJeE1yeFhVUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnV3clV6dnkvcmdMNGR6VjhRclA5THNPemhObXIydzF6eGYrR2tZY0NVcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRkTnNKYXZKNHBDdjk1ZWhLREtaNzd2cTZ2Rmc3UGdmTExCR0Jsc0pQQlFOUHpBTEs0M3ZnRVhDTDVOS0hOeTRlby9TNTRtaTdMeTI4WVc5MkV4QUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU1LCJhZHZTZWNyZXRLZXkiOiJlNDNjUkd6bFBSUjB1VlljUXVnb3I5dmZ3MUpmaTFCajUzTWVSSGNTWnF3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJqT1BYNU0xMFNsaUxuSkphQXVMRVhnIiwicGhvbmVJZCI6IjM1ZTg4OGQwLTcwN2EtNDdiZS1iODc5LWNlNmJmZDIxZTk5MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqZmRUNUtBMy9JM2FJMkxCbm15MlpjdHZYV2c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUZFUTJQaEpoWEIwTDYwdFFJWDdQNkZoL1RVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNXMjJQSFk4IiwibWUiOnsiaWQiOiI5NDc0MDcwNzE1NzoxNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLhtI3KgM2lLvCdkI/htZLwnZCD8J2QiPCdkJjwnZCALfCdlY/wnZCRIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQcjlsTWtCRU4yNjU3d0dHQTRnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIxaXI4ZWRKZ1VRTzdRMDlQU2oxOUR6cTFPMERzQTROSjRkRjhJZG13VFFzPSIsImFjY291bnRTaWduYXR1cmUiOiJjSHFRdlJHOGdMdTBYcGhLUnhBTEtiUVBMcGVUQUVNWGI0SDViOGU2SUMwbTZXRnl6elI2cm1BNlJtSVd3c2xEUzl1T0VWMGNsSVZ2NFI3OUVpTTZEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiemVFVFhpNjdMRWUvT3cwQkdNYm5rTjNnZ24vYzFoMzhGYU1GREI3R2JHajlpdngxVnpSRERteXNVeHlQSm96bm0xZ0JudXVnTTJ1Q2g5TVF2QTlOQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0MDcwNzE1NzoxNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkWXEvSG5TWUZFRHUwTlBUMG85ZlE4NnRUdEE3QU9EU2VIUmZDSFpzRTBMIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM4MTM2OTM4fQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "/",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BOT-X ™`",
  author: process.env.PACK_AUTHER || "Xcelsama",
  packname: process.env.PACK_NAME || "BOT-X",
  botname: process.env.BOT_NAME || "BOT-X",
  ownername: process.env.OWNER_NAME || "Xcelsama",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.UI|| "BOT-X.UI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
