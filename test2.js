describe('emag.ro' , () =>{
    it('should exist a logo', async() =>{
        await browser.url('https://emag.ro');
        const logo = await $('.navbar-brand');
        await expect(logo).toExist();
    });

    it('should open Resigilate page', async() => {
        const viewmoreButton1 = await $('.has-view-more');
        viewmoreButton1.click();
        const viewmoreButton2 = await $('.main-container-outer');
        viewmoreButton2.click();
        await browser.pause(5000);
       const viewmoreButton3 = await $('//a[text()="Resigilate"]');
       viewmoreButton3.click();
       await expect(browser).toHaveTitle('Produse resigilate - eMAG.ro');


    });
});

