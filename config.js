const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348141926973";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_45_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA4NixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMixcbiAgICAgICAgMjYsXG4gICAgICAgIDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjExLFxuICAgICAgICA3NixcbiAgICAgICAgMjI2LFxuICAgICAgICA1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDI0LFxuICAgICAgICA5OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY0LFxuICAgICAgICAzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA3LFxuICAgICAgICA3NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDU3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc2LFxuICAgICAgICA2NixcbiAgICAgICAgODAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5LFxuICAgICAgICA1OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDksXG4gICAgICAgIDg4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTksXG4gICAgICAgIDU5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyLFxuICAgICAgICAzNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDI0LFxuICAgICAgICA2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDUzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIyLFxuICAgICAgICA5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMzIsXG4gICAgICAgIDc1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvd1Z3czd4QUt2SGlVMmYvVndJVXJuODdUUmo2Zjl2SWpMazlEd25sWS9rPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNDE5MjY5NzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQ2OTEwRkRDQTBDNjIwQzNBQzE3RDZEQkE5NzlBNzlFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTA0MzkzOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPU1lOWW1qMFFDdW85bHY1aEZITUtBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhlZGM2Y2ZkLWYzODItNDg4YS1hYjgyLTcyZWQ4N2M1ODQ1NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDMsXG4gICAgICAxNDcsXG4gICAgICAxMzEsXG4gICAgICAyMjUsXG4gICAgICAyNDksXG4gICAgICA2NyxcbiAgICAgIDIxLFxuICAgICAgNDksXG4gICAgICAyNDksXG4gICAgICAyMDksXG4gICAgICAyNDgsXG4gICAgICA3MixcbiAgICAgIDIyOCxcbiAgICAgIDIwNCxcbiAgICAgIDEyOSxcbiAgICAgIDc5LFxuICAgICAgNjgsXG4gICAgICA5MSxcbiAgICAgIDE0OCxcbiAgICAgIDQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNCxcbiAgICAgIDE3NyxcbiAgICAgIDIyNixcbiAgICAgIDE0MSxcbiAgICAgIDEyMixcbiAgICAgIDE1LFxuICAgICAgMzQsXG4gICAgICA5NyxcbiAgICAgIDEwOCxcbiAgICAgIDIwMixcbiAgICAgIDE2NSxcbiAgICAgIDIxOCxcbiAgICAgIDYyLFxuICAgICAgMTczLFxuICAgICAgMjUxLFxuICAgICAgOSxcbiAgICAgIDIzMCxcbiAgICAgIDU1LFxuICAgICAgMTQsXG4gICAgICAxNzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ1pUUzJaTDVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDE5MjY5NzM6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwOTA3OTE3NjE5Mjk2OjMwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01LdTh2NEhFTmlYMUxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiY1QzUHY1MWs0Mjkwb25hQXRZSUs1N2czeG1PYklZeUs5bm1UaHRIdVNDMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJYLzYvK2tMYzgwc1p2R01vdm80QURzMllkL21VMkYxeGU0SVc0WjdHVWlKZURMeWRBMDdEMzkrMTZOV2hhR2tJOWVMU1pJbzM3ajd4Z2pwK2lmak5EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJEclJMUE81WkNDcEpQcWp5NWo3TFRhUlEvemFXN3BORXNNRWxvVnBzRzZGUFExRXpIS2lscFFsb2xtc2NVUHk0V3ZGVFFyZS9lK0N5SzlMK2VjNEpndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQxOTI2OTczOjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEwNDM5MzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOV0JcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5XQi5qc29uIjogIntcImtleURhdGFcIjpcImIrRHRUQmtPL294M3V0SGhmREowZ2t2T1lUa3NHOGdXNlk2VUpkbjhpYlU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjE0NTE2MzA3MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
