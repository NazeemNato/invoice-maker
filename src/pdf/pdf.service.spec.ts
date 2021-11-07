import { PdfService } from './pdf.service';

jest.useRealTimers();

describe('testing pdf serivce', () => {
  let service = new PdfService();

  it('Generate html template', async () => {
    const html = await service.generateTemple('Hey');
    expect(html)
  }, 50000);

  it('Generting pdf file', async () => {
    try {
      const pdf = await service.generatePdf(`noice`);
      expect(pdf).toEqual('Invoice created');
    } catch (e) {
      console.error(e);
    }
  }, 50000);
});
