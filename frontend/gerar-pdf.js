import { chromium } from '@playwright/test';

(async () => {

    const browser = await chromium.launch({
        headless: true
    });

    const page = await browser.newPage({
        viewport: {
            width: 1600,
            height: 900
        }
    });

    console.log("Abrindo relatório...");

    await page.goto("http://127.0.0.1:9333", {
        waitUntil: "networkidle"
    });

    // espera a página terminar de renderizar
    await page.waitForTimeout(3000);

    console.log("Gerando PDF...");

    await page.pdf({
        path: "relatorio-final-testes.pdf",
        format: "A4",
        landscape: true,
        printBackground: true,
        margin: {
            top: "15mm",
            bottom: "15mm",
            left: "10mm",
            right: "10mm"
        }
    });

    await browser.close();

    console.log("PDF criado com sucesso!");

})();