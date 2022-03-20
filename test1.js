describe('eMag.ro', () => {
    it('should load', async () => {
        await browser.url('http://emag.ro');

        const searchBox = await $('#searchboxTrigger');

        const helpLink = await $('.navbar-aux-help-link');

        const firstButton = await $('//*[@id="main-container"]/section[3]/div/div/div[1]');

        helpLink.click();
    });
});