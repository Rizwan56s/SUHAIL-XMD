const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_26_12_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1LFxuICAgICAgICA3NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDksXG4gICAgICAgIDM5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE3LFxuICAgICAgICA3LFxuICAgICAgICAzMSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODksXG4gICAgICAgIDcwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzksXG4gICAgICAgIDc4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAzNixcbiAgICAgICAgMjA0LFxuICAgICAgICA5NixcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA3MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM0LFxuICAgICAgICA0NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMixcbiAgICAgICAgODIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODUsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDM3LFxuICAgICAgICAwLFxuICAgICAgICA0MixcbiAgICAgICAgMTYyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDY0LFxuICAgICAgICAzNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNixcbiAgICAgICAgMTkzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTksXG4gICAgICAgIDUzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxODQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjksXG4gICAgICAgIDM2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNixcbiAgICAgICAgNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDc4LFxuICAgICAgICAzNyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkRxbWthM0NMcjJ0K2N4L1JTa211OTJnOWp1NkpOaWEzNE9MMjIzMUpKcDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlpOLUZiOU9vUWRpWU9YakZZUll5VmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGUyNGVmNWUtZGZmMC00MjdjLWExNGEtN2ZmZmY5NzdiNmQ1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyLFxuICAgICAgMjMyLFxuICAgICAgMTY2LFxuICAgICAgNTYsXG4gICAgICAzMCxcbiAgICAgIDE1NSxcbiAgICAgIDExNyxcbiAgICAgIDQ0LFxuICAgICAgMjA0LFxuICAgICAgMTA5LFxuICAgICAgNDUsXG4gICAgICAxMjEsXG4gICAgICAxNDMsXG4gICAgICAxMDIsXG4gICAgICAyMTQsXG4gICAgICAxNDIsXG4gICAgICAxMDAsXG4gICAgICAyMzEsXG4gICAgICAxMDgsXG4gICAgICAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOSxcbiAgICAgIDIyNSxcbiAgICAgIDE2OSxcbiAgICAgIDE4OCxcbiAgICAgIDc0LFxuICAgICAgOCxcbiAgICAgIDE2MixcbiAgICAgIDE0MixcbiAgICAgIDI1NCxcbiAgICAgIDE5NCxcbiAgICAgIDU4LFxuICAgICAgOTgsXG4gICAgICAxNjAsXG4gICAgICA5MCxcbiAgICAgIDEzNixcbiAgICAgIDE1OSxcbiAgICAgIDE1OSxcbiAgICAgIDI0LFxuICAgICAgMTkwLFxuICAgICAgMTUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhRNEtQTjFaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MDMyODU5MTM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIklyZmFuIEJoYWlcIixcbiAgICBcImxpZFwiOiBcIjI2NDk2MTI2MzcxNDQ4NDoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05hYnc0Y0NFT25oMExvR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiT0IxT2U2eUFndFRjcWtvNWlLUEYxb0p0S0lpSFIvUzMxWGltZFN6K2duVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvZHcydW1vMmpIYkxGVFFNdFFBYTBqVEkyK0tVMG5xNGlrK2k4djJqTUtIOEJ1T3J2aTl3YnVTa1R5ejRNT010K2UyQ0JuNWxzTkNIV2NMRVcwVE5Cdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4cU5VM2llQUNNalpqRUZaQkdxbStlNE4rR2VqMUJpbmYwU0Y1SUdCZlBaeTJMZy92M3hsbHNQVGxiS2dHTi9nYnlydU5YNGVNWklEOGYvL2ZmWG9DQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MDMyODU5MTM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM1NzA3OThcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
