import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import * as fs from 'fs';
@Injectable()
export class PdfService {
  constructor() {}

  async generateTemple(message: string) {
    const html = fs.readFileSync('./assets/test.html', 'utf8');
    const htmlWithMessage = html.replace('{{message}}', message);
    return htmlWithMessage;
  }

  async generatePdf(message: string) {
    try {
      const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });
      const page = await browser.newPage();
      await page.setContent(message);
      await page.pdf({
        path: './file/invoice.pdf',
        format: 'a4',
      });
      await browser.close();
      return 'Invoice created';
    } catch (e) {
      throw new Error(e);
    }
  }
}
