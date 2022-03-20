describe('libris.ro',() =>{

    it ('should go to login page', async() =>{
        browser.setWindowSize(1920,1080);
        await browser.url('https://libris.ro');
        const iconClick = await $('//img[@src="https://cdn4.libris.ro/images/svg/header/user-icon.svg"]');
        await iconClick.click();
        await expect(browser).toHaveUrl('https://www.libris.ro/auth/login.jsp');
    })

     it('should not login correctly', async() =>{

        const inputUser = await $('#date-inregistrare-user');
        await inputUser.setValue('cocisseptimiu@yahoo.com');

        const inputPass = $('#parola');
        await inputPass.setValue('123');
        
        const submitButton = await $('.log-in-cont-inregistrare-btn-ct');
        await submitButton.click();

        const loginForm = await $('.log-in-cont-form-wr');
        await expect(loginForm).toBeExisting();
        await expect(browser).toHaveUrl('https://www.libris.ro/auth/login.jsp?error=Utilizator+sau+parola+incorecte!');
    })

    it('should login correctly', async() =>{
        const inputUser2 = await $('#date-inregistrare-user');
        await inputUser2.setValue('cocis_septimiu@yahoo.com');

        const inputPass2 = $('#parola');
        await inputPass2.setValue('Rambo123');
        
        const submitButton2 = await $('.log-in-cont-inregistrare-btn-ct');
        await submitButton2.click();

        const iconClick = await $('//img[@src="https://cdn4.libris.ro/images/svg/header/user-icon.svg"]');
        await iconClick.click();
        
        const contSection = await $('.cont-datele-mele-ct');
        await browser.saveScreenshot('./screenshot.png');
        await expect(contSection).toBeExisting();


    })

    it('should working a search and wishlist', async() =>{
        await browser.pause(2000);
        const searchBox = await $('//*[@id="autoComplete"]');
        await searchBox.setValue('regina maria');
        await browser.pause(3000);

        const searchButton = await $('//*[@id="autoCompleteButton"]');;
        await searchButton.click();
        await browser.pause(1000);

        const clickbook = await $('//h2[text()="Ganduri pentru vremuri grele - Regina Maria"]');
        await clickbook.click();

        const wishlistIcon = await $('//img[@src="https://cdn4.libris.ro/resurse/img/static/wishlist-icon.png"]');
        await wishlistIcon.click();

        const addCart2 = await $('//img[@src="https://cdn4.libris.ro/images/svg/header/white-wishlist-icon.svg"]');
        await addCart2.click();
        await browser.pause(3000);

        const text = await $('//h3[text()="Ganduri pentru vremuri grele - Regina Maria"]');
        await expect(text).toBeExisting();
    })  
})