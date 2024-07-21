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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347044386107";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_54_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA2NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzLFxuICAgICAgICA5MSxcbiAgICAgICAgMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDYyLFxuICAgICAgICA4MixcbiAgICAgICAgNTksXG4gICAgICAgIDg3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDY4LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTksXG4gICAgICAgIDY1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDU3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICA3LFxuICAgICAgICAxNixcbiAgICAgICAgNDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAzLFxuICAgICAgICA0NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ0LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1LFxuICAgICAgICA2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODksXG4gICAgICAgIDMwLFxuICAgICAgICAyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDY3LFxuICAgICAgICA4MCxcbiAgICAgICAgODIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjksXG4gICAgICAgIDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDksXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIwLFxuICAgICAgICAwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDY2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJQOVhUUGZGYnlSTlNjbEFwZUp3Unc1NE80WUxDbDFtR21IQXY1Ty93SHl3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJuZUNMZVYwelF3aVJsejFNQnZCeWlRXCIsXG4gIFwicGhvbmVJZFwiOiBcImJjOGZiMmI1LWYwNjUtNDIzNi04Y2ZmLTNkMWNjNGViMDkxNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjQsXG4gICAgICAzLFxuICAgICAgMTAxLFxuICAgICAgMTE5LFxuICAgICAgMTYzLFxuICAgICAgMjQ3LFxuICAgICAgMTcwLFxuICAgICAgMjQ3LFxuICAgICAgMTM4LFxuICAgICAgMTg0LFxuICAgICAgMjI4LFxuICAgICAgMTMyLFxuICAgICAgMjU0LFxuICAgICAgNjYsXG4gICAgICAxNjUsXG4gICAgICA3NCxcbiAgICAgIDE4MSxcbiAgICAgIDI0NixcbiAgICAgIDE3MyxcbiAgICAgIDIzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MCxcbiAgICAgIDE1NyxcbiAgICAgIDIxNixcbiAgICAgIDEyNixcbiAgICAgIDY3LFxuICAgICAgMjQ4LFxuICAgICAgNyxcbiAgICAgIDEwNCxcbiAgICAgIDQzLFxuICAgICAgMjQ1LFxuICAgICAgNCxcbiAgICAgIDEzMCxcbiAgICAgIDExNSxcbiAgICAgIDE4NixcbiAgICAgIDcwLFxuICAgICAgMTUzLFxuICAgICAgMjE5LFxuICAgICAgMTMzLFxuICAgICAgMjIxLFxuICAgICAgMjIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNWODMzWjgxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQ0Mzg2MTA3OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0OTYxMTExNzY3MDYzNzoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xIYzVMY0hFTmp6NzdRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieUJjeXpEeC9BbDcvMXc3V0cyUFc2OU1Qdi8yK3RPQzc2YU91UVFFSENVOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5MTNpWjlma0VkQUQvTkIrSkptM3ArelJsQllGamRGUEZaOFhBRGpzTkxTdnYyc3Vaa0xveUVjUEhxZ3NIUDZiNWdwTGlvN0VIRFpoWXlqTC9iNzZBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsZi8wbEZldTFneTZiOExSN1VHS2dnV0g5WjR6QzA4aFMwdC9hMjlTTkM2bmRnVmxCNUhtMllmaW9vZHlzVVZKWlgwcFRZVmg2TFp4UEtXMWdXUTNpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQ0Mzg2MTA3OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0OTgwNzZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
