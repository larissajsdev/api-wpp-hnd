import { apiWhatsapp } from 'src/config/axios';
import * as dotenv from 'dotenv';
dotenv.config();
export async function sendTextMessage(phone: string, text: string) {
  const payload = {
    number: phone,
    options: {
      delay: 1200,
      presence: 'composing',
      linkPreview: false,
    },
    textMessage: {
      text: text.replace(/\\n/g, '\n'),
    },
  };

  try {
    await apiWhatsapp.post(
      `message/sendText/${process.env.INSTANCE_NAME}?apikey=${process.env.EVO_API_KEY}`,
      payload,
    );
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
