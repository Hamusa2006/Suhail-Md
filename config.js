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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_59_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNixcbiAgICAgICAgMTExLFxuICAgICAgICAxODUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTksXG4gICAgICAgIDM5LFxuICAgICAgICA5NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDUwLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDAsXG4gICAgICAgIDkwLFxuICAgICAgICA1MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDc5LFxuICAgICAgICA2LFxuICAgICAgICA4NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDk5LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTksXG4gICAgICAgIDc4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDM3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODMsXG4gICAgICAgIDYwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1MixcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5LFxuICAgICAgICA1MixcbiAgICAgICAgODYsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA2MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MixcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxODksXG4gICAgICAgIDE4MixcbiAgICAgICAgNjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzLFxuICAgICAgICAyMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMSxcbiAgICAgICAgOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMzLFxuICAgICAgICA1NixcbiAgICAgICAgMTI3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPWEkvdmJrTnRBYmxwTkhhWjcxbnd4cG9sUk1LVFA2RmZMV2s0NEU2L2hFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNDE5MjY5NzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkIxMkQ3NzlFNDk1MkY2RkFENUJDOTVCMTFCM0ZCNkM3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTAzMzk0MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3RE0zOGpPbFFxS3BlbFNEc1FfU1pRXCIsXG4gIFwicGhvbmVJZFwiOiBcImM5ODcwZjNjLTJlMTQtNGM0Ny04ZWMyLWFkZWVmZTM1OWIzMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMyxcbiAgICAgIDI1MSxcbiAgICAgIDE1OCxcbiAgICAgIDIsXG4gICAgICAxMjIsXG4gICAgICAxNDEsXG4gICAgICAzOSxcbiAgICAgIDE4NSxcbiAgICAgIDQ2LFxuICAgICAgNDYsXG4gICAgICAyLFxuICAgICAgNTUsXG4gICAgICA4NSxcbiAgICAgIDEwNyxcbiAgICAgIDIwMixcbiAgICAgIDIwMyxcbiAgICAgIDEzLFxuICAgICAgOTgsXG4gICAgICAxMjYsXG4gICAgICAxMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjQsXG4gICAgICA5NCxcbiAgICAgIDEzMCxcbiAgICAgIDQ1LFxuICAgICAgMjU0LFxuICAgICAgMTUzLFxuICAgICAgNTcsXG4gICAgICAxOTcsXG4gICAgICAyMTcsXG4gICAgICAxOTEsXG4gICAgICA0MyxcbiAgICAgIDIyMyxcbiAgICAgIDcwLFxuICAgICAgNDEsXG4gICAgICA0NixcbiAgICAgIDExOSxcbiAgICAgIDEzOCxcbiAgICAgIDI0NixcbiAgICAgIDIyNSxcbiAgICAgIDI1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYWkhYU1g3VlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0MTkyNjk3MzoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA5MDc5MTc2MTkyOTY6MjlAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiSnVzdHVzXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUd1OHY0SEVNekowN1FHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjVDNQdjUxazQyOTBvbmFBdFlJSzU3ZzN4bU9iSVl5SzlubVRodEh1U0MwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInBOTFNjVUZaKytXVHB1VzdYcnp5eVVCV0psL1dxTFlJbU9kZTdDcy9NQXNtb3VqaXVCditCbElvU3FEZUJWdno4bWRRWUQ4djdnczU0SE5QQ3prdUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlZMczVOcWNwMUppeVVQL2VFRDFMNHdhY2dGNk42M0pMZWZvcWZTWURUVUVnOHU5dWNFSlFCbGZNczJ5RlJtenZ1RDY5SkVLV1Q5ZHJ2TnJjWlB5K0FRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDE5MjY5NzM6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTAzMzkzNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5XQlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTldCLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYitEdFRCa08vb3gzdXRIaGZESjBna3ZPWVRrc0c4Z1c2WTZVSmRuOGliVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTQ1MTYzMDczLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkyMTY1MDk4NDZcIn0iCn0="  // PUT your SESSION_ID 


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
